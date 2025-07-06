import { Router } from 'express'
import { getInventariesController, getInventoryFilterController } from '../src/controllers/inventarioController.js'
const router = Router()

router.get('/joyas', getInventariesController)
router.get('/joyas/filtros', getInventoryFilterController)

export default router
