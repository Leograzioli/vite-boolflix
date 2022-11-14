<script>
import axios from 'axios'
import { store } from './store'
import AppSearch from './components/AppSearch.vue'
import AppMain from './components/AppMain.vue'
export default {
  data () {
    return {
      store,
    }
  }, 
  methods: {
        getAxiosApi () {
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && {query: this.store.inputSearch}
      }
      axios.get(this.store.apiUrl, {
        params:params
      }).then ((resp) => {
        this.store.moviesArray = resp.data.results;
      })
    }
  },
  created () {
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