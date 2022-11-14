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
    <div class="container-fluid bg-dark">
        <h2>movies</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-white g-3">
            <!-- movie section  -->
            <div class="col" v-for="(item, index) in store.moviesArray" :key="index">
                <AppCard :name="item.title" :original-name="item.original_title" :movieItem="item" />       
            </div>
        </div>

        <h2>series</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-white g-3">
            <!-- serie section  -->
            <div class="col" v-for="(item, index) in store.seriesArray" :key="index">
                <AppCard :name="item.name" :original-name="item.original_name" :movieItem="item" />       
            </div>

        </div>


    </div>
</template>

<style>
</style>