/* eslint-disable no-unused-vars */

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: {},
    userDetails: {}
  },
  mutations: {
    users(state, value) {
      state.users = value;
    },
    userDetails(state, value) {
      state.userDetails = value;
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    userDetails(state) {
      return state.userDetails;
    },
  },
  actions: {
    async users({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/users",
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
        commit("users", response.data);
      } catch (error) {
        return error;
      }
    },
    async addUser({ commit }, data) {
      try {
        await axios.post("http://localhost:3000/users", data,  {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        return error;
      }
    },
    async editUser({ commit }, data) {
      try {
        await axios.put(`http://localhost:3000/users/${data.id}`, data,  {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        return error;
      }
    },
    async userDetails({ commit }, data) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${data.id}`,  {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(response)
        commit("userDetails", response.data);
      } catch (error) {
        return error;
      }
    }
  },

});
