
<script>
export default {
    props: ['title']
}
</script>




<template>
    <div class="head">
        <h1>{{ title }}</h1>
    </div>
    
</template>

<style scoped>
.head {
    background-color: blue;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
}
h1 {
    color: white;
    font-size: 45px;
    line-height: 40px   ;
}
</style>