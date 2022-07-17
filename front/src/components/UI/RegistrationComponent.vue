<template>
  <div class="registration">
       <div class="registration__container">
            <div class="logo">Food
                <br><span style="color:#697BFF ">delivery</span>
            </div>
            <div>
                <div class="registration__item">Registration</div>
                <div class="info__item">Sign in with your data that you entered during your registration.</div>
                <div class="input__info">
                    <div class="label">Email</div>
                    <MyInput 
                        v-model:modalValue.trim="form_input.mail" 
                        placeholder="name@example.com"  
                        v-bind:class="{appset:v$.form_input.mail.$error}"
                    />
                </div>
                <div class="input__info">
                    <div class="label">Password</div>
                    <MyInput 
                        type="password"
                        v-model:modalValue.trim="form_input.password" 
                        placeholder="min. 8 characters" 
                        v-bind:class="{appset:v$.form_input.password.$error}"
                     />
                </div>
                <div class="input__info">
                    <div class="label"> Repeat Password</div>
                    <MyInput 
                        type="password" 
                        v-model:modalValue.trim="form_input.RepeatPassword" 
                        placeholder="min. 8 characters" 
                        v-bind:class="{appset:v$.form_input.password.$error}" 
                    />
                </div>
                <div class="exeption__item">
                    <MyCheckBox
                        class="chech_box"
                        v-model="form_input.flag"
                        @click="form_input.flag = !form_input.flag"
                        v-bind:class="{appset_box:v$.form_input.flag.$error}"
                        v-if="!form_input.flag"
                    />
                    <MyCheckBox
                        class="chech_box_2"
                        v-model="form_input.flag"
                        @click="form_input.flag = !form_input.flag"
                        v-bind:class="{appset_box:v$.form_input.flag.$error}"
                        v-else
                    />
                    <div class="info___bot__checkbox">I agree</div>
                </div>
                <MyButton @click="registr">Register</MyButton>
                <div class="error" v-if="showError">{{errorText}}</div>
            </div>
            <div class="down__text">
                If you have a registered account, 
                <span style="margin-left: 3px; color:rgb(78, 96, 255); cursor: pointer;" @click="changeRouter" >click here.</span>
            </div>
       </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyCheckBox from "./MyCheckBox";
import mixins from "../Mixins/Validation"
export default { 
    components:{
    MyButton,
    MyInput,
    MyCheckBox,
},
    mixins:[mixins]
}
</script>

<style scoped>
.registration{
    background-color: white;
    height: 100vh;
    width: 43%;
    display: flex;
    justify-content: center;
}
.error{
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    margin-top: 0.4em;
    font-weight: 500;
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
    outline: 0.04rem solid ;
    border: none;
    margin: 0.04rem;
    cursor: pointer;
    background-image: url(../../assets/box.svg);
    background-size: 1rem;
    background-position: center;
    
}
.label{
    font-weight: 500;
}
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
.registration__container{
    width: 16rem;
    margin: 1rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.registration__item{
    font-size: 1.9rem;
    font-weight: 700;
}
.info__item{
    font-weight: 400;
    color: #545563;
    font-size: 0.7rem;
    line-height: 0.8rem;
    margin-top: 1rem;
}
.appset{
    all: unset;
    border: 0.04rem solid red;
    box-sizing: border-box;
    border-radius: 0.32rem;
    margin-top: 0.4rem;
    padding: 0.68rem 0.68rem 0.68rem 0.68rem;
    width: 100%;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 0.8rem;
    transition: 0.5s;
}
.appset_box{
    width: 1rem;
    height: 1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 0.16rem;
    outline: 0.04rem solid red;
    border-color: none;
    margin: 0.04rem;
}
.down__text{
    font-size: 0.7rem;
    display: flex;
    justify-content: flex-start;
}
 .input__info{
    margin-top: 1rem;
    font-weight: 600;
    font-size: 0.7rem;
    color: #545563;
    line-height: 0.64rem;
}
.exeption__item{
    margin-top: 0.8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.info___bot__checkbox{
    color: #2B2B43;
    font-weight: 400;
    font-size: 0.7rem;
    margin-left: 1.2rem;
}
@media screen and (max-width:912px){
	.registration{
		width: 100%;
	}
}
</style>
