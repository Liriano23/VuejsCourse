// const App = Vue.createApp({
//     data(){
//         return{
//             titulo: "Forms"
//         }
//     }
// });

const App = Vue.createApp({
    data: () => ({
        titulo: "Formulario",
        datos:{
            name: "",
            aux: false,
            genre: ""
        }
    }), 
    methods: {
        handleSubmit(){
            console.log(this.datos.name);
            console.log(this.datos.aux);
            console.log(this.datos.genre);

        }
    }
});
const mountApp = App.mount('#app');