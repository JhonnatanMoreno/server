import { Router } from 'express';

import novelsController from '../controllers/novelsController';

class NovelsRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', novelsController.listAll);
        this.router.get('/:idNovela', novelsController.getListOne);
        this.router.post('/', novelsController.createNovel);
        this.router.delete('/:idNovela', novelsController.deleteNovel);
        this.router.put('/:idNovela', novelsController.updateNovel);
    }

}

const novelsRouter = new NovelsRoutes();
export default novelsRouter.router;