import { mapGetters, mapActions } from 'vuex'
export const loginMinx = {
  computed: {
    ...mapGetters(['newTest'])
  },
  methods: {
    ...mapActions(['setNewTest'])
  }
}
