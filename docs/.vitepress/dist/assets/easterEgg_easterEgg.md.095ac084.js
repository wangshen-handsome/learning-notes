import{d as g,a7 as h,h as a,o as p,c as v,z as s,t as E,b as n,S as y,U as I,_ as x,G as S}from"./chunks/framework.9c1268ca.js";const k="/learning-notes/assets/singer.1971520f.jpg",C=e=>(y("data-v-a13d1208"),e=e(),I(),e),b={class:"easter-egg"},B=C(()=>s("h1",null,"欢迎来到彩蛋页(点击音乐盘可播放音乐哦)",-1)),D={class:"audio"},N={class:"content"},V=g({__name:"easterEgg",setup(e){h(m=>({"010249f6":n(t),"53cfd7ef":n(d),"7ab196c8":n(_)}));let t=a("paused"),l="Hello，各位同学们，不知不觉距离我们培训结束已经快一年了，这一年中各位过得好吗？培训期间经历的点点滴滴，仿佛发生在昨日。当时疫情还没有放开，时不时的封禁、做核酸，但当时的我们都是十分充实的，只为了同一个目标：学习。学习，一个让人充满好奇和渴望的词语。在学习的过程中，我们不仅仅获得了知识和技能，还收获了快乐和成就感。回忆起那些曾经的学习时光，我不禁感慨万分。在课堂上，老师耐心地讲解知识，不断启发我们的思维。在自习时，同学们认真复盘老师所讲解的知识。总之，这是一段十分美好的经历，很幸运能遇到你们。最后，祝愿各位在未来的日子里，健康快乐，事业顺利，家庭美满。",i=a(""),r=-1,_=a("running"),d=a("#10b981"),o=null;const c=a(),f=()=>{t.value==="running"?(u(),clearInterval(o)):(t.value="running",c.value.play(),o=setInterval(()=>{r++,r>=l.length-1&&(_.value="paused",d.value="transparent",clearInterval(o)),i.value+=l[r]},300))},u=()=>{t.value="paused",c.value.pause()};return(m,w)=>(p(),v("div",b,[B,s("div",D,[s("audio",{ref_key:"audio",ref:c,src:"/learning-notes/music.mp3",onEnded:u},null,544),s("img",{class:"img",src:k,title:"点击暂停/播放",onClick:f})]),s("div",N,E(n(i)),1)]))}});const P=x(V,[["__scopeId","data-v-a13d1208"]]),G=JSON.parse('{"title":"彩蛋","description":"","frontmatter":{"layout":"easterEgg","title":"彩蛋"},"headers":[],"relativePath":"easterEgg/easterEgg.md","filePath":"easterEgg/easterEgg.md"}'),j={name:"easterEgg/easterEgg.md"},H=g({...j,setup(e){return(t,l)=>(p(),v("div",null,[S(P)]))}});export{G as __pageData,H as default};
