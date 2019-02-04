(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{223:function(t,e,v){"use strict";v.r(e);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},_=v(5),s=Object(_.a)(a,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[v("h1",{attrs:{id:"wxa-cli2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wxa-cli2","aria-hidden":"true"}},[t._v("#")]),t._v(" @wxa/cli2")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.npmjs.com/package/@wxa/cli2",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://img.shields.io/npm/v/@wxa/cli2/next.svg",alt:"NPM version"}}),v("OutboundLink")],1),t._v(" "),v("img",{attrs:{src:"https://img.shields.io/badge/node-%3E%3D%208.15.0-brightgreen.svg?maxAge=2592000",alt:"node (scoped with tag, custom registry)"}}),t._v(" "),v("img",{attrs:{src:"https://img.shields.io/npm/l/@wxa/cli2.svg",alt:"NpmLicense"}})]),t._v(" "),v("p",[t._v("为小程序开发定制的命令行工具。以模块化方式处理项目依赖，通过依赖分析得到整个项目的结构，在优化代码后最终生成目标小程序代码。")]),t._v(" "),v("p",[v("strong",[t._v("插件机制")]),t._v("上面，采用最新webpack设计的"),v("a",{attrs:{href:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tapable"),v("OutboundLink")],1),t._v("插件机制，对于熟悉webpack插件开发的人来说，可以快速上手cli的插件开发。")]),t._v(" "),v("p",[t._v("助力"),v("strong",[t._v("三方开发")]),t._v("。对于三方项目而言，往往需要在使用框架的同时再手写脚本，以保证一个项目能编译到多个小程序。2.0在这方便做了改进，利用依赖分析树针对不同合作方输出不同页面，支持一次性将项目编译到出多个小程序，同时支持监听模式下的一对多（可能会内存占用高，慎用）。")]),t._v(" "),v("h2",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),v("ul",[v("li",[t._v("✅ "),v("strong",[t._v("Npm")]),t._v(" 直接在项目引入"),v("code",[t._v("node_modules")]),t._v("的内容，无需手工复制依赖库。")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("Vue单文件")]),t._v(" 组件和页面可以把"),v("code",[t._v("js")]),t._v(","),v("code",[t._v("wxss")]),t._v(","),v("code",[t._v("wxml")]),t._v(","),v("code",[t._v("json")]),t._v("写在同一个"),v("code",[t._v(".wxa")]),t._v("文件。")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("第三方组件")]),t._v(" 在"),v("code",[t._v("usingComponents")]),t._v("中直接引入即可。")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("插件机制")]),t._v(" 利用插件机制，可以定制自己的文件处理流。")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("编译器")]),t._v(" 支持"),v("code",[t._v("ES*")]),t._v(", "),v("code",[t._v("Sass")]),t._v(", "),v("code",[t._v("Stylus")]),t._v("。")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("CLI调用")]),t._v(" 无需打开开发者工具，即可预览、上传代码。✈️")]),t._v(" "),v("li",[t._v("✅ "),v("strong",[t._v("三方开发")]),t._v(" 一次性编译出多个三方小程序。")])]),t._v(" "),v("h2",{attrs:{id:"todo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#todo","aria-hidden":"true"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),v("ul",[v("li",[t._v("☑️ "),v("strong",[t._v("编译到其他小程序平台")])]),t._v(" "),v("li",[t._v("☑️ "),v("strong",[t._v("小程序原生插件开发")])]),t._v(" "),v("li",[t._v("☑️ "),v("strong",[t._v("Tree-Shaking")])])]),t._v(" "),v("h2",{attrs:{id:"安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{attrs:{class:"token comment"}},[t._v("# 使用npm安装")]),t._v("\n"),v("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g @wxa/cli2\n")])])]),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[v("code",[t._v("@wxa/cli2")]),t._v("运行在node环境中，先安装"),v("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),v("OutboundLink")],1),t._v("。")])]),t._v(" "),v("h2",{attrs:{id:"基本用例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本用例","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("基础编译\n"),v("code",[t._v("wxa2 build")])])]),t._v(" "),v("li",[v("p",[t._v("监听模式\n"),v("code",[t._v("wxa2 build --watch")])])]),t._v(" "),v("li",[v("p",[t._v("指定无效缓存以及打印更详细的构建信息\n"),v("code",[t._v("wxa2 build --no-cache --verbose")])])]),t._v(" "),v("li",[v("p",[t._v("使用模板创建新项目, "),v("a",{attrs:{href:"https://github.com/Genuifx/wxa-templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("template"),v("OutboundLink")],1),t._v(" "),v("code",[t._v("wxa2 create")])])]),t._v(" "),v("li",[v("p",[t._v("调用微信开发者工具, windows用户需要在 "),v("code",[t._v("wxa.config.js")]),t._v(" 设置开发者工具的路径 "),v("code",[t._v("wechatwebdevtools")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("wxa2 cli -a open")]),t._v(": 打开开发者工具")]),t._v(" "),v("li",[v("code",[t._v("wxa2 cli -a preview")]),t._v(": 预览项目")]),t._v(" "),v("li",[v("code",[t._v("wxa2 cli -a upload")]),t._v(": 上传项目")]),t._v(" "),v("li",[v("code",[t._v("wxa2 cli -a login")]),t._v(": 登录微信，"),v("code",[t._v("preview")]),t._v("和"),v("code",[t._v("upload")]),t._v("都需要登录微信后操作")])])])])])},[],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);