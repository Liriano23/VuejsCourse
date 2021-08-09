<template>
    <div class="container mt-3 border">
        <h1 class="text-center">Gifs</h1>
        <hr />

        <Loading v-if="this.load"/>
        <div v-if="load" class="d-flex justify-content-sm-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="row">
            <FormularioBusqueda @SearchAction="GET"/>
            <div class="col-12 col-lg-3" v-for="(item, index) in gifs" :key="index">
                <GifCards class="m-3 w-75" :data="item"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import GifCards from '@/components/GifCards.vue'
import FormularioBusqueda from '@/components/FormularioBusqueda.vue'
import Loading from '@/components/Loading.vue'
export default {
    name: 'Gief',
    components:{
        GifCards,
        FormularioBusqueda,
        Loading
    },
    data(){
        return{
            gifs: Object,
            load: false
        }
    },
    methods:{
        async GET(search = 'Asta'){
            // const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=nI3yXEZX90ABRp0YxcicaU5tNsj95CgI");
            // const data = await this.axios.get("https://api.giphy.com/v1/gifs/random?api_key=nI3yXEZX90ABRp0YxcicaU5tNsj95CgI");
            //this.gifs = data;
            
            const apiKey = 'nI3yXEZX90ABRp0YxcicaU5tNsj95CgI'
            this.load = true
           
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}`)
            const content = await response.json();
            this.gifs = content.data;
            search = "";
            console.log(content);
            this.load = false;
            
        }
    }
}
</script>