class DataMovies {
  static moviesList({genre, page = 1}) {
    const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=release_date.desc&page=${page}&with_genres=${genre_id}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTQ0ZWExNzQzMzkxZDI3Yjk5YjgzNGVhYzU0YWQwYyIsInN1YiI6IjY0ZmYwMDU3ZTBjYTdmMDBlYzhjNjJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZIJaEnP64hbXVUYG0G4vZxA3kyFY3nOo2w6mMUdgHU'
      }
    };

    return fetch(`${url}`, options)
        .then(response => {
          return response.json()
        })
        .then(responseJson => {
          if (responseJson.genres) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(` is not found`);
          }
        }).catch(e => e)
  }
}
export default DataMovies;
