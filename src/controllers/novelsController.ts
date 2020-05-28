import { Request, Response } from 'express';

import pool from '../database';

class NovelsController {

    // prueba enpoints
    public async listAll(req: Request, res: Response) {
        const novel = await pool.query('SELECT * FROM librosproduct');
        res.json(novel);
    }

    public async getListOne(req: Request, res: Response): Promise<any> {
        const { idNovela } = req.params;
        const novela = await pool.query('SELECT * FROM librosproduct WHERE idNovela = ?', [idNovela]);

        if (novela.length > 0) {
            return res.json(novela[0]);
        }

        res.status(404).json({text: "The novels doesn't exists"});
    }

    // Post (consultando database: creando)
    public async createNovel(req: Request, res: Response): Promise<void> {
        // crear el producto (novela ligera)
        await pool.query('INSERT INTO librosproduct set ?', [req.body]);
        res.json({message: 'novel saved'});
    }

    public async updateNovel(req: Request, res: Response): Promise<void> {
        const { idNovela } = req.params;
        // const { body } = req.body;
        await pool.query('UPDATE librosproduct set ? WHERE idNovela = ?', [req.body, idNovela]);
        res.json({message: 'The novel was updated'});
    }

    public async deleteNovel(req: Request, res: Response): Promise<void> {
        const { idNovela } = req.params;
        await pool.query('DELETE FROM librosproduct WHERE idNovela = ?', [idNovela]);
        res.json({message: 'The novel is has deleted'});
    }

}

const novelsController = new NovelsController();

export default novelsController;