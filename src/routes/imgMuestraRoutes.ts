import { Router } from 'express';

import imgMuestraController from '../controllers/imgMuestraController';

class ImgMuestraRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', imgMuestraController.listAll);
        this.router.get('/:idNovela', imgMuestraController.getListOne);
    }

}

const imgMuestraRoutes = new ImgMuestraRoutes();
export default imgMuestraRoutes.router;