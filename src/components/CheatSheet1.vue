<template>
  <div class="hello">
    <h2>Cheat Sheet 1</h2>
    <h4 id="count_head" v-bind:class="decideCounterClass">Counter now: {{ count }}</h4>
    <h6 id="count_head">Counter sqr: {{ comCountSquare }}</h6>
    <span>Count threshold: <input type="number" v-model.number="countThreshold" v-bind:style="decideThresholdBgColor" /></span> <br/>

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
    <hr/>

    <h2>Normal for loop</h2>
    <ul>
      <li v-for="fr in fruits" v-bind:key="fr.id">{{fr.label}}</li> <!--with key-->
    </ul>
    <br/>

    <ol>
      <li v-for="(fr, i) in fruits" v-bind:key="i">{{fr.label}}</li> <!--with index-->
    </ol>

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
      fruits: [
        { id: 1, name: 'apple', label: 'Apple' },
        { id: 2, name: 'banana', label: 'Banana' },
        { id: 3, name: 'b-grape', label: 'Black grapes' },
        { id: 4, name: 'g-grape', label: 'Green grapes' },
        { id: 5, name: 'orange', label: 'Orange' },
        { id: 6, name: 'mango', label: 'Mango' }
      ]
    }
  },
  methods: {
    logClick: function (e) {
      console.log('logClick', e)
    }
  },
  computed: {
    comCountSquare () {
      return this.count * this.count
    },
    decideCounterClass () {
      return {
        'cls-3': this.count > 0,
        'cls-5': this.count > 3,
        'cls-8': this.count > 5
      }
    },
    decideThresholdBgColor () {
      switch (Math.abs(this.countThreshold) % 4) {
        case 0:
          return 'background-color: pink'
        case 1:
          return 'background-color: orange'
        case 2:
          return 'background-color: yellow'
        case 3:
          return 'background-color: lime'
        default:
          return 'background-color: grey'
      }
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
.cls-3 {
  color: green;
  font-weight: bold;
}
.cls-5 {
  color: orange;
  font-style: italic;
}
.cls-8 {
  color: blue;
  font-size: 1.8em;
}

</style>
