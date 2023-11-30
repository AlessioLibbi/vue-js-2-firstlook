const app = Vue.createApp({
    data() {
        return {
            inputValue : "",
            inputValue2 : ""
        }
    },
    methods: {
        btnPress() {
           alert('Premutoooooo')
        },
        setValue(event) {
            this.inputValue = event.target.value
        },
        setValue2(event) {
            this.inputValue2 = event.target.value
        }
    }
})

app.mount('#assignment')