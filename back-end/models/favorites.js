import { Sequelize } from "sequelize/types";
import _sequelize from "../ConnData";

const _Favorites = _sequelize.define("favorites", {
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
    }
});