import Vue from 'vue'
import TodoList from './components/TodoList.vue'

// main.js는 TodoList.vue 컴포넌트를 화면(index.html)에 담기 위해 사용

new Vue({
  // TodoList 컴포넌트를 렌더링한 결과화면을 index.html -> <div id="app">에 출력함
  el: '#app',
  render: h => h(TodoList)
})
