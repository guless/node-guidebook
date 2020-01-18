(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{297:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" NVM")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("Linux 安装")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])])]),n("p",[s._v("MacOS 安装")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -0- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),n("h2",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有信息")]),s._v("\nnvm --help\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前安装的nvm版本")]),s._v("\nnvm --version\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定的版本，如果不存在.nvmrc,就从指定的资源下载安装")]),s._v("\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定的版本，平且下载最新的npm")]),s._v("\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  -latest-npm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载指定的版本")]),s._v("\nnvm uninstall "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用已经安装的版本  切换版本")]),s._v("\nnvm use "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--silent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前使用的node版本")]),s._v("\nnvm current\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已经安装的版本")]),s._v("\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定版本")]),s._v("\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示远程所有可以安装的nodejs版本")]),s._v("\nnvm ls-remote\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看长期支持的版本")]),s._v("\nnvm ls-remote --lts\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装罪行的npm")]),s._v("\nnvm install-latest-npm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新安装指定的版本")]),s._v("\nnvm reinstall-packages "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示nvm的cache")]),s._v("\nnvm cache "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空nvm的cache")]),s._v("\nnvm cache "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);