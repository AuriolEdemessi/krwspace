(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9463],{76056:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(9008),o=n.n(i),r=n(85893);function l(e){var t=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsxs)("title",{children:[t," \u2014 COLORSxSTUDIOS"]})}),(0,r.jsx)("main",{className:"PageError",children:(0,r.jsx)("p",{className:"PageError-title",children:t})})]})}},28608:function(e,t,n){"use strict";var i=n(67294),o=n(85893),r={wrapAround:!0,imagesLoaded:!0};t.Z=function(e){var t=e.children,n=(0,i.useRef)(),l=null;return(0,i.useEffect)((function(){function e(){l&&(l.resize(),l.reposition())}return n.current&&(l=new window.Flickity(n.current,r),n.current.addEventListener("lazyloaded",e)),function(){l&&(l.destroy(),l=null),n.current&&n.current.removeEventListener("lazyloaded",e)}}),[t]),(0,o.jsx)("div",{className:"Gallery",ref:n,children:t})}},2731:function(e,t,n){"use strict";var i=n(59499),o=n(9008),r=n.n(o),l=n(67294),s=n(91716),c=n(92836),a=n(85893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"COLORSxSTUDIOS",description:"",image:"https://colorsxstudios.com/favicon/preview.png"};t.Z=function(e){var t=(0,l.useContext)(s.Z).global.generalSettings,n=u(u(u({},p),t),e),i=n.title,o=n.description,d=n.image;return(0,a.jsxs)(r(),{children:[o&&(0,a.jsx)("meta",{name:"description",content:(0,c.$G)((0,c.XD)(o),160)}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{property:"og:site_name",content:(null===t||void 0===t?void 0:t.title)||(null===p||void 0===p?void 0:p.title)}),o&&(0,a.jsx)("meta",{property:"og:description",content:(0,c.$G)((0,c.XD)(o),160)}),i&&(0,a.jsx)("meta",{property:"og:title",content:i}),d&&(0,a.jsx)("meta",{property:"og:image",content:d}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),i&&(0,a.jsx)("meta",{name:"twitter:title",content:i}),o&&(0,a.jsx)("meta",{name:"twitter:description",content:(0,c.$G)((0,c.XD)(o),160)}),d&&(0,a.jsx)("meta",{name:"twitter:image",content:d}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},59183:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(67294),o=n(94184),r=n.n(o),l=n(70867),s=n(46092),c=n(63822),a=n(5604),d=(0,a.zo)("div",{borderTop:"none",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto",gap:"1rem",padding:"0.5rem",marginBottom:"2rem",figure:{},article:{height:"100%"},"@bp1":{gridTemplateColumns:"1fr 1fr",gap:"2rem"},"@bp2":{gridTemplateColumns:"1fr 1fr 1fr 1fr"},variants:{layout:{single:{gridTemplateColumns:"1fr",gap:"2rem",article:{minHeight:400},"@bp1":{gap:"1rem"},"@bp2":{gridTemplateColumns:"1fr 1fr 1fr 1fr",marginTop:"-5px",padding:"0px 2rem 2rem 2rem"}},grid:{gridTemplateColumns:"1fr 1fr",gap:"1rem","@bp2":{gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"1rem",padding:"0px 2rem 2rem 2rem",marginTop:"-5px"}}}}}),u=(0,a.zo)("div",{borderTop:"1px solid black",paddingTop:"0.5rem",display:"flex",alignItems:"center",verticalAlign:"top",textTransform:"uppercase",span:{transform:"scale(0.8)"},"@bp2":{display:"none"}}),p=(0,a.zo)("button",{background:"none",cursor:"pointer",color:"var(--color-text)",textTransform:"uppercase",border:"none",fontSize:"var(--type--size---3)",paddingLeft:"0.5rem",lineHeight:"var(--type--line-height--1)",fontFamily:"var(--type--font-family)",letterSpacing:"var(--type--letter-spacing--1)",fontWeight:"bold",variants:{state:{active:{textDecoration:"underline"}}}});function v(e,t){var n=new Date(e.node.publishedAt).getTime(),i=new Date(t.node.publishedAt).getTime();return n<i?1:n>i?-1:0}function m(e,t){return e.node.totalInventory>t.node.totalInventory?1:e.node.totalInventory<t.node.totalInventory?-1:0}function g(e,t){return e.node.totalInventory<t.node.totalInventory?1:e.node.totalInventory>t.node.totalInventory?-1:0}function f(e){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e}(e)}var h=n(85893),x=function(e){var t=e.posts,n=e.children,o=e.context,a=void 0===o?"products":o,x=e.order,j=(0,i.useState)("single"),y=j[0],b=j[1];if(!t||!t.length)return(0,h.jsx)(h.Fragment,{});var O=(0,s.Z)("( max-width: 800px)"),w=r()(["context--".concat(a)]);var S,C,T=(S=t,"Newest first"===(C=x)?S.sort(v):"Highest stock first"===C?S.sort(g):"Lowest stock first"===C?S.sort(m):"Random"===C?f(S):S);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{children:[(0,h.jsx)(p,{onClick:function(){b("grid")},state:"grid"===y?"active":"",children:"Grid"}),(0,h.jsx)("span",{children:"/"}),(0,h.jsx)(p,{onClick:function(){b("single")},state:"single"===y?"active":"",children:"Single"})]}),(0,h.jsxs)(d,{className:w,layout:y,children:[n,T.map((function(e,n){var i=(0,l.vL)(null===e||void 0===e?void 0:e.node),o=!1;return O?o=n%3===0:(o=i||t.length<4,"collections"===a&&(o=i),"related"===a&&(o=t.length<3)),(0,h.jsx)(c.Z,{post:e.node,index:n,big:o,context:a},e.node.handle)}))]})]})}},68441:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return je},default:function(){return ye}});var i=n(11163),o=n(4298),r=n.n(o),l=n(36598),s=n(9008),c=n.n(s),a=n(67294),d=n(31102),u=n(2731),p=n(76557),v=n(57246),m=n(59183),g=n(91716),f=n(94184),h=n.n(f),x=n(86470),j=n(85893),y=function(e){var t=e.text,n=e.speed,i=void 0===n?5:n,o=(0,a.useRef)(),r=(0,d.Z)(),l=(0,x.Z)(o).dimensions,s=(0,a.useState)(0),c=s[0],u=s[1],p=(0,a.useState)("paused"),v=p[0],m=p[1];(0,a.useEffect)((function(){return o.current&&l?u(Math.ceil(r.width/l.width)):u(0),function(){}}),[l]),(0,a.useEffect)((function(){return requestAnimationFrame((function(){m("running")})),function(){m("paused")}}),[c,i]);var g=h()(["Marquee",v]),f={animationPlayState:v,animationDuration:"".concat(((null===l||void 0===l?void 0:l.width)||0)/i*100,"ms")};return(0,j.jsx)("div",{className:g,children:(0,j.jsxs)("div",{className:"Marquee-items",style:f,children:[(0,j.jsx)("div",{className:"Marquee-item",children:(0,j.jsx)("p",{ref:o,children:t})}),Array(c).fill(c).map((function(e,n){return(0,j.jsx)("div",{className:"Marquee-item",children:(0,j.jsx)("p",{children:t},n)},n)}))]})})},b=function(){var e,t,n,i,o=(0,a.useContext)(g.Z).global.shop;return null!==o&&void 0!==o&&null!==(e=o.settingsShop)&&void 0!==e&&null!==(t=e.shopBanner)&&void 0!==t&&t.text?(0,j.jsx)("aside",{className:"ShopBanner",children:(0,j.jsx)(y,{text:o.settingsShop.shopBanner.text,speed:null===o||void 0===o||null===(n=o.settingsShop)||void 0===n||null===(i=n.shopBanner)||void 0===i?void 0:i.speed})}):null};function O(e){var t=e.products,n=e.types,i=e.colors,o=e.filter,r=e.order,l=(0,d.Z)(),s=(0,a.useState)(6),g=s[0],f=s[1];return(0,a.useEffect)((function(){return l.width>1080?f(6):l.width>800?f(4):f(2),function(){}}),[l]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c(),{children:(0,j.jsx)("title",{children:"Shop \u2014 COLORSxSTUDIOS"})}),(0,j.jsx)(u.Z,{title:"Shop - COLORSxSTUDIOS"}),(0,j.jsx)(v.$,{types:n,colors:i,filter:o,labelAll:"All"}),(0,j.jsx)(p.Z,{id:o||"/",children:(0,j.jsx)(m.Z,{posts:null===t||void 0===t?void 0:t.edges,cols:g,context:"collections",order:r})}),(0,j.jsx)(b,{})]})}var w=n(92836);function S(e){var t=e.posts,n=e.types,i=e.colors,o=e.filter,r=(0,d.Z)(),l=(0,a.useState)(null===t||void 0===t?void 0:t.edges),s=l[0],g=l[1],f=(0,a.useState)(6),h=f[0],x=f[1];return(0,a.useEffect)((function(){return r.width>1080?x(6):r.width>800?x(4):x(2),function(){}}),[r]),(0,a.useEffect)((function(){g(null===t||void 0===t?void 0:t.edges)}),[t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c(),{children:(0,j.jsxs)("title",{children:[(0,w.kC)(o.replace(/(type:|color:)/,""))," \u2014 Shop \u2014 COLORSxSTUDIOS"]})}),(0,j.jsx)(u.Z,{title:(0,w.kC)(o.replace(/(type:|color:)/,""))}),(0,j.jsx)(v.$,{types:n,colors:i,filter:o,labelAll:"All"}),(0,j.jsx)(p.Z,{id:o,children:(0,j.jsx)(m.Z,{posts:s,cols:h})})]})}var C=n(5604),T=n(82516),N=n(46092),k=n(27812),P=n(63375),I=(n(16703),(0,C.zo)("figure",{position:"relative",opacity:1})),D=(0,C.zo)("video",{maxWidth:"100%",maxHeight:"100%",objectFit:"contain","&:hover":{opacity:"1 !important"}}),Z=(0,C.zo)("div",{display:"grid",gap:"1rem",padding:"0 2rem 4rem 6rem",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"repeat(1fr)"}),E=(0,C.zo)("div",{flex:1}),z=(0,C.zo)("div",{boxSizing:"border-box",display:"block",height:"100%",figure:{height:"100%","> img":{height:"100%"}}}),F=n(59499),_=n(4730),R=n(39699),L=n(10615),V=((0,C.zo)("div",{boxSizing:"border-box",display:"block",height:"100%",figure:{height:"100%","> img":{height:"100%"}}}),(0,C.zo)(R.xz,{height:"100%",".Dialog--Trigger":{height:"inherit"},cursor:"pointer"})),A=(0,C.zo)(R.aV,{position:"fixed",inset:0}),M=((0,C.zo)(R.Dx,{margin:0,fontWeight:500,fontSize:17}),(0,C.zo)(R.dk,{margin:"10px 0 20px",fontSize:15,lineHeight:1.5}),(0,C.zo)(R.VY,{backgroundColor:"white",boxShadow:"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100vw",height:"100%",maxWidth:"100%",maxHeight:"100vh",zIndex:9999,"&:focus":{outline:"none"},"figure > img":{maxHeight:"100vh",objectFit:"contain"},"figure > video":{height:"100%",objectFit:"contain"},figure:{margin:0},".carousel-root, .carousel":{height:"100%"},".right, .left":{width:50,height:50,top:"50% !important",zIndex:99999,position:"absolute",border:"none",cursor:"pointer",marginTop:0,"&:focus":{outline:"none"},backgroundColor:"transparent"},".right":{right:0},".left":{left:0},".close-button":{position:"absolute",right:0,background:"transparent",border:"none",padding:"1rem",zIndex:99999,cursor:"pointer","&:focus":{outline:"none"}},".slider-wrapper":{height:"100%"},ul:{height:"100% !important"}})),q=["children"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,F.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=R.fC,U=R.xz,$=function(e){var t=e.children,n=(0,_.Z)(e,q);return(0,j.jsxs)(R.h_,{children:[(0,j.jsx)(A,{}),(0,j.jsx)(M,G(G({},n),{},{className:"Dialog--Content",children:t}))]})},X=R.x8,W=function(e){var t=e.children,n=e.images,i=e.currentIndex;return(0,j.jsxs)(H,{children:[(0,j.jsx)(U,{asChild:!0,children:(0,j.jsx)(V,{as:"div",children:t})}),(0,j.jsxs)($,{children:[(0,j.jsx)(X,{asChild:!0,children:(0,j.jsx)("button",{"aria-label":"Close",className:"close-button",children:(0,j.jsx)("img",{src:"/images/icon--close--32.svg"})})}),(0,j.jsx)(L.lr,{infiniteLoop:!0,showStatus:!1,showThumbs:!1,showIndicators:!1,selectedItem:i,renderArrowNext:function(e,t){return t&&(0,j.jsx)("button",{type:"button",className:"right carousel control-next",onClick:e,children:(0,j.jsx)("img",{src:"/images/icon--arrow-right--48.svg"})})},renderArrowPrev:function(e,t){return t&&(0,j.jsx)("button",{type:"button",className:"left carousel control-prev",onClick:e,children:(0,j.jsx)("img",{src:"/images/icon--arrow-left--48.svg"})})},children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,j.jsx)(z,{className:"ProductImages-images-image-wrapper","data-index":t,children:"VIDEO"===e.node.mediaContentType?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(I,{children:(0,j.jsx)(D,{loop:!0,muted:!0,autoPlay:!0,src:e.node.sources[0].url})})}):(0,j.jsx)(P.Z,{image:null===e||void 0===e?void 0:e.node,attributes:{className:"ProductImages-images-image-img"},attributesFigure:{className:"ProductImages-images-image"}})},t)}))})]})]})},J=function(e){var t=e.post,n=(0,a.useRef)(),i=t.media.edges.filter((function(e){return"VIDEO"===e.node.mediaContentType})),o=[].concat((0,k.Z)(t.images.edges),(0,k.Z)(i));return(0,j.jsx)(E,{children:(0,j.jsx)(Z,{children:null===o||void 0===o?void 0:o.map((function(e,t){return(0,j.jsx)(W,{images:o,currentImage:e.node.src,currentIndex:t,children:(0,j.jsx)("div",{className:"ProductImages-images-image-wrapper","data-index":t,children:"VIDEO"===e.node.mediaContentType?(0,j.jsx)(I,{children:(0,j.jsx)(D,{ref:n,loop:!0,muted:!0,autoPlay:!0,src:e.node.sources[0].url})}):(0,j.jsx)(P.Z,{image:null===e||void 0===e?void 0:e.node,attributes:{className:"ProductImages-images-image-img"},attributesFigure:{className:"ProductImages-images-image"}})},t)},t)}))})})},Y=n(28608),K=function(e){var t=e.images;return(0,j.jsx)(Y.Z,{children:t.map((function(e,n){return(0,j.jsx)(W,{images:t,currentIndex:n,image:e,children:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(P.Z,{image:null===e||void 0===e?void 0:e.node,attributes:{className:"Gallery-item-img lazypreload"},attributesFigure:{className:"Gallery-image"}},n)})},n)}))})},Q=function(e){var t,n=e.post;return(0,j.jsx)("div",{className:"ProductImagesMobile",children:(0,j.jsx)("div",{className:"ProductImagesMobile-images",children:(0,j.jsx)(K,{images:null===n||void 0===n||null===(t=n.images)||void 0===t?void 0:t.edges})})})},ee=n(97239),te=function(e){var t,n,i,o,r,l,s,c,u,p=e.post,v=(0,d.Z)(),g=null===p||void 0===p||null===(t=p.collections)||void 0===t||null===(n=t.edges)||void 0===n||null===(i=n[0])||void 0===i||null===(o=i.node)||void 0===o||null===(r=o.products)||void 0===r?void 0:r.edges,f=(0,a.useState)(6),h=f[0],x=f[1];return(0,a.useEffect)((function(){v.width>1080?x(4):v.width>800?x(3):x(2)}),[v]),null!==g&&void 0!==g&&g.length?(0,j.jsxs)("div",{className:"ProductRelated",children:[(0,j.jsxs)("h3",{className:"ProductRelated-title",children:["More from ",null===p||void 0===p||null===(l=p.collections)||void 0===l||null===(s=l.edges)||void 0===s||null===(c=s[0])||void 0===c||null===(u=c.node)||void 0===u?void 0:u.title]}),(0,j.jsx)(m.Z,{posts:g.slice(0,h),cols:h,context:"related"})]}):null},ne=n(41664),ie=n.n(ne),oe=n(29461),re=n(96248),le=n(83920),se=n(7794),ce=["className"];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){(0,F.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=e.data,n=void 0===t?{}:t,i=e.attributes,o=void 0===i?{}:i,r=(0,a.useRef)(null),l=(0,a.useRef)(null),s=(0,d.Z)(),c=(0,a.useState)(!0),u=c[0],p=c[1],v=(0,a.useState)(null),m=v[0],g=v[1];o.className=(null===o||void 0===o?void 0:o.className)||"";var f=o.className,x=(0,_.Z)(o,ce),y=h()([f,"VimeoBackgroundVideo",{playing:u}]);function b(){p(!0)}function O(){p(!1)}return(0,a.useEffect)((function(){return l.current&&(l.current.addEventListener("play",b),l.current.addEventListener("pause",O),l.current.addEventListener("ended",O)),function(){l.current&&(l.current.removeEventListener("play",b),l.current.removeEventListener("pause",O),l.current.removeEventListener("ended",O))}}),[]),(0,a.useEffect)((function(){if(r.current){var e=r.current.getBoundingClientRect(),t=null;n.forEach((function(n){!t&&n.width>=e.width&&(t=n)})),t||(t=n[n.length-1]),g(t)}}),[s]),(0,j.jsx)("div",de(de({className:y},x),{},{ref:r,children:(0,j.jsx)("video",{className:"VimeoBackgroundVideo-video",loop:!0,muted:!0,autoPlay:!0,playsInline:!0,src:null===m||void 0===m?void 0:m.link,ref:l})}))},pe=function(e){var t,n,i,o,r,l,s,c,a,d=e.post,u=null===d||void 0===d||null===(t=d.collectionsStyle)||void 0===t?void 0:t.collectionsTextcolor,p=null===d||void 0===d||null===(n=d.collectionsStyle)||void 0===n?void 0:n.collectionsTextstyle,v=(null===d||void 0===d||null===(i=d.collectionsMedia)||void 0===i?void 0:i.collectionsTeaserimage)||(null===d||void 0===d||null===(o=d.collectionsMedia)||void 0===o||null===(r=o.collectionsImages)||void 0===r?void 0:r[0]),m=null===d||void 0===d||null===(l=d.collectionsMedia)||void 0===l?void 0:l.collectionsVideo,g=m?(0,oe.l)(JSON.parse(m)):null,f=h()(["CollectionTeaser",{"has-image":v},{"has-video":g},{"has-description":d.collectionsDescription.collectionsDescription},{light:"light"===p}]);return(0,j.jsx)("div",{className:f,style:{color:u||"inherit"},children:(0,j.jsx)(ie(),{href:(0,re.sF)("collections",null===d||void 0===d||null===(s=d.collectionsShopify)||void 0===s?void 0:s.collectionsShopifyHandle),scroll:!1,prefetch:!1,children:(0,j.jsxs)("a",{children:[g?(0,j.jsx)(ue,{data:g,attributes:{className:"CollectionTeaser-video"}}):v&&(0,j.jsx)(se.Z,{image:null===v||void 0===v?void 0:v.mediaDetails,attributes:{className:"CollectionTeaser-image-img"},attributesFigure:{className:"CollectionTeaser-image"},color:null===v||void 0===v||null===(c=v.dominantColor)||void 0===c?void 0:c.dominantColor}),(0,j.jsx)("div",{className:"CollectionTeaser-title",children:(0,j.jsx)("h2",{className:"CollectionTeaser-title-text",children:null===d||void 0===d?void 0:d.title})}),(0,j.jsxs)("div",{className:"CollectionTeaser-info",children:[(null===d||void 0===d||null===(a=d.collectionsDescription)||void 0===a?void 0:a.collectionsDescription)&&(0,j.jsx)("div",{className:"CollectionTeaser-description",children:(0,j.jsx)(le.Z,{html:d.collectionsDescription.collectionsDescription})}),(0,j.jsx)("p",{className:"CollectionTeaser-more",children:(0,j.jsx)("span",{children:"Shop now"})})]})]})})})},ve=function(e){var t=e.post,n=h()(["PostCollections"]);return(0,j.jsx)("article",{className:n,children:(0,j.jsx)(pe,{post:t})})},me=function(e){var t,n,i,o=e.post,r=null===o||void 0===o||null===(t=o.relatedCollections)||void 0===t?void 0:t.edges;return null!==(n=r)&&void 0!==n&&n.length?(r=(r=r.filter((function(e){var t,n,i,r;return(null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.handle)!==(null===o||void 0===o||null===(n=o.collections.edges)||void 0===n||null===(i=n[0])||void 0===i||null===(r=i.node)||void 0===r?void 0:r.handle)}))).slice(0,2),(0,j.jsx)(j.Fragment,{children:(null===(i=r)||void 0===i?void 0:i.length)>0&&(0,j.jsxs)("div",{className:"ProductCollections",children:[(0,j.jsx)("h3",{className:"ProductCollections-title",children:"More Collections"}),(0,j.jsx)("div",{className:"PostsCollections",children:r.map((function(e,t){return(0,j.jsx)(ve,{post:null===e||void 0===e?void 0:e.node},t)}))})]})})):null};var ge=function(e){var t,n,i,o,r,l,s,a,d,u,p,v,m=e.post,g=[];return null!==m&&void 0!==m&&null!==(t=m.variants)&&void 0!==t&&null!==(n=t.edges)&&void 0!==n&&n.length&&(null===m||void 0===m||null===(p=m.variants)||void 0===p||null===(v=p.edges)||void 0===v||v.map((function(e){var t,n,i,o,r,l,s,c;g.push({"@type":"Offer",name:"".concat(null===m||void 0===m?void 0:m.title," ").concat(null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.title),sku:null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.sku,priceCurrency:null===e||void 0===e||null===(i=e.node)||void 0===i||null===(o=i.priceV2)||void 0===o?void 0:o.currencyCode,price:null===e||void 0===e||null===(r=e.node)||void 0===r||null===(l=r.priceV2)||void 0===l?void 0:l.amount,availability:null!==e&&void 0!==e&&null!==(s=e.node)&&void 0!==s&&s.availableForSale&&(null===e||void 0===e||null===(c=e.node)||void 0===c?void 0:c.quantityAvailable)>0?"https://schema.org/InStock":"https://schema.org/OutOfStock"})}))),(0,j.jsx)(c(),{children:(0,j.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org/","@type":"Product",productID:null===m||void 0===m?void 0:m.handle,url:"https://colorsxstudios.com".concat((0,re.sF)("products",null===m||void 0===m?void 0:m.handle)),name:null===m||void 0===m?void 0:m.title,description:null===m||void 0===m?void 0:m.description,brand:{"@type":"Brand",name:"COLORSxSTUDIOS"},image:null===m||void 0===m||null===(i=m.images)||void 0===i||null===(o=i.edges)||void 0===o||null===(r=o[0])||void 0===r||null===(l=r.node)||void 0===l?void 0:l.src,image_link:null===m||void 0===m||null===(s=m.images)||void 0===s||null===(a=s.edges)||void 0===a||null===(d=a[0])||void 0===d||null===(u=d.node)||void 0===u?void 0:u.src,offers:g})})})},fe=(0,C.zo)("main",{marginTop:0,position:"relative",display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"flex-start",borderTop:"1px solid var(--color--text)","@bp2":{flexDirection:"row",paddingTop:"2rem",marginTop:0,borderTop:"none"}});function he(e){var t,n,i,o,l=e.post,s=e.types,d=e.colors,p=(0,T.Z)(),m=(0,N.Z)("(max-width: 800px)");return(0,a.useEffect)((function(){var e,t,n,i;window.fbq&&window.fbq("track","ViewContent",{content_ids:[l.id],content_category:l.productType,content_name:l.title,content_type:l.productType,contents:[{id:l.id,quantity:l.totalInventory}],currency:null===(e=l.priceRange)||void 0===e||null===(t=e.minVariantPrice)||void 0===t?void 0:t.currencyCode,value:parseFloat(null===(n=l.priceRange)||void 0===n||null===(i=n.minVariantPrice)||void 0===i?void 0:i.amount)});return function(){p.setSelectedVariant(null)}}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r(),{src:"https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",strategy:"beforeInteractive"}),(0,j.jsx)(c(),{children:(0,j.jsxs)("title",{children:[null===l||void 0===l?void 0:l.title," \u2014 Shop \u2014 COLORSxSTUDIOS"]})}),(0,j.jsx)(u.Z,{title:null===l||void 0===l?void 0:l.title,description:null===l||void 0===l?void 0:l.description,image:null===l||void 0===l||null===(t=l.images)||void 0===t||null===(n=t.edges)||void 0===n||null===(i=n[0])||void 0===i||null===(o=i.node)||void 0===o?void 0:o.src}),(0,j.jsx)(ge,{post:l}),(0,j.jsxs)(v.o,{children:[(0,j.jsx)(v.$,{types:s,colors:d,filter:null!==l&&void 0!==l&&l.productType?"type:".concat(l.productType):null,labelAll:"All"}),(0,j.jsxs)(fe,{children:[m?(0,j.jsx)(Q,{post:l}):(0,j.jsx)(J,{post:l}),(0,j.jsx)(ee.ZP,{post:l})]})]}),(0,j.jsx)(te,{post:l}),(0,j.jsx)(me,{post:l})]})}var xe=n(76056),je=!0;function ye(e){if((0,i.useRouter)().isFallback)return(0,j.jsx)(l.Z,{});if(!(e.posts||e.post||e.collections||e.products))return(0,j.jsx)(xe.Z,{title:"404"});switch(e.view){case"overview":return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r(),{src:"https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",strategy:"beforeInteractive"}),(0,j.jsx)(O,{collections:e.collections,products:e.products,types:e.types,colors:e.colors,filter:e.filter,order:e.currentOrder})]});case"products":return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r(),{src:"https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",strategy:"beforeInteractive"}),(0,j.jsx)(S,{posts:e.posts,types:e.types,colors:e.colors,filter:e.filter,order:e.currentOrder})]});case"product":return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r(),{src:"https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",strategy:"beforeInteractive"}),(0,j.jsx)(he,{post:e.post,types:e.types,colors:e.colors})]})}}},92836:function(e,t,n){"use strict";n.d(t,{$G:function(){return c},Nw:function(){return s},XD:function(){return a},kC:function(){return d}});var i=n(91036),o=n.n(i),r=n(30496),l=n.n(r);function s(e,t){return o()(e,{allowedTags:t})}function c(e,t){return l()(e,t,{})}function a(e){return e.replace(/(\s+)/gm," ").replace(/(\r\n|\n|\r)+/gm," ").trim()}function d(e){return e.replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))}},43743:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/[[...param]]",function(){return n(68441)}])},22868:function(){},14777:function(){},99830:function(){},70209:function(){}},function(e){e.O(0,[6883,8182,3305,3860,9774,2888,179],(function(){return t=43743,e(e.s=t);var t}));var t=e.O();_N_E=t}]);