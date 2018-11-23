import { gql } from 'apollo-server';

const Subtitle = gql`

type Subtitle {
    language: String,
    language_code: String,
    subtitle_type: String,
    type: String,
    version_key: String
}

`;

export { Subtitle }