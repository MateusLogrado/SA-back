const Usuario = require("./Usuario")
const Compra = require("./Compra")
const Produto = require("./Produto")

Produto.hasMany(Compra,{
    foreignKey: "fkprodutoId",
    as: "produtoCom",
    onDelete: "CASCADE"
})

Compra.belongsTo(Produto,{
    foreignKey: 'fkprodutoId',
    as: 'produtoId',
    allowNull: false
})

