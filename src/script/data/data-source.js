import clubs from './clubs.js';

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson);
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
