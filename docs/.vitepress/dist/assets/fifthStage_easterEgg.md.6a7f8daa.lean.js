import{d as v,a2 as h,h as a,p as m,o as p,c as g,z as s,t as E,b as n,M as y,N as b,_ as S,G as k}from"./chunks/framework.6deb909b.js";const x=e=>(y("data-v-1a72fd59"),e=e(),b(),e),I={class:"easter-egg"},w=x(()=>s("h1",null,"欢迎来到彩蛋页(点击音乐盘可播放音乐哦)",-1)),C={class:"audio"},N={class:"content"},B=v({__name:"easterEgg",setup(e){h(r=>({f5624cb0:n(t),f000a4a8:n(_),"6242f145":n(i)}));let t=a("paused"),o="Hello，各位同学们，不知不觉距离我们培训结束已经快一年了，这一年中各位过得好吗？培训期间经历的点点滴滴，仿佛发生在昨日。当时疫情还没有放开，时不时的封禁、做核酸，但当时的我们都是十分充实的，只为了同一个目标：学习。学习，一个让人充满好奇和渴望的词语。在学习的过程中，我们不仅仅获得了知识和技能，还收获了快乐和成就感。回忆起那些曾经的学习时光，我不禁感慨万分。在课堂上，老师耐心地讲解知识，不断启发我们的思维。在自习时，同学们认真复盘老师所讲解的知识。总之，这是一段十分美好的经历，很幸运能遇到你们。最后，祝愿各位在未来的日子里，健康快乐，事业顺利，家庭美满。",d=a(""),c=-1,i=a("running"),_=a("#10b981");m(()=>{let r=setInterval(()=>{c++,c>=o.length-1&&(i.value="paused",_.value="transparent",clearInterval(r)),d.value+=o[c]},500)});const l=a(),f=()=>{t.value==="running"?u():(t.value="running",l.value.play())},u=()=>{t.value="paused",l.value.pause()};return(r,j)=>(p(),g("div",I,[w,s("div",C,[s("audio",{ref_key:"audio",ref:l,autoplay:"",src:"https://sv-sycdn.kuwo.cn/b51db80dde8b7fe5c7365ec653d5d772/647025ef/resource/n3/22/77/3382916538.mp3",onEnded:u},null,544),s("img",{class:"img",src:"http://img1.kwcdn.kuwo.cn/star/albumcover/240/36/56/1013263130.jpg",title:"点击暂停/播放",onClick:f})]),s("div",N,E(n(d)),1)]))}});const D=S(B,[["__scopeId","data-v-1a72fd59"]]),O=JSON.parse('{"title":"彩蛋","description":"","frontmatter":{"layout":"easterEgg","title":"彩蛋"},"headers":[],"relativePath":"fifthStage/easterEgg.md","filePath":"fifthStage/easterEgg.md","lastUpdated":1685085652000}'),V={name:"fifthStage/easterEgg.md"},P=Object.assign(V,{setup(e){return(t,o)=>(p(),g("div",null,[k(D)]))}});export{O as __pageData,P as default};
