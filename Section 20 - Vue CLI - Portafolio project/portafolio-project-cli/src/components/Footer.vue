<template>
    <div id="footer">
        <footer>
        <h3>
            &copy; Enmanuel Gonzalez - {{ year }}
        </h3>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        computed:{
            year(){
                return new Date().getFullYear();
            }
        }
    
    }
</script>

<style scope>
h3{
    background-color: #333;
    padding: 1rem;
    text-align: center;
    color: snow;
    margin-bottom: 0;
}
</style>