import{_ as c,M as a,p as r,q as p,N as e,V as o,a1 as i,R as s,t as l}from"./framework-96b046e1.js";const A={},y=i(`<h1 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> Introduce</h1><blockquote><p>A high-performance runtime parsing library for dex implemented in C++, used for lookup of obfuscated classes, methods, or properties.</p></blockquote><h2 id="supported-functions" tabindex="-1"><a class="header-anchor" href="#supported-functions" aria-hidden="true">#</a> Supported functions</h2><ul><li>Batch search for methods/classes with specified string</li><li>Find methods/classes that use a specified string</li><li>Method call/called search</li><li>Direct subclass search</li><li>Method multi-condition search</li><li>Opcode sequence search (standard dex instructions only)</li><li>Annotation search (currently only supports search for string values)</li></ul><h2 id="used-demo" tabindex="-1"><a class="header-anchor" href="#used-demo" aria-hidden="true">#</a> Used Demo</h2><h4 id="demo-app-code" tabindex="-1"><a class="header-anchor" href="#demo-app-code" aria-hidden="true">#</a> Demo App code</h4><blockquote><p>This is a host app&#39;s obfuscated code, and we need to dynamically adapt the hook for this method. Due to obfuscation, the method name and class name may change with each version.</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">abc</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">boolean</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">cvc</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">boolean</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">b</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        Log.</span><span style="color:#DCBDFB;">d</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;VipCheckUtil&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;info: xxxx&quot;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> b;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dexkit can quickly meet our needs at this point.</p><h4 id="xposed-hook-code" tabindex="-1"><a class="header-anchor" href="#xposed-hook-code" aria-hidden="true">#</a> Xposed hook code</h4><blockquote><p>By creating an instance of <code>DexKitBridge</code>, we can search for specific dex in the APP, but remember to only instantiate it once and avoid repeating the creation. And after using it, we need to call the <code>DexKitBridge.close()</code> method to release the memory, otherwise it will cause memory leakage.</p></blockquote>`,11),d=s("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"@Throws"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F69D50"}},"NoSuchMethodException"),s("span",{style:{color:"#ADBAC7"}},"::"),s("span",{style:{color:"#6CB6FF"}},"class"),s("span",{style:{color:"#ADBAC7"}},")")]),l(`
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
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("div",{class:"language-java line-numbers-mode","data-ext":"java"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"public"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"void"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"vipHook"),s("span",{style:{color:"#ADBAC7"}},"() throws NoSuchMethodException {")]),l(`
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
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("p",null,"How about that? Isn't it easy!",-1),C=s("p",null,[l("Now, with the powerful performance of "),s("code",null,"DexKit"),l(", you can quickly locate obfuscation.")],-1),u=s("p",null,[l("Next, let's learn how to use "),s("code",null,"DexKit"),l(".")],-1);function h(F,m){const n=a("CodeGroupItem"),t=a("CodeGroup");return r(),p("div",null,[y,e(t,null,{default:o(()=>[e(n,{title:"kotlin"},{default:o(()=>[d]),_:1}),e(n,{title:"java"},{default:o(()=>[D]),_:1})]),_:1}),B,C,u])}const v=c(A,[["render",h],["__file","home.html.vue"]]);export{v as default};
