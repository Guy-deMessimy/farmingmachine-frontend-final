import { gql } from '@apollo/client';

export const CREATE_CATEGORY = gql`
  mutation Mutation($ticketInput: TicketInput!) {
    createTicket(ticketInput: $ticketInput) {
      id
      name
      description
      createdAt
      projectId
      assigneeId
      statusId
    }
  }
`;
