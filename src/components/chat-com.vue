<template>
  <div class="chatcom">
    chatcom
  </div>
</template>

<script>
import { loginMinx } from '../utils/mixin'
export default {
  mixins: [loginMinx],
  mounted () {
    console.log(this.newTest)
  }
}
</script>

<style>

</style>
