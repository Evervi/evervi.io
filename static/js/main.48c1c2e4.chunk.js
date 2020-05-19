(this["webpackJsonpevervi.io"]=this["webpackJsonpevervi.io"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(17),l=a.n(c),o=(a(24),a(2)),i=a(9),s=a.n(i);var m=function(e){var t="Button";return e.brandColor&&(t+=" Button__color--".concat(e.brandColor)),n.a.createElement("button",{className:t,style:{background:e.color},onClick:e.onClick},e.children,n.a.createElement(s.a,null))},u=a(1),p=a(5),d=a.n(p),f=n.a.createContext({isOpen:!1,setOpen:function(e){}}),h=function(){var e=Object(r.useContext)(f),t=Object(r.useRef)(null);if(null===t.current){t.current=[e.isOpen,function(t){e.setOpen(!!t)}]}return t.current[0]=e.isOpen,t.current},v=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],r=t[1],c=d()("Drawer",{"Drawer--open":a});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c,onClick:function(){return r(!1)}},n.a.createElement("div",{className:"Drawer__Container"},n.a.createElement("h1",{onClick:console.log},"evervi"),n.a.createElement(m,{brandColor:"secondary",onClick:console.log},n.a.createElement("i",{className:"fas fa-home"})," HOME"),n.a.createElement("br",null),n.a.createElement(m,{brandColor:"secondary",onClick:console.log},n.a.createElement("i",{className:"fas fa-image"})," PORTFOLIO"),n.a.createElement("br",null),n.a.createElement(m,{brandColor:"secondary",onClick:console.log},n.a.createElement("i",{className:"fas fa-id-card-alt"})," CONTACT"))))};function E(){console.log("Ci w dup\u0119!")}var g=function(){var e,t=h(),a=Object(o.a)(t,2)[1],r=Object(u.f)(),c=Object(u.g)(),l=function(e){return function(){r.push(e)}},i=Boolean(null===c||void 0===c||null===(e=c.pathname)||void 0===e?void 0:e.includes("/projects")),s=d()("Navbar",{"Navbar--branded":i});return n.a.createElement("nav",{className:s},n.a.createElement("div",{className:"Navbar__Container"},n.a.createElement("h1",{onClick:l("/")},"evervi"),n.a.createElement("div",{className:"Navbar__menu"},n.a.createElement(m,{brandColor:"secondary",onClick:l("/")},"HOME"),n.a.createElement(m,{brandColor:"secondary",onClick:l("/projects")},"PORTFOLIO"),n.a.createElement(m,{brandColor:"secondary",onClick:E},"CONTACT")),n.a.createElement("div",{className:"Navbar__mobile-menu"},n.a.createElement(m,{brandColor:"secondary",onClick:function(){a(!0)}},"---"))))},b=a(7),y=a.n(b),_=a(6);function w(e){var t=e.title,a=e.desc,r=e.image_url,c=e.icon;return n.a.createElement("div",{className:"Offer__container"},n.a.createElement("div",{className:"Offer__container__side",style:{maxWidth:"30%",margin:"0 auto"}},n.a.createElement("i",{className:c}),n.a.createElement("div",{style:{flexGrow:1}},n.a.createElement("h3",null,t),n.a.createElement("p",null,a))),n.a.createElement("div",{className:"Offer__container__side"},n.a.createElement("div",{className:"Offer__container__side__image"},n.a.createElement("img",{src:r,alt:"random"}),n.a.createElement("div",{className:"Offer__container__side__image__slope"}))))}var O=function(){return n.a.createElement("div",{className:"Offer"},n.a.createElement(w,{title:"Creating websites",icon:"fab fa-accusoft",desc:"We'll create a very nice website for you!",image_url:"https://source.unsplash.com/lhltMGdohc8"}),n.a.createElement(w,{title:"SEO",icon:"fab fa-accusoft",desc:"Your site will be everywhere",image_url:"https://source.unsplash.com/Xeo_7HSwYsA"}),n.a.createElement(w,{title:"Website migration",icon:"fab fa-accusoft",desc:"Your fucking site will be on the new server!",image_url:"https://source.unsplash.com/lZ_4nPFKcV8"}))},j={about:{en_US:"About",pl_PL:"O nas"},aboutDesc01:{en_US:"Kamie\u0144 dry af, consectetur adipiscing elit. Nullam gravida eu lacus ac vulputate. Pellentesque ut magna vitae augue condimentum finibus. Nam ullamcorper scelerisque erat, eget condimentum arcu sagittis ac.",pl_PL:"Pierdzi mucha, consectetur adipiscing elit. Nullam gravida eu lacus ac vulputate. Pellentesque ut magna vitae augue condimentum finibus. Nam ullamcorper scelerisque erat, eget condimentum arcu sagittis ac."},header1:{en_US:"wider",pl_PL:"szersza"},header2:{en_US:"VISION",pl_PL:"WIZJA"},headerDesc:{en_US:"We'll take care of your online existence from scratch. We'll take care of every possible detail, making your brand recognizable and present at the highest level. Our offer consists of many treatments that allow you to achieve it - from website preparation to marketing campaigns!",pl_PL:"Zajmiemy si\u0119 Twoim istnieniem w sieci od podstaw. Zadbamy o ka\u017cdy mo\u017cliwy detal sprawiaj\u0105c, \u017ce Twoja marka stanie si\u0119 rozpoznawalna oraz b\u0119dzie si\u0119 prezentowa\u0107 na jak najwy\u017cszym poziomie. Nasza oferta sk\u0142ada si\u0119 z wielu zabieg\xf3w, kt\xf3re pozwalaj\u0105 to osi\u0105gn\u0105\u0107 \u2013 od przygotowania witryny internetowej, a\u017c po kampanie marketingowe!"}};var C=function(){var e=Object(b.useLittera)(j),t=Object(o.a)(e,1)[0];return n.a.createElement("div",{className:"Header"},n.a.createElement("div",{className:"Header__side Header__side--wide Header__side--text"},n.a.createElement("div",{className:"Header__side__dotty Header__side__dotty--mobile"}),n.a.createElement("h1",{style:{fontWeight:"bold",fontSize:"82px",marginTop:0,marginBottom:"1rem",lineHeight:"70px"}},n.a.createElement("span",{style:{opacity:.9}},t.header1),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"#009688"}},t.header2)),n.a.createElement("p",null,t.headerDesc)),n.a.createElement("div",{className:"Header__side Header__side--fancy"},n.a.createElement("div",{className:"Header__side__dotty"}),n.a.createElement("div",{className:"Header__side__shape"},n.a.createElement("div",{className:"Header__side__shadow"}),n.a.createElement("img",{src:"https://source.unsplash.com/700x700/?it,server,client,connection,code,website",alt:"header"})),n.a.createElement("p",{style:{margin:0,marginTop:"20px",textAlign:"right",float:"right",opacity:.5}},"powered by ",n.a.createElement("b",null,"Unsplash"))))};var k=function(){var e=Object(b.useLittera)(j),t=Object(o.a)(e,3),a=t[0],r=t[2];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"About"},n.a.createElement("div",{className:"About__Card"},n.a.createElement("h3",null,a.about),n.a.createElement("p",null,a.aboutDesc01),n.a.createElement("p",null,"Donec pretium lorem metus, ac accumsan lorem auctor sit amet. Praesent sapien tortor, fermentum nec magna sit amet, tincidunt maximus libero."),n.a.createElement("p",null,"Maecenas ullamcorper pretium sapien ac venenatis. Suspendisse mattis dapibus gravida."),n.a.createElement("p",null,"Praesent sapien tortor, fermentum nec magna sit amet, tincidunt maximus libero."),n.a.createElement(m,{brandColor:"primary",onClick:function(){return r("pl_PL")}},"polski"),n.a.createElement(m,{brandColor:"secondary",onClick:function(){return r("en_US")}},"english"),n.a.createElement("a",{href:"https://google.com"},"Continue reading >")),n.a.createElement("div",{className:"About__Image"},n.a.createElement("img",{src:"https://source.unsplash.com/aWf7mjwwJJo",alt:"AboutUs"})),n.a.createElement("div",{className:"About__Shadow"})))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var M=n.a.createElement("path",{d:"M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M57,36.9c3.5,0,7.2-0.1,10.7,0.1 c-0.1,3.7,0,7.6-0.1,11.3c-3.5,0-7.1,0-10.6,0c0,11.7,0,23.3,0,35c-5,0-10,0-15,0c0-11.7,0-23.3,0-35c-3.1-0.1-6.4,0-9.6-0.1 c0-3.8,0-7.6,0-11.4c3.2,0,6.4,0,9.5,0c0.1-3,0-5.7,0.2-8.1s1-4.4,2.1-6.1c2.2-3.2,5.8-5.8,10.7-6c4-0.2,8.5,0.1,12.8,0.1 c0,3.8,0.1,7.7-0.1,11.4c-2.1,0.1-4.3-0.2-6.1,0c-1.9,0.2-3.3,1.3-3.9,2.7C56.7,32.5,57,34.6,57,36.9z"}),z=function(e){var t=e.svgRef,a=e.title,r=N(e,["svgRef","title"]);return n.a.createElement("svg",x({id:"Facebook",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,M)},P=n.a.forwardRef((function(e,t){return n.a.createElement(z,x({svgRef:t},e))}));a.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var R=n.a.createElement("g",null,n.a.createElement("path",{d:"M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M81.8,61.2c-0.6,2.2-0.8,2.9-1.1,3.5l-0.2,0.4 c-2.7,6.2-8.7,10.2-21.1,11.5H41.8c-11.6-1.3-18.2-5.3-21.5-11.4c0,0-0.1-0.2-0.2-0.4c-0.3-0.6-0.6-1.3-0.9-2 C19,62.5,19,62.6,19,62.3c-1.2-3.3-1.7-7.1-1.7-11.4c0-5.6,2-10.2,5.4-13.8c-0.5-1.3-2.3-6.6,0.5-13.6c0,0,4.3-1.4,14.2,5.3 c4.1-1.1,8.6-1.7,12.9-1.7c4,0,8,0.5,11.7,1.4c6.9-4.6,11-5.2,12.7-5.2c0.7,0,1,0.1,1,0.1c2.4,6,1.5,10.6,0.9,12.7 c3.7,3.7,6,8.6,6,14.7C82.7,55.2,82.4,59,81.8,61.2z"}),n.a.createElement("path",{d:"M68.1,48.2c-1.8-1.9-4.3-2.4-7.2-2.4c-3.1,0-6.6,0.6-10.3,0.6c-7.3,0-13.7-2.1-17.5,1.9c-2.3,2.4-3.6,5.3-3.6,8.5 c0,13.1,9.5,15.1,21.2,15.1s21.2-0.4,21.2-15.1C71.7,53.6,70.4,50.7,68.1,48.2L68.1,48.2z M39.1,64.8c-2.4,0-4.4-3.3-4.4-7.3 c0-4.1,2-7.3,4.4-7.3s4.4,3.3,4.4,7.3S41.5,64.8,39.1,64.8z M62.7,64.8c-2.4,0-4.4-3.3-4.4-7.3c0-4.1,2-7.3,4.4-7.3 c2.4,0,4.4,3.3,4.4,7.3S65.2,64.8,62.7,64.8z"})),I=function(e){var t=e.svgRef,a=e.title,r=q(e,["svgRef","title"]);return n.a.createElement("svg",S({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,R)},B=n.a.forwardRef((function(e,t){return n.a.createElement(I,S({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var H=n.a.createElement("path",{d:"M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M76.7,36.4c0.3,9.1-2.3,16.4-5.7,22.1 c-3.3,5.6-7.8,10.1-13.2,13.3c-5.4,3.3-12.6,5.7-21.1,5.4c-7.9-0.2-14.2-2.5-19.3-5.6c-0.3-0.2-0.7-0.4-0.9-0.7 c8.8,1,15.5-1.9,20.3-5.6c-3.5-0.1-6.2-1.3-8.2-3c-2-1.6-3.7-3.8-4.6-6.6c1.8,0.4,4.4,0.3,6-0.2c-3.3-0.7-5.7-2.5-7.6-4.7 c-1.9-2.1-3.2-5-3.2-9c0.1-0.2,0.4,0.1,0.6,0.2c1.5,0.7,3.4,1.3,5.5,1.4c-3.4-2.4-6.8-7-5.8-13.5c0.3-1.9,0.9-3.5,1.7-4.9 c0.9,0.9,1.7,1.9,2.6,2.8C30,34,38,38.5,49.6,39.4c-1.6-7.1,2.1-12.4,6.6-15c2.5-1.4,6-2.1,9.4-1.4c3.1,0.6,5.5,2.2,7.3,4 c3.4-0.6,6.1-1.9,8.7-3.3c-1.2,3.3-3.1,5.9-6,7.5c2.8-0.2,5.5-1.2,7.8-2.1C81.7,32,79.3,34.3,76.7,36.4z"}),W=function(e){var t=e.svgRef,a=e.title,r=A(e,["svgRef","title"]);return n.a.createElement("svg",L({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,H)},Z=n.a.forwardRef((function(e,t){return n.a.createElement(W,L({svgRef:t},e))}));a.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var F=n.a.createElement("g",null,n.a.createElement("path",{d:"M38.4,55.5c0-1.3,0-2.5,0-3.8c-3.8,0-7.6,0-11.3,0c-0.1,0,0,0.1,0,0.1c0,1.2,0,2.4,0,3.6c1.3,0,2.7-0.1,3.8,0 c0,6.8,0,13.7,0,20.5c1.2,0,2.5,0,3.7,0c0-6.8-0.1-13.8,0-20.6C35.9,55.5,37.1,55.5,38.4,55.5z"}),n.a.createElement("path",{d:"M44.5,69.7c0,0.6,0.1,1.3,0,1.7c-0.1,0.5-1.4,1.5-2.1,1.4c-1-0.1-0.7-2.1-0.7-3.2c0-4,0-7.8,0-11.7c-1.1,0-2.2,0-3.2,0 c-0.1,0,0,0.1,0,0.1c0,3.9,0,9,0,13.3c0,1.6-0.1,3.1,0.5,3.9c1.2,1.8,4,0.3,4.9-0.6c0.2-0.2,0.4-0.5,0.7-0.6c0,0.6,0,1.3,0,1.9 c1.1,0,2.2,0,3.3,0c0-6,0-12,0-18c-1.1,0-2.2,0-3.3,0C44.5,61.7,44.5,66,44.5,69.7z"}),n.a.createElement("g",null,n.a.createElement("path",{d:"M46.4,35.6c0,0.8-0.1,2.2,0.2,2.7c0.6,0.9,2.2,0.5,2.5-0.3c0.3-0.7,0.1-1.9,0.1-2.7c0-2.2,0-3.5,0-5.6 c0-1,0.2-2.2-0.1-2.7c-0.3-0.6-1.1-0.7-1.6-0.6c-1.4,0.2-1.1,2-1.1,3.5C46.4,31.4,46.4,34,46.4,35.6z"}),n.a.createElement("path",{d:"M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M55.4,32.9c0-3.3,0-6.4,0-9.2c1-0.1,2.3-0.1,3.3,0 c0,2.2,0,4.5,0,6.9s-0.2,4.9,0,7c0.2,1.2,1.1,1.1,1.9,0.5c0.3-0.2,0.8-0.6,0.9-0.9c0.1-0.4,0-1.2,0-1.7c0-3.7,0-8.1,0-11.7 c1-0.1,2.3-0.1,3.3,0c0,5.9,0,11.8,0,17.7c-1,0.1-2.3,0.1-3.3,0c0-0.6,0-1.2,0-1.8c-0.8,0.9-3.4,3.2-5.2,1.7 C54.9,40.1,55.4,35.5,55.4,32.9z M47.2,23.2c2.4-0.2,4,0.7,4.8,2.1c0.9,1.5,0.6,4.9,0.6,7.1s0.2,5.7-0.5,7.2 c-1.1,2.1-4.6,3.1-6.9,1.6c-1.2-0.7-2-2.1-2.1-3.6c-0.2-1.6,0-3.5,0-5.3c0-2.7-0.3-5.4,0.5-6.9C44.2,24.3,45.4,23.4,47.2,23.2z  M30.7,17.4c1.1-0.1,2.5,0,3.7,0c0.8,2.8,1.5,5.7,2.2,8.5c0.1,0.4,0.1,0.8,0.4,1.1c0.3-0.3,0.3-0.8,0.4-1.1 c0.7-2.8,1.4-5.8,2.1-8.5c1.2,0,2.4,0,3.7,0c-1.1,4-2.5,8.2-3.7,12.3c-0.2,0.6-0.5,1.2-0.5,1.8c-0.1,0.8,0,1.7,0,2.5 c0,2.6,0,5,0,7.5c-1.2,0-2.5,0.1-3.7,0c0-1.6,0-3.2,0-4.7c0-1.6,0.2-3.2,0-4.7c-0.1-0.6-0.4-1.2-0.5-1.8 C33.3,25.9,32.1,21.5,30.7,17.4L30.7,17.4z M77,73.9c0,4.9-3.9,8.8-8.8,8.8H31.7c-4.9,0-8.8-3.9-8.8-8.8V55c0-4.9,3.9-8.8,8.8-8.8 h36.5c4.9,0,8.8,3.9,8.8,8.8V73.9z"})),n.a.createElement("path",{d:"M60.5,67.4c0-2.1,0.1-4.2,0-5.6c-0.1-1.5-0.5-2.8-1.3-3.4c-1.1-0.9-2.8-0.7-3.8,0c-0.4,0.3-0.7,0.7-1.1,0.9 c0-2.5,0-5.1,0-7.6c-1.1,0-2.2,0-3.3,0c-0.1,0,0,0.1,0,0.1c0,8.1,0,16.1,0,24.2c1.1,0,2.2,0,3.3,0c0-0.4,0-0.9,0-1.3 c0.9,1.1,2.9,2,4.6,1.2c0.9-0.5,1.5-1.6,1.6-2.9C60.6,71.4,60.5,69.4,60.5,67.4z M56.6,73.4c-0.8,0.5-1.7-0.2-2.2-0.7 c0-2.4,0-5.5,0-8.2c0-0.9-0.2-2.1,0-2.7c0.2-0.6,1.3-1.1,2.1-0.6c1.1,0.6,0.6,4.4,0.6,6.1c0,1.1,0,2.2,0,3.4 C57.1,71.7,57.2,73,56.6,73.4z"}),n.a.createElement("path",{d:"M72.7,69.4c-1.1,0-2.3,0-3.4,0c-0.1,1.3,0.3,3.2-0.6,3.8c-0.3,0.2-1,0.4-1.6,0.1c-1.4-0.6-0.5-3.9-0.8-5.7 c2.1,0,4.2,0,6.3,0c-0.1-2.5,0.2-4.9-0.2-6.9c-0.5-2-2.2-3.3-4.8-3.2c-2.4,0.1-4.3,1.8-4.6,3.9c-0.3,2.1-0.1,5.3-0.1,8.1 c0,3,0.3,5,2,6.2c1.4,1,4,1.1,5.7,0.1C72.4,74.8,72.8,72.6,72.7,69.4z M66.7,61.4c0.4-0.6,1.5-0.6,2.1-0.2c0.8,0.6,0.5,2.2,0.6,3.4 c-1,0-2,0-2.9,0C66.4,63.4,66.2,62.1,66.7,61.4z"})),U=function(e){var t=e.svgRef,a=e.title,r=D(e,["svgRef","title"]);return n.a.createElement("svg",T({id:"YouTube",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,F)},J=n.a.forwardRef((function(e,t){return n.a.createElement(U,T({svgRef:t},e))})),V=(a.p,Object.freeze({twitter:Z,facebook:P,github:B,youtube:J})),Y=0,K=function(e){var t=e.media,a=e.url,r=V[t],c=d()("MediaIcon","MediaIcon--".concat(t));return n.a.createElement("a",{href:a},n.a.createElement("div",{className:c,key:"media_icon_".concat(Y++)},n.a.createElement(r,{className:"MediaIcon__Image"})))},G=function(){return n.a.createElement("div",{className:"SocialMedia"},n.a.createElement(K,{url:"#",media:"github"}),n.a.createElement(K,{url:"#",media:"facebook"}),n.a.createElement(K,{url:"#",media:"twitter"}),n.a.createElement(K,{url:"#",media:"youtube"}))},X=function(e){var t=Object(u.f)();return n.a.createElement("div",{className:"ProjectCard",onClick:function(){var a="/project/".concat(e.short);t.push(a)}},n.a.createElement("div",{className:"ProjectCard__ImgContainer"},n.a.createElement("img",{alt:"projects front",src:e.media[0].url}),n.a.createElement(s.a,null)),n.a.createElement("div",{className:"ProjectCard__ContentContainer"},n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.description)))},$=Object.freeze([{title:"JMT Shop",type:"woocommerce",description:"Shop for JMT Company",url:"https://i.imgur.com/hMlgzCF.png",media:[{url:"https://i.imgur.com/hMlgzCF.png",orientation:"horizontal"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"jmt-shop",keywords:["wordpress","woocommerce","shop"],stack:["wordpress","woocommerce"]},{title:"Moonshine Shop",type:"woocommerce",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec augue eget neque tincidunt ornare. Nullam porttitor odio et quam pulvinar, ac volutpat ipsum scelerisque. Aenean ac porttitor mauris. Duis quis erat non nulla gravida consectetur eu ut felis. Proin laoreet, sapien sit amet accumsan laoreet, metus metus faucibus ligula, quis scelerisque lectus libero ut odio. Etiam fringilla ante ut libero dictum, et placerat ipsum lobortis. Vestibulum tincidunt consectetur eros at egestas. Etiam et sollicitudin tellus. Nunc imperdiet interdum leo, a volutpat nulla pharetra dapibus. Nullam consectetur turpis vitae enim finibus egestas. Maecenas sit amet elit vitae lectus viverra placerat. Pellentesque consectetur est non risus efficitur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sagittis dui in dui facilisis, non lobortis libero tristique. Nullam ac pretium est, et hendrerit sapien.",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/400x500",orientation:"vertical"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"moonshine_shop",keywords:["moonshine","shop","woocommerce"],stack:["wordpress","react"]},{title:"CoolShop",type:"woocommerce",description:"That's an online store that I made for CoolCompany",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/500x400",orientation:"horizontal"},{url:"https://source.unsplash.com/random/500x600",orientation:"vertical"}],short:"moonshine-shop",keywords:["moonshine","shop","woocommerce"],stack:["wordpress","react"]},{title:"Moonshine Shop 2",type:"shop2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/500x600",orientation:"vertical"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"moonshine-shop",keywords:["moonshine","shop","woocommerce"],stack:["wordpress","react"]},{title:"Moonshine Shop 2",type:"shop2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/500x600",orientation:"vertical"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"moonshine-shop",keywords:["moonshine","shop","woocommerce"],stack:["wordpress","react"]},{title:"Moonshine Shop 2",type:"shop2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/500x600",orientation:"vertical"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"moonshine-shop",keywords:["moonshine","shop","woocommerce"],stack:["wordpress","react"]},{title:"Moonshine Shop 2",type:"shop2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",url:"https://moonshine.shop/",media:[{url:"https://source.unsplash.com/random/500x600",orientation:"vertical"},{url:"https://source.unsplash.com/random/600x500",orientation:"horizontal"}],short:"moonshine-shop",keywords:["dupa"],stack:["wordpress","react"]}]),Q=function(){var e=Object(u.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Portfolio"},n.a.createElement("h2",null,"See our portfolio!"),n.a.createElement("div",{className:"Portfolio__Projects"},$.filter((function(e,t){return t<3})).map((function(e){return n.a.createElement(X,Object.assign({key:e.short},e))}))),n.a.createElement(m,{brandColor:"third",onClick:function(){e.push("/projects")}},"SEE MORE")))};var ee=function(){return n.a.createElement("div",{style:{maxWidth:"100%"}},n.a.createElement(C,null),n.a.createElement(O,null),n.a.createElement(k,null),n.a.createElement(G,null),n.a.createElement(Q,null))},te=function(){var e=Object(r.useRef)(null);if(null===e.current){var t=-1;e.current=function(e,a){clearTimeout(t),t=setTimeout(e,a)}}return e.current},ae=function(e){var t=e.onChange,a=te(),r=function(e){t(e)};return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("input",{placeholder:"Search for something...",onChange:function(e){var t=e.target.value;a((function(){return r(t)}),1)}}))};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ce=n.a.createElement("circle",{cx:129,cy:112.43675,r:57,fill:"#3f3d56"}),le=n.a.createElement("circle",{cx:456,cy:131.43675,r:57,fill:"#3f3d56"}),oe=n.a.createElement("path",{d:"M800,216.71838a56.99618,56.99618,0,0,0-51.899,33.43817,56.99161,56.99161,0,0,1,89.7981,66.12366A56.99065,56.99065,0,0,0,800,216.71838Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),ie=n.a.createElement("path",{d:"M471,197.71838a56.99618,56.99618,0,0,1,51.899,33.43817,56.99161,56.99161,0,0,0-89.7981,66.12366A56.99065,56.99065,0,0,1,471,197.71838Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),se=n.a.createElement("path",{d:"M637,540.71838a147.12018,147.12018,0,1,1-147-147A146.50507,146.50507,0,0,1,637,540.71838Z",transform:"translate(-343 -144.28162)",fill:"#3f3d56"}),me=n.a.createElement("path",{d:"M637,540.71838a146.50507,146.50507,0,0,1-13.21,60.99A174.12072,174.12072,0,0,1,454.53,398.02837,147.12018,147.12018,0,0,1,637,540.71838Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),ue=n.a.createElement("circle",{cx:283,cy:261.43675,r:174,fill:"#3f3d56"}),pe=n.a.createElement("path",{d:"M668.28424,411.6701a56.99942,56.99942,0,0,1,79.62048-11.76959,57.0021,57.0021,0,1,0-79.62048,11.76959Z",transform:"translate(-343 -144.28162)",fill:"#fff"}),de=n.a.createElement("path",{d:"M535.28424,422.6701a56.99942,56.99942,0,0,1,79.62048-11.76959,57.0021,57.0021,0,1,0-79.62048,11.76959Z",transform:"translate(-343 -144.28162)",fill:"#fff"}),fe=n.a.createElement("circle",{cx:230,cy:221.43675,r:21,fill:"#3f3d56"}),he=n.a.createElement("circle",{cx:366,cy:205.43675,r:21,fill:"#3f3d56"}),ve=n.a.createElement("circle",{cx:296,cy:267.43675,r:11,fill:"#ff6584"}),Ee=n.a.createElement("path",{d:"M474,723.08941v-48.371H458v48.371a24.00589,24.00589,0,0,0-16,22.62891v.00006h48v-.00006A24.00589,24.00589,0,0,0,474,723.08941Z",transform:"translate(-343 -144.28162)",fill:"#3f3d56"}),ge=n.a.createElement("path",{d:"M533,723.08941v-48.371H517v48.371a24.00589,24.00589,0,0,0-16,22.62891v.00006h48v-.00006A24.00589,24.00589,0,0,0,533,723.08941Z",transform:"translate(-343 -144.28162)",fill:"#3f3d56"}),be=n.a.createElement("path",{d:"M554.86224,248.40509c-7.24978-11.67213-12.11946-25.38328-10.61059-39.04057s10.45529-26.98389,23.62645-30.89776,29.48724,4.19458,31.96939,17.70891a111.12764,111.12764,0,0,1,58.87866-49.0366c11.5115-4.05635,26.80946-4.97621,33.46571,5.25428,3.29431,5.06328,3.64668,11.94742,8.05959,16.0724,6.91788,6.46652,18.01131,1.912,27.46474,2.46471,13.29416.77724,23.99614,13.18432,25.67083,26.39545s-4.17661,26.48759-12.81342,36.62387-19.87194,17.65607-30.95343,25.04114",transform:"translate(-343 -144.28162)",fill:"#3f3d56"}),ye=n.a.createElement("path",{d:"M658.1277,451.99453c.71609-.75686,1.45552-1.48981,2.2279-2.18939q.51248-.46416,1.04132-.90989.33-.27813.66617-.54861c.38748-.31231.51-.38833.04016-.03958a43.621,43.621,0,0,1,5.35807-3.43006q1.28936-.69232,2.62392-1.2958c.20943-.09464.42028-.18563.6302-.27908-.943.41978-.20357.08648.03881-.01083q.80067-.32144,1.61317-.61177a46.36971,46.36971,0,0,1,6.15624-1.72882c.963-.20047,1.93151-.35572,2.9025-.51071.65372-.10434-.82292.09137-.16434.02306.28767-.02984.57456-.068.86227-.098q.8634-.09,1.72967-.149a48.37288,48.37288,0,0,1,6.24653-.02222c1.0396.06348,2.07405.169,3.10816.29138-1.04285-.12337.15169.0283.51845.08849q.85419.14017,1.70288.31173a45.52465,45.52465,0,0,1,5.99253,1.64078q.7321.25584,1.45474.53761c.26753.10422.53321.21269.79942.32019-.13449-.05431-.87663-.38953-.12484-.04826.94087.4271,1.87335.8668,2.78589,1.35222a44.00866,44.00866,0,0,1,5.36947,3.4225c.51894.381-.58371-.4834-.092-.067.22.18632.4491.36256.67031.54764q.53226.44532,1.04821.90973c.87986.79268,1.72354,1.62567,2.53546,2.48766q1.11213,1.18069,2.13962,2.43733c-.00934-.01143.77165.95673.35615.43465-.34858-.438.14419.19132.22244.29612q.62088.83148,1.2059,1.68888a52.35577,52.35577,0,0,1,3.438,5.83477q.72589,1.432,1.37088,2.903c.09456.21512.42249,1.00975.06729.14495.09618.23416.19226.4683.28641.70331q.35391.88337.68156,1.777a83.66983,83.66983,0,0,1,3.61207,13.44484q.32668,1.7427.59806,3.49512.12162.78171.233,1.565c-.00191-.01344.17153,1.27339.08139.5797-.08025-.61761.05791.46652.07234.58235.30331,2.43549.54307,4.87864.73712,7.32517.38061,4.79876.58421,9.60956.73028,14.42055.37056,12.20526.68641,24.41242,1.02876,36.61851l2.097,74.76405,2.097,74.76405.26031,9.28105a4.5,4.5,0,0,0,9,0l-2.15481-76.8265-2.14034-76.3109-1.0774-38.41325c-.28848-10.28526-.70314-20.56-2.286-30.74231-2.91528-18.75309-11.38515-38.24818-29.492-46.76336-16.91172-7.95315-37.84094-6.10848-52.65777,5.45611a41.37311,41.37311,0,0,0-4.61235,4.18189,4.5,4.5,0,0,0,6.364,6.364Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),_e=n.a.createElement("path",{d:"M692,593.71838a5.00588,5.00588,0,0,0-5,5L696.99805,750.653A5.02312,5.02312,0,0,0,702,755.71838h82a5.00589,5.00589,0,0,0,5-5L799.002,598.653A4.99545,4.99545,0,0,0,794,593.71838Z",transform:"translate(-343 -144.28162)",fill:"#e6e6e6"}),we=n.a.createElement("path",{d:"M699.916,601.21838a5.00022,5.00022,0,0,0-4.98829,5.334l9.19434,137a5.01416,5.01416,0,0,0,4.98828,4.666h67.7793a5.01416,5.01416,0,0,0,4.98828-4.666l9.19434-137a5.00022,5.00022,0,0,0-4.98829-5.334Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),Oe=n.a.createElement("path",{d:"M730,624.71838a2.0026,2.0026,0,0,0-2,2v11a2.0026,2.0026,0,0,0,2,2h17a2.0026,2.0026,0,0,0,2-2v-11a2.0026,2.0026,0,0,0-2-2Z",transform:"translate(-343 -144.28162)",fill:"#e6e6e6"}),je=n.a.createElement("path",{d:"M749,653.71838a2.0026,2.0026,0,0,0-2,2v11a2.0026,2.0026,0,0,0,2,2h17a2.0026,2.0026,0,0,0,2-2v-11a2.0026,2.0026,0,0,0-2-2Z",transform:"translate(-343 -144.28162)",fill:"#e6e6e6"}),Ce=n.a.createElement("path",{d:"M731,677.71838a2.0026,2.0026,0,0,0-2,2v11a2.0026,2.0026,0,0,0,2,2h17a2.0026,2.0026,0,0,0,2-2v-11a2.0026,2.0026,0,0,0-2-2Z",transform:"translate(-343 -144.28162)",fill:"#e6e6e6"}),ke=n.a.createElement("path",{d:"M408.02912,619.87764c5.20361,1.72593,8.86833,6.153,11.91739,10.49261,3.14306,4.47344,6.02393,9.3309,10.31951,12.825a16.86449,16.86449,0,0,0,13.27782,3.99153c4.70985-.70988,8.70249-4.00205,9.41882-8.85849.94328-6.39519-3.53259-12.31424-7.45889-16.86382l-1.06066,2.56066c6.256.67461,11.69494,4.24092,17.42339,6.53652,5.48859,2.19949,11.98079,3.39973,17.46382.53229,4.2071-2.20017,6.8304-6.60175,7.71925-11.16377a22.96256,22.96256,0,0,0-2.1636-14.619c-2.91884-5.96756-7.70514-10.79053-12.34784-15.43525l-1.45942,2.50708c6.90241,1.0365,14.59846,2.00273,20.58757-2.43263a12.205,12.205,0,0,0,4.81252-7.02512,13.57582,13.57582,0,0,0-1.46708-9.1959c-3.14917-6.13321-9.09331-10.4568-14.4222-14.57036a210.26823,210.26823,0,0,0-40.15785-24.41047c-1.73974-.8086-3.26517,1.77657-1.51416,2.59041a211.45547,211.45547,0,0,1,34.77067,20.38121c5.25115,3.797,10.80041,7.71218,15.17627,12.52832,3.71485,4.08863,7.09835,10.34266,3.04126,15.39736-4.77248,5.946-13.40786,4.83868-20.02948,3.84435a1.51338,1.51338,0,0,0-1.45942,2.50707c6.91981,6.92282,15.13773,15.23412,13.93421,25.88856-.45627,4.03926-2.37265,8.16489-5.96714,10.301-4.88613,2.90369-10.99689,1.40912-15.91824-.59856-5.97472-2.43741-11.47953-5.85756-18.02253-6.56311-1.41-.152-1.81833,1.68272-1.06066,2.56066,3.17456,3.67851,6.9826,8.46477,6.70065,13.62256-.23592,4.31562-3.99884,6.89747-8.03407,7.14151-10.26475.62077-15.44711-10.06632-20.65136-17.07432-3.29369-4.43525-7.2023-8.51008-12.571-10.29078-1.83668-.60919-2.62417,2.287-.79752,2.89284Z",transform:"translate(-343 -144.28162)",fill:"#009688"}),xe=function(e){var t=e.svgRef,a=e.title,r=ne(e,["svgRef","title"]);return n.a.createElement("svg",re({id:"fbd839f7-34ef-46f7-8df7-3eabd21be975","data-name":"Layer 1",width:514,height:611.43675,viewBox:"0 0 514 611.43675",ref:t},r),a?n.a.createElement("title",null,a):null,ce,le,oe,ie,se,me,ue,pe,de,fe,he,ve,Ee,ge,be,ye,_e,we,Oe,je,Ce,ke)},Ne=n.a.forwardRef((function(e,t){return n.a.createElement(xe,re({svgRef:t},e))})),Me=(a.p,function(e){var t=e.message;return n.a.createElement("div",{className:"ErrorComponent"},n.a.createElement(Ne,{className:"ErrorComponent__Image"}),n.a.createElement("h2",null,"Upss..."),n.a.createElement("p",null,t))}),ze=function(e,t){return e.find((function(e){return e.includes(t)}))},Pe=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(r.useMemo)((function(){if(!a)return $;var e=$.filter(function(e){return function(t){var a,r,n=!1;return Boolean(ze(null!==(a=null===t||void 0===t?void 0:t.stack)&&void 0!==a?a:[],e))&&(n=!0),Boolean(ze(null!==(r=null===t||void 0===t?void 0:t.keywords)&&void 0!==r?r:[],e))&&(n=!0),Boolean(null===t||void 0===t?void 0:t.title.includes(e))&&(n=!0),Boolean(null===t||void 0===t?void 0:t.short.includes(e))&&(n=!0),n}}(a));return a&&e?e:[]}),[a]);return n.a.createElement("div",{className:"Projects"},n.a.createElement("div",{className:"Projects__HalfKolo"},n.a.createElement("div",null)),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{maxWidth:"60%",margin:"0 auto",paddingTop:"40px"}},n.a.createElement(ae,{onChange:function(e){c(e)}})),n.a.createElement("div",{className:"Projects__Container"},l.length>0?l.map((function(e){return n.a.createElement(X,e)})):n.a.createElement(Me,{message:"Brak wynik\xf3w wyszukiwania."}))))},Se=a(14),qe=function(e){var t=function(e){for(var t=Object(Se.a)({},e),a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];for(var c in t)r.includes(c)&&delete t[c];return t}(e,"children","className"),a=Object.freeze(Object(Se.a)({display:"flex"},t));return n.a.createElement("div",{style:a,className:e.className},e.children)},Re={woocommerce:"fab fa-shopify",wordpress:"fab fa-wordpress",react:"fab fa-react"},Ie={woocommerce:"Woocommerce",wordpress:"Wordpress",react:"React"},Be=function(e){var t=e.stack;return n.a.createElement(qe,{justifyContent:"flex-start",flexWrap:"wrap",alignItems:"center",className:"Project__ContentWrapper__StackIcons"},t.map((function(e){return n.a.createElement("i",{title:Ie[e],className:Re[e]})})))},Le=function(){var e=function(){var e=Object(u.h)().short;return $.find((function(t){return t.short===e}))}();if(null===e)return n.a.createElement("div",null,"Nie znaleziono projektu");if(!e)return n.a.createElement("div",null,"Loading...");var t=e.media[0],a=d()("Project__ImgWrapper",{"Project__ImgWrapper--vertical":"vertical"===t.orientation});return n.a.createElement("div",{className:"Project"},n.a.createElement(qe,{className:"Project__Container",justifyContent:"space-evenly",flexWrap:"wrap"},n.a.createElement("div",{className:a},n.a.createElement("img",{src:t.url,alt:"project thumbnail"})),n.a.createElement("div",{style:{flex:1},className:"Project__ContentWrapper"},n.a.createElement("div",null,n.a.createElement("h1",null,"Project ",null===e||void 0===e?void 0:e.title),n.a.createElement(Be,{stack:e.stack}),n.a.createElement("p",null,null===e||void 0===e?void 0:e.description)),n.a.createElement("div",{className:"Project__ButtonWrapper"},n.a.createElement(m,{brandColor:"primary",onClick:console.log},"VISIT DEMO")))),n.a.createElement("div",{className:"Project__BottomContainer"}))};var Ae=Object.freeze([{name:"home",label:"Home",path:"/",component:ee},{name:"projects",label:"Projects",path:"/projects",component:Pe},{name:"project",label:"Project",path:"/project/:short",component:Le}]),He=function(){return n.a.createElement(u.c,null,Ae.map((function(e){return n.a.createElement(u.a,{key:e.name,path:e.path,component:e.component,exact:!Boolean(e.path.includes(":"))})})),n.a.createElement(u.a,{component:function(){return n.a.createElement("h4",null,"Error - Page not found")}}))};var We=function(){var e=Object(r.useState)("en_US"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),s=i[0],m=i[1];return n.a.createElement(y.a,{language:a,setLanguage:c},n.a.createElement(_.a,null,n.a.createElement(f.Provider,{value:{isOpen:s,setOpen:m}},n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(He,null),n.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.48c1c2e4.chunk.js.map