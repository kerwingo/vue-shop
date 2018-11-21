import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import dialog_store from '../modules/show.js';//引入某个store对象

export default new vuex.Store({
  state:{
    me: "woshiwo"
  },
  modules: {
    dialog: dialog_store
  }
})
