<script>
export default{
    props:{
        item:{
            name:String,
            appearence:String,
            srcSvg:String,
            srcSvgWHT: String,
            id:Number,
            value:Boolean
        }
    },
    methods:{
        changeValue(){
            this.$store.commit("changeCategoriValue", this.item);
            this.$store.commit("goToRoute", this.item);
            this.$router.push(this.$store.state.routeTo)
        }
    }
}
</script>

<template>
    <div class="block__settings" :class="{block__settings_assets: item.value}" @click="changeValue">
        <div class="center__content">
            <div class="icon__menu" :class="{icon__menu_assets:item.value}">
                <img :src="require(`../imgSettingsPage/${item.srcSvg}.svg`)" v-if="!item.value">
                <img :src="require(`../imgSettingsPage/${item.srcSvgWHT}.svg`)" v-else>
            </div>
            <div class="text">
                <div class="name">{{item.name}}</div>
                <div class="appearence">{{item.appearence}}</div>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.block__settings{
    width: 14em;
    height: 2.88em;
    background: #FFFFFF;
    border: 0.04em solid #EDEEF2;
    border-radius: 0.64em;
    box-sizing: border-box;
    cursor: pointer;
}
.block__settings_assets{
    border: 0.08em solid #4E60FF;
    background: #F3F4FF;
    transition: 0.5s ease;
}
.center__content{
    display: flex;
    padding: 0.64em 0.64em 0.64em 0.64em;
}
.icon__menu{
    width: 1.6em;
    height: 1.6em;
    background: #EDEEF2;
    border-radius: 0.48em;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon__menu_assets{
    background: #4E60FF;
}
img{
    width: 0.8em;
    height: 0.8em;
}
.text{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 0.48em;
}
.name{
    font-style: normal;
    font-weight: 700;
    font-size: 0.56em;
    line-height: 0.8em;
    letter-spacing: 0.004em;
    color: #2B2B43;
}
.appearence{
    font-style: normal;
    font-weight: 400;
    font-size: 0.52em;
    line-height: 0.72em;
    letter-spacing: 0.008em;
    color: #545563;
}
@media screen and (max-width:893px){
	.block__settings{
		width:100%;
	}
}
</style>
