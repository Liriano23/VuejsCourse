<template>
    <h2>Projects</h2>
    <hr />
    <div id="cards" v-for="project in projects" :key="project.id">
        <Cards :name="project.name" :fullName="project.full_name" :url="project.html_url"/>
    </div>
</template>


<script>
import Cards from './Cards.vue'
 export default {

  name: 'Container',
  components:{
      Cards
  },
  data(){
      return{
          projects: []
      }
  },
  mounted(){
      this.getProjectsAsync();
  },
  methods:{
      async getProjectsAsync(){
        //   const response =  await fetch('Your Github Link go here');
        //   const content = await response.json();
        // //   console.log(content);
        //   this.projects = content;
        //   console.log(this.projects);
      } 
  }
}
</script>




<style scope>

#cards{
    display:flex;
    flex-wrap: wrap;
    
}
.container{
    overflow:hidden;
    margin: 1rem;
    padding: 7px;
    border: solid 1px #eee;
    box-shadow: 1px 1px 4px #333;
    text-align: center;
}


</style>