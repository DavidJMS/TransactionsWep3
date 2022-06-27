import { gql } from '@apollo/client';

const GET_QUERY = gql`
  query MyQuery ($dataApikey: String!, $datasource: String!, $database: String!, $collection: String! ) {
    getContacts(
      dataApikey: $dataApikey
      collection: $collection
      database: $database
      dataSource: $datasource
    )
  }
`;

export {
  GET_QUERY
}