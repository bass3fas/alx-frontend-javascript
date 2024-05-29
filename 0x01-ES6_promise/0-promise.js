// Define the getResponseFromAPI function
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				
				const response = ('Responce received');
				resolve(response);
			} catch (error) {
				reject(error);
			}

		}, 1000);
	});
}
