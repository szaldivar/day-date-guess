(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},5075:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(9008),a=t(7294),i=new Date("1700-01-01T00:00:00.000Z").getTime(),d=new Date("2400-12-31T23:59:59.900Z").getTime()-i,l=["January","February","March","April","May","June","July","August","September","October","November","December"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=function(){var e=Math.random()*d,n=Math.round(i+e);return new Date(n)},c={margin:"10px 0",textAlign:"center"};n.default=function(){var e=(0,a.useState)("none"),n=e[0],t=e[1],i=(0,a.useState)(void 0),d=i[0],h=i[1];return(0,a.useEffect)((function(){if(void 0!==d&&"none"!==n){var e=s[d.getUTCDay()];n===e?(t("none"),h(u())):alert("Incorrect: It's a ".concat(e," not a ").concat(n))}}),[n,d]),(0,r.jsxs)("div",{style:{height:"100%"},children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Guess day of the week"})}),(0,r.jsxs)("div",{style:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[d?(0,r.jsx)("div",{style:c,children:(0,r.jsxs)("p",{style:{color:"hsl(184, 17%, 30%)",fontSize:"40px",margin:0},children:[l[d.getUTCMonth()]," ",d.getUTCDate()," of"," ",d.getUTCFullYear()]})}):null,(0,r.jsx)("div",{style:c,children:(0,r.jsx)("button",{style:{color:"hsl(184, 10%, 30%)",backgroundColor:"hsl(184, 10%, 52%)",borderRadius:"5px",padding:"10px",border:"none",cursor:"pointer",fontSize:"30px"},onClick:function(){t("none"),h(u())},children:"Get Random Date"})}),(0,r.jsx)("div",{style:c,children:(0,r.jsxs)("select",{value:n,onChange:function(e){return t(e.target.value)},style:{color:"hsl(184, 10%, 30%)",backgroundColor:"hsl(184, 10%, 52%)",borderRadius:"5px",padding:"10px",border:"none",cursor:"pointer",fontSize:"30px"},children:[(0,r.jsx)("option",{value:"none",children:"Select a day..."}),(0,r.jsx)("option",{value:"Sunday",children:"Sunday"}),(0,r.jsx)("option",{value:"Monday",children:"Monday"}),(0,r.jsx)("option",{value:"Tuesday",children:"Tuesday"}),(0,r.jsx)("option",{value:"Wednesday",children:"Wednesday"}),(0,r.jsx)("option",{value:"Thursday",children:"Thursday"}),(0,r.jsx)("option",{value:"Friday",children:"Friday"}),(0,r.jsx)("option",{value:"Saturday",children:"Saturday"})]})})]})]})}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);