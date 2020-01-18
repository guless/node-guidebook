(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{258:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net"}},[t._v("#")]),t._v(" Net")]),t._v(" "),a("p",[t._v("net 模块提供了用于底层网络通信的工具，包含创建服务器/客户端的方法。")]),t._v(" "),a("p",[t._v("若传输的数据交互不通过 HTTP 协议，则可以使用 net 模块，如 WebSocket。")]),t._v(" "),a("p",[t._v("HTTP 协议本质上是以文本形式传输数据，它的传输数据量较大，而且它的传输需要二进制和文本之间进行转换和解析。")]),t._v(" "),a("p",[t._v("在 NodeJS 中，http 模块是继承自 net 模块的。")]),t._v(" "),a("p",[t._v("从组成来看，net 模块主要包含两部分：")]),t._v(" "),a("ul",[a("li",[t._v("net.Server：TCP Server，内部通过 socket 来实现与客户端的通信")]),t._v(" "),a("li",[t._v("net.Socket：TCP/本地 socket 的 Node 版实现，它实现了全双工的 Stream 接口")])]),t._v(" "),a("h2",{attrs:{id:"服务端-net-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端-net-server"}},[t._v("#")]),t._v(" 服务端 net.Server")]),t._v(" "),a("p",[t._v("net.Server 通常用于创建一个 TCP 或本地服务器。")]),t._v(" "),a("h3",{attrs:{id:"相关事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关事件"}},[t._v("#")]),t._v(" 相关事件")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("net.createServer()")]),t._v(" 创建的服务器为 EventEmitter 实例，它的定义事件有如下几种：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("listening")]),t._v("：当调用 "),a("code",[t._v("server.listen()")]),t._v(" 绑定服务器之后触发")]),t._v(" "),a("li",[a("code",[t._v("connection")]),t._v("：当新的连接建立时触发。socket 是一个 "),a("code",[t._v("net.Socket")]),t._v(" 实例。")]),t._v(" "),a("li",[a("code",[t._v("close")]),t._v("：当服务器关闭时触发。如果连接存在，直到所有的连接结束才会触发该事件。")]),t._v(" "),a("li",[a("code",[t._v("error")]),t._v("：当服务器发生异常时触发。不同于 "),a("code",[t._v("net.Socket")]),t._v("，"),a("code",[t._v("close")]),t._v(" 事件不会在该事件触发后继续触发，除非 "),a("code",[t._v("server.close()")]),t._v(" 是手动调用。")])]),t._v(" "),a("h3",{attrs:{id:"server-listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-listen"}},[t._v("#")]),t._v(" server.listen")]),t._v(" "),a("h4",{attrs:{id:"端口监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口监听"}},[t._v("#")]),t._v(" 端口监听")]),t._v(" "),a("p",[t._v("监听指定端口 port 和 主机 host ac 连接。 默认情况下 host 接受任何 IPv4 地址（INADDR_ANY）的直接连接。端口 port 为 0 时，则会分配一个随机端口。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("backlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"路径监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径监听"}},[t._v("#")]),t._v(" 路径监听")]),t._v(" "),a("p",[t._v("通过指定路径（path）的连接，启动一个本地 socket 服务器。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"句柄监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#句柄监听"}},[t._v("#")]),t._v(" 句柄监听")]),t._v(" "),a("p",[t._v("通过指定句柄连接。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("backlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"配置监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置监听"}},[t._v("#")]),t._v(" 配置监听")]),t._v(" "),a("p",[t._v("options 的属性：")]),t._v(" "),a("ul",[a("li",[t._v("端口 port")]),t._v(" "),a("li",[t._v("主机 host")]),t._v(" "),a("li",[t._v("backlog")]),t._v(" "),a("li",[t._v("callback 回调函数（可选参数）")])]),t._v(" "),a("p",[t._v("相当于调用 "),a("code",[t._v("server.listen(port,[host],[backlog],[callback])")]),t._v("。还有，参数 path 可以用来指定 UNIX socket。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"server-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-close"}},[t._v("#")]),t._v(" server.close")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("关闭服务器，停止接收新的客户端请求。")]),t._v(" "),a("ul",[a("li",[t._v("对正在处理中的客户端请求，服务端会等待它们处理完（或超时），然后再正式关闭")]),t._v(" "),a("li",[t._v("正常关闭的同时，"),a("code",[t._v("callback")]),t._v(" 会被执行，同时会触发 "),a("code",[t._v("close")]),t._v(" 事件")]),t._v(" "),a("li",[t._v("异常关闭的同时，"),a("code",[t._v("callback")]),t._v(" 也会执行，同时将对应的 "),a("code",[t._v("error")]),t._v(" 作为参数传入。（比如还没调用 "),a("code",[t._v("server.listen(port)")]),t._v(" 之前），就调用了 "),a("code",[t._v("server.close()")])])]),t._v(" "),a("h2",{attrs:{id:"客户端-net-socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端-net-socket"}},[t._v("#")]),t._v(" 客户端 net.Socket")]),t._v(" "),a("h3",{attrs:{id:"相关事件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关事件-2"}},[t._v("#")]),t._v(" 相关事件")]),t._v(" "),a("p",[t._v("服务器可以同时与多个客户端保持连接，对于每个连接而言是典型的可写可读 Stream 对象。Stream 对象可以用于服务器端和客户端之间的通信，既可以通过 "),a("code",[t._v("data")]),t._v(" 事件从一端读取另一端发来的数据，也可以通过 "),a("code",[t._v("write()")]),t._v(" 方法从一端向另一端发送数据。它具有如下自定义事件：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("connect")]),t._v("：当客户端与服务端成功建立链接之后触发，如果链接不上服务器直接抛出 error 事件错误然后退出 Node 进程。")]),t._v(" "),a("li",[a("strong",[t._v("data")]),t._v("：当客户端收到服务器传送过来的数据或者是客户端传送给服务器的数据的时候触发回调。")]),t._v(" "),a("li",[a("strong",[t._v("end")]),t._v("：当另外一侧发送 FIN 包断开的时候触发，默认情况下 ("),a("code",[t._v("allowHalfOpen == false")]),t._v(")，socket 会自我销毁（如果写入待处理队列里面还没正式响应回包），但是我们可以设置 "),a("code",[t._v("allowHalfOpen")]),t._v(" 参数为 "),a("code",[t._v("true")]),t._v("，这样可以继续往该 socket 里面写数据，但是我们需要自己去调用 "),a("code",[t._v("end")]),t._v(" 方法去消耗这个 socket，不然可能会造成句柄泄漏。")]),t._v(" "),a("li",[a("strong",[t._v("close")]),t._v("：链接断开的时候触发，但是如果在传输的过程中有错误的话这里会在回调函数里面抛出 "),a("code",[t._v("error")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("timeout")]),t._v("：socket 超时空闲的时候触发，如果要在队列里面销毁需要手动去调 close 方法。")]),t._v(" "),a("li",[a("strong",[t._v("lookup")]),t._v("：域名解析完成的时候触发。")]),t._v(" "),a("li",[a("strong",[t._v("drain")]),t._v("：写完缓存的时候触发，可使用在上传大小限制中。")]),t._v(" "),a("li",[a("strong",[t._v("ready")]),t._v("：socket 准备好使用时触发")]),t._v(" "),a("li",[a("strong",[t._v("error")]),t._v("：当发生异常时触发该事件")])]),t._v(" "),a("h3",{attrs:{id:"相关方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关方法"}},[t._v("#")]),t._v(" 相关方法")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("address()")]),t._v("：获取服务绑定的 socket 的 IP 地址，返回对象有三个属性，分别为端口（port）、绑定地址（address）以及 IPvX 版本（family）。")]),t._v(" "),a("li",[a("strong",[t._v("connect()")]),t._v("：在给定的套接字上启动一个连接。该方法是异步的。当建立的时候，"),a("code",[t._v("connect")]),t._v(" 事件将会被触发。如果连接中出现问题，"),a("code",[t._v("error")]),t._v(" 事件将会代替 "),a("code",[t._v("connect")]),t._v(" 事件被触发，并将错误信息传递给 "),a("code",[t._v("error")]),t._v(" 监听器。最后一个 "),a("code",[t._v("connectListener")]),t._v("，如果指定了，将会被添加为 "),a("code",[t._v("connect")]),t._v(" 事件的监听器。\n"),a("ul",[a("li",[a("strong",[t._v("connect(options[,connectListener])")])]),t._v(" "),a("li",[a("strong",[t._v("connect(path[,connectListener])")]),t._v("：用于 IPC 连接")]),t._v(" "),a("li",[a("strong",[t._v("connect(port[,host][,connectlistener])")]),t._v("：用于 TCP 连接")])])]),t._v(" "),a("li",[a("strong",[t._v("write(data[,encoding][,callback])")]),t._v("：服务端给客户端发送数据或者是客户端给服务端发送数据。如果全部数据都成功刷新到内核的缓冲则返回 "),a("code",[t._v("true")]),t._v("。如果全部或部分数据在用户内中排队，则返回 "),a("code",[t._v("false")]),t._v("。当缓冲再次空闲的时候将触发 "),a("code",[t._v("drain")]),t._v(" 时间。")]),t._v(" "),a("li",[a("strong",[t._v("pause()")]),t._v("：暂停读写数据。也就是说，"),a("code",[t._v("data")]),t._v(" 事件将不会再被触发。可以用作对数据上传限制。")]),t._v(" "),a("li",[a("strong",[t._v("resume()")]),t._v("：恢复数据读取。")]),t._v(" "),a("li",[a("strong",[t._v("end([data][,encoding][,callback])")]),t._v("：半关闭 socket。例如发送一个 FIN 包，服务器仍然可能发送一些数据。如果指定 "),a("code",[t._v("data")]),t._v(" 参数，则相当于调用 "),a("code",[t._v("socket.write(data, encoding)")]),t._v(" 之后再调用 "),a("code",[t._v("socket.end()")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("destroy([encoding])")]),t._v("：确保在该 socket 上不再有 I/O 活动。仅在出现错误的时候才需要（如解析错误等）。如果制定了 exception，则将会触发一个 "),a("code",[t._v("error")]),t._v(" 事件，任何监听器都将收到 "),a("code",[t._v("exception")]),t._v(" 作为一个参数。")]),t._v(" "),a("li",[a("strong",[t._v("setEncoding()")]),t._v("：设置数据流的编码格式。")]),t._v(" "),a("li",[a("strong",[t._v("setKeepAlive([enable][,initialdelay])")]),t._v("：启用/禁止 keep-alive 长连接功能，并且在第一个长连接探针被发送到一个空闲的 socket 之前可选则配置初始延迟。")]),t._v(" "),a("li",[a("strong",[t._v("setNoDelay([noDelay])")]),t._v("：禁止 Nagele 算法，TCP 链接默认使用 Nagle 算法，它们在发送之前数据会被缓存。这是为 "),a("code",[t._v("true")]),t._v(" 的话在每次 "),a("code",[t._v("socket.write()")]),t._v(" 的时候会立即发送数据，默认为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("setTimeout(timeout[,callback])")]),t._v("：当一个空闲的 socket 在多少秒后不活跃会被接受到 timeout 事件，但是该 socket 连接不会被断开，需要手动调用 "),a("code",[t._v("end()")]),t._v(" 或者 "),a("code",[t._v("destroy()")]),t._v(" 来断开连接。可选的 "),a("code",[t._v("callback")]),t._v(" 参数将会被当作一个时间监听器被添加到 "),a("code",[t._v("timeout")]),t._v(" 事件。")])]),t._v(" "),a("h3",{attrs:{id:"相关属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关属性"}},[t._v("#")]),t._v(" 相关属性")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("bufferSize")]),t._v("：当前缓存的等待被发送的字符串的数量")]),t._v(" "),a("li",[a("strong",[t._v("bytesRead")]),t._v("：收到的字节的数量")]),t._v(" "),a("li",[a("strong",[t._v("bytesWritten")]),t._v("：发送的字节的数量")]),t._v(" "),a("li",[a("strong",[t._v("destroyed")]),t._v("：标识链接是否已经被破坏，一旦被破坏，就不用使用该链接来传输数据")]),t._v(" "),a("li",[a("strong",[t._v("localAddress")]),t._v("：远程客户端链接本地地址的 host。如果我们监听的服务的 host 是 "),a("code",[t._v("0.0.0.0")]),t._v("，而客户端链接是 "),a("code",[t._v("192.168.1.1")]),t._v("，最后的值是后者")]),t._v(" "),a("li",[a("strong",[t._v("localPort")]),t._v("：本地的端口")]),t._v(" "),a("li",[a("strong",[t._v("remoteAddress")]),t._v("：客户端 IP，如果 socket 已经是 destroyed 的话，该值为 "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("strong",[t._v("remoteFamily")]),t._v("：客户端是 IPvX")])]),t._v(" "),a("h2",{attrs:{id:"沾包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#沾包"}},[t._v("#")]),t._v(" 沾包")]),t._v(" "),a("p",[t._v("默认情况下，TCP 连接会启用延迟传送算法 (Nagle 算法), 在数据发送之前缓存他们。如果短时间有多个数据发送, 会缓冲到一起作一次发送（缓冲大小见 "),a("code",[t._v("socket.bufferSize")]),t._v("）, 这样可以减少 I/O 消耗提高性能。")]),t._v(" "),a("p",[t._v("如果是传输文件的话，那么根本不用处理粘包的问题，来一个包拼一个包就好了。但是如果是多条消息，或者是别的用途的数据那么就需要处理粘包。")]),t._v(" "),a("p",[t._v("可以参见网上流传比较广的一个例子，连续调用两次 "),a("code",[t._v("send")]),t._v(" 分别发送两段数据 "),a("code",[t._v("data1")]),t._v(" 和 "),a("code",[t._v("data2")]),t._v(", 在接收端有以下几种常见的情况：")]),t._v(" "),a("ul",[a("li",[t._v("A. 先接收到 "),a("code",[t._v("data1")]),t._v(", 然后接收到 "),a("code",[t._v("data2")])]),t._v(" "),a("li",[t._v("B. 先接收到 "),a("code",[t._v("data1")]),t._v(" 的部分数据, 然后接收到 "),a("code",[t._v("data1")]),t._v(" 余下的部分以及 "),a("code",[t._v("data2")]),t._v(" 的全部.")]),t._v(" "),a("li",[t._v("C. 先接收到了 "),a("code",[t._v("data1")]),t._v(" 的全部数据和 "),a("code",[t._v("data2")]),t._v(" 的部分数据, 然后接收到了 "),a("code",[t._v("data2")]),t._v(" 的余下的数据.")]),t._v(" "),a("li",[t._v("D. 一次性接收到了 "),a("code",[t._v("data1")]),t._v(" 和 "),a("code",[t._v("data2")]),t._v(" 的全部数据.")])]),t._v(" "),a("p",[t._v("其中的 BCD 就是我们常见的粘包的情况. 而对于处理粘包的问题, 常见的解决方案有:")]),t._v(" "),a("ul",[a("li",[t._v("多次发送之前间隔一个等待时间")]),t._v(" "),a("li",[t._v("关闭 Nagle 算法")]),t._v(" "),a("li",[t._v("进行封包/拆包")])]),t._v(" "),a("p",[a("strong",[t._v("方案一")])]),t._v(" "),a("p",[t._v("只需要等上一段时间再进行下一次 "),a("code",[t._v("send")]),t._v(" 就好, 适用于交互频率特别低的场景。缺点也很明显，对于比较频繁的场景而言传输效率实在太低。不过几乎不用做什么处理。")]),t._v(" "),a("p",[a("strong",[t._v("方案二")])]),t._v(" "),a("p",[t._v("关闭 Nagle 算法，在 Node.js 中你可以通过 "),a("code",[t._v("socket.setNoDelay()")]),t._v(" 方法来关闭 Nagle 算法, 让每一次 "),a("code",[t._v("send")]),t._v(" 都不缓冲直接发送。")]),t._v(" "),a("p",[t._v("该方法比较适用于每次发送的数据都比较大（但不是文件那么大），并且频率不是特别高的场景。如果是每次发送的数据量比较小，并且频率特别高的，关闭 Nagle 纯属自废武功。")]),t._v(" "),a("p",[t._v("另外，该方法不适用于网络较差的情况，因为 Nagle 算法是在服务端进行的包合并情况，但是如果短时间内客户端的网络情况不好，或者应用层由于某些原因不能及时将 TCP 的数据 "),a("code",[t._v("recv")]),t._v("，就会造成多个包在客户端缓冲从而粘包的情况。如果是在稳定的机房内部通信那么这个概率是比较小可以选择忽略的。")]),t._v(" "),a("p",[a("strong",[t._v("方案三")])]),t._v(" "),a("p",[t._v("封包/拆包是目前业内常见的解决方案了。即给每个数据包在发送之前，于其前/后放一些有特征的数据，然后收到数据的时候根据特征数据分割出来各个数据包。")]),t._v(" "),a("h2",{attrs:{id:"可靠传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输"}},[t._v("#")]),t._v(" 可靠传输")]),t._v(" "),a("p",[t._v("为每一个发送的数据包分配一个序列号（SYN, Synchronize packet），每一个包在对方收到后要返回一个对应的应答数据包（ACK, Acknowledgement）。发送方如果发现某个包没有被对方 ACK，则会选择重发。接收方通过 SYN 序号来保证数据的不会乱序（reordering），发送方通过 ACK 来保证数据不缺漏，以此参考决定是否重传。关于具体的序号计算, 丢包时的重传机制等可以参见阅读陈皓的 "),a("a",{attrs:{href:"http://coolshell.cn/articles/11564.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《TCP的那些事儿（上）》"),a("OutboundLink")],1),t._v(" 此处不做赘述。")]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("h3",{attrs:{id:"创建-socket-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-socket-服务器"}},[t._v("#")]),t._v(" 创建 Socket 服务器")]),t._v(" "),a("p",[t._v("创建 TCP 服务器，可以通过构造函数和工厂方法实现，两者都会返回一个 "),a("code",[t._v("net.Server")]),t._v(" 类，可接收两个可选参数。")]),t._v(" "),a("ul",[a("li",[t._v("构造函数："),a("code",[t._v("new net.Server")])]),t._v(" "),a("li",[t._v("工厂方法："),a("code",[t._v("net.createServer()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" net "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const server = new net.Server()")]),t._v("\n\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("socket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data from server'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("server is on ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在 listen 监听的时候没有指定端口的话会自动随意监听一个端口，创建完成一个 TCP 服务器后，使用 "),a("code",[t._v("tenlent 0.0.0.0 3000")]),t._v("，链接后可与服务器进行数据通信。通过 "),a("code",[t._v("createServer")]),t._v(" 实例化一个服务后，服务会去监听客户端请求，与客户端建立了链接之后会在回调里面抛出建链的 "),a("code",[t._v("net.Socket")]),t._v(" 对象。")]),t._v(" "),a("p",[t._v("Server 对象的特点：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("createServer")]),t._v(" 是 "),a("code",[t._v("new net.Server")]),t._v(" 的语法糖")]),t._v(" "),a("li",[t._v("Server 对象继承了 EventEmitter，具有事件的相关方法")]),t._v(" "),a("li",[a("code",[t._v("_handle")]),t._v(" 时 Server 处理的句柄，属性值最终由 C++ 部分的 "),a("code",[t._v("TCP")]),t._v(" 和 "),a("code",[t._v("Pipe")]),t._v(" 类创建")]),t._v(" "),a("li",[a("code",[t._v("connectionListener")]),t._v(" 是 connection 事件回调函数的语法糖")])]),t._v(" "),a("h3",{attrs:{id:"创建-socket-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-socket-客户端"}},[t._v("#")]),t._v(" 创建 Socket 客户端")]),t._v(" "),a("p",[t._v("创建一个 TCP 客户端，同样可以采用构造函数和工厂方法实现，创建成功后都会返回一个 "),a("code",[t._v("net.Socket")]),t._v(" 实例。")]),t._v(" "),a("ul",[a("li",[t._v("构造函数："),a("code",[t._v("new net.Socket")])]),t._v(" "),a("li",[t._v("工厂方法："),a("code",[t._v("net.createConnection()")]),t._v(" -> "),a("code",[t._v("net.connect()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" net "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data from client'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);