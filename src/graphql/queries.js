import { gql } from "graphql-tag";

export const LOGGED_IN_USER = gql`
	query user {
		me {
			id
			login
			refreshToken
			createdAt
			updatedAt
		}
	}
`;

export const ALL_ACCOUNTS = gql`
	query accounts {
		accounts(skip: 0) {
			totalCount
		}
	}
`;
