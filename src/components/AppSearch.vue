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
    <div>
        <input type="text" v-model="store.inputSearch">
        <button @click="$emit('clickedButton')">vai!</button>
    </div>
</template>

<style></style>