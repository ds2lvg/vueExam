<template>
    <div class="main test">
        {{msg}}
        <child1-inner />
        {{msg}}
    </div>
</template>

<script>
import Child1Inner from './Child1Inner.vue'

export default {
    name: ' child1',
    components: { Child1Inner },
    data() {
        return {
            msg: '부모'
        }
    }
}
</script>
<style scoped>
.main{ border: 1px solid #000; background-color: yellow }
.test{ padding: 10px; text-decoration: underline; border: 1px solid #000;}
</style>
