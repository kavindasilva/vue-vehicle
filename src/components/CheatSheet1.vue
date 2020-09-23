<template>
  <div class="hello">
    <h2>Cheat Sheet 1</h2>
    <h4 id="count_head">Counter now: {{ count }}</h4>
    <h6 id="count_head">Counter sqr: {{ comCountSquare }}</h6>
    <span>Count threshold: <input type="text" v-model.number="countThreshold"/></span> <br/>

    <button id="inc_count" v-on:click="count++">Increase</button>
    <button id="reset_count" v-on:click="count=0">0</button>
    <button id="dec_count" v-on:click="count--">Decrease</button> <hr/>

    <a v-on:click.prevent="logClick" href="http://www.google.lk">Google - prevent click event</a> <br/>
    <a v-on:click="logClick" href="http://www.google.com">Google - allow click event</a> <hr/>

    <p v-html="webTag"></p>
    <span v-html="webTag"></span> <hr/>

    Update lazy - -: <input type="text" v-model.lazy="inputText1"/>
    Update realtime: <input type="text" v-model="inputText1"/> <br/>
    One way bind: <input type="text" v-bind:value="inputText1"/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      inputText1: 'x',
      countThreshold: 0,
      webTag: '<a href="http://www.google.com/">Web tag text</a>',
    }
  },
  methods: {
    logClick: function (e) {
      console.log("logClick", e)
    }
  },
  computed: {
    comCountSquare(){
      return this.count * this.count
    }
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