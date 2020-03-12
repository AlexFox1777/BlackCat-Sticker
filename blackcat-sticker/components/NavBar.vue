<template>
<div class="navbar">
  <header >
      <nuxt-link exact to="/" class="link">Home</nuxt-link>
      <nuxt-link to="about" class="link">About</nuxt-link>
  </header>
</div>
</template>

<script>
export default {
    
}   
</script>

<style scoped>
.navbar::before{
    content: "";
    background: #181743;
    color: white;
    height: 250px;
    min-width: 200px;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    z-index: -1;
}

.navbar header{
    text-align: right;
    padding: 1%;
}

.active-link{
    color: orange !important;
}

.link{
    color: white;
    text-decoration: none;
    padding: 1%;
    margin-top: 100px;
}
</style>