<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <h2>Ecosystem</h2>

    <input type="text" id="txt1" v-model.lazy="txt2" />
    <input type="text" id="txt2" v-model.lazy="txt2" />
    <button v-on:click="age++" >Btn1</button>

    <div>
      Text = {{ input_txt1 }} <br/>
      Text2 = {{ name }} <br/>
      Text3 = {{ msg }} <br/>
      Text3 = {{ age }} <br/>
      2waybind = {{ txt2 }} <br/>
    </div>
    <!-- <div id="canvas" style="height:200px; width:200px; border: 1px solid red;" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld-ww',
  // updateXY(event){ //Function to update the X and Y cordinated of the mouse position
  //     x = event.offsetX;
  //     y = event.offsetY;
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appx',
      name: "kk",
      input_txt1: "",
      txt2: 'Welcome2',
      age: 4,
      x: 99,
      y: 99
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
