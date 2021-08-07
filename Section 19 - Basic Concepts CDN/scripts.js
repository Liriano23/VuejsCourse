const App = Vue.createApp({
    data(){
        return{
            title: "Components",
            countries: ['USA','RD','CANADA','New Zealand']

        }
    },
});

App.component('todo-item',{
    template: `<h1>Components basics </h1>`
})

App.component('countries-list', {
    props: ['title'],
    template: `<li>{{ title }}</li>`
  })
  
const mountApp = App.mount('#app');