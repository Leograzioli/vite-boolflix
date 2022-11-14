<script>
import AppCard from './AppCard.vue';
import { store } from '../store'
export default {
    name: 'AppMain',
    data () {
        return {
            store,
        }
    }, 
    methods: {
    
    },
    components: {
        AppCard,
    }
}
</script>

<template>
    <div v-if="store.moviesArray.length !== 0 || store.seriesArray.length !== 0   " class="container-fluid bg-dark p-5">
        <h2 class="text-white p-2">Movies:</h2>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 text-white g-3 mb-5">
            <!-- movie section  -->
            <div class="col" v-for="(item, index) in store.moviesArray" :key="index">
                <AppCard :name="item.title" :original-name="item.original_title" :movieItem="item" />       
            </div>
        </div>

        <h2 class="text-white p-2">Series:</h2>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 text-white g-3">
            <!-- serie section  -->
            <div class="col" v-for="(item, index) in store.seriesArray" :key="index">
                <AppCard :name="item.name" :original-name="item.original_name" :movieItem="item" />       
            </div>
        </div>
    </div>
    <div v-else>
        <h2 class="no-movies">Search a Title</h2>
    </div>
</template>

<style lang="scss" scoped>
    .no-movies {
        height: calc(100vh - 70px);
        background-color: rgb(29, 29, 29);
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>