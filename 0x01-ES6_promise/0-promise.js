export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		const v = 1;
		if (v < 1) {
			reject('rejected');
		} else {
			resolve('resolved');
		}
	});
}
