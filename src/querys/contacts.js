import { gql } from '@apollo/client'

const GET_CONTACT = gql`
  query MyQuery (
    $dataApikey: String!,
    $datasource: String!, 
    $database: String!, 
    $collection: String! 
    $filter: JSON! 
  ) {
    getContacts(
      dataApikey: $dataApikey
      collection: $collection
      database: $database
      dataSource: $datasource
      filter: $filter
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

const UPDATE_CONTACT = gql`
  query MyQuery (
  $dataApikey: String!, 
  $database: String!,
  $datasource: String!, 
  $collection: String!, 
  $filter: JSON!,
  $update: JSON!)  {
    updateContact(
      collection: $collection
      dataApikey: $dataApikey
      database: $database
      dataSource: $datasource
      update: $update
      filter: $filter
    )
  }
`

const DELETE_CONTACT = gql`
  query MyQuery (
  $dataApikey: String!, 
  $database: String!,
  $datasource: String!, 
  $collection: String!, 
  $filter: JSON!)  {
    deleteContact(
      collection: $collection
      dataApikey: $dataApikey
      database: $database
      dataSource: $datasource
      filter: $filter
    )
  }
`

// Mutations -------------------------------
const CREATE_CONTACT_MUTATION = gql`
  mutation MyMutation (
    $dataApikey: String!, 
    $dataSource: String!,
    $collection: String!, 
    $database: String!, 
    $document: JSON!
  ) {
    createContact (
      dataApikey: $dataApikey
      dataSource: $dataSource
      collection: $collection
      database: $database
      document: $document
    )
  }
`

const UPDATE_CONTACT_MUTATION = gql`
  mutation MyMutation (
    $dataApikey: String!, 
    $datasource: String!, 
    $database: String!,
    $collection: String!, 
    $filter: JSON!,
    $update: JSON!
  ) {
    createContact (
      dataApikey: $dataApikey
      dataSource: $dataSource
      collection: $collection
      database: $database
      filter: $filter
      update: $update     
    )
  }
`

const DELETE_CONTACT_MUTATION = gql`
  mutation MyMutation (
    $dataApikey: String!, 
    $dataSource: String!, 
    $database: String!,
    $collection: String!, 
    $filter: JSON!
  ) {
    deleteContact (
      dataApikey: $dataApikey
      dataSource: $dataSource
      database: $database
      collection: $collection
      filter: $filter
    )
  }
`
export {
  GET_CONTACT,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CREATE_CONTACT_MUTATION,
  UPDATE_CONTACT_MUTATION,
  DELETE_CONTACT_MUTATION
}
