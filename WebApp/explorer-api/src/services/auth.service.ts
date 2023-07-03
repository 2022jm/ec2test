const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import auth from "../config/authentication.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userRepository = prisma.user;

//########################
//#         User         #
//########################

/**
 * Check user credentials and return 2 tokens
 * 
 * @param  {string} username
 * @param  {string} password
 * @returns {Promise<Object>} valid accessToken and refreshToken
 * @returns {Promise<boolean>} on error false
 */
export async function login(email: string, password: string) {
    try {
        const user = await userRepository.findUnique({
            where: {
                email: email,
            },
        });

        
        if (user === null) throw "User not found";
        
        const userToTokenize = await getUser(user.id);

        const compare = await bcrypt.compare(password, user.password);
        if (compare) {
            // return token and refreshToken
            const tokenData = {
                ...userToTokenize,
                tokenType: "access",
            };
            const refreshTokenData = {
                ...userToTokenize,
                tokenType: "refresh",
            };

            const token = jwt.sign(tokenData, auth.accessSecretKey, { expiresIn: auth.accessTokenLife });
            const refreshToken = jwt.sign(refreshTokenData, auth.refreshSecretKey, { expiresIn: auth.refreshTokenLife });

            return {
                accessToken: token,
                refreshToken: refreshToken,
            };
        }
        throw "Password don't match";
    } catch (err) {
        console.error(err);
        return false;
    }
}
/**
 * Return a new valid accessToken providing a valid refreshToken
 * 
 * @param  {string} refreshToken
 * @returns {Promise<String>} new valid accessToken
 * @returns {Promise<Boolean>} on error false 
 */
export async function refreshToken(refreshToken: string): Promise< String | boolean > {
    try {
        // verify refresh token
        const payload = jwt.verify(refreshToken, auth.refreshSecretKey);

        // delete iat and exp to reuse the payload data
        delete payload.iat;
        delete payload.exp;
        payload.tokenType = "access";

        return jwt.sign(payload, auth.accessSecretKey, { expiresIn: auth.accessTokenLife });
    } catch (e) {
        console.error(e);
        return false;
    }
}

//------------------------
//-         User         -
//------------------------

async function getPassword(userId: number) {
    const password = await userRepository.findUnique({
        where: {
            id: userId,
        },
        select: {
            password: true,
        },
    });

    return password?.password;
}

export async function getUser(id: number) {
    return await userRepository.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            email: true,
            username: true,
            name: true,
            surname: true,
            isAdmin: true,
        },
    });
}

export async function getAllUsers() {
    return await userRepository.findMany({
        select: {
            id: true,
            email: true,
            username: true,
            name: true,
            surname: true,
            isAdmin: true,
        },
    });
}

export async function createUser(newEmail: string, newUsername: string, newName: string, newSurname: string, newPassword: string, newIsAdmin: boolean) {
    return await userRepository.create({
        data: {
            email: newEmail,
            name: newName,
            username: newUsername,
            surname: newSurname,
            password: newPassword,
            isAdmin: newIsAdmin,
        },
    });
}

export async function updateUser(id: number, newUsername: string, newEmail: string, newName: string, newSurname: string, newPassword: string, newIsAdmin: boolean) {
    return await userRepository.update({
        where: {
            id: id,
        },
        data: {
            email: newEmail,
            name: newName,
            username: newUsername,
            surname: newSurname,
            password: newPassword,
            isAdmin: newIsAdmin,
        },
    });
}

export async function deleteUser(id: number) {
    return await userRepository.delete({
        where: {
            id: id,
        },
    });
}
