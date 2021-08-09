<template>
  <div class="home">
   <cards />
   <Footer></Footer>

  </div>
</template>
<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cards from '@/components/Cards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Cards,
    Footer
  }
}
</script>
