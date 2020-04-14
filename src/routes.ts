import { Request, Response } from 'express';

import createUser from './services/CreateUserService';

export function helloWorld(request: Request, response: Response) {
    const user = createUser('Ermogenes', 'a@bc.d', '123456');
    
    return response.json({ message: 'Hello Typescript' });
}