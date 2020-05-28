"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.default.listAll);
        this.router.get('/:idUser', usersController_1.default.getListOne);
        this.router.get('/username/:nickName', usersController_1.default.getUserValidation);
        this.router.post('/', usersController_1.default.createNovel);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
