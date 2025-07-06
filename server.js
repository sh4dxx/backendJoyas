import express from 'express'
import 'dotenv/config'
import inventarioRoutes from './routes/inventario.routes.js'
import { appLogs } from './middleware/app.middleware.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(appLogs)

app.use(inventarioRoutes)

app.listen(PORT, console.log(`🔥Server is running on http://localhost:${PORT}`))
