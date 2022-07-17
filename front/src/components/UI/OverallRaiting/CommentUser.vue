<script>
import mixins from "../../Mixins/AddCommentIn"
export default{
    mixins:[mixins]
}
</script>

<template>
<div class="user__item">
    <div class="photo__user">
        <img :src="require(`../../../assets/${post.url}.svg`)" class="photo__s__3">
    </div>
    <div class="info__user">
        <div class="name">{{post.name}}</div>
        <div class="mark">
            <div class="michlen__start">
                <img v-for="i in post.mChStart" :key="i.id" class="star" :src="require(`../../../assets/${i.url}.svg`)">
            </div>
            <div class="date">
                {{post.date}} days ago
            </div>
        </div>
        <div class="text">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.
        </div>
        <div class="subtack">
            <div class="likes">
                <img src="../../../assets/like.svg" class="like">
                <div class="number">{{post.like}}</div>
            </div>
            <div class="likes">
                <img src="../../../assets/tract.svg" class="like">
                <div class="number">{{post.disLike}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.user__item{
    height: 5.2em;
    margin: 0.52em 0.52em 0em 0.52em;
    display: flex;
}
.photo__user{
    width: 1.32em;
    height: 5.2em;
}
.photo__s__3{
    width: 1.32em;
    height: 1.36em;
}
.info__user{
    margin-left: 0.4212em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.mark{
    width: 5.2em;
    margin-top: 0.1132em;
    display: flex;
    align-items: center;
}
.name{
    display: inline-flex;
    justify-content: flex-start;
    font-style: normal;
    font-weight: 700;
    font-size: 0.56em;
    letter-spacing: 0.004em;
    color: #2B2B43;
    margin-top: 0;
}
.michlen__start{
    width: 2.46em;
    height: 0.48em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.star{
    width: 0.4em;
    height: 0.4em;
}
.date{
    font-style: normal;
    font-weight: 700;
    font-size: 0.36em;
    color: #83859C;
    margin-left: 0.28rem;
    margin-top: 0.08rem;
}
.text{
    font-weight: 400;
    font-size: 0.56em;
    letter-spacing: 0.004em;
    color: #2B2B43;
    margin-top: 0.4rem;
}
.subtack{
    display: flex;
    margin-top: 0.36em;
}
.likes{
    display: flex;
    align-items: center;
    width: 2em;
}
.like{
    width: 0.52em;
    height: 0.52em;
    display: inline-block;
}
.number{
    font-style: normal;
    font-weight: 600;
    font-size: 0.48em;
    color: #545563;
    margin-left: 0.36rem;
    margin-top: 0.08rem;
}
</style>