// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');


// function goal() {
//     const valueInput = input.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = valueInput;
//     list.appendChild(listItem)
//     input.value = "";
// }
// btn.addEventListener('click', goal )
Vue.createApp({
    data() {
        return {
            goals:[],
            valueInput: "",

        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.valueInput);
            this.valueInput = ""
        }
    }
}).mount('#app')
