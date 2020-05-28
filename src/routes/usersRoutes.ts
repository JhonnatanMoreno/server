import { Router } from 'express';

import usersController from '../controllers/usersController';

class UsersRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', usersController.listAll);
        this.router.get('/:idUser', usersController.getListOne);
        this.router.get('/username/:nickName', usersController.getUserValidation);
        this.router.post('/', usersController.createNovel);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;