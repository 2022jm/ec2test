const jwt = require("jsonwebtoken");

import auth from "../config/authentication.json";
import { NextFunction, Request, Response } from "express";

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const publicRoutes = [
        '/api/auth/login',
        '/api/auth/refresh'
    ];

    if (publicRoutes.includes(req.url)) {
        next();
        return;
    }

    // check if exists the token
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(400).json({ error: true, msg: "Access denied" });
    }
    // try to verify the token if it is valid and check if the token is an access token
    try {
        const verifyToken = jwt.verify(token, auth.accessSecretKey);

        if (verifyToken.tokenType == "access") {
            next();
            return;
        } else return res.status(401).json({ error: true, msg: "Token not valid" });

    } catch (error) {
        return res.status(401).json({ error: true, msg: "Access denied" });
    }
    // return res.status(400).json({ error: true, msg: "Access denied" })
}
