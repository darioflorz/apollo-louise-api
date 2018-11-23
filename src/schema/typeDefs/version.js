import { gql } from 'apollo-server';

const Version = gql`
extend type Query {
    version(id: ID): Version,
  }

type Version {
  id: ID,
  automation: String,
  expected_length: Float,
  format: Boolean,
  modediff: String,
  product_key: String,
  rfa_subtitling: Boolean,
  real_length: Float,
  type: String,
  version_key: String,
  version_name: String,
  product: Product,
  subtitles: [Subtitle]
}

`;

export {Version}