<template>
  <div class="hello">
      <input type="text" v-model="movieName" />
      <button @click="addMovie">Añadir</button>
  </div>
</template>

<script>
import {ADD_MOVIE} from '../store/actions'
export default {
  
   data() {
    return {
      movieName:''
    };
  },
  methods:{
    addMovie(){
      this.$store.dispatch(ADD_MOVIE,{ movie:this.movieName })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
