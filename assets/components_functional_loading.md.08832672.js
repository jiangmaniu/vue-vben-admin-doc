import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"Loading","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useLoading","slug":"useloading"},{"level":3,"title":"UseLoadingOptions","slug":"useloadingoptions"},{"level":3,"title":"LoadingProps","slug":"loadingprops"},{"level":3,"title":"返回值","slug":"返回值"}],"relativePath":"components/functional/loading.md","lastUpdated":1626860135912}',p={},o=s('<h1 id="loading"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h1><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapEl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadingRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading-tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>加载中...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>函数方式<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-4 mr-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openFnFullLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>全屏 Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openFnWrapLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>容器内 Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> useLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Loading&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>openFullLoading<span class="token punctuation">,</span> closeFullLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        tip<span class="token operator">:</span> <span class="token string">&#39;加载中...&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>openWrapLoading<span class="token punctuation">,</span> closeWrapLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        target<span class="token operator">:</span> wrapEl<span class="token punctuation">,</span>\n        props<span class="token operator">:</span> <span class="token punctuation">{</span>\n          tip<span class="token operator">:</span> <span class="token string">&#39;加载中...&#39;</span><span class="token punctuation">,</span>\n          absolute<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">function</span> <span class="token function">openFnFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">openFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">closeFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">function</span> <span class="token function">openFnWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">openWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">closeWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        openFnFullLoading<span class="token punctuation">,</span>\n        openFnWrapLoading<span class="token punctuation">,</span>\n        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>compState<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="useloading"><a class="header-anchor" href="#useloading" aria-hidden="true">#</a> useLoading</h2><p>使用</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Loading&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> close<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span>opt<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>LoadingProps<span class="token operator">&gt;</span> <span class="token operator">|</span> Partial<span class="token operator">&lt;</span>UseLoadingOptions<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="useloadingoptions"><a class="header-anchor" href="#useloadingoptions" aria-hidden="true">#</a> UseLoadingOptions</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>target</td><td><code>HTMLElement or Ref&lt;HTMLElement&gt;</code></td><td>-</td><td>-</td><td>挂载的 dom 节点</td></tr><tr><td>props</td><td><code>LoadingProps</code></td><td>-</td><td>-</td><td>loading 组件参数</td></tr></tbody></table><h3 id="loadingprops"><a class="header-anchor" href="#loadingprops" aria-hidden="true">#</a> LoadingProps</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>tip</td><td><code>string</code></td><td>-</td><td>-</td><td>加载文本</td></tr><tr><td>size</td><td><code>default, small , large</code></td><td><code>default</code></td><td>-</td><td>大小</td></tr><tr><td>absolute</td><td><code>boolean</code></td><td>false</td><td>-</td><td>绝对定位，为 <code>false</code> 时可以全屏</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>-</td><td>-</td><td>当前加载状态</td></tr><tr><td>background</td><td><code>string</code></td><td>-</td><td>-</td><td>背景色，</td></tr><tr><td>theme</td><td><code>&#39;dark&#39; or &#39;light&#39;</code></td><td><code>light</code></td><td>-</td><td>背景色主题 ，当背景色不为空时使用背景色</td></tr></tbody></table><h3 id="返回值"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3><p><strong>open</strong></p><p>打开 loading</p><p><strong>close</strong></p><p>关闭 loading</p>',15);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};
