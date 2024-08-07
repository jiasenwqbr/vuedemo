import Vue from "vue";
import Vuex from "vuex";
import API from "@/api";

/*

在Vue2/Vuex中，这行操作一定得有！
首先会调用Vuex.install方法，在install方法中
    + 基于Vue.mixin({beforeCreate:vuexInit}),向每个组件都混入一个beforeCreate 钩子函数，每个组件渲染的时候，首先会执行这个钩子。
    + vuexInit 函数执行的目的：给每个组件挂载一个$store的属性
    new Vue({
        store:...,
        render:h=> h(App)
    }).$mount('#app')
    + 当其它组件再次渲染的时候，不需要手动设置store配置项，直接会去其父组件的实例上找，并且给自己的实例，也挂载一个$store的属性。

    这行代码的最终目的是：只要保证根组件的配置项中，设置了store这个配置项，那么每个组件的实例上都会挂载一个$store这个属性。

*/

Vue.use(Vuex);

const store = new Vuex.Store({
  // 公共状态信息
  // 存储的公共状态是经过get set劫持的
  state: {
    supNum: 10,
    oppNum: 20,
  },
  // 公共计算属性
  // 也做了数据劫持，但只有get劫持，和组件computed类似，其具备了计算缓存的效果
  // 但不允许直接修改getter中计算缓存的值，如果修改会报错。
  getters: {
    ratio(state) {
      // state：存储的就是公共状态
      let { supNum, oppNum } = state,
        total = supNum + oppNum;
      return total === 0 ? "--" : (supNum / total) * 100 + "%";
    },
  },
  // 同步修改状态的方法
  // state 现有的公共状态信息
  // payload：通知方法执行传递来的实参值，我们一般都把其设置为对象格式，
  // 因为基于commit通知其执行的时候，只支持传递一个实参，如果想传多个值，则传递一个对象即可。

  mutations: {
    change(state, { type, step = 1 }) {
      if (type == "sup") {
        state.supNum += step;
        return;
      }
      state.oppNum += step;
    },
  },
  /* 异步修改公共状态的方法【在异步操作结束后，我们需要基于commit通知mutations中的方法执行】
    context:就是创建的store实例对象的精简版
    -> context:{state,getter,commit,disptach,rootState,rootGetters}
    和mutations中的payload类似，每一次disptach派发，也支持传递下一个参数，所以我们一般把其设置为对象格式【你可以把这个对象理解为action】
  */
  actions: {
    async changeAsync({ commit }, { type, step = 1 }) {
      try {
        await API.query(2000);
        // eslint-disable-next-line no-empty
      } catch (_) {}
      commit("change", { type, step });
    },
  },
  /**
   * 模块化管理
   */
  modules: {},
  /**
   * 使用插件
   */
  plugins: [],
});
console.log(store);
store.dispatch("changeAsync", { type: "opt" });

export default store;
