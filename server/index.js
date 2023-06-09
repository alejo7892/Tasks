import express from "express";
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import routerUser from "./routes/usuario.routes.js";
import routerCatalogo from "./routes/catalogue.routes.js";
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
app.use(routerUser)
app.use(taskRoutes)
app.use(indexRoutes)
app.use(routerCatalogo)
app.listen(PORT);
console.log(`server run in port ${PORT}`);
