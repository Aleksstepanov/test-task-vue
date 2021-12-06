const INVALID_PASSWORD = "GraphQL error: Invalid Login/Password";
const LOGGED_ALREADY = "Login already taken";
const LOGIN_ALREADY_TAKEN = "Error: GraphQL error: Login already taken";
const NETWORK_ERROR =
	"Network error: NetworkError when attempting to fetch resource.";

export function ErrMessage(err) {
	switch (err) {
		case INVALID_PASSWORD:
			return "Invalid Login/Password";
		case LOGGED_ALREADY:
			return "Login already taken";
		case LOGIN_ALREADY_TAKEN:
			return "Login already taken";
		case NETWORK_ERROR:
			return "NetworkError when attempting to fetch resource.";
		default:
			return "Unknow type error";
	}
}
