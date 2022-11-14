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
        <div v-for="(item, index) in store.moviesArray" class="col">
            <p>{{item.title}}</p>
            <p>{{item.original_title}}</p>
            <p>{{item.original_language}}</p>
            <p>{{item.vote_average}}</p>
        </div>
    </div>
</template>

<style>
    .container {
        margin: 0 auto;
        width: 80%;
    }

    .col {
        border: 1px solid black
    }
</style>