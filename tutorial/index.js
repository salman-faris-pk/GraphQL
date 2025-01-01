import { ApolloServer } from "apollo-server"
import resolvers from "./schema/resolvers.js"
import typeDefs from "./schema/type-defs.js"

const Port=7000;

const server= new ApolloServer({typeDefs, resolvers});



server.listen(Port,()=>{
    console.log(`YOUR API IS RUNNING AT: ${Port} :)`);
})