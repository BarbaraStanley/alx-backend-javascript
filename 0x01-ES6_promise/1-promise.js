export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success == false) {
      reject('The fake API is not working currently');
    } else {
      const info = { status: 200, body: 'Success' };
      resolve(info);
    }
  });
}
