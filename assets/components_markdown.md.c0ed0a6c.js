import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"Markdown","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"Methods","slug":"methods"}],"relativePath":"components/markdown.md","lastUpdated":1626860135912}',p={},o=s('<h1 id="markdown"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1><p>基于 <a href="https://github.com/Vanessa219/vditor" target="_blank" rel="noopener noreferrer">Vditor</a> 的 MarkDown 编辑器</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>黑暗主题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MarkDown</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markDownRef<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> MarkDown<span class="token punctuation">,</span> MarkDownActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Markdown&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> MarkDown <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> markDownRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>MarkDownActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> valueRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n# title\n\n# content\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">function</span> <span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> markDown <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>markDownRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>markDown<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> vditor <span class="token operator">=</span> markDown<span class="token punctuation">.</span><span class="token function">getVditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        vditor<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        value<span class="token operator">:</span> valueRef<span class="token punctuation">,</span>\n        toggleTheme<span class="token punctuation">,</span>\n        markDownRef<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>除以下两个外，props 还可以传入 vidtor 的所有属性。可用 v-bind 统一绑定</p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td><code>string</code></td><td>-</td><td>-</td><td>双向绑定文本值</td></tr><tr><td>height</td><td><code>number</code></td><td>-</td><td>-</td><td>高度</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>getVditor</td><td><code>Function</code></td><td>获取 vditor 实例</td></tr></tbody></table>',9);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};
