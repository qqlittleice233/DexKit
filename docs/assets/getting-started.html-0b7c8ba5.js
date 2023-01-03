import{_ as c,M as o,p as i,q as d,N as n,V as a,a1 as r,R as e,t as s}from"./framework-96b046e1.js";const p={},u=r('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><blockquote><p>集成 <code>DexKit</code> 到你的项目中，你可以使用 <code>Gradle</code> 或者 <code>Maven</code> 来管理依赖。</p></blockquote><h2 id="集成依赖" tabindex="-1"><a class="header-anchor" href="#集成依赖" aria-hidden="true">#</a> 集成依赖</h2><blockquote><p>在你的项目中的 <code>app/build.gradle</code> 或者 <code>app/build.gradle.kts</code> 添加 <code>DexKit</code> 的依赖。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>从 1.1.0 版本开始，<code>DexKit</code> 已经从 jitpack.io 迁移到了 mavenCentral，如果你的项目中还在使用 jitpack.io 的话，请尽快迁移。</p></div>',5),m=e("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy"},[e("pre",{class:"shiki",style:{"background-color":"#22272e"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"dependencies {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"    implementation "),e("span",{style:{color:"#96D0FF"}},"'org.luckypray:DexKit:<version>'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"}")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[e("pre",{class:"shiki",style:{"background-color":"#22272e"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"dependencies {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"    implementation("),e("span",{style:{color:"#96D0FF"}},'"org.luckypray:DexKit:<version>"'),e("span",{style:{color:"#ADBAC7"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ADBAC7"}},"}")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,"由于项目处于初期阶段，可能在版本升级中会出现 API 变动，所以请在使用时，注意查看版本更新日志。")],-1),v=e("p",null,[s("现在你已经成功集成了 "),e("code",null,"DexKit"),s(" 到你的项目中，接下来我们将会介绍如何使用 "),e("code",null,"DexKit"),s(" 来完成一些常见的需求。")],-1);function b(g,k){const l=o("CodeGroupItem"),t=o("CodeGroup");return i(),d("div",null,[u,n(t,null,{default:a(()=>[n(l,{title:"gradle"},{default:a(()=>[m]),_:1}),n(l,{title:"gradle-kts"},{default:a(()=>[_]),_:1})]),_:1}),h,v])}const x=c(p,[["render",b],["__file","getting-started.html.vue"]]);export{x as default};
