(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(e,t,n){"use strict";var r;function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    text-align: center;\n    font-size: 19px;\n"]);return a=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=t.ColoredText=void 0,n(143);var o=((r=n(90))&&r.__esModule?r:{default:r}).default.div.withConfig({displayName:"Logo__ColoredText"})(["font-weight:bold;color:#1890ff;display:inline-block;text-decoration:none;background-image:linear-gradient(to right,#1890ff 25%,#c4ce35 50%,#ac24e2 75%,#1890ff 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;background-size:300% auto;&.static{background-position:-215% center;}&.animated{@keyframes text-gradient{to{background-position:-300% center;}}animation:text-gradient 16s ease-in-out infinite;}"]);t.ColoredText=o;var i=o.extend(a());t.Logo=i},137:function(e,t,n){var r;e.exports=(r=n(138))&&r.default||r},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(2)),o=l(n(23)),i=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.location,n=i.default.getResourcesForPathname(t.pathname);return r.default.createElement(o.default,{location:t,pageResources:n})};c.propTypes={location:a.default.shape({pathname:a.default.string.isRequired}).isRequired};var u=c;t.default=u},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return a.createElement(o.default,{key:"helmet",title:"Aida",meta:[{name:"description",content:"Build amazing conversational experiences"},{content:"aida, chatito, chatbots, ai chatbots, nlu, nlp, natural language processing, tensorflowjs, keras, named entity recognition, text classification",name:"keywords"}]},a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),a.createElement("meta",{name:"theme-color",content:"#fcfcfc"}))};var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(r=n(191))&&r.__esModule?r:{default:r}},169:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(232);var a=d(n(233));n(173);var o=d(n(105));n(249);var i=d(n(250));n(143);var l=d(n(93)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),u=d(n(90)),f=n(132);function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=i.default.Header,b=i.default.Content,h=i.default.Footer,v=/^\/demo(\/.*)?$/i,O=/^\/train(\/.*)?$/i,j=(0,u.default)(b).withConfig({displayName:"Layout__StyledContent"})(["> p{text-align:justify;}background:#fcfcfc;padding:48px 48px 48px 72px;min-height:280px;"]),w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,c.Component),n=t,(r=[{key:"render",value:function(){var e="0";return v.test(this.props.location.pathname)?e="0":O.test(this.props.location.pathname)&&(e="1"),c.createElement(i.default,{style:{minHeight:"100vh"}},c.createElement(g,{style:{background:"#fcfcfc",padding:0,display:"flex"}},c.createElement(f.Logo,{style:{textAlign:"right",width:200,paddingLeft:24,paddingRight:24},className:"static"},c.createElement(l.default,{to:"/"},"< Aida />")),c.createElement("div",{style:{flex:1}}),c.createElement("div",{style:{padding:"0 48px 0 24px",display:"inline-block",textAlign:"right",float:"right"}},c.createElement("a",{href:"https://github.com/rodrigopivi/aida",title:"Aida",style:{fontSize:26}},c.createElement(o.default,{type:"github"})))),c.createElement(i.default,{style:{flexDirection:"row"}},c.createElement(i.default.Sider,{width:200,breakpoint:"lg",collapsedWidth:"0",theme:"light",style:{backgroundColor:"#fcfcfc"}},c.createElement(a.default,{theme:"light",mode:"inline",defaultSelectedKeys:[e],style:{background:"#fcfcfc"}},c.createElement(a.default.Item,{key:"0"},c.createElement(l.default,{to:"/demo"},c.createElement(o.default,{type:"right-circle-o"}),"Demo")),c.createElement(a.default.Item,{key:"1"},c.createElement(l.default,{to:"/train"},c.createElement(o.default,{type:"right-circle-o"}),"Train your own")))),c.createElement(i.default,{style:{padding:"24px 0 0 24px"}},c.createElement(j,null,this.props.children),c.createElement(h,{style:{textAlign:"center"}},"Aida © 2018 Rodrigo Pimentel"))))}}])&&s(n.prototype,r),t}();t.default=w},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return l.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var r=c(n(0)),a=c(n(2)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(93)),i=c(n(137)),l=c(n(22));function c(e){return e&&e.__esModule?e:{default:e}}var u=r.default.createContext({});t.StaticQueryContext=u;var f=function(e){return r.default.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=f,f.propTypes={data:a.default.object,query:a.default.string.isRequired,render:a.default.func,children:a.default.func}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(93)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=l(n(139)),i=l(n(169));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.location;return a.createElement(i.default,{location:t,style:{minHeight:"95vh"}},a.createElement(o.default,null),a.createElement("h1",null,"404: Page not found."),a.createElement("p",null,"You've hit the void. ",a.createElement(r.default,{to:"/"},"Go back.")))}}}]);
//# sourceMappingURL=component---web-pages-404-tsx-57553e1a3a084e433ae2.js.map