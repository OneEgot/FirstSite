<template>
  <input  
    :value="modalValue"
    class="inpt"
    @input="Input" 
    > 
</template>

<script>
export default {
    props:{
        modalValue: String
    },
    methods:{
        Input(event){
            this.$emit("update:modalValue", event.target.value)
        },
    },
    data(){
        return{
            changeStyle: false
        }
    },
}
</script>

<style scoped>
.inpt{
    all: unset;
    border: 0.04rem solid #C7C8D2;
    box-sizing: border-box;
    border-radius: 0.32rem;
    margin-top: 0.4rem;
    padding: 0.68rem 0.68rem 0.68rem 0.68rem;
    width: 100%;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 0.8rem;
    color: black;

}
.inpt:focus{
    transition: 0.5s ease;
    border: 0.04rem solid rgb(78, 96, 255);
}
</style>