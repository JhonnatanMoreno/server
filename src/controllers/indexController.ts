import { Request, Response } from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        // re = respuesta; req = peticion
        res.json({
            'API1': 'API Is /api/games',
            'API2': 'API Is /api/novels',
            'API3': 'API Is /api/categories',
            'API4': 'API Is /api/imgMuestra',
            'API5': 'API Is /api/users',
            'API6': 'API Is /api/downloads'
        });
    }
}

export const indexController = new IndexController();