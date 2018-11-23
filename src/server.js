import 'babel-polyfill' // some issue with async functions https://github.com/babel/babel/issues/5085
import { ApolloServer } from 'apollo-server';
import dotev from 'dotenv';
dotev.config(); // set up enviromentvariables
import {schema} from './schema/schema';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  schema
});


server.listen({ port: PORT }, () =>
console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
)