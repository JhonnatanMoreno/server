"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const novelsController_1 = __importDefault(require("../controllers/novelsController"));
class NovelsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', novelsController_1.default.listAll);
        this.router.get('/:idNovela', novelsController_1.default.getListOne);
        this.router.post('/', novelsController_1.default.createNovel);
        this.router.delete('/:idNovela', novelsController_1.default.deleteNovel);
        this.router.put('/:idNovela', novelsController_1.default.updateNovel);
    }
}
const novelsRouter = new NovelsRoutes();
exports.default = novelsRouter.router;
