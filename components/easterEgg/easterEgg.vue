<template>
  <div class="easter-egg">
    <h1>欢迎来到彩蛋页(点击音乐盘可播放音乐哦)</h1>
    <div class="audio">
      <audio
        ref="audio"
        src="/public/music.mp3"
        @ended="playEnd"
      ></audio>
      <img
        class="img"
        src="../../docs/public/img/fifthStage/easterEgg/singer.jpg"
        title="点击暂停/播放"
        @click="change"
      />
    </div>
    <div class="content">{{ str }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

let isRotate = ref<string>("paused");

let initialData =
  "Hello，各位同学们，不知不觉距离我们培训结束已经快一年了，这一年中各位过得好吗？培训期间经历的点点滴滴，仿佛发生在昨日。当时疫情还没有放开，时不时的封禁、做核酸，但当时的我们都是十分充实的，只为了同一个目标：学习。学习，一个让人充满好奇和渴望的词语。在学习的过程中，我们不仅仅获得了知识和技能，还收获了快乐和成就感。回忆起那些曾经的学习时光，我不禁感慨万分。在课堂上，老师耐心地讲解知识，不断启发我们的思维。在自习时，同学们认真复盘老师所讲解的知识。总之，这是一段十分美好的经历，很幸运能遇到你们。最后，祝愿各位在未来的日子里，健康快乐，事业顺利，家庭美满。";

let str = ref<string>("");

let num = -1;

let lineLoading = ref<string>("running");

let lineColor = ref<string>("#10b981");

onMounted(() => {
  let timer = setInterval(() => {
    num++;
    if (num >= initialData.length - 1) {
      lineLoading.value = "paused";
      lineColor.value = "transparent";
      clearInterval(timer);
    }
    str.value += initialData[num];
  }, 500);
});

const audio = ref();

//播放、暂停
const change = () => {
  if (isRotate.value === "running") {
    playEnd();
  } else {
    isRotate.value = "running";
    audio.value.play();
  }
};

//播放结束
const playEnd = () => {
  isRotate.value = "paused";
  audio.value.pause();
};
</script>
<style scoped>
.easter-egg {
  width: 100%;
  height: 50vh;
}
.audio {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: right;
  margin: 0 10px 10px 10px;
  background: url("../../docs/public/img/fifthStage/easterEgg/disc.png") no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 60%;
  height: 60%;
  cursor: pointer;
  border-radius: 50%;
  animation: rotate 5s linear 0s infinite;
  animation-play-state: v-bind(isRotate);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.content {
  font-size: 24px;
  line-height: 30px;
  padding: 20px 0;
  height: auto;
}
.content::after {
  content: "  ";
  height: 24px;
  border-right: 2px solid;
  border-color: v-bind(lineColor);
  animation: line 0.5s linear 0s infinite;
  animation-play-state: v-bind(lineLoading);
}
@keyframes line {
  50% {
    border-color: transparent;
  }
}
.VPFooter {
  display: none !important;
}
</style>
