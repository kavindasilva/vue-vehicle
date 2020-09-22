<template>
  <div class="hello">
    <h2>Cheat Sheet 1</h2>
    <h4 id="count_head">Counter now: {{ count }}</h4>

    <button id="inc_count" v-on:click="count++">Increase</button> <hr/>
    
    <a v-on:click.prevent="logClick" href="http://www.google.lk">Google - prevent click event</a> <br/>
    <a v-on:click="logClick" href="http://www.google.com">Google - allow click event</a> <hr/>

    <p v-html="webTag"></p>
    <span v-html="webTag"></span>

  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      webTag: '<a href="http://www.google.com/">Web tag text</a>',
    }
  },
  methods: {
    logClick: function (e) {
      console.log("logClick", e)
    }
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

</style>