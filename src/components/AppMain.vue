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
    <div class="container">

        <!-- movie section  -->
        <h2>movies</h2>
        <div class="col" v-for="(item, index) in store.moviesArray" :key="index">
            <AppCard :name="item.title" :original-name="item.original_title" :movieItem="item" />       
        </div>

        <!-- serie section  -->
        <h2>series</h2>
        <div class="col" v-for="(item, index) in store.seriesArray" :key="index">
            <AppCard :name="item.name" :original-name="item.original_name" :movieItem="item" />       
        </div>
    </div>
</template>

<style>
</style>