import { gql } from "@apollo/client/core";

export const LOGGED_IN_USER = gql`
	query {
		me {
			id
			login
			refreshToken
			createdAt
			updatedAt
		}
	}
`;
