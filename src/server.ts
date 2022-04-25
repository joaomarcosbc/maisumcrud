import "reflect-metadata"
import express from "express"


import "./database/data-source"

import { catchError } from "./middlewares/catchError"


import { router } from "./routes"

const app = express()

app.use(express.json())

app.use(router)

app.use(catchError)

app.listen(3000, () => {console.log('Estou rodando na porta 3000')})