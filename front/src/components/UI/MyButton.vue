<template>
  <button class="btn">
    <slot>
      
    </slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
    width: 100%;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 0.7rem;
    background-color: #4E60FF;
    margin-top: 0.8rem;
    border: none;
    margin-top: 1.5rem;
    padding: 0.68rem 0.68rem 0.68rem 0.68rem;
    box-shadow: 0rem 0.32rem 0.8rem rgba(78, 96, 255, 0.16);
    border-radius: 0.32rem;
    cursor: pointer;
}
</style>