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

Usuario.hasMany(Compra,{
    foreignKey: "fkusuarioId",
    as: "usuarioCom",
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario,{
    foreignKey: 'fkusuarioId',
    as: 'usuarioId',
    allowNull: false
})

module.exports = { Compra, Usuario, Produto }