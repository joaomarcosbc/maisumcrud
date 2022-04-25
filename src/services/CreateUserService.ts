import { UserRepository } from '../repositories/UsersRepositories'

interface IUserRequest {

    name: string;
    email: string;
    password: string;
    admin?: boolean;

}


class CreateUserService {

    async exceute({name, email, password, admin} : IUserRequest) {

        if(!email) {
            throw new Error('Something is wrong with e-mail ')
        }

        const userAlreadyExists = await UserRepository.findOneBy({
            email
        })

        if(userAlreadyExists) {
            throw new Error('User already exists. ')
        }

        const user = UserRepository.create({
            name,
            email,
            password,
            admin
        })

        await UserRepository.save(user)

        return user

    }

}

export { CreateUserService }