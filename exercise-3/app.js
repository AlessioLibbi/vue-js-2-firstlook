const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    watch: {
        counter(value) {
            console.log('check');
            if (value > 37) {
                setTimeout(() =>  {
                    this.counter = 0
                }, 5000)
            }
        }
    },
    computed: {
        messageForCount() {
            
            return this.counter > 37 ? "Too much!" : "Not there yet";
        }
    },
    methods: {
        increment(num) {
            this.counter = this.counter + num
        },

    }
})

app.mount('#assignment')