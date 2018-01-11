<style>
* {  box-sizing: border-box;  }
.input {
    border: none; width: 75%; height:35px; padding: 10px;
    float: left; font-size: 16px;
}
.addbutton {
    padding: 10px; width: 25%; height:35px; background: #d9d9d9; 
    color: #555; float: left; text-align: center;
    font-size: 13px; cursor: pointer; transition: 0.3s;
}
.addbutton:hover { background-color: #bbb; }
/* InputTodo 컴포넌트는 상단의 데이터 입력을 담당함 */
</style>
<template>
    <div>
        <input type="text" id="task" class="input" v-model.trim="todo" 
        placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
        <span class="addbutton">추 가</span>
    </div>
</template>
<script>
// eventBus 컴포넌트를 가져온다 (= eventBus이름으로 생성된 vue객체를 가져온다) 
// List에 이벤트 전송($emit)을 하기위해서는 vue객체가 필요하다)
import eventBus from './EventBus.vue'

// input-todo는 data로 v-model(todo), methods로 addTodo를 가지고 있다
export default {
    name : 'input-todo',
    // data는 todo에 빈문자열을 반환한다
    data : function() {
        return { todo : "" }
    },
    methods : {
        addTodo : function() {
            // addTodo메서드는 eventBus에 add-todo로 data(todo)를 보낸다 
            eventBus.$emit('add-todo', this.todo);
            // todo에 다시 빈 문자열을 대입한다
            this.todo = "";
        }
    }
}
</script>