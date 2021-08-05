const App = Vue.createApp({
    data(){
        return{
            user:{
                name: "Enmanuel",
                animes:["Black Clover", "My Hero Academia", "Naruto Shippuden",
            "Jujutsu Kaisen"]
            }
        }
    }
})

//Componente para mostrar los datos que tiene el arreglo anime
App.component('todo-item',{
    props: ['todo'],
    template: `<li> {{ todo }} </li>`
});

App.component('blog-post',{
    props:['title'],
    template: `<h1> {{title}} </h1>`
});

const mountApp = App.mount("#app");