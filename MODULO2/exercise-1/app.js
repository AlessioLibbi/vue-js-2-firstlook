const app = Vue.createApp({
    data() {
        return {
            todoData: [],
            todoValue: "",
            hide: false,
            
        }
    },
    computed: {
        textHide() {
            if(this.hide){
                return "Show"
            }else {
                return "Hide"
            }
        }
    },
    methods: {
        addTask() {
            this.todoData.push(this.todoValue)
            this.todoValue = ""
        },
        removeTodo(index){
            this.todoData.splice(index,1)
        },
        hideList() {
            this.hide = !this.hide
           
        }
    }

})
app.mount('#assignment')