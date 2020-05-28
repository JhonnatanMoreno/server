"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = __importDefault(require("../controllers/categoriasController"));
class CategoriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriasController_1.default.listAll);
        this.router.get('/:idNovela', categoriasController_1.default.getListOne);
    }
}
const categoriesRoutes = new CategoriesRoutes();
exports.default = categoriesRoutes.router;
