import mock from "./mock";
import fakeRequest from "../utils/fakeRequest";

// const user = {
// 	id: "slkjgndskjbjhsdbvjhs",
// 	email: "test@mail.ru",
// 	password: "123456",
// 	lastName: "Victor",
// 	firstName: "Ivanov",
// };
mock.onPost("/api/user/profile").reply(async (config) => {
	try {
		await fakeRequest(1000);
		const { email, password } = JSON.parse(config.data);
		const user = { email, password };
		return [200, user];
	} catch (error) {
		return [500, { message: "Internal server error" }];
	}
});
