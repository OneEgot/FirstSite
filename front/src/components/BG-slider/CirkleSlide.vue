<script>
export default{
    props:{
        index:Number,
        elementId: Number
    }
}
</script>

<template>
    <div class="item_circle">
		<div class="cirkle__assets" v-if="index === elementId"></div>
		<div class="cirkle" v-else ></div>
	</div>
</template>

<style scoped>
.cirkle{
	width:0.27em;
	height: 0.27em;
	background-color: #F3F4FF;
	border-radius: 50%;
	opacity: 0.3;
}
.cirkle__assets{
	width: 0.27em;
	height:0.27em;
	background-color: #F3F4FF;
	border-radius: 50%;
}
</style>
