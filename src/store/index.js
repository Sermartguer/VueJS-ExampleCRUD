import Vue from "vue";
import Vuex from "vuex";
import {ADD_MOVIE,ADD_ONE_MOVIE,GET_MOVIES,FETCH_MOVIES,REMOVE_MOVIE,DELETE_MOVIE} from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  actions: {
    [ADD_MOVIE](context, movie) {
      context.commit(ADD_ONE_MOVIE,movie)
    },
    [GET_MOVIES]({commit}){
      commit(FETCH_MOVIES);
    },
    [DELETE_MOVIE](context,movieId){
      context.commit(REMOVE_MOVIE,movieId)
    }
  },
  mutations:{
    [ADD_ONE_MOVIE](state,movie){
      state.movies.push(movie)
    },
    [FETCH_MOVIES](state){
      state.movies
    },
    [REMOVE_MOVIE](state,movie){
      state.movies=state.movies.filter(m=>m.movie != movie)
    }
  },
  modules: {},
  getters:{
    movies(state){
      return state.movies
    }
  }
});
