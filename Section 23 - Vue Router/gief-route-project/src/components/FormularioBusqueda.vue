<template>
    <form @submit.prevent>
        <div class="mb-3">
            <label class="form-label">Search</label>
            <input type="text" class="form-control" 
                v-model="search">
        </div>
        <button type="button" @click="SearchGifs" class="btn btn-primary">Buscar</button>
        
    </form>
</template>

<script>
export default {
    name: 'FormularioBusqueda',
    data: () => ({
        search: "",
    }),
    methods:{
        SearchGifs(){
            this.$emit('SearchAction',this.search);
        }
    }
}
</script>