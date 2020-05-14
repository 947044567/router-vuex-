<template>
  <div class="userlistcom">
    userlistcom
  </div>
</template>

<script>
import { loginMinx } from '@/utils/mixin'
export default {
  mixins: [loginMinx],
  created () {
    this.init()
  },
  methods: {
    init () {
      this.setNewTest(8)
    }
  }
}
</script>

<style>

</style>
