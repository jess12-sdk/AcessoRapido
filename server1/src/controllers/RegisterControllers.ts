import { Request, Response } from 'express';
import crypto from 'crypto';

import db from '../database/connection';

export default class RegisterController {

    async index(request: Request, response: Response){

        const filters = request.query;

        const email = filters.email as string;
        const pwd = filters.pwd as string;

        if(!filters.email || !filters.pwd){
            return response.status(400).json({
                error: 'Missing filters to search users'
            })
        }

        const cipher = crypto.createCipher('aes128', 'a password');
        var encrypted = cipher.update(pwd, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        const password = encrypted;

        const login = await db('usersLogin')
            .where('usersLogin.email', '=', email)
            .where('usersLogin.password', '=', password)
            .select('*');

        return response.json(login);
    }

    async create(request: Request, response: Response){
        const {
            name,
            lastname,
            email,
            passwordM
        } = request.body;

        const trx = await db.transaction();

        try{

            const cipher = crypto.createCipher('aes128', 'a password');
            var encrypted = cipher.update(passwordM, 'utf8', 'hex');
            encrypted += cipher.final('hex');

            const password = encrypted;

            await trx('usersLogin').insert({
                name,
                lastname,
                email,
                password
            });

            await trx.commit();

            return response.status(201).send();

        }catch (err){
            console.log(err);

            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new service'
            })
        }
    } 
}