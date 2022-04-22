import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite",
    entities: ["src/models/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    migrationsTableName: "migrations",
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })