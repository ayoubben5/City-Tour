(this["webpackJsonpcity-tour"]=this["webpackJsonpcity-tour"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.12a6659f.svg"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(13),n(1)),s=n(2),l=n(3),u=n(4),m=(n(14),n(7)),p=n.n(m);n(15);function f(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("img",{src:p.a,alt:"city tours company"}),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"nav-link"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"nav-link"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"nav-link active"},"Tours"))))}n(16);var d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showInfo:!1},e.handleInfo=function(){e.setState({showInfo:!e.state.showInfo})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.tour,t=e.id,n=e.city,a=e.img,o=e.name,i=e.info,c=this.props.removeTour;return r.a.createElement("article",{className:"tour"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a,alt:"portrait of the tour"}),r.a.createElement("span",{onClick:function(){return c(t)},className:"close-btn"},r.a.createElement("i",{className:"fas fa-window-close"}))),r.a.createElement("div",{className:"tour-info"},r.a.createElement("h3",null,n),r.a.createElement("h4",null,o),r.a.createElement("h5",null,"info"," ",r.a.createElement("span",{onClick:this.handleInfo},r.a.createElement("i",{className:"fas fa-caret-square-down"}))),this.state.showInfo&&r.a.createElement("p",null,i)))}}]),n}(a.Component),h=(n(17),[{id:1,city:"new york",img:"./img/newyork.jpeg",name:"new york bridge tour",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi"},{id:2,city:"paris",img:"./img/paris.jpeg",name:"paris lights tour",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi"},{id:3,city:"london",img:"./img/london.jpeg",name:"london royal palace tour",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi"},{id:4,city:"tokyo",img:"./img/tokyo.jpeg",name:"tokyo sushi tour",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi"}]),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tours:h},e.removeTour=function(t){var n=e.state.tours.filter((function(e){return e.id!==t}));e.setState({tours:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.tours;return r.a.createElement("section",{className:"tourList"},t.map((function(t){return r.a.createElement(d,{key:t.id,tour:t,removeTour:e.removeTour}," ")})))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(v,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6523e95f.chunk.js.map