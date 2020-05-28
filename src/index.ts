import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import novelsRoutes from './routes/novelsRoutes';
import categoriesRoutes from './routes/categoriasRoutes';
import imgMuestraRoutes from './routes/imgMuestraRoutes';
import usersRoutes from './routes/usersRoutes';
import descargaNovelRoutes from './routes/descargaNovelRoutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/novels', novelsRoutes);
        this.app.use('/api/categories', categoriesRoutes);
        this.app.use('/api/imgMuestra', imgMuestraRoutes);
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/downloads', descargaNovelRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            // Como saber en que puerto esta ejecutando el servidor
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();