import { Request, Response } from 'express';

import pool from '../database';

class ImgMuestraController {

    // prueba enpoints
    public async listAll(req: Request, res: Response) {
        const imgMuestra = await pool.query('SELECT * FROM img_muestra');
        res.json(imgMuestra);
    }

    public async getListOne(req: Request, res: Response): Promise<any> {
        const { idNovela } = req.params;
        const imgMuestra = await pool.query('SELECT * FROM img_muestra WHERE idNovela = ?', [idNovela]);

        if (imgMuestra.length > 0) {
            return res.json(imgMuestra);
        }

        res.status(404).json({text: "The category doesn't exists"});
    }

}

const imgMuestraController = new ImgMuestraController();

export default imgMuestraController;