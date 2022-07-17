<script>
import MenuItemVue from './MenuItem.vue';
import {mapGetters} from 'vuex';
export default{
    components:{
        MenuItemVue
    },
    computed: mapGetters(['getCategoriSettings'])
}
</script>

<template>
    <div class="settings_content">
        <div class="name__settings">
            Settings 
        </div>
        <div class="block_items_settings">
            <MenuItemVue v-for="item in getCategoriSettings" :key="item.id" :item="item"/>
        </div>
    </div>
</template>

<style scoped>
    .settings_content{
        width: 14em;
    }
    .name__settings{
        font-style: normal;
        font-weight: 500;
        font-size: 0.8em;
        line-height: 1.12em;
        letter-spacing: 0.004em;
        color: #2B2B43;
    }
    .block_items_settings{
        margin-top: 0.64em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 12.96em;
    }
	@media screen and (max-width:893px){
		.settings_content{
			width:100%;
		}
	}
</style>
