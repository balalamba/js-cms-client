<template>
  <div class="home">
    <h1>{{ page }}</h1>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      page: 'Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>