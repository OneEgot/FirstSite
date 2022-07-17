export default{
    props:{
        Changeindex: Number,
        WidthItem: Number
    },
    data(){
        return{
            indexSlide: 0,
            width: 0,
            height: 0
        }
    },
    renderTriggered(){
        this.width = this.$refs.sliderItem.clientWidth
    },
    mounted(){
        this.width = this.$refs.sliderItem.clientWidth;
        setInterval( () => {
            if(this.indexSlide >= 3){
                this.indexSlide = 0
            }
            else{
                this.indexSlide +=1
            }
        }, 2000) 
    },
    watch:{
        indexSlide(value){
            this.$emit("indexSlide", value)
        },
        Changeindex(value){
            this.indexSlide = value
        }
    },
}