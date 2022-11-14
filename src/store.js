import { reactive } from "vue"; 

export const store = reactive ({
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '80c08e9879f031f85edabd59d86d5123',
    inputSearch: '',
    moviesArray: [],
    seriesArray: []
})