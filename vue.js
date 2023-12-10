const TodoLists= {
    data(){
        return{
            todoList: [],
            title: "Notebene civis Romani saeculo V",
            author: "Evgeny",
        };
    },

    methods: {
        funDownloadData(){
            fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => this.todoList = json )
        }
    },
};

Vue.createApp(TodoLists).mount('#app')
