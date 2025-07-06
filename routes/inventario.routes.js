import { Router } from 'express'
import { getInventarioController, getInventoryFilterController } from '../src/controllers/inventarioController.js'
const router = Router()

router.get('/joyas', getInventarioController)
router.get('/joyas/filtros', getInventoryFilterController)

export default router
