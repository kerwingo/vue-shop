<template>
  <div id="app">
    <p>{{ $store.state.me }}</p>
    <p>{{number}}</p>
  </div>
</template>

<script>
export default {
  props:['number'],
  name: 'Me'
}

</script>

<style>

</style>
