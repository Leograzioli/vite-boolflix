<script>
import axios from 'axios'
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  data() {
    return {
      store,
    }
  },
  created() {
    this.getGenreApi()
  },
  methods: {
    getGenreApi() {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=80c08e9879f031f85edabd59d86d5123')
        .then((resp) => {
          this.store.genre = resp.data.genres;
        })
    },

    getMovies() {
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
      }
      axios.get(this.store.apiMovieUrl, {
        params: params
      }).then((resp) => {
        this.store.moviesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      })
    },
    getSeries() {
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
      }
      axios.get(this.store.apiSerieUrl, {
        params: params
      }).then((resp) => {
        this.store.seriesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })
    },
    
    getAxiosApi() {
      this.store.loading = true;

      this.getMovies()
      this.getSeries()
      this.store.inputSearch = "";
    }
  },
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader @clickedButton="getAxiosApi" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>