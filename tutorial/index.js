import { ApolloServer } from "apollo-server"
import resolvers from "./schema/resolvers.js"
import typeDefs from "./schema/type-defs.js"



const server= new ApolloServer({typeDefs, resolvers});



server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url}`);
  });