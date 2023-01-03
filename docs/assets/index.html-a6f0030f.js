import{_ as t,M as a,p as r,q as p,N as n,V as o,a1 as i,R as s,t as l}from"./framework-96b046e1.js";const A={},y=i(`<h3 id="极致体验-拒绝繁琐" tabindex="-1"><a class="header-anchor" href="#极致体验-拒绝繁琐" aria-hidden="true">#</a> 极致体验，拒绝繁琐</h3><h4 id="样例-app-代码" tabindex="-1"><a class="header-anchor" href="#样例-app-代码" aria-hidden="true">#</a> 样例 APP 代码</h4><blockquote><p>假设这是一个宿主 APP 的被混淆后的代码，我们需要对这个方法的 hook 进行动态适配，由于混淆的存在，可能每个版本方法名以及类名都会发生变化</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">abc</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">boolean</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">cvc</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">boolean</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">b</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        Log.</span><span style="color:#DCBDFB;">d</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;VipCheckUtil&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;info: xxxx&quot;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> b;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hook-代码" tabindex="-1"><a class="header-anchor" href="#hook-代码" aria-hidden="true">#</a> Hook 代码</h4><blockquote><p>通过创建 <code>DexKitBridge</code> 实例，我们可以对 APP 的 dex 进行特定的查找，但是切记实例化只需要进行一次，请自行存储，不要重复创建。 且在使用完毕后，需要调用 <code>DexKitBridge.close()</code> 方法，释放内存，否则会造成内存泄漏。</p></blockquote>`,6),D=s("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"@Throws"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F69D50"}},"NoSuchMethodException"),s("span",{style:{color:"#ADBAC7"}},"::"),s("span",{style:{color:"#6CB6FF"}},"class"),s("span",{style:{color:"#ADBAC7"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"vipHook"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"val"),s("span",{style:{color:"#ADBAC7"}}," apkPath "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," hostApp.applicationInfo.sourceDir")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F69D50"}},"DexKitBridge"),s("span",{style:{color:"#ADBAC7"}},".create(apkPath)?.use { bridge "),s("span",{style:{color:"#F47067"}},"->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"val"),s("span",{style:{color:"#ADBAC7"}}," resultMap "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," bridge.batchFindMethodsUsingStrings(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F69D50"}},"BatchFindArgs"),s("span",{style:{color:"#ADBAC7"}},".build { ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                addQuery("),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil_isVip"'),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#6CB6FF"}},"setOf"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil"'),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#96D0FF"}},'"userInfo:"'),s("span",{style:{color:"#ADBAC7"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"val"),s("span",{style:{color:"#ADBAC7"}}," result "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," resultMap["),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil_isVip"'),s("span",{style:{color:"#ADBAC7"}},"]"),s("span",{style:{color:"#F47067"}},"!!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"assert"),s("span",{style:{color:"#ADBAC7"}},"(result.size "),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"1"),s("span",{style:{color:"#ADBAC7"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"val"),s("span",{style:{color:"#ADBAC7"}}," method"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"Method"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," methodDescriptor["),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            .getMethodInstance(hostClassLoader)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F69D50"}},"XposedBridge"),s("span",{style:{color:"#ADBAC7"}},".hookMethod(method, "),s("span",{style:{color:"#F69D50"}},"XC_MethodReplacement"),s("span",{style:{color:"#ADBAC7"}},".returnConstant("),s("span",{style:{color:"#6CB6FF"}},"true"),s("span",{style:{color:"#ADBAC7"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("div",{class:"language-java line-numbers-mode","data-ext":"java"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"public"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"void"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"vipHook"),s("span",{style:{color:"#ADBAC7"}},"() throws NoSuchMethodException {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    String"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#ADBAC7"}},"apkPath"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," HostInfo."),s("span",{style:{color:"#DCBDFB"}},"getHostApp"),s("span",{style:{color:"#ADBAC7"}},"()."),s("span",{style:{color:"#DCBDFB"}},"getApplicationInfo"),s("span",{style:{color:"#ADBAC7"}},"().sourceDir;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"try"),s("span",{style:{color:"#ADBAC7"}}," (DexKitBridge"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#ADBAC7"}},"bridge"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," DexKitBridge."),s("span",{style:{color:"#DCBDFB"}},"create"),s("span",{style:{color:"#ADBAC7"}},"(apkPath)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}}," (bridge "),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"null"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        Map"),s("span",{style:{color:"#F69D50"}},"<"),s("span",{style:{color:"#F47067"}},"String"),s("span",{style:{color:"#F69D50"}},", "),s("span",{style:{color:"#ADBAC7"}},"List"),s("span",{style:{color:"#F69D50"}},"<"),s("span",{style:{color:"#F47067"}},"DexMethodDescriptor"),s("span",{style:{color:"#F69D50"}},">> "),s("span",{style:{color:"#ADBAC7"}},"resultMap"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            bridge."),s("span",{style:{color:"#DCBDFB"}},"batchFindMethodsUsingStrings"),s("span",{style:{color:"#ADBAC7"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#F47067"}},"new"),s("span",{style:{color:"#ADBAC7"}}," BatchFindArgs."),s("span",{style:{color:"#DCBDFB"}},"Builder"),s("span",{style:{color:"#ADBAC7"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    ."),s("span",{style:{color:"#DCBDFB"}},"addQuery"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil_isVip"'),s("span",{style:{color:"#ADBAC7"}},", List."),s("span",{style:{color:"#DCBDFB"}},"of"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil"'),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#96D0FF"}},'"userInfo:"'),s("span",{style:{color:"#ADBAC7"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    ."),s("span",{style:{color:"#DCBDFB"}},"build"),s("span",{style:{color:"#ADBAC7"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        List"),s("span",{style:{color:"#F69D50"}},"<"),s("span",{style:{color:"#F47067"}},"DexMethodDescriptor"),s("span",{style:{color:"#F69D50"}},"> "),s("span",{style:{color:"#ADBAC7"}},"result"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," Objects."),s("span",{style:{color:"#DCBDFB"}},"requireNonNull"),s("span",{style:{color:"#ADBAC7"}},"(resultMap."),s("span",{style:{color:"#DCBDFB"}},"get"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#96D0FF"}},'"VipCheckUtil_isVip"'),s("span",{style:{color:"#ADBAC7"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"assert"),s("span",{style:{color:"#ADBAC7"}}," result."),s("span",{style:{color:"#DCBDFB"}},"size"),s("span",{style:{color:"#ADBAC7"}},"() "),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"1"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        DexMethodDescriptor"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#ADBAC7"}},"descriptor"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," result."),s("span",{style:{color:"#DCBDFB"}},"get"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        Method"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#ADBAC7"}},"isVipMethod"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," descriptor."),s("span",{style:{color:"#DCBDFB"}},"get"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            ."),s("span",{style:{color:"#DCBDFB"}},"getMethodInstance"),s("span",{style:{color:"#ADBAC7"}},"(HostInfo."),s("span",{style:{color:"#DCBDFB"}},"getHostClassLoader"),s("span",{style:{color:"#ADBAC7"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        XposedBridge."),s("span",{style:{color:"#DCBDFB"}},"hookMethod"),s("span",{style:{color:"#ADBAC7"}},"(isVipMethod, XC_MethodReplacement."),s("span",{style:{color:"#DCBDFB"}},"returnConstant"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"true"),s("span",{style:{color:"#ADBAC7"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("p",null,"怎么样？是不是很简单！",-1);function d(F,u){const e=a("CodeGroupItem"),c=a("CodeGroup");return r(),p("div",null,[y,n(c,null,{default:o(()=>[n(e,{title:"kotlin"},{default:o(()=>[D]),_:1}),n(e,{title:"java"},{default:o(()=>[B]),_:1})]),_:1}),C])}const v=t(A,[["render",d],["__file","index.html.vue"]]);export{v as default};
