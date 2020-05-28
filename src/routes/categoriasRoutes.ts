import { Router } from 'express';

import categoriasController from '../controllers/categoriasController';

class CategoriesRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', categoriasController.listAll);
        this.router.get('/:idNovela', categoriasController.getListOne);
    }

}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;