(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7664],{14202:function(e,n,t){"use strict";t.d(n,{Z:function(){return v},_:function(){return f}});var r=t(27812),i=t(9008),a=t.n(i),o=t(67294),u=t(2731),l=t(5604),s=t(4901),c=t(69031),d=t(85893),f=(0,l.zo)("div",{variants:{state:{vietnam:{cursor:"url('/images/cat-default.png'), auto","&:active":{cursor:"url(/images/cat-clicked.png), auto"},".Tags-item":{cursor:"url('/images/cat-default.png'), auto","&:active":{cursor:"url(/images/cat-clicked.png), auto"}},a:{cursor:"url('/images/cat-default.png'), auto","&:active":{cursor:"url(/images/cat-clicked.png), auto"}}}}}});function v(e){var n=e.editorials,t=e.reactions,i=e.tags,l=(0,o.useState)("All"),v=l[0],g=l[1];(0,o.useEffect)((function(){var e=new URL(window.location.href).searchParams.get("filter");g(e)}),[]);var m=n.editorials.edges,h=t.editorialReactions.edges,p=[].concat((0,r.Z)(m),(0,r.Z)(h)).sort((function(e,n){return new Date(n.date)-new Date(e.date)}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a(),{children:(0,d.jsx)("title",{children:"COLORSxSTUDIOS - Editorial"})}),(0,d.jsx)(u.Z,{editorial:!0}),(0,d.jsx)(f,{children:(0,d.jsxs)("div",{className:"space",children:[(0,d.jsx)(c.$,{tags:i.tags,editorial:!0,filter:v}),(0,d.jsx)(s.Z,{posts:p,isEditorial:!0,filter:v})]})})]})}},69031:function(e,n,t){"use strict";t.d(n,{$:function(){return d},o:function(){return f}});var r=t(41664),i=t.n(r),a=t(67294),o=t(94184),u=t.n(o),l=t(46092),s=t(85893),c=function(e){var n,t,r,a,o=e.tag,l=e.pattern,c=void 0===l?"/":l,d=e.current,f=e.classes,v=void 0===f?"":f,g=e.shortName,m=void 0!==g&&g,h=e.editorial,p=null===o||void 0===o||null===(n=o.taxonomy)||void 0===n||null===(t=n.node)||void 0===t?void 0:t.name,w=o.slug?c.replace("{tag}",encodeURI(o.slug)):c.replace("filter:{tag}",""),x=m&&null!==o&&void 0!==o&&null!==(r=o.vibesShortname)&&void 0!==r&&r.shortname?null===o||void 0===o||null===(a=o.vibesShortname)||void 0===a?void 0:a.shortname:o.name,j=u()("Tags-item",p,v,{current:d},{round:["formats_shows","formats_explore"].indexOf(p)>-1},"weight--".concat((null===o||void 0===o?void 0:o.weight)||0)),b="/editorial?filter=".concat(o.slug);return h?(0,s.jsx)(i(),{href:o.slug?b:"/editorial",scroll:!1,prefetch:!1,children:(0,s.jsx)("a",{className:j,"data-id":o.databaseId,children:x})}):(0,s.jsx)(i(),{href:w,scroll:!1,prefetch:!1,children:(0,s.jsx)("a",{className:j,"data-id":o.databaseId,children:x})})},d=function(e){var n,t,r,i=e.tags,o=e.filter,u=e.labelAll,d=void 0===u?"All":u,f=e.editorial,v=void 0!==f&&f;if(null===(n=i)||void 0===n||null===(t=n.edges)||void 0===t||!t.length)return null;var g=(0,l.Z)("( max-width: 800px )"),m=(0,a.useRef)(),h=null===(r=i=function(e){var n,t=function(e){var n,t=0;return null===e||void 0===e||null===(n=e.edges)||void 0===n||n.map((function(e){var n;t+=null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.count})),t}(e);if(!t)return e;return null===e||void 0===e||null===(n=e.edges)||void 0===n||n.map((function(n,r){var i,a=(null===n||void 0===n||null===(i=n.node)||void 0===i?void 0:i.count)/t,o=0;a>.1&&(o=1),a>.2&&(o=2),a>.3333&&(o=3),e.edges[r].node.weight=o})),e}(i))||void 0===r?void 0:r.edges,p=h.filter((function(e){return e.node.slug===o})),w=h.filter((function(e){return e.node.slug!==o})),x=v?"/editorial?filter:{tag}":i.pattern;return(0,a.useEffect)((function(){m.current&&m.current.querySelectorAll(".Tags-group").forEach((function(e){e.scrollTo(0,0)}))}),[o]),g?(0,s.jsx)("nav",{className:"Tags",ref:m,children:(0,s.jsxs)("div",{className:"Tags-group",children:[(0,s.jsx)(c,{tag:{slug:null,name:d,databaseId:"all"},pattern:x,current:!o,classes:"round",editorial:v},"all"),p.map((function(e){return(0,s.jsx)(c,{tag:e.node,pattern:x,current:e.node.slug===o,shortName:!0,editorial:v},e.node.id)})),w.map((function(e){return(0,s.jsx)(c,{tag:e.node,pattern:x,current:e.node.slug===o,shortName:!0,editorial:v},e.node.id)}))]})}):(0,s.jsx)("nav",{className:"Tags",children:(0,s.jsxs)("div",{className:"Tags-group",children:[(0,s.jsx)(c,{tag:{slug:null,name:d,databaseId:"all"},pattern:x,current:!o,classes:"round",editorial:v},"all"),h.map((function(e){return(0,s.jsx)(c,{tag:e.node,pattern:x,current:e.node.slug===o,editorial:v},e.node.databaseId)}))]})})};function f(e){var n=e.children;return(0,s.jsx)("div",{className:"Tags-stickywrapper",children:n})}},92809:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var r=t(14202),i=t(85893),a=!0;n.default=function(e){var n=e.editorials,t=e.reactions,a=e.tags;return(0,i.jsx)(r.Z,{editorials:n,reactions:t,tags:a})}},54474:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editorial",function(){return t(92809)}])},23330:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(67294);function i(e,n,t,r){var i,a=!1,o=0;function u(){i&&clearTimeout(i)}function l(){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=this,f=Date.now()-o;function v(){o=Date.now(),t.apply(d,s)}function g(){i=void 0}a||(r&&!i&&v(),u(),void 0===r&&f>e?v():!0!==n&&(i=setTimeout(r?g:v,void 0===r?e-f:e)))}return"boolean"!==typeof n&&(r=t,t=n,n=void 0),l.cancel=function(){u(),a=!0},l}var a=t(76362),o=["mousemove","mousedown","resize","keydown","touchstart","wheel"],u=function(e,n,t){void 0===e&&(e=6e4),void 0===n&&(n=!1),void 0===t&&(t=o);var u=(0,r.useState)(n),l=u[0],s=u[1];return(0,r.useEffect)((function(){for(var n,r=!0,o=l,u=function(e){r&&(o=e,s(e))},c=i(50,(function(){o&&u(!1),clearTimeout(n),n=setTimeout((function(){return u(!0)}),e)})),d=function(){document.hidden||c()},f=0;f<t.length;f++)(0,a.on)(window,t[f],c);return(0,a.on)(document,"visibilitychange",d),n=setTimeout((function(){return u(!0)}),e),function(){r=!1;for(var e=0;e<t.length;e++)(0,a.S1)(window,t[e],c);(0,a.S1)(document,"visibilitychange",d)}}),[e,t]),l}},27812:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(52587);var i=t(2937);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[6883,3769,2144,3305,4901,9774,2888,179],(function(){return n=54474,e(e.s=n);var n}));var n=e.O();_N_E=n}]);