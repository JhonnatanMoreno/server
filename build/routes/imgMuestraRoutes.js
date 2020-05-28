"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imgMuestraController_1 = __importDefault(require("../controllers/imgMuestraController"));
class ImgMuestraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', imgMuestraController_1.default.listAll);
        this.router.get('/:idNovela', imgMuestraController_1.default.getListOne);
    }
}
const imgMuestraRoutes = new ImgMuestraRoutes();
exports.default = imgMuestraRoutes.router;
