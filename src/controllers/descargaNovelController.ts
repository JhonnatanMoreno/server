import { Request, Response } from 'express';

import pool from '../database';

class DescargaNovelController {

    // prueba enpoints
    public async listAll(req: Request, res: Response) {
        const novelaspdf = await pool.query('SELECT * FROM novelaspdf');
        res.json(novelaspdf);
    }

    public async getListOne(req: Request, res: Response): Promise<any> {
        const { idNovela } = req.params;
        const novelaspdf = await pool.query('SELECT * FROM novelaspdf WHERE idNovela = ?', [idNovela]);

        if (novelaspdf.length > 0) {
            return res.json(novelaspdf[0]);
        }

        res.status(404).json({text: "The novels doesn't exists"});
    }

    public async updateNovel(req: Request, res: Response): Promise<void> {
        const { idNovela } = req.params;
        // const { body } = req.body;
        await pool.query('UPDATE novelaspdf set ? WHERE idNovela = ?', [req.body, idNovela]);
        res.json({message: 'The novel download was updated'});
    }

}

const descargaNovelController = new DescargaNovelController();

export default descargaNovelController;