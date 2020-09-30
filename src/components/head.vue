<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data(){
        return{
            
        }
    },
    methods: {
        changeTitle: function(){
            let randd = Math.random()
            this.$emit('changeTitle', randd.toString());
        }
    }
}
</script>