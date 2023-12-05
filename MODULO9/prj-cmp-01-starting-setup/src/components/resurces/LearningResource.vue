<script>

export default {
    components: {
        
    },
    props: ['id','title', 'description', 'link'],
    inject: ['removeResource']
}
</script>
<template>
    <li>
        <base-card>
            <header>
                <h3>
                    {{ title }}
                </h3>
                <p>{{ description }}</p>
                <nav>
                    <a :href="link">Vuew Resource</a>
                </nav>
            </header>
            <div class="hello">
                <base-button mode="flat" @click="removeResource(id)">Delete!!</base-button>
            </div>
        </base-card>

    </li>
</template>

<style scoped>
    .hello  {
        display: flex;
        align-items: end;
        justify-content: end;
    }


</style>