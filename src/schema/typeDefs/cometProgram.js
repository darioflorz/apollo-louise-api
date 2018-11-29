import { gql } from 'apollo-server';

const CometProgram = gql`
extend type Query {
  cometProgram(reference: ID): CometProgram,
}

type CometProgram {
    id:            String,
    reference:     String,
    guid:          String,
    type:          String,
    name:          String,
    displayName:    String,
    originalTitle: String,
    product:       Product,
}
`;

export { CometProgram }