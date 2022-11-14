<script>
import { store } from '../store'
export default {
    name: 'AppMain',
    data () {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>film</h2>
        <div v-for="(item, index) in store.moviesArray" :key="index">
            <p>Title: {{item.title}}</p>
            <p>Original Title: {{item.original_title}}</p>
            <p v-if="item.original_language === 'en'"><img src="../assets/tn_uk-flag.jpg" alt=""> / <img src="../assets/tn_us-flag.jpg" alt=""></p>
            <p v-else-if="item.original_language === 'it'"><img src="../assets/tn_it-flag.jpg" alt=""></p>
            <p v-else-if="item.original_language === 'de'"><img src="../assets/tn_gm-flag.jpg" alt=""></p>
            <p v-else>Original Language: {{item.original_language}}</p>
            <p>rate:{{parseInt(item.vote_average / 2)}}</p>
            <img :src="'https://image.tmdb.org/t/p/w185' + item.poster_path" alt="">
        </div>

        <h2>series</h2>
        <div v-for="(item, index) in store.seriesArray" :key="index">
            <p>Title: {{item.name}}</p>
            <p>Original title: {{item.original_name}}</p>
            <p v-if="item.original_language === 'en'"><img src="../assets/tn_uk-flag.jpg" alt=""> / <img src="../assets/tn_us-flag.jpg" alt=""></p>
            <p v-else-if="item.original_language === 'it'"><img src="../assets/tn_it-flag.jpg" alt=""></p>
            <p v-else-if="item.original_language === 'de'"><img src="../assets/tn_gm-flag.jpg" alt=""></p>
            <p v-else>Original Language: {{original_language}}</p>
            <p>Rate: </p>
            <img :src="'https://image.tmdb.org/t/p/w185' + item.poster_path" alt="">>
        </div>
    </div>
</template>

<style>
</style>