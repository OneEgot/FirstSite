<template>
    <div class="auth">
        <div class="auth__container">
            <div class="logo">Food
                <br><span style="color:#697BFF ">delivery</span>
            </div>
            <div>
                <div> 
                    <div class="Login__item">Login</div>
                </div>
                <div class="info__item">Sign in with your data that you entered during your registration.</div>
                <div class="input__info">
                    <div class="label">Email</div>
                    <MyInput v-model:modalValue="form__input.mail" placeholder="name@example.com"/>
                </div>
                <div class="input__info">
                    <div class="label">Password</div>
                    <MyInput v-model:modalValue="form__input.password" type="password" placeholder="Password"/>
                </div>
                <div class="exeption__item">
                    <MyCheckBox
                        class="chech_box"
                        @click="form__input.flag = !form__input.flag"
                        v-if="!form__input.flag"
                    />
                    <MyCheckBox
                        class="chech_box_2"
                        @click="form__input.flag = !form__input.flag"
                        v-else
                    />
                    <div class="info___bot__checkbox">Keep me logged in</div>
                </div>
                <MyButton @click="Login">Login</MyButton>
                <MyButton class="change__btn">Forgot password</MyButton>
                <div class="error" v-if="showError">{{errorText}}</div>
            </div>
            <div class="down__text">
                Don’t have an account?<span @click="$router.push('/register')" style="color: #4E60FF; margin-left: 0.12rem; cursor: pointer;" >Sign up</span>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import axios from "axios";
export default {
    components:{
        MyButton,
        MyInput,
    },
	data(){
		return{
			form__input:{
				mail:"",
				password:"",
				flag:false
			},
            showError:false,
            errorText: "",
			changeRouter:false
		}
	},
	methods:{
		async Login(){
			if(this.form__input.flag){
				try{
                    const postObject = {
                        username: this.form__input.mail,
                        password: this.form__input.password
                    }
                    const res = await axios.post("http://localhost:3000/auth", postObject);
                    localStorage.setItem("token", res.data.token)
                    this.$router.push("/home")
                }catch(err){
                    console.log(err.response.data);
                    this.showError = true;
                    this.errorText = err.response.data.message;
                }
			}
		}
	}
}
</script>

<style scoped>
    input{
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
    }
    .error{
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        margin-top: 0.4em;
        font-weight: 500;
    }
    .auth{
        background-color: white;
        height: 100vh;
        width: 43%;
        display: flex;
        justify-content: center;
    }
    .chech_box{
        all: unset;
        width: 1rem;
        height: 1rem;
        box-sizing: border-box;
        border-radius: 0.16rem;
        outline: 0.04rem solid #C7C8D2;
        border: none;
        margin: 0.04rem;
        cursor: pointer;
    }
    .chech_box_2{
        all: unset;
        width: 1rem;
        height: 1rem;
        box-sizing: border-box;
        border-radius: 0.16rem;
        outline: 0.04rem solid;
        border: none;
        margin: 0.04rem;
        cursor: pointer;
        background-image: url(../../assets/box.svg);
        background-size: 1rem;
        background-position: center;
        
    }
    .auth__container{
        width: 16rem;
        margin: 1rem 0rem 1rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .label{
        font-weight: 500;
    }
    .img{
        fill: red;
    }
    .info__item{
        font-weight: 400;
        color: #545563;
        font-size: 0.7rem;
        line-height: 0.8rem;
        margin-top: 1rem;
    }
    .input__info{
        margin-top: 1rem;
        font-weight: 600;
        font-size: 0.7rem;
        color: #545563;
        line-height: 0.64rem;
    }
    .Login__item{
        font-size: 2.4rem;
        font-weight: 700;
    }
    .media{
        height: 100vh;
        width: 57%;
        background-color: #697BFF;
    }
    .exeption__item{
        margin-top: 0.8rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .chk_box{
        width: 1rem;
        height: 1rem;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-radius: 0.16rem;
        outline:  0.08rem solid #C7C8D2;
        border-color: none;
        margin: 0.04rem;
    }
    .info___bot__checkbox{
        color: #2B2B43;
        font-weight: 400;
        font-size: 0.7rem;
        margin-left: 1.2rem;
    }
    .change__btn{
        background: none;
        box-shadow: none;
        color: #4E60FF;
        font-weight: 600;
        line-height: 0.8rem;
        margin-top: 1rem;
    }
    .down__text{
        font-size: 0.7rem;
        display: flex;
        justify-content: center;
    }
	@media screen and (max-width:912px){
		.auth{
			width:100%;
		}
	}
</style>
