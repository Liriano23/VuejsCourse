const app = Vue.createApp({
    data(){
        return{
            user:{
                name: "Enmanuel",
                age: 18,
                animes: ["Black Clover", "My Hero Academia", "Naruto Shippuden"],
                url: "https://www.google.com/?hl=es",
                image: "https://areajugones.sport.es/wp-content/uploads/2020/03/asta-black-clover.jpg"
            }
        }
    }
})

const mounApp = app.mount('#app');