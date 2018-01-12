<template>
    <div>
        <button :class="[$style.hand, $style.border]"> CSS Module을 적용한 버튼 </button>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$style);
    }
}
</script>

<style module>
/* css를 여러개 적용할때는 :class="[$style.hand, $style.border]" */
.hand{ cursor:pointer; margin-top: 10px; background-color: rgb(175, 0, 175); color: yellow;}
.border{border: 5px solid rgb(0, 255, 200)}
</style>
