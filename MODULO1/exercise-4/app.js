const app = Vue.createApp({
    data() {
        return {
            inputValue : "",
            secondValue: true,
            backgroundColorAss : ""
        }
    },
    computed: {
        inputvalue() {
            return {
                user1: this.inputValue === 'user1',
                user2: this.inputValue === 'user2',
                visible: this.secondValue,
                hidden: !this.secondValue,
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