import { Request, Response } from 'express';

import createUser from './services/CreateUserService';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'a@bc.d',
        password: '123456',
        techs: [
            'NodeJs',
            'React',
            { title: 'JavaScript', experience: 1. }
        ],
    });

    return response.json({ message: 'Hello Typescript' });
}