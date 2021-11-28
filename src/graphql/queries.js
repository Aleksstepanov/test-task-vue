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

export const TOTAL_COUNT = gql`
	query accounts {
		accounts(skip: 0) {
			totalCount
		}
	}
`;

export const LIST_ACCOUNT = gql`
	query listAccount {
		accounts(skip: 0) {
			list {
				login
				createdAt
			}
		}
	}
`;
