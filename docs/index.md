---
layout: home

title: 学习笔记

hero:
  name: 中公学习笔记
  text: 专注&分享
  tagline: 一阶段至五阶段的全部笔记
  image: 
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始查看
      link: /firstStage/firstStageone

features:
  - title: 方便快捷
    details: 在此网站中只需稍稍点击，即可找到您所需的内容，无需频繁的打开文件夹寻找内容。
  - title: 易于添加
    details: What ? 这块知识老师没讲到 ? 此时可联系帅小伙添加到本网站。
  - title: 开源共享
    details: 此项目已被帅小伙分别上传至 gitee 和 github 上面，有兴趣可点击右上方前往查看。
  - title: 联系方式
    details: QQ:1395835033 <br/> 微信(手机号):18291926010
---

<footer>
<p>欢迎来到帅小伙的学习笔记网</p>
<p>{{ str }}</p>
</footer>

<script setup lang="ts">
  import {ref} from 'vue'
  let str = ref<string>('Copyright © 2022-' + new Date().getFullYear() + ' WangShen')
</script>

<style scoped>
  footer{
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #909090;
  }
  @media (max-width: 768px) {
   footer{
    position: relative;
    bottom: -80px;
  }
}
</style>

