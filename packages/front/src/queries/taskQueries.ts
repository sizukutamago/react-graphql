import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query {
    getTasks {
      id
      name
      dueDate
      status
      description
    }
  }
`;
