(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return d});var n=t(0),i=t.n(n),r=t(11),o=t.n(r),l=t(182),s=t(185),c=function(e){var a=e.pageContext,t=e.data,n=a.tag,r=t.allMarkdownRemark,o=r.edges,c='Найденно постов с тэгом "'+n+'": '+r.totalCount;return i.a.createElement(s.a,null,i.a.createElement("h2",null,c),i.a.createElement("ul",null,o.map(function(e){var a=e.node,t=a.frontmatter.title,n=a.fields.slug;return i.a.createElement("li",{key:n},i.a.createElement(l.a,{to:n},t))})),i.a.createElement(l.a,{to:"/tags"},"Все тэги"))};c.propTypes={pageContext:o.a.shape({tag:o.a.string.isRequired}).isRequired,data:o.a.shape({allMarkdownRemark:o.a.shape({totalCount:o.a.number.isRequired,edges:o.a.arrayOf(o.a.shape({node:o.a.shape({frontmatter:o.a.shape({title:o.a.string.isRequired})})}).isRequired).isRequired}.isRequired)}).isRequired},a.default=c;var d="4109363225"},181:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return o});var n=t(186),i=new(t.n(n).a)({baseFontSize:"18px",baseLineHeight:1.35,googleFonts:[{name:"Roboto Slab",styles:["400","700"],subset:["cyrillic"]},{name:"Fira Sans Condensed",styles:["400","700"],subset:["cyrillic"]}],headerFontFamily:["Roboto Slab","sans-serif"],bodyFontFamily:["Fira Sans Condensed","serif"]});var r=i.rhythm,o=i.scale},182:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(11),o=t.n(r),l=t(55),s=t.n(l);t.d(a,"a",function(){return s.a});t(183),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},183:function(e,a,t){var n;e.exports=(n=t(184))&&n.default||n},184:function(e,a,t){"use strict";t.r(a);t(16);var n=t(0),i=t.n(n),r=t(11),o=t.n(r),l=t(78),s=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},185:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(11),o=t.n(r),l=t(180),s=t(182),c=(t(187),t(188)),d=t(189),u=t.n(d),p=t(190),m=t.n(p),g=t(191),f=t.n(g),h=t(192),b=t.n(h),y=t(193),w=t.n(y),k=[{type:"tg",title:"Telegram",link:"https://telegram.me/bondian0",icon:m.a},{type:"vk",title:"Вконтакте",link:"https://vk.com/bondian0",icon:u.a},{type:"gh",title:"Github",link:"https://github.com/bondiano",icon:f.a},{type:"mail",title:"Письмо",link:"mailto:batbondik0@gmail.com?subject=From blog",icon:b.a},{type:"rss",title:"RSS",link:"./rss.xml",icon:w.a}],x=l.a.div.withConfig({displayName:"SocialNetworksList__SocialNetworksWrapper",componentId:"s68yaw-0"})(["display:flex;flex-direction:row;"]),v=l.a.a.withConfig({displayName:"SocialNetworksList__SocialNetworkLink",componentId:"s68yaw-1"})(["cursor:pointer;color:inherit !important;padding-right:10px;&:hover{color:hsla(0,0%,0%,1) !important;}&:last-child{padding-right:0;}"]),R=function(){return i.a.createElement(x,null,k.map(function(e){return i.a.createElement(v,{key:e.type,target:"_blank",rel:"nofollow noopener noreferrer",title:e.title,href:e.link},i.a.createElement(c.a,{icon:e.icon,size:"lg"}))}))},E=t(181),j=l.a.header.withConfig({displayName:"Header__SiteHeader",componentId:"sc-876d0v-0"})(["display:flex;justify-content:space-between;align-items:center;margin:0 4px 8px 4px;@media screen and (max-width:450px){flex-direction:column;}"]),C=l.a.h1.withConfig({displayName:"Header__SiteTitle",componentId:"sc-876d0v-1"})(["margin:0;"]),S=Object(l.a)(s.a).withConfig({displayName:"Header__TitleLink",componentId:"sc-876d0v-2"})([""," box-shadow:none;text-decoration:none;color:inherit;"],Object(E.b)(1.5)),_=function(){return i.a.createElement(j,null,i.a.createElement(C,null,i.a.createElement(S,{to:"/"},"Васин блог")),i.a.createElement(R,null))},q=l.a.main.withConfig({displayName:"layout__MainWrapper",componentId:"sc-1duzdct-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:"," "," 0 ",";@media screen and (max-width:450px){padding:"," ",";}"],Object(E.a)(34),Object(E.a)(1.2),Object(E.a)(.65),Object(E.a)(.65),Object(E.a)(.5),Object(E.a)(.5)),O=function(e){var a=e.children;return i.a.createElement(q,null,i.a.createElement(_,null),a)};O.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired};a.a=O}}]);
//# sourceMappingURL=component---src-components-tags-js-d0103623f07be4907884.js.map