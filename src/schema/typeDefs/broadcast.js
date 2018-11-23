import { gql } from 'apollo-server';

const Broadcast = gql`

type Broadcast {
    id:                 ID,
    channel:            String,
    first_segment:      String,
    included_in:        String,
    modediff:           String,
    product_key:        String,
    prog_key:           String,
    scheduled_duration: String,
    start:              String,
    type:               String,
    version_key:        String
    product:            Product
}

`;

export { Broadcast }