import  { User } from '../models/User'
import { AppDataSource } from '../database/data-source'


const UserRepository = AppDataSource.getRepository(User).extend({
    
})


export { UserRepository }