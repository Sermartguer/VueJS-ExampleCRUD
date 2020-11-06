<template>
  <div class="home">
    
    <CreateMovies />
    <ListMovies />
    
  </div>
</template>

<script>
import ListMovies from "@/components/ListMovies.vue";
import CreateMovies from "@/components/CreateMovies.vue";
export default {
  components:{
    ListMovies,
    CreateMovies
  }
};
</script>
