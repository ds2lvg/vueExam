<template>
  <div class="main">{{msg}}</div>
</template>

<script>
export default {
    name: 'child2',
    data() {
        return {
            msg: 'Child2'
        }
    }
}
</script>

<style scoped>
.main{ border: 1px solid #000; background-color: aqua; }
</style>
