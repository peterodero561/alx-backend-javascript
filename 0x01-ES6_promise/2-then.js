function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a responce from API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error());
}
export default handleResponseFromAPI;
