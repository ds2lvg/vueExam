<style>
* {  box-sizing: border-box;  }
.header {
    background-color: purple; padding: 30px 30px;
    color: yellow; text-align: center;
}
.header:after {
    content: ""; display: table; clear: both;
}
/* TodoList 컴포넌트는 InputTodo와 List를 포함해서 감싸고 있는 레이아웃이라고 생각 */
</style>
<template>
    <div id="todolistapp">
        <header id="header" class="header">
            <h2>Todo List</h2>
            <input-todo></input-todo>
        </header>
        <list></list>
    </div>
</template>
<script>
// import로 사용될 InputTodo, List 컴퍼넌트들을 가져온다
import InputTodo from './InputTodo.vue';
import List from './List.vue';

// default로 현재 컴퍼넌트(name)와 가져온 컴퍼넌트들(components)을 내보낸다(export)
export default {
    name: 'todo-list',
    components: { InputTodo, List }
}
</script>