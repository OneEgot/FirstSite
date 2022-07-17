<script>
export default{

}
</script>

<template>
<div class="error__block">
    <div class="name__error">
        This name component
    </div>
    <div class="error">Not found this components</div>
</div>
</template>

<style scoped>
.error{
    width: 29.2em;
    height: 27.52em;
    background: #FFFFFF;
    border: 0.04em solid #EDEEF2;
    border-radius: 0.64em;
    box-sizing: border-box;
    margin-top: 0.64em;
    display: flex;
    align-items: center;
    justify-content: center;
}
.name__error{
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 1.12em;
    letter-spacing: 0.004em;
    color: #2B2B43;
}
@media screen and (max-width:893px){
	.error__block{
		width:100%;
		margin-top:0.96em;
	}
	.error{
		width:100%;
	}
}
</style>
