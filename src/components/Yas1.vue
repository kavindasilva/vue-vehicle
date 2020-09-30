<template>
    <div v-theme:column="getWdieNarrow">
        <button @click="isWide = !isWide">Wide/Narrow</button>
        <h1>Posts</h1>
        <div v-for="(post, i) in posts" v-bind:key="i">
            <h2 v-color>{{ post.title | to-uppercase }}</h2>
            <article>{{ post.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
    data(){
        return{
            posts: [],
            isWide: true
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.posts = data.body.slice(0,5);
        })
    },
    computed: {
        getWdieNarrow () {
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
