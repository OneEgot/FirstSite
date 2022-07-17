<script>
import InputItemVue from './inputs/InputItem.vue';
import ChekboxItemVue from './inputs/ChekboxItem.vue';
import DownButtonItemVue from './inputs/DownButtonItem.vue';
export default{
    data(){
        return{
            arr_1:[
                {   
                    id:0,
                    label: "First name",
                    placeholder: "Jane"
                },
                {
                    id:1,
                    label: "Last name",
                    placeholder: "Robertson"
                },
                {   
                    id:2,
                    label: "Email",
                    placeholder: "jane.robertson@example.com"
                },
                {
                    id:3,
                    label: "Phone number",
                    placeholder: "(217) 555-0113"
                },
            ],
            arr_chechBox:[
                {
                    id: 0,
                    text:"New deals"
                },
                {
                    id: 1,
                    text:"Password changes"
                },
                {
                    id: 2,
                    text:"New restaurants"
                },
                {
                    id: 3,
                    text:"Special offers"
                },
                {
                    id: 4,
                    text:"Order statuses"
                },
                {
                    id: 5,
                    text:"Newsletter"
                },
            ],
            logout: "Log out",
            Discard: "Discard changes",
            save: "Save changes"
        }
    },
    components:{
        InputItemVue,
        ChekboxItemVue,
        DownButtonItemVue
    },
    methods:{
        RemoveUser(){
            localStorage.removeItem("token");
            this.$router.push("/auth");
            window.location.reload();
        }
    }
}
</script>

<template>
<div class="block__settings">
    <div class="name">Account</div>
    <div class="change___menu">
        <div class="center_content">
            <div class="person__infrormation">
                Personal information
            </div>
            <div class="avatar">
                Avatar
            </div>
            <div class="info_photo">
                <img src="../imgSettingsPage/img.svg">
                <div class="change">
                    Change
                </div>
                <div class="remove">
                    Remove
                </div>
            </div>
            <div class="blocks__inputs">
                <InputItemVue v-for="el in arr_1" :key="el.id" :item="el"/>
            </div> 
            <div class="notefication">
                Email notifications
            </div>
            <div class="block__check">
                <ChekboxItemVue v-for="el in arr_chechBox" :key="el.id" :item="el"/>
            </div>   
        </div>
        <hr class="line">
        <div class="reject">
            <div class="reject__center">
                <DownButtonItemVue :name="logout" @click="RemoveUser"/>
                <div class="left_reject">
                    <DownButtonItemVue :name="Discard" style="color: #83859C; border: 0.04em solid #83859C;"/>
                    <DownButtonItemVue :name="save" style="color: #fff; border: 0.04em solid #4E60FF;  background-color: #4E60FF;"/>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<style scoped>
    .change___menu{
        width: 29.2em;
        height: 27.52em;
        background: #FFFFFF;
        border: 0.04em solid #EDEEF2;
        border-radius: 0.64em;
        box-sizing: border-box;
        margin-top: 0.64em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .block__settings{
        width: 29.2em;
    }
    .name{
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 0.8em;
        line-height: 1.12em;
        letter-spacing: 0.004em;
        color: #2B2B43;
    }
    .center_content{
        width: 27.92em;
        display: flex;
        flex-direction: column;
    }
    .person__infrormation{
        font-style: normal;
        font-weight: 600;
        font-size: 0.72em;
        line-height: 0.96em;
        letter-spacing: 0.004em;
        color: #2B2B43;
        width: 100%;
        margin-top: 0.96em;
    }
    .avatar{
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 0.48em;
        line-height: 0.64em;
        color: #545563;
        margin-top: 1.8em;
    }
    .info_photo{
        width: 100%;
        height: 3.52em;
        margin-top: 0.6em;
        display: flex;
        align-items: center;
    }
    img{
        width: 3.52em;
        height: 3.52em;
        border-radius: 0.48em;
    }
    .change{
        height: 1.76em;
        width: 4.4em;
        border: 0.04em solid #4E60FF;
        border-radius: 0.32em;
        font-weight: 700;
        font-size: 0.56em;
        line-height: 0.8em;
        letter-spacing: 0.012em;
        color: #4E60FF;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.48em 0.64em;
        margin-left: 1.2em;
        cursor: pointer;
    }
    .remove{
        font-style: normal;
        font-weight: 700;
        font-size: 0.56em;
        line-height: 0.8em;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.012em;
        color: #83859C;
        margin-left: 1.2em;
        cursor: pointer;
    }
    .blocks__inputs{
        margin-top: 1.44em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 0.92em;
    }
    .notefication{
        font-style: normal;
        font-weight: 700;
        font-size: 0.72em;
        line-height: 0.96em;
        letter-spacing: 0.004em;
        color: #2B2B43;
        margin-top: 3em;
        width: 100%;
    }
    .block__check{
        margin-top: 1em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 0.92em;
        grid-row-gap: 0.96em;
    }
    .line{
        height: 0px;
        border: 0.024em solid #EDEEF2;
        margin: 0;
        margin-top: 1.44em;
        width: 100%;
    }
    .reject{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .reject__center{
        width: 27.92em;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .left_reject{
        display: flex;
        width: 10.32em;
        align-items: center;
        justify-content: space-between;
    }
	@media screen and (max-width: 893px){
		.change___menu{
			width:100%;
		}
		.block__settings{
			width:100%;
			margin-top:0.96em;
		}
	}
	@media screen and (max-width:656px){
		.center_content{
			width: 18em;	
		}
		.blocks__inputs{
			display:flex;
			flex-direction:column;
		}
		.block__check{
			display:flex;
			flex-direction:column;
		}
		.notefication{
			margin-top: 0;
		}
		.change___menu{
			height: 36.5em;
		}
		.reject__center{
			width:18em;
			font-size:25px;
		}
	}
	@media screen and (max-width:563px){
		.center_content{
			width: 13.5em;
		}
		.reject__center{
			width: 324px;
			font-size: 22px;
		}
	}
	@media screen and (max-width:402px){
		.center_content{
			width: 12.8em;
		}
		.reject__center{
			width: 278.4px;
			font-size: 18px;
		}
	}
	@media screen and (max-width:325px){
		.center_content{
			width: 11.8em;
		}
		.reject__center{
			width: 200.59px;
			font-size: 13px;
		}
	}
</style>
