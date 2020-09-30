<template>
    <div v-theme:column="getWideOrNarrow">
        <com-header v-bind:title="title" v-on:changeTitled="updateTitle($event)"></com-header>
        <button @click="isWide = !isWide">Wide/Narrow</button>
        <h1>Posts</h1>
        <div v-for="(post, i) in posts" v-bind:key="i">
            <!-- <h2 v-color>{{ post.title | to-uppercase }}</h2> --> <!--before vue 3.0-->
            <h2 v-color>{{ toUpperCaseC(post.title) }}</h2> <!--after vue 3.0-->
            <article>{{ post.body }}</article>
        </div>
    </div>
    <!-- @TODO: check https://bitbucket.org/Yasith17/spa/src/lesson-30/vue-app/src/components/ -->
</template>

<script>
import Head from "../components/head"
export default {
  name: 'App',
    data(){
        return{
            posts: [],
            isWide: true,
            title: 'hhhh'
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.posts = data.body.slice(0,5);
        })
    },
    methods: {
        toUpperCaseC (param) {
            return param.toUpperCase();
        },
        updateTitle: function(updateTitle){
            console.log("updateTitle", updateTitle);
            this.title = updateTitle;
        }
    },
    components: {
        'com-header': Head
    },
    computed: {
        getWideOrNarrow () {
            return this.isWide ? 'wide' : 'narrow';
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
