import { makeExecutableSchema } from 'graphql-tools';
// Import typeDefs
import {Product} from './typeDefs/product';
import {Version} from './typeDefs/version';
import {Media} from './typeDefs/media';
import {Exposure} from './typeDefs/exposure';
import {Broadcast} from './typeDefs/broadcast';
import {Subtitle} from './typeDefs/subtitle';
import {CometProgram} from './typeDefs/cometProgram';
// Import resolvers
import {productResolver} from './resolvers/productResolver';
import {versionResolver} from './resolvers/versionResolver'
import {mediaResolver} from './resolvers/mediaResolver'
import {exposureResolver} from './resolvers/exposureResolver'
import {cometProgramResolver} from './resolvers/cometProgramResolver'

const Query = `
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs : [Query, Product, Version, Media, Exposure, Broadcast, Subtitle, CometProgram],
  resolvers : [productResolver, versionResolver, mediaResolver, exposureResolver, cometProgramResolver]
});

export {schema}