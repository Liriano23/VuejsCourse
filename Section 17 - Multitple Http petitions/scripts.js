const App = Vue.createApp({
    data(){
        return{
            title: 'Multiple Http petitions',
            data: [],
            id: 1
        }
    },
    created(){
        this.Get();
    },
    methods:{
        async Get(){
           const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`); 
           console.log(response.data);
           this.data = response.data
        }
    }
})


const mountApp = App.mount('#app');