import { Request, Response } from 'express';
import User from '../models/user.model';
import * as entityService from '../services/entity.service';
import logger from '../utils/logger';

interface IUser{
    given_name:string;
    email:string;
}

export const user = async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello from user controller!',
    });
}

export const addUser = async (req: Request, res: Response): Promise<IUser | any> => {
    try {
        const { given_name, email } = req.body;

        if (!given_name || !email) {
            return res.status(400).json({ message: 'Given name and email are required.' });
        }

        const exisintUser = await entityService.findEntityByField(User, 'email', email);
        if (exisintUser) {
            return res.status(201).json({ message: 'User already exists.', user: exisintUser });
        }
      

        const newUser = await entityService.createEntity(User, { given_name, email });
   
        res.status(201).json({
            message: 'User added successfully!',
            user: { newUser},
        });
    } catch (error) {
        logger.error('Error adding user:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
}