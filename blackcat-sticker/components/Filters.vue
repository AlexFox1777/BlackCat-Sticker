<template>
<div class="filters">
  <Loader></Loader>
</div>
</template>

<script>
import Loader from './Loader'
export default {
    components: {
        Loader,
    }
}
</script>

<style scoped>
.filters{
    width: 45%;
    background: white;
    border: 1px solid orange;
    border-radius: 4px;
}
</style>