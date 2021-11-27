import gql from "graphql-tag";

export const LOGIN_USER = gql`
	mutation authenticate($login: String!, $password: String!) {
		authenticate(login: $login, password: $password) {
			login
			accessToken
			refreshToken
		}
	}
`;

export const REGISTER_USER = gql`
	mutation register($login: String!, $password: String!) {
		register(login: $login, password: $password) {
			login
			accessToken
			refreshToken
		}
	}
`;

export const REFRESH_TOKEN = gql`
	mutation refresh($refreshToken: String!) {
		refresh(refreshToken: $refreshToken) {
			login
			accessToken
			refreshToken
		}
	}
`;
