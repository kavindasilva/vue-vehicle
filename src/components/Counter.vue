<template>
  <div class="hello">
    <p id="cnt-value">My count {{ count }}</p>
    <button id="cntplus" @click="count++">Increment</button>
    <button id="cntminus" @click="count--">Decrease</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    count: 0
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
