<template>
  <div id="app">
    <list></list>
    <a href="https://readhub.me" class="source">Readhub</a>
  </div>
</template>

<script>
import List from './components/List'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style lang="scss" scoped>
  #app {
    position: relative;
    padding: 30px;
  }

  .source {
    position: fixed;
    right: 30px;
    bottom: 30px;
    color: #BFBFBF;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      -webkit-text-decoration-skip: ink;
      text-decoration-skip: ink;
      text-underline-position: under;
    }
  }
</style>
