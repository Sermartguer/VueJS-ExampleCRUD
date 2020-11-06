<template>
  <div class="hello">
    <div>
        <span>{{movie}}</span>
        <button @click="deleteMovie(movie)">X</button>
    </div>
  </div>
</template>

<script>

import {DELETE_MOVIE} from '../store/actions'
export default {
    props:{
        movie:String
    },
    methods: {
        deleteMovie(id) {
            this.$store.dispatch(DELETE_MOVIE,id);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
