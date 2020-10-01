import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ServicesController {

    async index(request: Request, response: Response){
        const filters = request.query;

        const category = filters.category as string;
        const uf = filters.uf as string;
        const city = filters.city as string;

        if(!filters.category || !filters.uf || !filters.city){
            return response.status(400).json({
                error: 'Missing filters to search services'
            })
        }

        const services = await db('users')
            .where('services.category', '=', category)
            .where('points.uf', '=', uf)
            .where('points.city', '=', city)
            .join('points', 'services.id', '=', 'points.services_id')
            .join('services', 'users.id', '=', 'services.user_id')
            .select('*');

        return response.json(services);

    }

    async create(request: Request, response: Response){
        const {
            name,
            lastname,
            avatar,
            email,
            whatsapp,
            experience,
            category,
            cost,
            neighborhood,
            uf,
            city,
            schedule
        } = request.body;

        const trx = await db.transaction();

        try{

            const insertedUsersIds = await trx('users').insert({
                name,
                lastname,
                avatar,
                email,
                whatsapp,
                experience
            });

            const user_id = insertedUsersIds[0];

            const insertedServicesIds = await trx('services').insert({
                category,
                cost,
                user_id
            });

            const services_id = insertedServicesIds[0];

            const insertedPointsIds = await trx('points').insert({
                neighborhood,
                uf,
                city,
                user_id,
                services_id
            });

            const points_id = insertedPointsIds[0];

            const servicesSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    services_id,
                    points_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                };
            })

            await trx('services_schedule').insert(servicesSchedule);

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