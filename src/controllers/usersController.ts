import { Request, Response } from 'express';

import pool from '../database';

class UsersController {

    // prueba enpoints
    public async listAll(req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM usuario');
        res.json(users);
    }

    public async getListOne(req: Request, res: Response): Promise<any> {
        const { idUser } = req.params;
        const user = await pool.query('SELECT * FROM usuario WHERE idUser = ?', [idUser]);

        if (user.length > 0) {
            return res.json(user[0]);
        }

        res.status(404).json({text: "The user don't exists"});
    }

    public async getUserValidation(req: Request, res: Response): Promise<any> {
        const { nickName } = req.params;
        const user = await pool.query('SELECT * FROM usuario WHERE nickName = ?', [nickName]);

        if (user.length > 0) {
            return res.json(user[0]);
        }

        res.status(404).json({text: "The user don't exists"});
    }

    // Post (consultando database: creando)
    public async createNovel(req: Request, res: Response): Promise<void> {
        // crear el producto (usuario)
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message: 'user saved'});
    }

}

const usersController = new UsersController();

export default usersController;