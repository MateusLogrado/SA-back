const express = require("express")
const app = express()

require('dotenv').config()

const cors = require('cors')
const PORT = process.env.PORT
const hostname = 'localhost'

const conn = require('./db/conn')

const compraController = require("./controller/compra.controller")
const produtoController = require("./controller/produto.controller")
const usuarioController = require("./controller/usuario.controller")

app.post("/produto", produtoController.cadastrar)
app.get("/produto", produtoController.listar)
app.put("/produto", produtoController.atualizar)
app.delete("/produto", produtoController.apagar)

app.post("/usuario", usuarioController.cadastrar)
app.get("/usuario", usuarioController.listar)
app.put("/usuario", usuarioController.atualizar)
app.delete("/usuario", usuarioController.apagar)

app.post("/compra", compraController.cadastrar)
app.get("/compra", compraController.listar)
app.put("/compra", compraController.atualizar)
app.delete("/compra", compraController.apagar)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.status(200).json({message: "Aplicação rodando"})
})

conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Não foi possível conectar com o banco de dados!',err)
})