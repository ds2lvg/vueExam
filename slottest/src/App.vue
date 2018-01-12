<template>
  <div id="app">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>{{A.message}}</p>
      </div>
    </speech-box>

    <speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="senders-content">{{B.message}}</p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from './components/SpeechBox.vue'

export default {
  name: 'app',
  components: { SpeechBox },
  data : function() {
    return {
      A: {
        header : "[MD포토] 안지현 '싱글벙글 깜찍한 미소'",
        footer : "18-01-12",
        message : "K 치어리더 안지현이 11일 오후 서울 잠실학생체육관에서 진행된 '2017~2018 정관장 프로농구' 서울 SK-울산 모비스의 경기에서 응원을 펼치고 있다."
      },
      B: {
        header : "[S-girl] '상큼 매력' 서현숙, 완벽히 대세된 '여신 치어리더'",
        footer : "18.01.06",
        message : "인기 치어리더 서현숙(24)이 이제는 완연한 대세 치어리더로 부상했다.2016년 데뷔, 올해로 3년 차 치어리더가 된 서현숙은 지난해 많은 인기를 받으며 스포츠 팬들의 마음을 사로잡았다. 상큼함을 자랑하는 단발머리와 깜찍한 외모가 인기비결. 뿐만 아니라 댄스 스포츠 경력을 바탕으로 하는 열정적인 무대 매너는 경기장을 찾는 팬들의 눈길을 단숨에 사로잡았다."
      }
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sanders { background-color: antiquewhite; }
.sanders-content { text-decoration: underline;}
</style>
