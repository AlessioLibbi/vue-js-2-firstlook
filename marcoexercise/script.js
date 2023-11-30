const app = Vue.createApp({
    data() {
        return {
            book : {
                title: 'La Divina Commedia',
                author: 'Alessio Libbi',
                year: 2003,
                description: ' La storia di amore non ricambiata da parte del Autore con Beatrice'
            },
            newValue : {
                title: "",
                author: "",
                year: "",
                description: ""
            }
        }
    },
    methods: {
        editBook() {
            this.book += this.newValue.title
        }
    }
})

app.mount('#app')