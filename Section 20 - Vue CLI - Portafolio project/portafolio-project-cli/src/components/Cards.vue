<template>
    <div id="cards">
        <div class="card">
            <h4>Name: {{name}}</h4>
            <p>description: {{fullName}}</p>
            <p><strong>url:</strong> {{url}}</p>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Cards',
    props:{
        name: String,
        fullName: String,
        url: String
    }
}


</script>





<style scope>


.card{
    width: 250px;
    margin: 7px;
    border: solid 1px #eee;
    box-shadow: 1px 1px 4px #333;
    text-align: center;    
}
</style>