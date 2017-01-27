<template>
  <div id="app">
    <releases></releases>
  </div>
</template>

<script>
import Releases from './components/Releases'
import store from './store/index'

export default {
  name: 'app',
  store,
  components: {
    Releases
  }
}
</script>

<style lang="less">

</style>
