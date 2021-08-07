const App = Vue.createApp({
    data(){
        return{
            title: 'Http petitions using Vue'
        }
    },
    created(){
        this.Get();
    },
    methods:{
        async Get(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
        }
    }
})


const mountApp = App.mount('#app');