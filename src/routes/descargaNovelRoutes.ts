import { Router } from 'express';

import descargaNovelController from '../controllers/descargaNovelController';

class DescargaNovelRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', descargaNovelController.listAll);
        this.router.get('/:idNovela', descargaNovelController.getListOne);
        this.router.put('/:idNovela', descargaNovelController.updateNovel);
    }

}

const descargaNovelRoutes = new DescargaNovelRoutes();
export default descargaNovelRoutes.router;