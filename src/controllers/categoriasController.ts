import { Request, Response } from 'express';

import pool from '../database';

class CategoriasController {

    // prueba enpoints
    public async listAll(req: Request, res: Response) {
        const category = await pool.query('SELECT * FROM categoria');
        res.json(category);
    }

    public async getListOne(req: Request, res: Response): Promise<any> {
        const { idNovela } = req.params;
        const category = await pool.query('SELECT * FROM categoria WHERE idNovela = ?', [idNovela]);

        if (category.length > 0) {
            return res.json(category);
        }

        res.status(404).json({text: "The category doesn't exists"});
    }

}

const categoriasController = new CategoriasController();

export default categoriasController;