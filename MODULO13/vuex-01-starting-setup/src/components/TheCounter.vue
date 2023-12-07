<template>
    <h3>{{normalizeCounter}}</h3>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
    // counter() {
    //   return this.$store.getters.normalizeCounter;
    // }
    ...mapGetters('counter',['normalizeCounter'])
  },
}
</script>