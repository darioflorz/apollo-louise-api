import { gql } from 'apollo-server';

const Exposure = gql`
extend type Query {
  exposure(id: ID): Exposure,
}

type Exposure {
    id:             ID,
    begin:          String,
    drm:            String,
    end:            String,
    exposure_type:  String,
    modified:       String,
    product_key:    String,
    prog_key:       String,
    type:           String,
    version_key:    String,
    vps_channel:    String,
    product:        Product
}

`;

export { Exposure }