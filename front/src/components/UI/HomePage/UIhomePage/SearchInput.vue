<script>
export default{
    data(){
        return{
            find: ""
        }
    },
    watch:{
        find(value){
            this.$store.state.valueSearch = value
        }
    },
}
</script>

<template>
    <div class="search" @click="$router.push('/home')">
        <input type="text" v-model="find" placeholder="Search">
        <img src="../../../../assets/search.svg" @click="search">
    </div> 
</template>

<style scoped>
    .search{
        width: 9.76em;
        height: 1.6em;
        background-color: #EDEEF2;
        border-radius: 0.48em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:1.92em;
    }
    input{
        all: unset;
        font-style: normal;
        font-weight: 400;
        font-size: 0.56em;
        line-height: 0.7em;
        color: #83859C;
        height: 1.1em;
        border: none;
        background: #EDEEF2;
        margin: 0.4em 0px 0.4em 0.9em;
        color: black;
    }
    img{
        width: 0.64em;
        height: 0.64em;
        margin-right: 0.48em;
        cursor: pointer;
    }
    @media screen and (max-width: 893px){
        .search{
            margin-left: 1em;
        }
    }
    @media screen and (max-width: 656px){
        .search{
            display: none;
        }    
    }
</style>