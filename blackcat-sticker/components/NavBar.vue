<template>
<div class="navbar">
  <header >
    <LogoCat class="logo"/>
    <nuxt-link exact to="/" class="link">Home</nuxt-link>
    <nuxt-link to="about" class="link">About</nuxt-link>
  </header>
</div>
</template>

<script>
import LogoCat from './stickers/LogoCat'
export default {
    components: {
        LogoCat,
    }
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
    position: relative;
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

.logo{
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}
</style>