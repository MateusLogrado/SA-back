const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Compra = db.define("compra", {
    compraId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    unitario: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    desconto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoFinal: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    formaPag: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Compra