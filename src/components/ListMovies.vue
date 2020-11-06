<template>
  <div class="hello">
    <div v-for="(movie, index) in movies" :key="index">
      <MovieDetail :movie="movie.movie"/>
    </div>
  </div>
</template>

<script>
import {GET_MOVIES} from '../store/actions'
import { mapGetters } from "vuex";
import MovieDetail from '@/components/MovieDetail.vue';

export default {
  components:{
    MovieDetail
  },
    computed: {
    ...mapGetters(["movies"])
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch(GET_MOVIES);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
