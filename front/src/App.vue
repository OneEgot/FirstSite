<template>
  <div class="content-wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    components:{
     
    },
}
</script>

<style scoped>
.content-wrapper{
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
