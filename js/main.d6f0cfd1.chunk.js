(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},134:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(45),r=a.n(n),s=(a(98),a(6)),i=a(19),o=(a(99),a(14)),l=a.n(o),u=a(90),d=a(5),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:t.payload,isLoading:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isLoading:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isLoading:!1,error:t.payload};default:return e}},b=a(2),m={user:null,isFetching:!1,error:!1},p=Object(c.createContext)(m),O=function(e){var t=e.children,a=Object(c.useReducer)(j,m),n=Object(d.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!0),o=Object(d.a)(i,2),l=o[0],u=o[1],O=Object(c.useState)(""),f=Object(d.a)(O,2),v=f[0],h=f[1];return Object(c.useEffect)((function(){"string"!==typeof r.user&&localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(b.jsx)(p.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,isLoading:l,currentMem:v,setLoading:u,setCurrentMem:h,dispatch:s},children:t})};var f=function(){var e=Object(c.useContext)(p),t=e.dispatch,a=e.setLoading,n=e.setCurrentMem,r="https://api.upit.no/",o={"X-API-KEY":"sk_sb_13585305fc08b12a8939"};Object(c.useEffect)((function(){!function(){try{var e=window.location.search.replace("?",""),a=JSON.parse(atob(e));m(a,t)}catch(c){console.log(c)}}()}),[]);var d=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat("https://admin.memberstack.com/members","/").concat(t),{headers:o});case 3:return a=e.sent,e.abrupt("return",a.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:return a=e.sent,e.next=6,l.a.post(r+"api/auth/signin",{firstname:a.customFields.fornavn,lastname:a.customFields.etternavn,email:a.auth.email,mem_id:a.id,avatar:a.customFields.profilbilde});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Register Err:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t,c){var i,o,u;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,i={email:t.email,mem_id:t.mem_id},e.next=5,d(i.mem_id);case 5:return o=e.sent,e.next=8,l.a.post(r+"api/auth/signin",{firstname:o.customFields.fornavn,lastname:o.customFields.etternavn,email:o.auth.email,mem_id:o.id,avatar:o.customFields.profilbilde});case 8:if(u=e.sent,console.log(">>>",t),null===t||void 0===t||!t.to){e.next=13;break}return e.next=13,j(t.to);case 13:c({type:"LOGIN_SUCCESS",payload:u.data}),a(!1),n(t.to),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.log("Login Err:",e.t0),c({type:"LOGIN_FAILURE",payload:e.t0});case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"signin-container",children:[Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#316af3",backgroundColor:"#fff"})}),Object(b.jsx)("footer",{children:Object(b.jsx)("span",{children:"@Copyright2023"})})]})},v=a(34),h=(a(122),a(123),a(124),a(125),a(65));var x=function(e){var t=e.message,a=e.own,n=Object(c.useState)(""),r=Object(d.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){i(Object(h.a)(t.createdAt));var e=setInterval((function(){i(Object(h.a)(t.createdAt))}),1e3);return function(){return clearInterval(e)}}),[t]),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:a?"message-sent":"message-received",children:[Object(b.jsx)("span",{children:t.text}),Object(b.jsx)("span",{className:"message-time",children:s})]})})};a(126);var g=function(e){var t=e.addchattoggler,a=e.addchattoggle,n=Object(c.useState)(),r=Object(d.a)(n,2),o=r[0],u=r[1],j=Object(c.useContext)(p).user,m="https://api.upit.no/",O=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var a,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l.a.get("".concat(m,"api/users/?username=").concat(o));case 4:return a=e.sent,u(""),c={senderId:j._id,receiverId:a.data._id},e.next=9,l.a.post(m+"api/chatrooms",c);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:window.location.reload();case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"add-amigo-background",children:Object(b.jsxs)("div",{className:a?"add-amigo-open":"add-amigo-close",children:[Object(b.jsx)("div",{className:"close-div",children:Object(b.jsx)("span",{onClick:t,children:Object(b.jsx)("p",{className:"close-symbol",children:"x"})})}),Object(b.jsxs)("form",{children:[Object(b.jsx)("img",{className:"add-amigo-img",src:"assets/addamigo.png",alt:""}),Object(b.jsx)("input",{type:"text",placeholder:"Enter Username of Amigo",value:o,onChange:function(e){u(e.target.value)},required:!0}),Object(b.jsx)("button",{onClick:O,children:"ADD AMIGO"})]})]})})},N=a(56),k=a.n(N);a(127);var w=function(e){var t=e.toggler,a=e.togglestate,n=Object(c.useContext)(p).user,r=Object(c.useState)((null===n||void 0===n?void 0:n.firstname)+" "+(null===n||void 0===n?void 0:n.lastname)),s=Object(d.a)(r,2),i=(s[0],s[1],Object(c.useState)("")),o=Object(d.a)(i,2),l=(o[0],o[1],"https://api.upit.no/");return Object(b.jsx)("div",{className:"profile",children:Object(b.jsxs)("div",{className:a?"profile-card-open":"profile-card-close",children:[Object(b.jsx)("div",{className:"close-div",children:Object(b.jsx)("span",{onClick:t,children:Object(b.jsx)(k.a,{fontSize:"large"})})}),Object(b.jsx)("img",{className:"profile-image",src:null!==n&&void 0!==n&&n.avatar?n.avatar:l+"api/images/noavatar.png",alt:""}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"User Name"}),Object(b.jsxs)("div",{className:"user-input",children:[null===n||void 0===n?void 0:n.firstname," ",null===n||void 0===n?void 0:n.lastname]}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("div",{className:"user-input",children:null===n||void 0===n?void 0:n.email}),Object(b.jsx)("button",{type:"button",onClick:t,children:"Close"})]})]})})},S=(a(128),a(59));var C=function(e){var t=e.chatroomtile,a=e.currentUser,n=Object(c.useState)(null),r=Object(d.a)(n,2),o=r[0],u=r[1],j=Object(c.useState)(!1),m=Object(d.a)(j,2),p=m[0],O=m[1],f=Object(c.useRef)(),v="https://api.upit.no/";return Object(c.useEffect)((function(){f.current=Object(S.a)(v)}),[v]),Object(c.useEffect)((function(){var e=t.members.find((function(e){return e!==a._id}));f.current.on("getUsers",(function(t){O(t.find((function(t){return t.userId===e})))}));var c=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){var a;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(v+"api/users/"+e);case 3:a=t.sent,u(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();c()}),[a,t,p,v]),Object(b.jsxs)("div",{className:"sidebarchat",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"amigo-profilepic",src:null!==o&&void 0!==o&&o.avatar?o.avatar:v+"api/images/noavatar.png",alt:""}),Object(b.jsx)("div",{className:p?"online":"offile"})]}),Object(b.jsx)("p",{className:"sidebarchat-info-name",children:o?(null===o||void 0===o?void 0:o.firstname)+" "+(null===o||void 0===o?void 0:o.lastname):""})]})};a(134);var y=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"EmptyChatroom",children:[Object(b.jsx)("img",{className:"emptychatroom-img",src:"https://api.upit.no/api/images/home.png",alt:""}),Object(b.jsx)("p",{className:"empty-chatroom-mainhead",children:"Welcome To Our Upit Chat!"})]})})},_=(a(135),a(91)),I=a(89),E=a.n(I),L=a(84),A=a.n(L),F=a(86),U=a.n(F),R=a(158),M=a(85),G=a.n(M),T=a(88),D=a.n(T),z=a(87),J=a.n(z);var q=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),o=Object(d.a)(r,2),u=o[0],j=o[1],m=Object(c.useState)([]),O=Object(d.a)(m,2),f=O[0],h=O[1],N=Object(c.useState)(""),I=Object(d.a)(N,2),L=I[0],F=I[1],M=Object(c.useState)(null),T=Object(d.a)(M,2),z=T[0],q=T[1],P=Object(c.useState)(),B=Object(d.a)(P,2),K=B[0],V=B[1],W=Object(c.useState)(!1),X=Object(d.a)(W,2),Y=X[0],H=X[1],Q=Object(c.useContext)(p),Z=Q.user,$=Q.currentMem,ee=Object(c.useRef)(),te=Object(c.useRef)(),ae="https://api.upit.no/";Object(c.useEffect)((function(){te.current=Object(S.a)(ae),te.current.on("getMessage",(function(e){q({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[ae]),Object(c.useEffect)((function(){z&&(null===u||void 0===u?void 0:u.members.includes(z.sender))&&h((function(e){return[].concat(Object(v.a)(e),[z])}))}),[z,u]),Object(c.useEffect)((function(){te.current.emit("addUser",null===Z||void 0===Z?void 0:Z._id)}),[Z,a,u,te]),Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,a,c,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=null,!$){e.next=9;break}return e.next=5,l.a.get("".concat(ae,"api/users/?member=").concat($));case 5:return a=e.sent,t={senderId:Z._id,receiverId:a.data._id},e.next=9,l.a.post(ae+"api/chatrooms",t);case 9:return e.next=11,l.a.get(ae+"api/chatrooms/"+Z._id);case 11:if(c=e.sent,n(c.data),!t){e.next=19;break}return e.next=16,l.a.post(ae+"api/chatrooms/get",t);case 16:r=e.sent,console.log(">>>>Current Chat",r.data),j(r.data[0]);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();Object(i.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})))()}),[null===Z||void 0===Z?void 0:Z._id,$,ae]),Object(c.useEffect)((function(){var e=null===u||void 0===u?void 0:u.members.find((function(e){return e!==Z._id})),t=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){var a;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(ae+"api/users/"+e);case 3:a=t.sent,V(a.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();u&&t()}),[Z,u,ae]),Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get(ae+"api/messages/"+(null===u||void 0===u?void 0:u._id));case 3:t=e.sent,h(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();u&&e()}),[u,ae]),Object(c.useEffect)((function(){var e;null===(e=ee.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[f]);var ce=Object(c.useState)(!1),ne=Object(d.a)(ce,2),re=ne[0],se=ne[1],ie=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var a,c,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={chatroomId:u._id,senderId:Z._id,text:L},c=u.members.find((function(e){return e!==Z._id})),te.current.emit("sendMessage",{senderId:Z._id,receiverId:c,text:L}),e.prev=4,e.next=7,l.a.post(ae+"api/messages/",a);case 7:n=e.sent,h([].concat(Object(v.a)(f),[n.data])),F(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:se(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),oe=Object(c.useState)(!1),le=Object(d.a)(oe,2),ue=le[0],de=le[1],je=Object(c.useState)(!1),be=Object(d.a)(je,2),me=be[0],pe=be[1],Oe=function(){pe(!1===me)};return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(g,{addchattoggler:function(){de(!1===ue),console.log(ue)},addchattoggle:ue}),Object(b.jsx)(w,{toggler:function(){Oe()},togglestate:me}),Y?"":Object(b.jsx)("div",{className:"menu-open",onClick:function(){H(!0)},children:Object(b.jsx)(R.a,{children:Object(b.jsx)(A.a,{style:{fontSize:35,color:"#0e1012"}})})}),Object(b.jsxs)("div",{className:"home-components",children:[Object(b.jsxs)("div",{className:Y?"sidebar active":"sidebar",children:[Object(b.jsxs)("div",{className:"sidebar-header",children:[Object(b.jsx)("div",{className:"menu-close",onClick:function(){H(!1)},children:Object(b.jsx)(R.a,{sx:{width:"50px",height:"50px"},children:Object(b.jsx)(k.a,{style:{fontSize:35,color:"white"}})})}),Object(b.jsx)(R.a,{className:"user-profile",onClick:function(){Oe()},children:Object(b.jsx)("img",{className:"user-profile-image",src:null!==Z&&void 0!==Z&&Z.avatar?Z.avatar:ae+"api/images/noavatar.png",alt:""})}),Object(b.jsx)("div",{className:"logout-option",children:Object(b.jsx)(R.a,{onClick:function(){localStorage.removeItem("user"),window.location.href="/"},children:Object(b.jsx)(G.a,{})})})]}),Object(b.jsx)("div",{className:"sidebar-search",children:Object(b.jsxs)("div",{className:"sidebar-search-container",children:[Object(b.jsx)(U.a,{className:"sidebar-searchicon"}),Object(b.jsx)("input",{type:"text",name:"chat-search",placeholder:"Search a Chat"})]})}),Object(b.jsx)("div",{className:"sidebar-chatoptions",children:a.map((function(e,t){return Object(b.jsx)("div",{onClick:function(){j(e),H(!1)},children:Object(b.jsx)(C,{chatroomtile:e,currentUser:Z})},t)}))})]}),Object(b.jsx)("div",{className:"chatroom",children:u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"chatroom-header",children:Object(b.jsxs)("div",{className:"chatroom-chatinfo",children:[Object(b.jsx)("img",{className:"amigo-profilepic",src:null!==K&&void 0!==K&&K.avatar?K.avatar:ae+"api/images/noavatar.png",alt:""}),Object(b.jsx)("div",{className:"chatroom-chatinfo-right",children:Object(b.jsx)("div",{className:"chatroom-chatinfo-name",children:Object(b.jsx)("p",{children:K?K.firstname+" "+K.lastname:""})})})]})}),Object(b.jsx)("div",{className:"chatroom-messages-container",onClick:function(){se(!1)},children:f.map((function(e,t){return Object(b.jsx)("div",{ref:ee,children:Object(b.jsx)(x,{message:e,own:(null===e||void 0===e?void 0:e.senderId)===Z._id})},t)}))}),Object(b.jsx)("div",{className:re?"emoji-picker-open":"emoji-picker-close",children:Object(b.jsx)(_.a,{onSelect:function(e){var t=e.native;F(L+t)},emojiSize:25})}),Object(b.jsxs)("div",{className:"chatroom-footer",children:[Object(b.jsxs)("div",{className:"chatroom-footer-lefticons",children:[Object(b.jsx)(R.a,{onClick:function(){se(!re)},children:Object(b.jsx)(J.a,{})}),Object(b.jsx)(R.a,{children:Object(b.jsx)(D.a,{})})]}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"message-input",type:"text",name:"message-input",placeholder:"Type a message",onChange:function(e){F(e.target.value)},value:L,required:!0}),Object(b.jsx)("button",{className:"input-button",onClick:L?ie:null,children:" Send a Message "})]}),Object(b.jsx)("div",{className:"chatroom-footer-righticon",onClick:L?ie:null,children:Object(b.jsx)(R.a,{children:Object(b.jsx)(E.a,{className:"send-icon"})})})]})]}):Object(b.jsx)(y,{})})]})]})};var P=function(){var e=Object(c.useContext)(p).isLoading;return Object(b.jsx)("div",{className:"App",children:e?Object(b.jsx)(f,{}):Object(b.jsx)(q,{})})};r.a.render(Object(b.jsx)(O,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))},98:function(e,t,a){},99:function(e,t,a){}},[[141,1,2]]]);