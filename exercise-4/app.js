const app = Vue.createApp({
    data() {
        return {
            inputValue : "",
            secondValue: true,
        }
    },
    computed: {
        inputValue() {
            if(this.inputValue == "user1"){
                return {active: user1, visible: this.secondValue, hidden: this.secondValue}
            } else if(this.inputValue == "user2") {
                return {active: user2}
            }
        }
    },
    methods: {
      giveHidden() {
        this.secondValue = !this.secondValue
      }
    }
})
app.mount('#assignment')