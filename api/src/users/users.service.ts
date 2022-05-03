import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'moon',
            username: 'moon',
            password: '123'
        }
    ]    

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username == username)
    }
}
