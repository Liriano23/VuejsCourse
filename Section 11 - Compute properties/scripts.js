const App = Vue.createApp({
    data(){
        return{
            title: "Calculadora Vue",
            n1: 0,
            n2: 0,
        }
    }, 
    computed:{
        suma(){
            return this.n1 + this.n2;
        },

        resta(){
            return this.n1 - this.n2;
        },

        multiplicacion(){
            return this.n1 * this.n2;
        },

        division(){
            return this.n1 / this.n2;
        }
    }
});

const mountApp = App.mount('#app')