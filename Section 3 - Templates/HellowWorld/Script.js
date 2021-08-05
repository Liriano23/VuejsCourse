// const app = Vue

// console.log(app)


// const app = Vue.createApp({
//     data(){
//         return {
//             counter: 0
//         }
//     }
// })

// const App = {
//     data(){
//         return{
//             title: "Mi titulo desde Vue, hola mundo",
//             name: "Enmanuel",
//             age: 22
//         }
//     }
// }
// Vue.createApp(App).mount('#App')

const App = Vue.createApp({
    // data(){
    //     return{
    //         title: "Hellow world",
    //         name: "Enmanuel",
    //         age: 22
    //     }
    // }

    data(){
        return{
            user: {
                Id: 1,
                name: "Enmanuel",
                age: 22,
                animes:["Black Clover", "My hero academia", "Naruto shippuden"]
            }
        }
    }
})
const mountApp = App.mount("#App")

const EventHandling = {
    data(){
        return{
            Message: "Enmanuel"
        }
    },
    Methods:{
        reverseMessage(){
            this.Message = this.Message.split('')
            .reverse()
            .join('')
        }
    }
}

Vue.createApp(EventHandling).mount('#event-handling')

