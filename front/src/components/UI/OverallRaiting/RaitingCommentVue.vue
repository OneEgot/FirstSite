<script>
import UpOverralraitingVue from './UpOverralraiting.vue';
import MyRaitingButtonVue from './MyRaitingButton.vue';
import SortedByVue from './SortedBy.vue';
import CommentUserVue from './CommentUser.vue';
import mixins from "../../Mixins/CommentUser"
export default{
    components:{
        UpOverralraitingVue,
        MyRaitingButtonVue,
        SortedByVue,
        CommentUserVue
    },
    mixins:[mixins]
}
</script>

<template>
<div class="raiting__comment">
    <div class="up__comment">
        <UpOverralraitingVue/>
        <div class="right_site">
            <MyRaitingButtonVue/>
        </div>
    </div>
    <hr class="line_1">
    <div class="sort__item">
        <SortedByVue/>
    </div>
    <CommentUserVue :post="post"/>
    <hr class="line_2">
    <CommentUserVue :post="post_2"/>
</div>
</template>

<style scoped>
.raiting__comment{
    width: 12.52em;
    height: 17.48em;
    filter: drop-shadow(0px 0px 80px rgba(49, 57, 120, 0.3));
    background-color: white;
    border: 0.036em solid #EDEEF2;
    border-radius: 0.44em;
    position: absolute;
    top: 2em;
    left: 4.8em;
}
.up__comment{
    margin: 0.52em 0.52em 0px 0.52em;
    display: flex;
    justify-content: space-between;
}
.right_site{
    width: 5.2em;
    height: 2em;
    display: flex;
    justify-content: flex-end;
}
.line_1{
    margin: 0.3em 0em 0em 0em;
    height: 0.02416em;
    border: 0.02416em solid #C7C8D2;
    
}
.line_2{
    margin: 0.5em 0.57em 0em 0.57em;
    height: 0.02416em;
    border: 0.02416em solid #C7C8D2;
}
.sort__item{
    display: flex;
    justify-content: center;
    margin-top: 0.56em;
}

</style>