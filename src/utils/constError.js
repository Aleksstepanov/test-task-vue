const INVALID_PASSWORD = "GraphQL error: Invalid Login/Password";
const LOGGED_ALREADY = "Login already taken";

export function ErrMessage(err) {
	switch (err) {
		case INVALID_PASSWORD:
			return "Invalid Login/Password";
		case LOGGED_ALREADY:
			return "Login already taken";

		default:
			return "";
	}
}
