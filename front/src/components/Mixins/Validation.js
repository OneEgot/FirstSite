import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs} from '@vuelidate/validators';
import axios from "axios";
export default{
    props:{
        changeValue: Boolean
    },
    data(){
        return{
            v$: useVuelidate(),
            form_input:{
                mail:"",
                password: "",
                RepeatPassword: "",
                flag: false
            },
            showError:false,
            errorText: ""
        }
    },
    validations(){
        return{
            form_input:{
                mail:{
                    required,
                    email
                },
                password:{
                    required,
                    minLength: minLength(8),
                    sameAs: sameAs(this.form_input.RepeatPassword)
                },
                RepeatPassword:{
                    required,
                    minLength: minLength(8),
                },
                flag:{
                    sameAs: sameAs(true)
                }
            },
            
        }
    },
    methods:{
        async registr(){
            this.v$.$validate();
            if(!this.v$.form_input.$error){
            	try{ // eslint-disable-line no-mixed-spaces-and-tabs
                    const postObject = { 
                        username: this.form_input.mail,
                        password: this.form_input.password
                    }
                    const res = await axios.post('http://localhost:3000/register', postObject)
                    localStorage.setItem("token", res.data.token)
                    this.$router.push("/home")
                }catch(err){
                    console.log(err.response.data)
                    this.showError = true;
                    this.errorText = err.response.data.message
                }
            }
        }, 
        changeRouter(){
            this.$router.push('/auth')
        },
    },
}
