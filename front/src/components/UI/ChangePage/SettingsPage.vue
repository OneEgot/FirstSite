<script>
import HeaderMenuVue from '../HomePage/UIhomePage/HeaderMenu.vue';
import MenuSettingVue from './UISettings/MenuSetting.vue';
export default{
    components:{
        HeaderMenuVue,
        MenuSettingVue
    }
}
</script>
<template>
    <div class="content">
        <HeaderMenuVue/>
        <hr>
        <div class="change__params">
            <div class="change">
                <MenuSettingVue/>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content{
        width: 100%;
        height: 100vh;
        background-color: white;
        font-size: 36px;
    }
    hr{
        height: 0px;
        border: 0.024em solid #EDEEF2;
        margin: 0;
    }
    .change__params{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 0.96em;
    }
    .change{
        width: 44em;
        display: flex;
        justify-content: space-between;
    }
	@media screen and (max-width:2023px){
		.content{
			font-size:34px
		}
	}
	@media screen and (max-width:1890px){
		.content{
			font-size:33px;
		}
	}
	@media screen and (max-width:1733px){
		.content{
			font-size: 31px;
		}
	}
	@media screen and (max-wdith:1677px){
		.content{
			font-size: 29px; 
		}
	}
	@media screen and (max-width: 1522px){
		.content{
			font-size: 27px;
		}
	}
	@media screen and (max-width:1412px){
		.content{
			font-size: 25px;
		}
	}
	@media screen and (max-width: 1277px){
		.content{
			font-size: 23px;
		}
	}
	@media screen and (max-width:1160px){
		.content{
			font-size: 22px;
		}
	}
	@media scren and (max-width: 1102px){
		.content{
			font-size: 21px;
		}
	}
	@media screen and (max-width: 993px){
		.content{
			font-size: 20px;
		}
	}
	@media screen and (max-width:924px){
		.content{
			font-size: 19px;
		}
	}
	@media screen and (max-width:893px){
		.change{
			font-size: 19px;
			flex-direction:column;
			align-items:center;
			width:31em;
		}
	}
	@media screen and (max-width:656px){
		.change{
			font-size:25px;
			width:20em;
		}
	}
	@media screen and (max-width:563px){
		.change{
			font-size: 24px;
			width: 15em;
		}
	}
	@media screen and (max-width:402px){
		.change{
			font-size:21.75px;
			width:14.5em;
		}
	}
	@media screen and (max-width: 325px){
		.change{
			font-size: 17px;
			width: 13.5em;
		}
	}
</style>
