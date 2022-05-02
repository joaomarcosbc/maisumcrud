import { Tag } from "../models/Tag";
import { AppDataSource } from "../database/data-source";

const TagRepository = AppDataSource.getRepository(Tag).extend({


})

export { TagRepository }