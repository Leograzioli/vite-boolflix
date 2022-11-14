import { reactive } from "vue"; 

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '80c08e9879f031f85edabd59d86d5123',
    inputSearch: '',
    moviesArray: [],
    seriesArray: []
})