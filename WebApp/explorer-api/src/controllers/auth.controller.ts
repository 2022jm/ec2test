const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import { Request, Response } from "express";

import * as authService from "../services/auth.service";
import auth from "../config/authentication.json";

//########################
//#         User         #
//########################

/**
 * Login controller getting the credentials (username and password) and call the service to login,
 * 
 * If everthing goes well
 *      return status 200 with accessToken and refreshToken
 * On error
 *      return status 401 and "Access denied" message
 */
export async function login(req: Request, res: Response): Promise<Response> {
    try {
        const email = String(req.body.email);
        const password = String(req.body.password);
    
        // if there is no username or password return error
        if (!email || !password) throw "No username or password";
        
        const tokens = await authService.login(email, password);
    
        if (!tokens) throw "Error login";
    
        return res.status(200).json({
            msg: "User logged",
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: true, msg: "Access denied" })
    }
}

/**
 * Refresh token controller getting the refreshToken and call the refreshToken service
 * 
 * If everthing goes well
 *      return status 200 and the new valid accessToken
 * On error
 *      return status 400 and "Could not refresh token" message
 */
export async function refreshToken(req: Request, res: Response): Promise<Response> {
    try {
        const refreshToken = req.body.refreshToken;

        if (!refreshToken) throw "Refresh token must be provided";
    
        const newAccessToken = await authService.refreshToken(refreshToken);
    
        if (!newAccessToken) throw "Refresh token provided invalid";
    
        return res.status(200).json({
            accessToken: newAccessToken,
        });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: true, msg: "Could not refresh token" });
    }
}

//------------------------
//-         User         -
//------------------------

export async function getUser(req: Request, res: Response) {
    const bioinformaticPipelineId = Number(req.params.id);

    const result = await authService.getUser(bioinformaticPipelineId);
    return res.status(300).json(result);
}

export async function getAllUsers(req: Request, res: Response) {
    const result = await authService.getAllUsers();

    return res.status(300).json(result);
}

export async function createUser(req: Request, res: Response) {

    const token = req.header("Authorization")?.replace("Bearer ", "");
    const payload = jwt.verify(token, auth.accessSecretKey);
    // verify if the client is an admin
    if (!payload.isAdmin) return res.status(401).json({ error: true, msg: "Access denied" })

    const email = req.body.email;
    const name = req.body.name;
    const username = req.body.username;
    const surname = req.body.surname;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;

    // hash the password with random salt with 10 rounds
    const hash = await bcrypt.hash(password, 10);

    const result = await authService.createUser(email, username, name, surname, hash, isAdmin);
    return res.status(300).json({msg: "User created"});
}

export async function updateUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    const email = req.body.email;
    const name = req.body.name;
    const username = req.body.username;
    const surname = req.body.surname;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;

    // hash the password with random salt with 10 rounds
    const hash = await bcrypt.hash(password, 10);

    const result = await authService.updateUser(id, email, username, name, surname, hash, isAdmin);
    return res.status(300).json(result);
}

export async function deleteUser(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = authService.deleteUser(id);
    return res.status(300).json(result);
}
