(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(139),o=n(142);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement("h1",null,"Страница не найдена"),i.a.createElement("p",null,"К сожалению, страница не найдена. Если она точно должа быть, сообщите на почту"," ",i.a.createElement("a",{href:"mailto:batbondik0@gmail.com?subject=Ошибка в блоге"},"batbondik0@gmail.com")),i.a.createElement(r.Link,{to:"/"},"Вернуться в блог"))}},138:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(143),i=new(n.n(a).a)({baseFontSize:"18px",baseLineHeight:1.35,googleFonts:[{name:"Roboto Slab",styles:["400","700"],subset:["cyrillic"]},{name:"Fira Sans Condensed",styles:["400","700"],subset:["cyrillic"]}],headerFontFamily:["Roboto Slab","sans-serif"],bodyFontFamily:["Fira Sans Condensed","serif"]});var r=i.rhythm,o=i.scale},139:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(136),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(22);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(140),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},140:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},141:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(50),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},142:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(137),l=n(139),u=(n(144),n(145)),s=n(146),d=n.n(s),p=n(147),m=n.n(p),f=n(148),h=n.n(f),g=n(149),y=n.n(g),b=n(150),w=n.n(b),k=[{type:"tg",title:"Telegram",link:"https://telegram.me/bondian0",icon:m.a},{type:"vk",title:"Вконтакте",link:"https://vk.com/bondian0",icon:d.a},{type:"gh",title:"Github",link:"https://github.com/bondiano",icon:h.a},{type:"mail",title:"Письмо",link:"mailto:batbondik0@gmail.com?subject=From blog",icon:y.a},{type:"rss",title:"RSS",link:"./rss.xml",icon:w.a}],v=c.a.div.withConfig({displayName:"SocialNetworksList__SocialNetworksWrapper",componentId:"s68yaw-0"})(["display:flex;flex-direction:row;"]),x=c.a.a.withConfig({displayName:"SocialNetworksList__SocialNetworkLink",componentId:"s68yaw-1"})(["cursor:pointer;color:inherit !important;padding-right:10px;&:hover{color:hsla(0,0%,0%,1) !important;}&:last-child{padding-right:0;}"]),E=function(){return i.a.createElement(v,null,k.map(function(e){return i.a.createElement(x,{key:e.type,target:"_blank",rel:"nofollow noopener noreferrer",title:e.title,href:e.link},i.a.createElement(u.a,{icon:e.icon,size:"lg"}))}))},S=n(138),j=c.a.header.withConfig({displayName:"Header__SiteHeader",componentId:"sc-876d0v-0"})(["display:flex;justify-content:space-between;align-items:center;margin:0 4px 8px 4px;@media screen and (max-width:450px){flex-direction:column;}"]),_=c.a.h1.withConfig({displayName:"Header__SiteTitle",componentId:"sc-876d0v-1"})(["margin:0;"]),C=Object(c.a)(l.Link).withConfig({displayName:"Header__TitleLink",componentId:"sc-876d0v-2"})([""," box-shadow:none;text-decoration:none;color:inherit;"],Object(S.b)(1.5)),q=function(){return i.a.createElement(j,null,i.a.createElement(_,null,i.a.createElement(C,{to:"/"},"Васин блог")),i.a.createElement(E,null))},F=c.a.main.withConfig({displayName:"layout__MainWrapper",componentId:"sc-1duzdct-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:"," "," 0 ",";@media screen and (max-width:450px){padding:"," ",";}"],Object(S.a)(34),Object(S.a)(1.2),Object(S.a)(.65),Object(S.a)(.65),Object(S.a)(.5),Object(S.a)(.5)),R=function(e){var t=e.children;return i.a.createElement(F,null,i.a.createElement(q,null),t)};R.propTypes={children:o.a.func.isRequired};t.a=R}}]);
//# sourceMappingURL=component---src-pages-404-js-ead6a238f2babb56c2b5.js.map