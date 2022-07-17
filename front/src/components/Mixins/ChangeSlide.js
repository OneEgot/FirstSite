export default{
    data(){
        return{
            cirkleIndex:[
                {id:0},
                {id:1},
                {id:2},
                {id:3}
            ],
            index: 0,
            ChangeIndex:0
        }
    },
    methods:{
        getIndexSlide(value){
            this.index = value
        },
        ShowSlide(id){
            this.ChangeIndex = id
        }
    },
}
