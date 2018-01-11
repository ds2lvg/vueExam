<style>
* {  box-sizing: border-box;  }
ul {  margin: 0; padding: 0; }
ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
/* List컴포넌트는 하단의 할일 목록의 출력을 담당함 */
</style>
<template>
    <ul id="todolist">
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle(index)">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <span class="close" v-on:click.stop="deleteTodo(index)">&#x00D7;</span>
        </li>
    </ul>
</template>
<script>
// eventBus 컴포넌트를 가져온다 (= eventBus이름으로 생성된 vue객체를 가져온다) 
import eventBus from './EventBus.vue'

export default {
    // created : 생성되자마자 할 일
    created : function() {
        // eventBus를 통해 InputTodo에서 생성한 이벤트(add-todo)를 받아서 
        // 여기 메서드 addTodo에 붙인다($on)
        eventBus.$on('add-todo', this.addTodo);
    },
    data : function() {
        return {
            // todolist에 기본적으로 들어갈 데이터 기술
            todolist : [
                { todo : "일찍 일어나기", done:true },
                { todo : "학원 가기", done:false },
                { todo : "Tangled 보고 듣기", done:false },
                { todo : "midnight english 읽고 쓰기", done:false },
                { todo : "나만의 프로젝트 만들기", done:false },
            ]
        }
    },
    methods : {
        // li의 클래스에 붙어있음
        checked : function(done) {
            // done이 true면 checked 클래스를 붙임(취소선 그어짐)
            if(done) return { checked: true };
            else return { checked: false};
        },
        // InputTodo에서 생성한 이벤트(add-todo)를 받은 메서드
        addTodo : function(todo) {
            // todo가 빈문자열이 아니면 그 문자열을 todolist에 추가함(=목록 추가)
            if (todo !== "") {
                this.todolist.push({ todo:todo, done:false });
            }
        },
        // li를 클릭하면 발생
        doneToggle : function(index) {
            // 클릭할때마다 .done을 토글처리함 (토글 클래스 기능)
            this.todolist[index].done = !this.todolist[index].done
        },
        // x표시 클릭하면 발생
        deleteTodo : function(index) {
            // todolist 배열에서 해당인덱스를 하나 날리기 때문에 목록에서 삭제됨
            this.todolist.splice(index,1);
        }
    }
}
</script>