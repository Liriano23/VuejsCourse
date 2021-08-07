const App = Vue.createApp({
    data(){
        return{
            title: 'Http axios petitions using Vue',
            datos: []
        }
    },
    created(){
        this.Get();
    },
    methods:{
        async Get(){
           const response = await axios.get('https://jsonplaceholder.typicode.com/users')
           console.log(response);
           this.datos = response.data
        }
    }
})


const mountApp = App.mount('#app');