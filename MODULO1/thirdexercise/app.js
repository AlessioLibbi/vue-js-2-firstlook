const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: "Alessio",
        confirmdName : "",
        lastName : "",
      };
    },
     watch: {
        counter(value) {
            if(value > 50) {
                this.counter = 0
            }
        }
    //     name(value) {
    //         this.fullname = value + " " + "Libbi"
    //     },
    //     lastName(value) {
    //         this.fullname = value + " " + this.lastName
    //     }
    },
    computed : {
        fullname() {
            return this.name ? this.name + " " + this.lastName : ""
        }
    },
    methods: {
        increment(num) {
            this.counter = this.counter + num
        },
        decrement(num) {
             this.counter = this.counter - num
        },
        setValue(event) {
            this.name = event.target.value;
        },
        fullname() {
     
            return this.name ? this.name + " " +"Libbi" : ""
        },
        submitFor(event) {
            alert('submit');
        },
        confirmName() {
            this.confirmdName = this.name
        },
        resetInput() {
            this.name = "";
            this.lastName = ""
        },

    },
   
  });
  
  app.mount('#events');
  