<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value:7})">Add 19</button>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('addOne');
        // }
    //    ... mapActions(['addOne', 'increase'])
        ...mapActions('counter',{
            inc: 'addOne',
            increase: 'increase'
        })

        
    }
}
</script>