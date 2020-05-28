"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsersController {
    // prueba enpoints
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM usuario');
            res.json(users);
        });
    }
    getListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            const user = yield database_1.default.query('SELECT * FROM usuario WHERE idUser = ?', [idUser]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The user don't exists" });
        });
    }
    getUserValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nickName } = req.params;
            const user = yield database_1.default.query('SELECT * FROM usuario WHERE nickName = ?', [nickName]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The user don't exists" });
        });
    }
    // Post (consultando database: creando)
    createNovel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // crear el producto (usuario)
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'user saved' });
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
