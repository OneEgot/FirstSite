<script>
export default{

}
</script>

<template>
	<div class="error" @click="$router.push('/home')">
		404 ERROR PAGE
	</div>
</template>

<style scoped>
.error{	
	width: 100%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content: center;
	font-size: 2em;
	color:red;
}
</style>
