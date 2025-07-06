import HATEOAS from '../helpers/hateoas.js'
import getErrorHandler from '../helpers/ErrorHandler.js'
import { getInventoryModel, getQuantityInventoryModel, getInventoryFilterModel } from '../models/inventarioModel.js'

export const getInventarioController = async (req, res) => {
  try {
    const { order_by, limits, page } = req.query
    if (limits) {
      if (isNaN(limits) || Number(limits) <= 0) {
        return res.status(400).json({ message: 'El numero limite debe ser un numero mayor a 0' })
      }
    }

    if (page) {
      if (isNaN(page) || !Number(page)) {
        return res.status(400).json({ message: 'El numero de pagina debe ser un numero mayor a 0' })
      }
    }

    const inventaries = await getInventoryModel(order_by, limits, page)
    const totalStock = await getQuantityInventoryModel()
    const inventarysWithHateoas = await HATEOAS('joyas/joya', inventaries, limits, totalStock)
    res.status(200).json(inventarysWithHateoas)
  } catch (error) {
    res.status(500).json(getErrorHandler(error))
  }
}

export const getInventoryFilterController = async (req, res) => {
  try {
    const filters = req.query
    const inventory = await getInventoryFilterModel(filters)
    res.status(200).json(inventory)
  } catch (error) {
    res.status(500).json(getErrorHandler(error))
  }
}
