const HATEOAS = async (entity, data, limit) => {
  const stocks = data.map(item => item.stock)
  const totalStock = stocks.reduce((sum, stock) => sum + stock, 0)

  const result = await data.map((item) => {
    return {
      name: item,
      href: `/${entity}/${item.id}`
    }
  }).slice(0, limit)

  const dataWithHateoas = {
    totalJoyas: data.length,
    stockTotal: totalStock,
    results: result
  }
  return dataWithHateoas
}
export default HATEOAS
