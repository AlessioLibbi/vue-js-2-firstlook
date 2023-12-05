

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResource from './components/resurces/TheResource.vue';

export default {
    components: {
        TheHeader,
        TheResource
       
    },
  
}
</script>

<template>
    <TheHeader title="RememberMe"/>
    <TheResource />
</template>


<style>
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
</style>
