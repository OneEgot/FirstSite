<script>
export default{
    methods:{
        scrollTo(){
            this.$store.state.scrollToLines = !this.$store.state.scrollToLines;
            if(this.$store.state.scrollToLines){
                window.scrollTo({
                    top: this.$store.state.topElement,
                    behavior: 'smooth'
                });
                this.$store.state.scrollToLines = !this.$store.state.scrollToLines;
            }
            this.$store.commit("showMenu")
        },
        Deals(){
            this.$store.state.dealsFlag = !this.$store.state.dealsFlag;
            if(this.$store.state.topDeals){
                window.scrollTo({
                    top: this.$store.state.topDeals,
                    behavior: 'smooth'
                });
            }
            this.$store.state.dealsFlag = !this.$store.state.dealsFlag;
            this.$store.commit("showMenu")
        },
    }
}
</script>

<template>
    <transition>
        <div class="menu" v-if="$store.state.showMenu">
            <div class="center_content">
                <div class="item" @click="scrollTo">Restaraunts</div>
                <div class="item" @click="Deals">Deals</div>
                <div class="item">My orders</div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.menu{
    width: 6em;
    height: 6.8em;
    background: red;
    position: absolute;
    top: 2.6em;
    right: 10px;
    background-color: #FFFFFF;
    border: 0.04em solid #EDEEF2;
    border-radius: 0.64em;
    flex-direction: column;
    align-items: center;
    display: none;
}
.center_content{
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 1.12em;
    letter-spacing: 0.004em;
    color: #2B2B43;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
@media screen and (max-width: 656px){
    .menu{
        display: flex;
    }
}
</style>