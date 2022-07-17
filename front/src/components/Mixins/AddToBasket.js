export default{
    data(){
        return{
            count: 1
        }
    },
    methods:{
        Plus(){
            this.count +=1
            console.log(this.count)
        },
        Minus(){
            this.count -=1
            if(this.count < 1){
                this.count = 1
            }
        }
    }
}
