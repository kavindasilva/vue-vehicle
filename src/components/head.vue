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
            this.$emit('changeTitled', randd.toString())
        }
    },
    beforeCreate(){
        alert('beforeCreate')
    },
    created(){
        alert('created')
    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){
        alert('updated');
    },
    beforeDestroy(){
        alert('beforeDestroy')
    }
}
</script>