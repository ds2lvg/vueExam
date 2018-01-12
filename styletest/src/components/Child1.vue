<template>
  <div class="main">{{msg}}</div>
</template>

<script>
export default {
    name: ' child1',
    data() {
        return {
            msg: 'Child1'
        }
    }
}
</script>
<style>
.main{ border: 1px solid #000; background-color: yellow }
</style>
