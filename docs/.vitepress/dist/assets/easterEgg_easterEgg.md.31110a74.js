import{d as m,f as s,h,o as p,c as g,x as a,t as E,b as n,L as x,M as y,E as I,_ as f,C as b}from"./chunks/framework.e454f055.js";const C="/learning-notes/assets/singer.1971520f.jpg",S=e=>(x("data-v-e51c66cd"),e=e(),y(),e),k={class:"easter-egg"},B=S(()=>a("h1",null,"欢迎来到彩蛋页(点击音乐盘可播放音乐哦)",-1)),D={class:"audio"},N={class:"content"},V=m({__name:"easterEgg",setup(e){I(l=>({"4935f604":n(t),"16a225d4":n(i),"601ffe2f":n(d)}));let t=s("paused"),o="Hello，各位同学们，不知不觉距离我们培训结束已经快一年了，这一年中各位过得好吗？培训期间经历的点点滴滴，仿佛发生在昨日。当时疫情还没有放开，时不时的封禁、做核酸，但当时的我们都是十分充实的，只为了同一个目标：学习。学习，一个让人充满好奇和渴望的词语。在学习的过程中，我们不仅仅获得了知识和技能，还收获了快乐和成就感。回忆起那些曾经的学习时光，我不禁感慨万分。在课堂上，老师耐心地讲解知识，不断启发我们的思维。在自习时，同学们认真复盘老师所讲解的知识。总之，这是一段十分美好的经历，很幸运能遇到你们。最后，祝愿各位在未来的日子里，健康快乐，事业顺利，家庭美满。",r=s(""),c=-1,d=s("running"),i=s("#10b981");h(()=>{let l=setInterval(()=>{c++,c>=o.length-1&&(d.value="paused",i.value="transparent",clearInterval(l)),r.value+=o[c]},500)});const _=s(),v=()=>{t.value==="running"?u():(t.value="running",_.value.play())},u=()=>{t.value="paused",_.value.pause()};return(l,O)=>(p(),g("div",k,[B,a("div",D,[a("audio",{ref_key:"audio",ref:_,src:"/public/music.mp3",onEnded:u},null,544),a("img",{class:"img",src:C,title:"点击暂停/播放",onClick:v})]),a("div",N,E(n(r)),1)]))}});const j=f(V,[["__scopeId","data-v-e51c66cd"]]);const w=JSON.parse('{"title":"彩蛋","description":"","frontmatter":{"title":"彩蛋","sidebar":false,"navbar":false},"headers":[],"relativePath":"easterEgg/easterEgg.md"}'),L={name:"easterEgg/easterEgg.md"},M=Object.assign(L,{setup(e){return(t,o)=>(p(),g("div",null,[b(j)]))}}),H=f(M,[["__scopeId","data-v-2fd29d2d"]]);export{w as __pageData,H as default};
