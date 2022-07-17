<script>
export default{
    props:{
        item:{
            placeholder: String,
            label:String
        }
    }
}
</script>

<template>
    <div class="input_block">
        <div class="label">
            {{item.label}}
        </div>
        <input :placeholder="item.placeholder">
    </div>
</template>

<style scoped>
.input_block{
    width: 13.64em;
    height: 3.28em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.label{
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 0.5em;
    line-height: 0.64em;
    color: #545563;
}
input{
    all: unset;
    font-style: normal;
    font-weight: 400;
    font-size: 0.56em;
    line-height: 0.8em;
    display: flex;
    align-items: center;
    letter-spacing: 0.004em;
    color: #2B2B43;
    width: 100%;
    height: 2.6em;
    border: 0.06em solid #C7C8D2;
    border-radius: 0.5em;
    box-sizing: border-box;
    margin-top: 0.4em;
    text-indent: 0.48em;
}
input:focus{
    transition: 0.5s ease;
    border: 0.06em solid #4E60FF;
}
@media screen and (max-width:656px){
	.input_block{
		width:100%;
	}
}
















</style>
