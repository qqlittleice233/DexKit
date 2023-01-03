import{_ as l,M as e,p as o,q as p,R as s,t as n,N as c,a1 as t}from"./framework-96b046e1.js";const r={},i=t(`<h1 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h1><p>现在我们有这样一个示例 APP:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> com.luckypray.dexkit.demo;</span></span>
<span class="line"><span style="color:#768390;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">DemoActivity</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">extends</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">ComponentActivity</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> String</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">TAG</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;DemoActivity&quot;</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">mCount</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Override</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">protected</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(@</span><span style="color:#F47067;">Nullable</span><span style="color:#ADBAC7;"> Bundle </span><span style="color:#F69D50;">savedInstanceState</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(savedInstanceState);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">setContentView</span><span style="color:#ADBAC7;">(R.layout.activity_demo);</span></span>
<span class="line"><span style="color:#ADBAC7;">        Toast</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">toast</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Toast</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        toast.</span><span style="color:#DCBDFB;">setText</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;Hello World&quot;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        toast.</span><span style="color:#DCBDFB;">show</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">        mCount </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">sum</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">sum</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">a</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">b</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">int</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">c</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;">  a </span><span style="color:#F47067;">+</span><span style="color:#ADBAC7;"> b;</span></span>
<span class="line"><span style="color:#ADBAC7;">        Log.</span><span style="color:#DCBDFB;">i</span><span style="color:#ADBAC7;">(TAG, </span><span style="color:#96D0FF;">&quot;sum: &quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">+</span><span style="color:#ADBAC7;"> c);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> c;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Override</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">protected</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onDestroy</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onDestroy</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们来分析一下有哪些信息:</p><ul><li>字符串常量: <code>Hello World</code>, <code>DemoActivity</code>, <code>sum: </code></li><li>类: <code>DemoActivity</code>, <code>Toast</code>, <code>AppCompatActivity</code>, <code>Log</code>, <code>Bundle</code></li><li>方法: <code>sum()</code>, <code>onCreate()</code>, <code>onDestroy()</code>, <code>setContentView()</code>, <code>setText()</code>, <code>show()</code>, <code>i()</code>, <code>new Toast()</code></li><li>字段: <code>mCount</code>, <code>TAG</code></li></ul><p>现在我们来尝试一下使用 <code>DexKit</code> 来查找这些信息。</p><h2 id="查找使用字符串的类" tabindex="-1"><a class="header-anchor" href="#查找使用字符串的类" aria-hidden="true">#</a> 查找使用字符串的类</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">DexKitBridge</span><span style="color:#ADBAC7;">.create(</span><span style="color:#96D0FF;">&quot;demo.apk&quot;</span><span style="color:#ADBAC7;">)?.use { bridge</span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> deobfMap </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">mapOf</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#96D0FF;">&quot;DemoActivity&quot;</span><span style="color:#ADBAC7;"> to </span><span style="color:#6CB6FF;">setOf</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;DemoActivity&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;Hello World&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;sum: &quot;</span><span style="color:#ADBAC7;">),</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#96D0FF;">&quot;NotFoundActivity&quot;</span><span style="color:#ADBAC7;"> to </span><span style="color:#6CB6FF;">setOf</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;DemoActivity&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;Hello World&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;sum: &quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;not found&quot;</span><span style="color:#ADBAC7;">),</span></span>
<span class="line"><span style="color:#ADBAC7;">    )</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> result </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> bridge.batchFindClassesUsingStrings(</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">BatchFindArgs</span><span style="color:#ADBAC7;">.build {</span></span>
<span class="line"><span style="color:#ADBAC7;">            setQueryMap(deobfMap)</span></span>
<span class="line"><span style="color:#ADBAC7;">            advancedMatch </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    )</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">assert</span><span style="color:#ADBAC7;">(result.size </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    result.forEach { (tagName, searchList) </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;$tagName -&gt; [</span><span style="color:#6CB6FF;">\${searchList.joinToString(</span><span style="color:#96D0FF;">&quot;, &quot;</span><span style="color:#6CB6FF;">, </span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">\\&quot;</span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">, </span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">\\&quot;</span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">)}</span><span style="color:#96D0FF;">]&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们得到如下输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">DemoActivity -&gt; [&quot;com.luckypray.dexkit.demo.DemoActivity&quot;]</span></span>
<span class="line"><span style="color:#adbac7;">NotFoundActivity -&gt; []</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找使用字符串的方法" tabindex="-1"><a class="header-anchor" href="#查找使用字符串的方法" aria-hidden="true">#</a> 查找使用字符串的方法</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">DexKitBridge</span><span style="color:#ADBAC7;">.create(</span><span style="color:#96D0FF;">&quot;&quot;</span><span style="color:#ADBAC7;">)?.use { bridge </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">listOf</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;^Hello&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;^Hello World&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;World$&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;Hello World&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;llo Wor&quot;</span><span style="color:#ADBAC7;">).forEach {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> result </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> bridge.findMethodUsingString(</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#F69D50;">MethodUsingStringArgs</span><span style="color:#ADBAC7;">.build {</span></span>
<span class="line"><span style="color:#ADBAC7;">                usingString </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.tencent.mm&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">                advancedMatch </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        )</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">assert</span><span style="color:#ADBAC7;">(result.size </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">assert</span><span style="color:#ADBAC7;">(result.first().descriptor </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;onCreate(Landroid/os/Bundle;)V&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;all test pass&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们得到如下输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">all test pass</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查找对mcount字段进行赋值的方法" tabindex="-1"><a class="header-anchor" href="#查找对mcount字段进行赋值的方法" aria-hidden="true">#</a> 查找对<code>mCount</code>字段进行赋值的方法</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">DexKitBridge</span><span style="color:#ADBAC7;">.create(</span><span style="color:#96D0FF;">&quot;&quot;</span><span style="color:#ADBAC7;">)?.use { bridge </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> result </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> bridge.findMethodUsingField(</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#F69D50;">MethodUsingFieldArgs</span><span style="color:#ADBAC7;">.build {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.fieldDeclareClass </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;Lcom/luckypray/dexkit/demo/DemoActivity;&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.fieldName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;mCount&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.fieldType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;int&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.usingType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FieldUsingType</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">PUT</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        )</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">assert</span><span style="color:#ADBAC7;">(result.size </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">        result.forEach { (callerMethod, fieldList) </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;caller method: $callerMethod -&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">            fieldList.forEach { field </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">\\t</span><span style="color:#96D0FF;"> $field&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们得到如下输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">caller method: Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;onCreate(Landroid/os/Bundle;)V -&gt;</span></span>
<span class="line"><span style="color:#adbac7;">    Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;mCount:I</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找oncreate方法调用了哪些方法" tabindex="-1"><a class="header-anchor" href="#查找oncreate方法调用了哪些方法" aria-hidden="true">#</a> 查找<code>onCreate</code>方法调用了哪些方法</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">DexKitBridge</span><span style="color:#ADBAC7;">.create(</span><span style="color:#96D0FF;">&quot;&quot;</span><span style="color:#ADBAC7;">)?.use { bridge </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> result </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> bridge.findMethodInvoking(</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">MethodInvokingArgs</span><span style="color:#ADBAC7;">.build {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.methodDescriptor </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;onCreate(Landroid/os/Bundle;)V&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    )</span></span>
<span class="line"><span style="color:#ADBAC7;">    result.forEach { (methodName, invokingList)</span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;method descriptor: $methodName&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">        invokingList.forEach {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;</span><span style="color:#6CB6FF;">\\t</span><span style="color:#96D0FF;">$it&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们得到如下输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">method descriptor: Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;onCreate(Landroid/os/Bundle;)V</span></span>
<span class="line"><span style="color:#adbac7;">    Landroidx/activity/ComponentActivity;-&gt;onCreate(Landroid/os/Bundle;)V</span></span>
<span class="line"><span style="color:#adbac7;">    Landroidx/activity/ComponentActivity;-&gt;setContentView(I)V</span></span>
<span class="line"><span style="color:#adbac7;">    Landroid/widget/Toast;-&gt;&lt;init&gt;(Landroid/content/Context;)V</span></span>
<span class="line"><span style="color:#adbac7;">    Landroid/widget/Toast;-&gt;setText(Ljava/lang/CharSequence;)V</span></span>
<span class="line"><span style="color:#adbac7;">    Landroid/widget/Toast;-&gt;show()V</span></span>
<span class="line"><span style="color:#adbac7;">    Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;sum(II)I</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找方法被哪些方法调用" tabindex="-1"><a class="header-anchor" href="#查找方法被哪些方法调用" aria-hidden="true">#</a> 查找方法被哪些方法调用</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">DexKitBridge</span><span style="color:#ADBAC7;">.create(</span><span style="color:#96D0FF;">&quot;&quot;</span><span style="color:#ADBAC7;">)?.use { bridge </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> result </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> bridge.findMethodCaller(</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">MethodCallerArgs</span><span style="color:#ADBAC7;">.build {</span></span>
<span class="line"><span style="color:#ADBAC7;">            methodReturnType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;int&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">            methodParameterTypes </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> arrayOf(</span><span style="color:#96D0FF;">&quot;int&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;I&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">            methodDeclareClass </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.luckypray.dexkit.demo.DemoActivity&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    )</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">assert</span><span style="color:#ADBAC7;">(result.size </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">println</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;result: &quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">+</span><span style="color:#ADBAC7;"> result.first())</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们得到如下输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">result: Lcom/luckypray/dexkit/demo/DemoActivity;-&gt;onCreate(Landroid/os/Bundle;)V</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),d={href:"https://luckypray.org/DexKit-Doc/dexkit/io.luckypray.dexkit/-dex-kit-bridge/index.html",target:"_blank",rel:"noopener noreferrer"};function y(A,D){const a=e("ExternalLinkIcon");return o(),p("div",null,[i,s("blockquote",null,[s("p",null,[n("所有API均可在 "),s("a",d,[n("API 文档"),c(a)]),n(" 中进行查阅，你可以对API进行组合调用以获取你需要的结果。")])])])}const v=l(r,[["render",y],["__file","example.html.vue"]]);export{v as default};
