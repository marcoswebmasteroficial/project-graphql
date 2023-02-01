import "reflect-metadata";
import { AppDataSource } from "./config/database";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql/dist/utils";

const PORT = process.env.PORT || 4000;
import path from "node:path";

async function bootsrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/dtos/resolvers/*.ts"],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({ schema });

  AppDataSource.initialize()
    .then(async () => {
      await server
        .listen(PORT)
        .then((response: any) => {
          console.log(`🚀 Server ready at ${response.url}`);
        })
        .catch(() => {
          console.log("Error");
        });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}
bootsrap();
