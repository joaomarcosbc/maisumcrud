import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'


class CreateUserController {

    async handle(req: Request, res: Response) {


        // const name = req.body.name
        const { name, email, password, admin } = req.body

        const createUserService = new CreateUserService()

        const user = await createUserService.exceute({name, email, password, admin})

        return res.json(user)

    }

}

export { CreateUserController }