import { sql } from './db.js';
import { ramdomUUID } from 'crypto'

export class DatabaseUsers {
    async createUser(user) {
        const id = randomUUID();
        const name = user.name;
        const password = user.password;
        const profile = user.profile;

        await sql`insert into users (id, name, password, profile)
        values (${id}, ${name}, ${password}, ${profile})`
    }
}