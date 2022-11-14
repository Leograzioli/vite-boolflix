<script>
export default {
    name: 'MovieCard',
    props: {
        movieItem: Object,
        name: String,
        originalName: String
    }

}
</script>

<template>
    
    <div>
        <p>Title: {{ name }}</p>
        <p>Original Title: {{ originalName }}</p>
        <p v-if="movieItem.original_language === 'en'"><img src="../assets/tn_uk-flag.jpg" alt=""></p>
        <p v-else-if="movieItem.original_language === 'it'"><img src="../assets/tn_it-flag.jpg" alt=""></p>
        <p v-else-if="movieItem.original_language === 'de'"><img src="../assets/tn_gm-flag.jpg" alt=""></p>
        <p v-else>Original Language: {{ movieItem.original_language }}</p>
        <p>rate:{{ parseInt(movieItem.vote_average / 2) }}</p>
        <img :src="'https://image.tmdb.org/t/p/w185' + movieItem.poster_path" alt="">
    </div>
</template>

<style>

</style>