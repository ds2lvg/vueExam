<script type="text/javascript">
// Vue 컴포넌트를 가져온다
import Vue from 'vue';

// 가져온 Vue컴포넌트를 이용해서 eventBus라는 Vue객체를 생성해서 내보냄
var eventBus = new Vue();
export default eventBus;
// eventBus : InputTodo와 List 사이에서 이벤트를 주고받는 역할
</script>