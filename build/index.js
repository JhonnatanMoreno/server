"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const novelsRoutes_1 = __importDefault(require("./routes/novelsRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const imgMuestraRoutes_1 = __importDefault(require("./routes/imgMuestraRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const descargaNovelRoutes_1 = __importDefault(require("./routes/descargaNovelRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/novels', novelsRoutes_1.default);
        this.app.use('/api/categories', categoriasRoutes_1.default);
        this.app.use('/api/imgMuestra', imgMuestraRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
        this.app.use('/api/downloads', descargaNovelRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            // Como saber en que puerto esta ejecutando el servidor
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
