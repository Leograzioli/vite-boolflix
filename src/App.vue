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
  methods: {
    getAxiosApi() {
      this.store.loading = true;
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
      }
      
      //movie api
      axios.get(this.store.apiMovieUrl, {
        params: params
      }).then((resp) => {
        this.store.moviesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      })

      //serie api
      axios.get(this.store.apiSerieUrl, {
        params: params
      }).then((resp) => {
        this.store.seriesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })

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