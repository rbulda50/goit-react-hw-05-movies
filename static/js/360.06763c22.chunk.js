"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[360],{418:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(497),i=n(791),o=n(87),p="Home_MainContainer__jPhrC",f="Home_MainHeader__0WjoE",m="Home_MainList__kwX8-",l="Home_MainListItem__RVZyU",h="Home_MainListLink__NHEKi",d=n.p+"static/media/headerLogo.411ba064a429b05b0014.png",v=n(184),_=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Df)();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)("main",{className:p,children:[(0,v.jsxs)("h1",{className:f,children:[(0,v.jsx)("img",{src:d,alt:"header logo",width:50}),"Trending movies"]}),(0,v.jsx)("ul",{className:m,children:n.map((function(e){var t=e.id,n=e.title;return(0,v.jsx)("li",{className:l,children:(0,v.jsx)(o.OL,{className:h,to:"movies/".concat(t),children:n})},t)}))})]})}},497:function(e,t,n){n.d(t,{$w:function(){return l},Df:function(){return o},Pg:function(){return f},bn:function(){return v},fI:function(){return d}});var r=n(861),a=n(757),c=n.n(a),s=n(243),u="https://api.themoviedb.org/3",i="e7011c858e160819547da18edbe0186b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:i}},e.next=3,s.Z.get("".concat(u,"/trending/movie/day"),t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i}},e.next=3,s.Z.get("".concat(u,"/movie/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i}},e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/credits"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i}},e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews"),n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i,query:t}},e.next=3,s.Z.get("".concat(u,"/search/movie"),n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=360.06763c22.chunk.js.map