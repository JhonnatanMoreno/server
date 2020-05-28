"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descargaNovelController_1 = __importDefault(require("../controllers/descargaNovelController"));
class DescargaNovelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', descargaNovelController_1.default.listAll);
        this.router.get('/:idNovela', descargaNovelController_1.default.getListOne);
        this.router.put('/:idNovela', descargaNovelController_1.default.updateNovel);
    }
}
const descargaNovelRoutes = new DescargaNovelRoutes();
exports.default = descargaNovelRoutes.router;
