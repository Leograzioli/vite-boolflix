<script>
import { store } from '../store'
export default {
    name: 'AppSearch',
    data () {
        return {
            store,
        }
    }
}
</script>

<template>
    <header class="d-flex justify-content-between py-3 px-4 bg-black">
        <div class="logo">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
        </div>
        <div>
            <label class="d-none" for="search-bar">Search movie</label>
            <input id="search-bar" type="text" @keyup.enter="$emit('clickedButton')" v-model="store.inputSearch">
            <button @click="$emit('clickedButton')" >vai!</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.logo{
    img{ width: 140px;}
}
</style>