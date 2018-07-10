<template>
  <div id="app">
    <h1>Header</h1>
    <router-view/>
    <h1>Footer</h1>
  </div>
  <div id="example-3">
  <button v-on:click="showAlert">Hello world</button>
  </div>

</template>

<script>
new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
</script>

<style lang="scss">
</style>
