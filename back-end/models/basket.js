import { Sequelize } from "sequelize/types";
import _sequelize from "../ConnData";

const _Basket = _sequelize.define("baskets", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idHeadphone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qantitty: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});