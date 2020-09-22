<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <counter></counter>
    <cheat-sheet-1></cheat-sheet-1>

    <h2>Essential Links</h2>

    <h2>Ecosystem</h2>

    <input type="text" id="txt1" v-model="txt2" ref="inputRef"/><br/> <!-- realtime update -->
    <input type="text" id="txt2" v-model.lazy="txt2" /><br/> <!-- change on enter/click outside-->

    <button v-on:click="age++">Btn1</button>
    <button v-on:click="addA()">Btn2</button>
    <button v-on:click="isValid = !isValid" v-bind:class="{cssAvailable: isValid, cssNotAvailable: !isValid}" >Btn3</button>
    <button v-on:click="readRef">Btn4</button>
    <button @dblclick="isValid = !isValid" v-bind:class="{cssAvailable: isValid, cssNotAvailable: !isValid}" >Btn3</button>

    <div>
      <table style="margin: 0 auto; align: center">
        <tr><td>Text </td><td> {{ input_txt1 }} </td></tr>
        <tr><td>Text2 </td><td> {{ name }} </td></tr>
        <tr><td>Text3 </td><td> {{ msg }} </td></tr>
        <tr><td>Text3 </td><td> {{ age }} </td></tr>
        <tr><td>2waybind </td><td> {{ txt2 }} </td></tr>
        <tr><td>computed </td><td> {{ addAs }} </td></tr>
        <tr><td>isValid </td><td> {{ isValid }} </td></tr>
        <tr v-if="isValid" style="background-color: yellow"><td>SHOW-isValid </td><td> {{ isValid }} </td></tr> <!--if else-->
        <tr v-else style="background-color: purple"><td>!SHOW-isValid </td><td> {{ isValid }} </td></tr> <!--if else-->
        <tr v-show="isValid" style="background-color: yellow"><td>SHOW-isValid </td><td> {{ isValid }} </td></tr>
      </table>
    </div>
    <div id="canvas" style="height:200px; width:200px; border: 1px solid red;" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
  </div>
</template>

<script>
import Counter from "../components/Counter";
import CheatS1 from "../components/CheatSheet1";

export default {
  name: 'HelloWorld-ww',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appx',
      name: 'kk',
      input_txt1: '',
      txt2: 'Welcome2',
      age: 4,
      x: 99,
      y: 99,
      isValid: false
    }
  },
  methods: {
    addA: function () {
      console.log('addA')
      return this.x + this.y
    },
    updateXY (event) { // Function to update the X and Y cordinated of the mouse position
      this.x = event.offsetX
      this.y = event.offsetY
    },
    readRef: function(){
      console.log(this.$refs.inputRef.value);
    }
  },
  computed: {
    addAs: function () {
      console.log('addAs-computed')
      return this.x + this.y
    }
  },
  components: {
       'counter': Counter,
       'cheat-sheet-1': CheatS1
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