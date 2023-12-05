<script>
import StoredResource from './StoredResource.vue';
import AddResource from "./AddResource.vue"
export default {
    components: {
        StoredResource,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResurces: [
                {
                    is: 'official-guide',
                    title: ' Official Guide',
                    description: 'The Official Vue Js Documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    is: 'google-guides',
                    title: ' Official Guide',
                    description: 'The Official Vue Js Documentation.',
                    link: 'https://Google.org'
                }
            ]
        }
    },
    computed: {
        storedBtn() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addBtn() {
            return this.selectedTab === 'add-resources' ? null : 'flat'
        }
    },
    provide() {
        return {
            resources: this.storedResurces,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title,description,link) {
            const newResurce = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }
            this.storedResurces.unshift(newResurce),
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId) {
            const resIndex =this.storedResurces.findIndex(res => res.id === resId);
            this.storedResurces.splice(resIndex, 1);
        }
    }
}
</script>


<template>
    <base-card>
        <div>
            <base-button @click="setSelectedTab('stored-resource')" :mode="storedBtn">Stored Rescource</base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addBtn"> Add Resource</base-button>
        </div>

    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
   
</template>

<style scoped>
div {
    display: flex;
}
</style>