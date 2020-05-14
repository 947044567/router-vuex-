const login = {
  state: {
    newTest: 0
  },
  mutations: {
    SET_NEWTEST: (state, newTest) => {
      state.newTest = newTest
    }
  }
}
export default login
