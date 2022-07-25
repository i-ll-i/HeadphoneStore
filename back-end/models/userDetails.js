import { Sequelize } from "sequelize/types";
import _sequelize from "../ConnData";

const _Requisites = _sequelize.define("requisites", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});