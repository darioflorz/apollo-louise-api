import { gql } from 'apollo-server';

const Media = gql`
extend type Query {
  media(id: ID): Media,
  medias(media_id: String) : [Media]
}

type Media {
    id:                   ID,
    automation:           String,
    digitalization_id:    String,
    end_of_start_credits: Float,
    following_break:      Float,
    following_break_nok:  Float,
    media_id:             String,
    media_key:            String,
    modediff:             String,
    modified:             String,
    real_length:          Float,
    start_of_end_credits: Float,
    tc_in:                Float,
    tc_out:               Float,
    type:                 String,
    type_support:         String,
    use:                  String,
    version_key:          String,
    version_name:         String,
    version:              Version
}

`;

export { Media }