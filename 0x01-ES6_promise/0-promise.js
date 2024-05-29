// Define the getResponseFromAPI function
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Responce received');
		}, 1000);
	});
}
