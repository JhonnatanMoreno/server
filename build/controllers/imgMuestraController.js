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
class ImgMuestraController {
    // prueba enpoints
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const imgMuestra = yield database_1.default.query('SELECT * FROM img_muestra');
            res.json(imgMuestra);
        });
    }
    getListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNovela } = req.params;
            const imgMuestra = yield database_1.default.query('SELECT * FROM img_muestra WHERE idNovela = ?', [idNovela]);
            if (imgMuestra.length > 0) {
                return res.json(imgMuestra);
            }
            res.status(404).json({ text: "The category doesn't exists" });
        });
    }
}
const imgMuestraController = new ImgMuestraController();
exports.default = imgMuestraController;
