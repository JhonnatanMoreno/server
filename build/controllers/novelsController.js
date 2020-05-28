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
class NovelsController {
    // prueba enpoints
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const novel = yield database_1.default.query('SELECT * FROM librosproduct');
            res.json(novel);
        });
    }
    getListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            const novela = yield database_1.default.query('SELECT * FROM librosproduct WHERE idNovela = ?', [idNovela]);
            if (novela.length > 0) {
                return res.json(novela[0]);
            }
            res.status(404).json({ text: "The novels doesn't exists" });
        });
    }
    // Post (consultando database: creando)
    createNovel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // crear el producto (novela ligera)
            yield database_1.default.query('INSERT INTO librosproduct set ?', [req.body]);
            res.json({ message: 'novel saved' });
        });
    }
    updateNovel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            // const { body } = req.body;
            yield database_1.default.query('UPDATE librosproduct set ? WHERE idNovela = ?', [req.body, idNovela]);
            res.json({ message: 'The novel was updated' });
        });
    }
    deleteNovel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            yield database_1.default.query('DELETE FROM librosproduct WHERE idNovela = ?', [idNovela]);
            res.json({ message: 'The novel is has deleted' });
        });
    }
}
const novelsController = new NovelsController();
exports.default = novelsController;
