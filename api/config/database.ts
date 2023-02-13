import { DataSource } from "typeorm";
import path from "node:path";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  synchronize: true,
  username: "timoteo",
  password: "123456",
  database: "timoteo",
  entities: [path.resolve(__dirname + "/../dtos/models/*.ts")],
  logging: ["error"],
});
