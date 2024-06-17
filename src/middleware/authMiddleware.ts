import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwtConfig';
import UserAttributes from '../models/User';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user as UserAttributes; // ou string, dependendo de como você está codificando o token
        next();
    });
}
