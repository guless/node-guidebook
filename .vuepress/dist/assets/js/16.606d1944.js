(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{210:function(t,s,a){t.exports=a.p+"assets/img/cluster-run-flow.3b2ba1e8.png"},256:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[t._v("#")]),t._v(" 集群")]),t._v(" "),n("p",[t._v("Node 实例是单线程作业的。在服务端编程中，通常会创建多个 Node 实例来处理客户端的请求，以此提升系统的吞吐率。对这样多个 Node 实例，我们称之为 cluster（集群）。")]),t._v(" "),n("p",[t._v("借助 Node.js 的 cluster 模块，开发者可以在几乎不修改原有项目代码的前提下，获得集群服务带来的好处。")]),t._v(" "),n("p",[t._v("集群有以下两种常见的实现方案：")]),t._v(" "),n("p",[n("strong",[t._v("方案一：多个 Node 实例+多个端口")])]),t._v(" "),n("p",[t._v("集群内的 Node.js 实例，各自监听不同的端口，再由反向代理实施请求到多个端口的分发。")]),t._v(" "),n("ul",[n("li",[t._v("优点：实现简单，各实例相对独立，这对服务稳定性有好处")]),t._v(" "),n("li",[t._v("缺点：增加端口占用，进程之间通信比较麻烦")])]),t._v(" "),n("p",[n("strong",[t._v("方案二：主进程向子进程转发请求")])]),t._v(" "),n("p",[t._v("集群内，创建一个主进程（master），以及若干个子进程（worker）。由 master 监听客户端连接请求，并根据特定的策略，转发至对应的 worker。而这种方案为 Node.js 的 cluster 模式所使用。")]),t._v(" "),n("ul",[n("li",[t._v("优点：通常只占用一个端口，通信相对简单，转发策略更灵活")]),t._v(" "),n("li",[t._v("缺点：实现相对复杂，对主进程的稳定性要求较高")])]),t._v(" "),n("h2",{attrs:{id:"集群创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群创建"}},[t._v("#")]),t._v(" 集群创建")]),t._v(" "),n("p",[t._v("Cluster 是常见的 Node.js 利用多核的方法，它是基于 "),n("code",[t._v("child_process.fork()")]),t._v(" 实现的，所以 cluster 产生的进程之间是通过 "),n("router-link",{attrs:{to:"/process/ipc.html"}},[t._v("IPC")]),t._v(" 来通信的，并且它也没有拷贝父进程的空间，而是通过加入 "),n("code",[t._v("cluster.isMaster")]),t._v(" 这个标识，来区分父进程以及子进程，达到类似 POSIX 的 fork 的效果。")],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cluster "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numCPUs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |    都执行了")]),t._v("\n                                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMaster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-|-----------------")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fork workers.                             //   |")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" numCPUs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n    cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | 仅父进程执行 (master.js)")]),t._v("\n  cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("worker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("worker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(" died")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-------------------")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Workers can share any TCP connection      // |")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In this case it is an HTTP server         // |")]),t._v("\n  http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req，res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |   仅子进程执行 (worker.js)")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-------------------")]),t._v("\n                                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |    都执行了")]),t._v("\n")])])]),n("p",[t._v("在上述代码中 "),n("code",[t._v("numCPUs")]),t._v(" 虽然是全局变量但是，在父进程中修改它，子进程中并不会改变，因为父进程与子进程是完全独立的两个空间。他们所谓的共有仅仅只是都执行了，并不是同一份。")]),t._v(" "),n("p",[t._v("你可以把父进程执行的部分当做 "),n("code",[t._v("master.js")]),t._v("，子进程执行的部分当做 "),n("code",[t._v("worker.js")]),t._v("，你可以把他们想象成是先执行了 "),n("code",[t._v("node master.js")]),t._v(" 然后 "),n("code",[t._v("cluster.fork")]),t._v(" 了几次，就执行了几次 "),n("code",[t._v("node worker.js")]),t._v("。而 cluster 模块则是二者之间的一个桥梁，你可以通过 cluster 提供的方法，让其二者之间进行沟通交流。")]),t._v(" "),n("h2",{attrs:{id:"运作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运作原理"}},[t._v("#")]),t._v(" 运作原理")]),t._v(" "),n("p",[t._v("了解 cluster 模块，主要需要搞清楚三个问题：")]),t._v(" "),n("ol",[n("li",[t._v("master 和 worker 如何通信？")]),t._v(" "),n("li",[t._v("多个 server 实例，如何实现端口共享？")]),t._v(" "),n("li",[t._v("多个 server 实例，来自客户端的请求如何分发到多个 worker？")])]),t._v(" "),n("h3",{attrs:{id:"进程间通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信"}},[t._v("#")]),t._v(" 进程间通信")]),t._v(" "),n("blockquote",[n("p",[t._v("master 和 worker 如何通信？")])]),t._v(" "),n("p",[t._v("master 进程通过 "),n("code",[t._v("cluster.fork()")]),t._v(" 来创建 worker 进程。"),n("code",[t._v("cluster.fork()")]),t._v(" 内部是通过"),n("code",[t._v("child_process.fork()")]),t._v(" 方法创建的。")]),t._v(" "),n("p",[t._v("也就是说：")]),t._v(" "),n("ol",[n("li",[t._v("master 进程和 worker 进程是父子进程的关系")]),t._v(" "),n("li",[t._v("master 进程和 worker 进程可以通过 IPC 通道进行通信相互传递服务句柄 📌")])]),t._v(" "),n("h3",{attrs:{id:"端口共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#端口共享"}},[t._v("#")]),t._v(" 端口共享")]),t._v(" "),n("blockquote",[n("p",[t._v("多个 server 实例，如何实现端口共享？")])]),t._v(" "),n("p",[t._v("在前面的例子中，多个 worker 中创建的 server 监听了相同的端口 3000。通常来说，多个进程监听同个端口，系统会报错。")]),t._v(" "),n("p",[t._v("那么为什么我们的示例没问题呢？")]),t._v(" "),n("p",[t._v("这是因为在 net 模块中，会根据当前进程是 master 进程还是 worker 进程，对 "),n("code",[t._v("listen()")]),t._v(" 方法进行了特殊处理：")]),t._v(" "),n("ol",[n("li",[t._v("master 进程：在该端口上正常监听请求（没做特殊处理）")]),t._v(" "),n("li",[t._v("worker 进程：创建 Server 实例。然后通过 IPC 通道，向 master 进程发送消息，让 master 进程页创建 server 实例，并在该端口上监听请求。当请求进来时，master 进程将请求转发给 worker 进程的 server 实例。")])]),t._v(" "),n("p",[t._v("归纳起来，就是：master 进程监听特定端口，并将客户请求转发给 worker 进程。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(210),alt:"Cluster模块运行流程"}})]),t._v(" "),n("h3",{attrs:{id:"分发连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分发连接"}},[t._v("#")]),t._v(" 分发连接")]),t._v(" "),n("blockquote",[n("p",[t._v("多个 server 实例，来自客户端的请求如何分发到多个 worker？")])]),t._v(" "),n("p",[t._v("每当 worker 进程创建 server 实例来监听请求，都会通过 IPC 通道，在 master 上进行注册。当客户端请求到达，master 会负责将请求转发给对应的 worker。")]),t._v(" "),n("p",[t._v("具体转发给哪个 worker？这是由转发策略决定的。可以通过环境变量 "),n("code",[t._v("NODE_CLUSTER_SCHED_POLICY")]),t._v(" 设置，也可以在 "),n("code",[t._v("cluster.setupMaster(options)")]),t._v(" 时传入。")]),t._v(" "),n("p",[t._v("cluster 模块提供了两种分发连接的方式。")]),t._v(" "),n("p",[t._v("第一种方式 (默认方式，不适用于 Windows)，通过"),n("strong",[t._v("时间片轮转法")]),t._v("（round-robin）分发连接。主进程监听端口，接收到新连接之后，通过时间片轮转法来决定将接收到的客户端的 Socket 句柄传递给指定的 worker 处理。至于每个连接由哪个 worker 来处理，完全由内置的循环算法决定。")]),t._v(" "),n("p",[t._v("第二种方式是由主进程创建 socket 监听端口后，将 socket 句柄直接分发给相应的 worker，然后当连接进来时，就直接由相应的 worker 来接收连接并处理。")]),t._v(" "),n("p",[t._v("使用第二种方式时理论上性能应该较高，然而时间上存在负载不均衡的问题，比如通常 70% 的连接仅被 8 个进程中的 2 个处理，而其他进程比较清闲。")]),t._v(" "),n("h2",{attrs:{id:"集群的可伸缩性策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群的可伸缩性策略"}},[t._v("#")]),t._v(" 集群的可伸缩性策略")]),t._v(" "),n("p",[t._v("Node.js 中的伸缩性是融合到运行时核心的特性。Node 被命名为 Node 是为了强调 Node 应用应该包含多个相互之间通信的小型分布式节点。")]),t._v(" "),n("p",[t._v("Node.js 的 cluster 模块不仅提供了充分利用机器 CPU 内核开箱即用的解决方案，还有助于 Node 进程增加可用性的能力，另外还提供了一个选项：无停机重启整个应用的能力。")]),t._v(" "),n("p",[t._v("工作量是我们扩展应用的最普遍的理由，但同时我们也通过扩展应用增加可用性和容灾能力。")]),t._v(" "),n("p",[t._v("实际上，主要通过以下三种策略提高应用的可伸缩性。")]),t._v(" "),n("h3",{attrs:{id:"克隆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#克隆"}},[t._v("#")]),t._v(" 克隆")]),t._v(" "),n("p",[t._v("扩展大型应用最简单的方法就是多次克隆并且克隆实例处理负载的一部分（例如使用负载均衡器）。并不会花费太多的开发事件并且非常有效。策略就是做最小化的事情并且 Node.js 有内置模块 cluster，在服务器上面实现一个克隆策略非常容易。")]),t._v(" "),n("h3",{attrs:{id:"分解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分解"}},[t._v("#")]),t._v(" 分解")]),t._v(" "),n("p",[t._v("我们可以基于功能和服务通过分解扩展一个应用。这意味着用不同的代码实现多样的应用，有时候有专属的数据库和用户界面。")]),t._v(" "),n("p",[t._v("这种策略通常与 "),n("strong",[t._v("微服务（Microservice）")]),t._v(" 有关，"),n("strong",[t._v("微")]),t._v("指的是这些服务应该尽可能地小，但是实际上，最重要的不是服务的大小，而是服务之间的松耦合和高内聚。这个策略的实现并不容易并且可能导致长期的出乎意料的问题，但是做好之后，有点还是非常大的。")]),t._v(" "),n("h3",{attrs:{id:"拆分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拆分"}},[t._v("#")]),t._v(" 拆分")]),t._v(" "),n("p",[t._v("我们可以将应用分成多个实例，每个实例负责应用数据的一部分。这个策略是在数据库上 "),n("strong",[t._v("水平切分（horizontal paritioning）")]),t._v("，或者"),n("strong",[t._v("分区（sharding）")]),t._v("。数据分区在每个操作使用哪个应用实例之前需要有一个查找的步骤。例如也许我们通过用户的国家和语言进行分区，那么我们就需要一个数据信息的查找。")]),t._v(" "),n("h2",{attrs:{id:"内部通信技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内部通信技巧"}},[t._v("#")]),t._v(" 内部通信技巧")]),t._v(" "),n("p",[t._v("在开发过程中，我们会通过 "),n("code",[t._v("process.on('message', fn)")]),t._v(" 来实现进程间通信。")]),t._v(" "),n("p",[t._v("前面提到，master 进程、worker 进程在 server 实例的创建过程中，也是通过 IPC 通道进行通信的。那会不会对我们的开发造成干扰呢？比如，收到一堆其实并不需要关心的信息？")]),t._v(" "),n("p",[t._v("答案肯定是不会，那么是怎么实现的呢？")]),t._v(" "),n("p",[t._v("当发送的消息包含 "),n("code",[t._v("cmd")]),t._v(" 字段，且改字段以 "),n("code",[t._v("NODE_")]),t._v(" 作为前缀，则该消息会被视为内部包括保留的消息，不会通过 "),n("code",[t._v("message")]),t._v(" 事件抛出，但可以通过监听 "),n("code",[t._v("internalMessage")]),t._v(" 捕获。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// worker 进程")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cmd"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NODE_CLUSTER'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  act"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'queryServer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("hr"),t._v(" "),n("p",[n("strong",[t._v("参考资料：")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/cluster.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 node-learning-guide: cluster"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.alloyteam.com/2015/08/nodejs-cluster-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 腾讯 AlloyTeam：解读 Node.js 的 cluster 模块"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/Xm_c841UdKA06s76rJ_4nw",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 猫眼前端：深入浅出 Node.js Cluster"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/36728299",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 Node.js 集群（cluster）：扩展你的 Node.js 应用"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/41118827",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 Node.js：浅析高并发与分布式集群"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://fed.taobao.org/blog/2015/11/04/nodejs-cluster/",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 淘宝前端：当我们谈论 cluster 时我们在谈论什么"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/accordion/p/7207740.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 Node.js cluster 模块深入研究"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);