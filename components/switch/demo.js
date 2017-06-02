webpackJsonp([21,157],{571:function(n,s){n.exports={content:[["p","\u6ed1\u52a8\u5f00\u5173. (",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form \u6587\u6863"],")"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/switch/demo/basic.md",id:"components-switch-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> SwitchExample <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldProps <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n      <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u8868\u5355\u5f00\u5173\u9879\'</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch1\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\u9ed8\u8ba4\u5f00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch2\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\u9ed8\u8ba4\u5173<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch3\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">disabled</span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\u9ed8\u8ba4\u5173\u4e0d\u53ef\u4fee\u6539<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch4\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">disabled</span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\u9ed8\u8ba4\u5f00\u4e0d\u53ef\u4fee\u6539<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch5\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>Android\u5e73\u53f0\u6837\u5f0f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n          <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch6\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">></span>iOS\u5e73\u53f0\u6837\u5f0f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nSwitchExample <span class="token operator">=</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>SwitchExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwitchExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},653:function(n,s,a){n.exports={basic:a(571)}}});