import { Request, Response } from 'express';

export const user = async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello from user controller!', 
    });
}

export const addUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: 'User added successfully!',
        user: { name, email },
    });
}