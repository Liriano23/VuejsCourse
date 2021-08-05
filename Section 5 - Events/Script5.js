const App = Vue.createApp({
    data(){
        return{
                title: 'Counter app',
                count: 0
        }
    },

    methods:{
        aumentar(){
            this.count += 1;
        },
        disminuir(){
            this.count-=1;
        }
    },

});

const mountApp = App.mount('#app');