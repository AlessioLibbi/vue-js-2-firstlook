const app = Vue.createApp({
    data() {
        return {
            book : {
                title: 'La Divina Commedia',
                author: 'Alessio Libbi',
                year: 2003,
                description: ' La storia di amore non ricambiata da parte del Autore con Beatrice'
            },
            switch: false,
          
        }
    },
    methods: {
        editBook() {
            this.switch = !this.switch
        }
        
    }
})

app.mount('#app')