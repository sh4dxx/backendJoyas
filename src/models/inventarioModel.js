import poll from '../../db/config.js'
import format from 'pg-format'

export const getQuantityInventoryModel = async () => {
  const query = 'SELECT SUM(stock) as stock FROM inventario'
  const result = await poll.query(query)
  return result.rows[0]
}

export const getInventoryModel = async (order_by = 'stock_ASC', limits = 5, page = 1) => {
  const [attribute, direction] = order_by.split('_')
  const offset = (page - 1) * limits
  const formatQuery = format(
    'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
    attribute, direction, limits, offset
  )
  console.log('formatQuery:', formatQuery)
  const result = await poll.query(formatQuery)
  return result.rows
}

export const getInventoryFilterModel = async ({ precio_min, precio_max, categoria, metal }) => {
  const filtros = []
  if (precio_min) {
    filtros.push(`precio >= ${precio_min}`)
  }
  if (precio_max) {
    filtros.push(`precio <= ${precio_max}`)
  }
  if (categoria) {
    filtros.push(`categoria like '%${categoria}%'`)
  }
  if (metal) {
    filtros.push(`metal like '%${metal}%'`)
  }

  let query = 'SELECT * FROM inventario'
  query += filtros.length > 0 ? ` WHERE ${filtros.join(' AND ')}` : ''
  const result = await poll.query(query)
  return result.rows
}
