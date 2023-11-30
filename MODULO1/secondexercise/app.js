Vue.createApp({
    data() {
        return {
          

        };
    },
    methods: {
    }
}).mount('#app')


const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue",
            courseGoalB: "Im a Master Of Vue",
            linkValue: "https://vuejs.org/"
        }
    },
    methods: {
        randomGoal() {
            let random = Math.random();
            if(random < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    },
    mounted: {

    },
});
app.mount('#user-goal');