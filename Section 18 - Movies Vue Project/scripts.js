const App = Vue.createApp({
    data(){
        return{
            title: 'Movie Project',
            movieData:{},
            movieTitle: ""
        }
    },
    methods:{
        // async Get(){
        //    const response = await axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=8d4eb512'); 
        //    console.log(response.data);
        //    this.data = response.data
        // }

        async GetFecth(){
            const search = "Spider man 2".replace(/ /g, "+")
            console.log(search)
            // const response = await fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=8d4eb512&t=John+Wick');
            // const content = await response.json();
            // console.log(content);
            // this.movieData = content
        },

        async search(){
            const title = this.movieTitle.toLowerCase().replace(/ /g,"+");
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8d4eb512&t=${title}`);
            const content = await response.json();
            this.movieData = content;
            console.log(title);
            console.log(content);
        }
        
    }
})


const mountApp = App.mount('#app');