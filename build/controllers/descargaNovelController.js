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
class DescargaNovelController {
    // prueba enpoints
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const novelaspdf = yield database_1.default.query('SELECT * FROM novelaspdf');
            res.json(novelaspdf);
        });
    }
    getListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            const novelaspdf = yield database_1.default.query('SELECT * FROM novelaspdf WHERE idNovela = ?', [idNovela]);
            if (novelaspdf.length > 0) {
                return res.json(novelaspdf[0]);
            }
            res.status(404).json({ text: "The novels doesn't exists" });
        });
    }
    updateNovel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            // const { body } = req.body;
            yield database_1.default.query('UPDATE novelaspdf set ? WHERE idNovela = ?', [req.body, idNovela]);
            res.json({ message: 'The novel download was updated' });
        });
    }
}
const descargaNovelController = new DescargaNovelController();
exports.default = descargaNovelController;
