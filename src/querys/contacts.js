import { gql } from '@apollo/client'

const GET_CONTACT = gql`
  query MyQuery ($dataApikey: String!, $datasource: String!, $database: String!, $collection: String! ) {
    getContacts(
      dataApikey: $dataApikey
      collection: $collection
      database: $database
      dataSource: $datasource
    )
  }
`

const CREATE_CONTACT = gql`
  query MyQuery ($dataApikey: String!, $datasource: String!, $database: String!,$collection: String!, $document: JSON!)  {
    crateContact(
      collection: $collection
      dataApikey: $dataApikey
      database: $database
      dataSource: $datasource
      document: $document
    )
  }
`

export {
  GET_CONTACT,
  CREATE_CONTACT
}
