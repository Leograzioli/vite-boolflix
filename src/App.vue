<script>
import axios from 'axios'
import { store } from './store'
import AppSearch from './components/AppSearch.vue'
import AppMain from './components/AppMain.vue'
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getAxiosApi() {
      if (this.store.inputSearch !== '') {
        const movieParams = {
          api_key: this.store.apiKey,
          ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
        }

        //movie api
        axios.get(this.store.apiMovieUrl, {
          params: movieParams
        }).then((resp) => {
          this.store.moviesArray = resp.data.results;
        }).catch((error) => {
          console.log(error);
        })

        //serie api
        const seriesParam = {
          api_key: this.store.apiKey,
          ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
        }
        axios.get(this.store.apiSerieUrl, {
          params: seriesParam
        }).then( (resp) => {
          this.store.seriesArray = resp.data.results;
        })
      }
    }
  },
  created() {
    this.getAxiosApi();
  },
  components: {
    AppSearch,
    AppMain,
  }
}
</script>

<template>
  <AppSearch @clickedButton="getAxiosApi" />
  <AppMain />
</template>

<style>

</style>