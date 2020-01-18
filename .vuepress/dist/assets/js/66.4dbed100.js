(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{257:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"koa-helmet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#koa-helmet"}},[e._v("#")]),e._v(" koa-helmet")]),e._v(" "),r("p",[e._v("主要是通过 npm 包 helemt 来实现开发者的应用程序更加安全。")]),e._v(" "),r("p",[e._v("helemt 主要是与另一个著名的 node.js Web 应该框架 Express 搭配使用。\n现在是通过一个函数 koaHelmetPromisify 来使用，具体的写法对我来说有点小惊讶，有兴趣的小伙伴可以去看看。\nhelment 通过设置 Http 头来使应用程序更加安全:")]),e._v(" "),r("p",[e._v("Content-Security-Policy : 内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。(参考 1、参考 2)")]),e._v(" "),r("p",[e._v("X-DNS-Prefetch-Control : 控制着浏览器的 DNS 预读取功能。 DNS 预读取是一项使浏览器主动去执行域名解析的功能，其范围包括文档的所有链接，无论是图片的，CSS 的，还是 JavaScript 等其他用户能够点击的 URL。(参考 1、参考 2、参考 3)")]),e._v(" "),r("p",[e._v("Expect-CT : 允许站点选择性报告和/或执行证书透明度 (Certificate Transparency) 要求，来防止错误签发的网站证书的使用不被察觉。当站点启用 Expect-CT 头，就是在请求浏览器检查该网站的任何证书是否出现在公共证书透明度日志之中。(参考 1、参考 2)")]),e._v(" "),r("p",[e._v("Feature-Policy : 标头提供了一种机制，允许和拒绝在其自己的框架中以及嵌入的 iframe 中使用浏览器功能。(参考 1、参考 2、参考 3)")]),e._v(" "),r("p",[e._v("X-Frame-Options : 用来给浏览器指示允许一个页面可否在 frame, < iframe > 或者 < object > 中展现的标记。网站可以使用此功能，来确保自己网站的内容没有被嵌到别人的网站中去，也从而避免了点击劫持 (clickjacking) 的攻击。(参考)")]),e._v(" "),r("p",[e._v("X-Powered-By : 表明用于支持当前网页应用程序的技术 (例如：PHP)。(参考)")]),e._v(" "),r("p",[e._v("Public-Key-Pins : 是一种安全功能，它告诉 Web 客户端将特定加密公钥与某个 Web 服务器相关联，以降低使用伪造证书进行 MITM 攻击的风险。(参考 1、参考 2)")]),e._v(" "),r("p",[e._v("Strict-Transport-Security : 是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源，而不是 HTTP。(参考 1、参考 2、参考 3)")]),e._v(" "),r("p",[e._v("X-Download-Options : 设置 noopen 为阻止 IE8 以上的用户在您的站点上下文中执行下载，指示浏览器不要直接在浏览器中打开下载，而是仅提供“保存”选项。(参考)")]),e._v(" "),r("p",[e._v("Cache-Control : 通用消息头字段被用于在 http 请求和响应中通过指定指令来实现缓存机制。缓存指令是单向的, 这意味着在请求设置的指令，在响应中不一定包含相同的指令。(参考)")]),e._v(" "),r("p",[e._v("Pragma : 是一个在 HTTP/1.0 中规定的通用首部，这个首部的效果依赖于不同的实现，所以在“请求-响应”链中可能会有不同的效果。它用来向后兼容只支持 HTTP/1.0 协议的缓存服务器，与")]),e._v(" "),r("p",[e._v("Cache-Control: no-cache 效果一致。强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证。(参考)")]),e._v(" "),r("p",[e._v("Expires : 响应头包含日期/时间， 即在此时候之后，响应过期。(参考)")]),e._v(" "),r("p",[e._v("Surrogate-Control : 通过检查来自源服务器的响应中的缓存头来确定要缓存的内容。(参考 1、参考 2)")]),e._v(" "),r("p",[e._v("X-Content-Type-Options : 被服务器用来提示客户端一定要遵循在 Content-Type 首部中对 MIME 类型 的设定，而不能对其进行修改。这就禁用了客户端的 MIME 类型嗅探行。(参考 1、参考 2")]),e._v(" "),r("p",[e._v("X-Permitted-Cross-Domain-Policies : 为 Web 客户端提供了跨域处理数据的权限 (如 Adobe Flash 或 Adobe Acrobat)。(参考)")]),e._v(" "),r("p",[e._v("Referrer-Policy : 首部用来监管哪些访问来源信息，会在 Referer 中发送，应该被包含在生成的请求当中。(参考 1、参考 2)")]),e._v(" "),r("p",[e._v("X-XSS-Protection : 当检测到跨站脚本攻击 (XSS) 时，浏览器将停止加载页面。(参考 1,参考 2)\n从这么多的 Http 头中看出，使用 helemt 对应用程序的安全性有了极大的保障。但也有一些不是必须的，就可以使用如 helmet.contentSecurityPolicy 单独来设置 Http 头。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5bd1e6136fb9a05d0a057316",target:"_blank",rel:"noopener noreferrer"}},[e._v("koa-helmet：设置 HTTP 头保障应用程序安全"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);