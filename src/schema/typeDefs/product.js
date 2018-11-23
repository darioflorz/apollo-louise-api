import { gql } from 'apollo-server';

const Product = gql`
extend type Query {
  product(id: ID): Product,
  products(media_id: String, serie_key: String, client_reference: String) : [Product]
}

type Product {
    id: ID,
    client_reference: String,
    distributor: String,
    distr_episode_num: String,
    episode_num: Int,
    expected_duration: String,
    first_broadcast: String,
    kind: String,
    modified: String,
    origin_country: String,
    product_key: String,
    product_sub_type: String,
    product_type: String,
    production_num: String,
    production_year: String,
    season: String,
    serie_key: String,
    title: String,
    title_press: String,
    type: String,
    broadcasts: [Broadcast],
    exposures: [Exposure],
    versions: [Version],
    
}

`;

export {Product}