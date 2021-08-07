<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your  First CLI Vue.js App"/>
</template>
-->

<template>
  <Header title="Portafolio on Vue" />

  <div id="container" class="container">
    
    <Container />
  
  </div>

  <Footer />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Container
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
   margin:0;
   padding:0;
  font-family: 'Roboto', sans-serif;
 }
</style>
<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
