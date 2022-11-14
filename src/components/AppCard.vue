<script>
export default {
    name: 'MovieCard',
    props: {
        movieItem: Object,
        name: String,
        originalName: String
    },
}
</script>

<template>
    
    <div class="ms_card">
        <div class="ms_card-inner">
            <div class="ms_card-description p-3">
                <p>Title: {{ name }}</p>
                <p>Original Title: {{ originalName }}</p>
                <p v-if="movieItem.original_language === 'en' || movieItem.original_language === 'sh'"><img src="../assets/tn_uk-flag.jpg" alt=""></p>
                <p v-else-if="movieItem.original_language === 'it'"><img src="../assets/tn_it-flag.jpg" alt=""></p>
                <p v-else-if="movieItem.original_language === 'de'"><img src="../assets/tn_gm-flag.jpg" alt=""></p>
                <p v-else>Original Language: {{ movieItem.original_language }}</p>
                <p v-if="movieItem.vote_average > 0">rate: <i v-for="index in 5" v-show=" Math.ceil(movieItem.vote_average / 2) >= index" class="fa-solid fa-star"></i></p>
                <p v-else>rate: <i class="fa-regular fa-star"></i></p>
                <p>{{movieItem.overview}}</p>
            </div>
    
            <div class="ms_card-image">
                <img :src="'https://image.tmdb.org/t/p/w342' + movieItem.poster_path" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    position: relative;
    height: 100%;
    .ms_card-description {

        img{
            width: 30px;
        }
    }
}

.ms_card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}
.ms_card:hover .ms_card-description {
    display: block;
}
.ms_card:hover .ms_card-image {
    
}

.ms_card:hover .ms_card-inner {
    transform: rotateY(180deg);
}
.ms_card-description {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: rgb(44, 44, 44);
    height: 100%;
    overflow: auto;

}

.ms_card-image {
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

</style>