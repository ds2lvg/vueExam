<template>
  <div id="app">
      <layout>
          <h1 slot="header">헤더 영역</h1>
          <div slot="sidebar">
              <ul class="menu">
                  <li v-for="sidebar in sidebars">
                      <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
                  </li>
              </ul>
          </div>

          <div slot="content">
              <h2>컨텐트 영역</h2>
              <p>최근 두산베어스 치어리더 서현숙은 자신의 인스타그램에 '완성'이라는 글과 함께 사진을 게재했다.공개된 사진 속에는 블랙 미니스커트와 블라우스를 입고 있는 서현숙의 모습이 담겨있다.</p>
              <p>최근 두산베어스 치어리더 서현숙은 자신의 인스타그램에 '완성'이라는 글과 함께 사진을 게재했다.공개된 사진 속에는 블랙 미니스커트와 블라우스를 입고 있는 서현숙의 모습이 담겨있다.</p>
              <p>최근 두산베어스 치어리더 서현숙은 자신의 인스타그램에 '완성'이라는 글과 함께 사진을 게재했다.공개된 사진 속에는 블랙 미니스커트와 블라우스를 입고 있는 서현숙의 모습이 담겨있다.</p>
              <p>최근 두산베어스 치어리더 서현숙은 자신의 인스타그램에 '완성'이라는 글과 함께 사진을 게재했다.공개된 사진 속에는 블랙 미니스커트와 블라우스를 입고 있는 서현숙의 모습이 담겨있다.</p>
          </div>

          <p slot="footer">Footer text</p>
      </layout>
  </div>
</template>

<script>
import Layout from './components/NamedSlot.vue'

export default {
  components: { Layout },
  data : function() {
    return {
        sidebars : [
            { menu : "Home", link : "#" },
            { menu : "About", link : "#" },
            { menu : "Contact", link : "#" },
            { menu : "Vue.js", link : "#" },
        ]
    };
  }
}
</script>

<style>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
</style>
