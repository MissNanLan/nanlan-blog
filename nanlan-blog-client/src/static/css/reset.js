import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 @charset "utf-8";
/* -----------H-ui前端框架-----------------------
H-ui.reset.css v1.2
重定义浏览器默认样式
H-ui.reser CSS file for H-ui
Copyright H-ui Inc.
http://www.H-ui.net
date:2014.10.09
Created & Modified by guojunhui.
----------------------------------------------*/
/*1 重定义浏览器默认样式
	Name:			style_reset
	Level:			Global
	Explain:		重定义浏览器默认样式
	Last Modify:	jackying
*/
* {
  word-wrap: break-word;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
iframe,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
button,
input,
textarea,
th,
td,
fieldset {
  margin: 0;
  padding: 0;
}
ul,
ol,
dl {
  list-style-type: none;
}
html,
body {
  *position: static;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
th,
var {
  font-style: normal;
  font-weight: normal;
}
input,
button,
textarea,
select,
optgroup,
option {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
}
input,
button {
  overflow: visible;
  vertical-align: middle;
  outline: none;
}
body,
th,
td,
button,
input,
select,
textarea {
  font-family: "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue",
    Helvetica, tahoma, arial, Verdana, sans-serif, "WenQuanYi Micro Hei",
    "\5B8B\4F53";
  font-size: 12px;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}
body {
  line-height: 1.6;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
a,
area {
  outline: none;
  blr: expression(this.onFocus=this.blur());
}
a {
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
  outline: none;
}
a.ie6:hover {
  zoom: 1;
}
a:focus {
  outline: none;
}
a:hover,
a:active {
  outline: none;
}
:focus {
  outline: none;
}
sub,
sup {
  vertical-align: baseline;
}
/*img*/
img {
  border: 0;
  vertical-align: middle;
}
a img,
img {
  -ms-interpolation-mode: bicubic;
}
.img-responsive {
  max-width: 100%;
  height: auto;
}
/*IE下a:hover 背景闪烁*/
html {
  overflow: -moz-scrollbars-vertical;
  zoom: expression(
    function(ele){ele.style.zoom = "1"
      ;document.execCommand("BackgroundImageCache", false, true) }(this)
  );
}

/*HTML5 reset*/
header,
footer,
section,
aside,
details,
menu,
article,
section,
nav,
address,
hgroup,
figure,
figcaption,
legend {
  display: block;
  margin: 0;
  padding: 0;
}
time {
  display: inline;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
}
legend {
  width: 100%;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: 40px;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
legend small {
  font-size: 15px;
  color: #999;
}
svg:not(:root) {
  overflow: hidden;
}
fieldset {
  border-width: 0;
  padding: 0.35em 0.625em 0.75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
	Name:			style_clearfix
	Example:		class="clearfix|cl"
	Explain:		Clearfix（简写cl）避免因子元素浮动而导致的父元素高度缺失能问题
*/
.cl:after,
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.cl,
.clearfix {
  zoom: 1;
}
`;
