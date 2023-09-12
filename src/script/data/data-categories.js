import clubs from './categories.js';

class DataCategories {
  static categoriesList() {

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTQ0ZWExNzQzMzkxZDI3Yjk5YjgzNGVhYzU0YWQwYyIsInN1YiI6IjY0ZmYwMDU3ZTBjYTdmMDBlYzhjNjJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZIJaEnP64hbXVUYG0G4vZxA3kyFY3nOo2w6mMUdgHU'
      }
    };

    return fetch(`${url}`, options)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.genres) {
            return Promise.resolve(responseJson.genres);
          } else {
            return Promise.reject(` is not found`);
          }
        });

    // const response = await fetch(url, options)
    // const responseJson = await response.json();
    // if (responseJson.genres) {
    //   return Promise.resolve(responseJson.genres);
    // } else {
    //   return Promise.reject(`${keyword} is not found`);
    // }
  }
}

export default DataCategories;
