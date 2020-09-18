<template>
  <div class="hello">
    <h2>Counter-Component</h2>
    <h4 id="count_head">Counter now: {{ count }}</h4>

    <button id="inc_count" v-on:click="count++">Increase</button>
    <button id="dec_count" v-on:click="count--">Decrease</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld-ww',
  data () {
    return {
      count: 0
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cssAvailable{
  background-color: green;
}
.cssNotAvailable{
  background-color: red;
}
</style>