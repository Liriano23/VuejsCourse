<template>
    <div >
        <h1>{{ title }}</h1>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String
  }
}

</script>

<style scope>
h1{
    background-color: #333;
    padding: 1rem;
    text-align: center;
    color: snow;
}
</style>