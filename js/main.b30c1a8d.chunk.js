(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},154:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(39),s=a.n(c),r=(a(112),a(8)),i=a(21),o=(a(113),a(15)),l=a.n(o),u=a(101),d=a(7),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:t.payload,isLoading:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isLoading:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isLoading:!1,error:t.payload};default:return e}},b=a(2),m={user:null,isFetching:!1,error:!1},p=Object(n.createContext)(m),h=function(e){var t=e.children,a=Object(n.useReducer)(j,m),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(!0),o=Object(d.a)(i,2),l=o[0],u=o[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),f=O[0],v=O[1];return Object(n.useEffect)((function(){"string"!==typeof s.user&&localStorage.setItem("user",JSON.stringify(s.user))}),[s.user]),Object(b.jsx)(p.Provider,{value:{user:s.user,isFetching:s.isFetching,error:s.error,isLoading:l,currentMem:f,setLoading:u,setCurrentMem:v,dispatch:r},children:t})};var O=function(){var e=Object(n.useContext)(p),t=e.dispatch,a=e.setLoading,c=e.setCurrentMem,s="https://api.upit.no/",o={"X-API-KEY":"sk_sb_13585305fc08b12a8939"};Object(n.useEffect)((function(){!function(){try{var e=window.location.search.replace("?",""),a=JSON.parse(atob(e));m(a,t)}catch(n){console.log(n)}}()}),[]);var d=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat("https://admin.memberstack.com/members","/").concat(t),{headers:o});case 3:return a=e.sent,e.abrupt("return",a.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:return a=e.sent,e.next=6,l.a.post(s+"api/auth/signin",{firstname:a.customFields.fornavn,lastname:a.customFields.etternavn,email:a.auth.email,mem_id:a.id,avatar:a.customFields.profilbilde,plans:a.planConnections});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Register Err:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,n){var i,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"LOGIN_START"}),e.prev=1,i={email:t.email,mem_id:t.mem_id},e.next=5,d(i.mem_id);case 5:return o=e.sent,e.next=8,l.a.post(s+"api/auth/signin",{firstname:o.customFields.fornavn,lastname:o.customFields.etternavn,email:o.auth.email,mem_id:o.id,avatar:o.customFields.profilbilde,plans:o.planConnections});case 8:if(u=e.sent,null===t||void 0===t||!t.to){e.next=12;break}return e.next=12,j(t.to);case 12:n({type:"LOGIN_SUCCESS",payload:u.data}),a(!1),c(t.to),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log("Login Err:",e.t0),n({type:"LOGIN_FAILURE",payload:e.t0});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"signin-container",children:[Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#316af3",backgroundColor:"#fff"})}),Object(b.jsx)("footer",{children:Object(b.jsx)("span",{children:"@Copyright2023"})})]})},f=a(38),v=a(103),x=(a(141),a(142),a(143),a(89)),g=a.n(x);a(145);var N=function(e){var t=e.message,a=e.amigo,c=e.own,s=Object(n.useContext)(p).user,r="https://api.upit.no/";return Object(b.jsxs)("div",{className:"message-box",children:[Object(b.jsx)("img",{className:"message-image",src:c?null!==s&&void 0!==s&&s.avatar?s.avatar:r+"api/images/noavatar.png":null!==a&&void 0!==a&&a.avatar?a.avatar:r+"api/images/noavatar.png",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("span",{className:"message-user",children:c?"Me":(null===a||void 0===a?void 0:a.firstname)+" "+(null===a||void 0===a?void 0:a.lastname)}),Object(b.jsx)("span",{className:"message-time",children:g()(t.createdAt).format("MMM DD YYYY, h:mm A")})]}),Object(b.jsx)("p",{className:"message-text",children:t.text})]})]})};a(146);var y=function(e){var t=e.addchattoggler,a=e.addchattoggle,c=Object(n.useState)(),s=Object(d.a)(c,2),o=s[0],u=s[1],j=Object(n.useContext)(p).user,m="https://api.upit.no/",h=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l.a.get("".concat(m,"api/users/?username=").concat(o));case 4:return a=e.sent,u(""),n={senderId:j._id,receiverId:a.data._id},e.next=9,l.a.post(m+"api/chatrooms",n);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:window.location.reload();case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"add-amigo-background",children:Object(b.jsxs)("div",{className:a?"add-amigo-open":"add-amigo-close",children:[Object(b.jsx)("div",{className:"close-div",children:Object(b.jsx)("span",{onClick:t,children:Object(b.jsx)("p",{className:"close-symbol",children:"x"})})}),Object(b.jsxs)("form",{children:[Object(b.jsx)("img",{className:"add-amigo-img",src:"assets/addamigo.png",alt:""}),Object(b.jsx)("input",{type:"text",placeholder:"Enter Username of Amigo",value:o,onChange:function(e){u(e.target.value)},required:!0}),Object(b.jsx)("button",{onClick:h,children:"ADD AMIGO"})]})]})})},k=a(60),w=a.n(k);a(147);var C=function(e){var t=e.toggler,a=e.togglestate,c=Object(n.useContext)(p).user,s=Object(n.useState)((null===c||void 0===c?void 0:c.firstname)+" "+(null===c||void 0===c?void 0:c.lastname)),r=Object(d.a)(s,2),i=(r[0],r[1],Object(n.useState)("")),o=Object(d.a)(i,2),l=(o[0],o[1],"https://api.upit.no/");return Object(b.jsx)("div",{className:"profile",children:Object(b.jsxs)("div",{className:a?"profile-card-open":"profile-card-close",children:[Object(b.jsx)("div",{className:"close-div",children:Object(b.jsx)("span",{onClick:t,children:Object(b.jsx)(w.a,{fontSize:"large"})})}),Object(b.jsx)("img",{className:"profile-image",src:null!==c&&void 0!==c&&c.avatar?c.avatar:l+"api/images/noavatar.png",alt:""}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"User Name"}),Object(b.jsxs)("div",{className:"user-input",children:[null===c||void 0===c?void 0:c.firstname," ",null===c||void 0===c?void 0:c.lastname]}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("div",{className:"user-input",children:null===c||void 0===c?void 0:c.email}),Object(b.jsx)("button",{type:"button",onClick:t,children:"Close"})]})]})})},S=(a(148),a(63)),_=a(91),I=a(92),E=a(93);var L=function(e){var t=e.chatroomtile,a=e.currentChat,c=e.currentUser,s=Object(n.useState)(null),o=Object(d.a)(s,2),u=o[0],j=o[1],m=Object(n.useState)(!1),p=Object(d.a)(m,2),h=p[0],O=p[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),x=v[0],g=v[1],N=Object(n.useState)(!1),y=Object(d.a)(N,2),k=y[0],w=y[1],C=Object(n.useRef)(),L="https://api.upit.no/";return Object(n.useEffect)((function(){C.current=Object(S.a)(L)}),[L]),Object(n.useEffect)((function(){var e=t.members.find((function(e){return e!==c._id})),n=null===a||void 0===a?void 0:a.members.find((function(e){return e!==c._id}));O(e===n),C.current.on("getUsers",(function(t){g(t.find((function(t){return t.userId===e})))}));var s=function(){var t=Object(i.a)(Object(r.a)().mark((function t(){var a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(L+"api/users/"+e);case 3:a=t.sent,j(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();s()}),[c,a,t,x,L]),Object(b.jsxs)("div",{className:h?"sidebarchat sidebarchat-select":"sidebarchat",children:[Object(b.jsxs)("div",{className:"flex align-center",children:[Object(b.jsx)("img",{className:"amigo-profilepic",src:null!==u&&void 0!==u&&u.avatar?u.avatar:L+"api/images/noavatar.png",alt:""}),Object(b.jsx)("div",{className:x?"online":"offline"}),Object(b.jsxs)("div",{className:(null===u||void 0===u?void 0:u.plans.length)>1?"flex flex-col":"flex flex-col gap-10",children:[Object(b.jsx)("p",{className:"sidebarchat-info-name",children:u?(null===u||void 0===u?void 0:u.firstname)+" "+(null===u||void 0===u?void 0:u.lastname):""}),Object(b.jsx)("span",{className:"sidebarchat-plans",children:null===u||void 0===u?void 0:u.plans.map((function(e,t){return Object(b.jsx)("span",{className:"sidebarchat-plan",children:e.planName},t)}))})]})]}),Object(b.jsxs)("div",{className:"flex flex-col gap-10",children:[Object(b.jsxs)("div",{className:"flex gap-10 justify-end",children:[Object(b.jsx)("span",{className:"gray-primary fs-15",children:"4 days"}),Object(b.jsx)("div",{name:"favorite",onClick:function(){return w((function(e){return!e}))},children:k?Object(b.jsx)(_.a,{size:20,color:"#12A4FF"}):Object(b.jsx)(I.a,{size:20,color:"#8f9199"})})]}),Object(b.jsxs)("div",{className:"flex gap-10 justify-end",children:[Object(b.jsx)("span",{className:"badge",children:"1"}),Object(b.jsx)(E.a,{size:20,color:"#8f9199"})]})]})]})};a(154);var F=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"EmptyChatroom",children:[Object(b.jsx)("img",{className:"emptychatroom-img",src:"https://api.upit.no/api/images/home.png",alt:""}),Object(b.jsx)("p",{className:"empty-chatroom-mainhead",children:"Welcome To Our Upit Chat!"})]})})},A=(a(155),a(102)),M=a(177),R=a(100),U=a(97),D=a(94),z=a.n(D),G=a(96),T=a.n(G),J=a(176),Y=a(178),K=a(95),q=a.n(K),P=a(99),W=a.n(P),X=a(98),B=a.n(X);var H=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(d.a)(s,2),u=o[0],j=o[1],m=Object(n.useState)([]),h=Object(d.a)(m,2),O=h[0],x=h[1],g=Object(n.useState)(""),k=Object(d.a)(g,2),_=k[0],I=k[1],E=Object(n.useState)(""),D=Object(d.a)(E,2),G=D[0],K=D[1],P=Object(n.useState)(null),X=Object(d.a)(P,2),H=X[0],Q=X[1],V=Object(n.useState)(),Z=Object(d.a)(V,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(d.a)(te,2),ne=ae[0],ce=ae[1],se=Object(n.useContext)(p),re=se.user,ie=se.currentMem,oe=Object(n.useRef)(),le=(Object(n.useRef)(),Object(n.useRef)()),ue="https://api.upit.no/";Object(n.useEffect)((function(){le.current=Object(S.a)(ue),le.current.on("getMessage",(function(e){Q({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[ue]),Object(n.useEffect)((function(){H&&(null===u||void 0===u?void 0:u.members.includes(H.sender))&&x((function(e){return[].concat(Object(f.a)(e),[H])}))}),[H,u]),Object(n.useEffect)((function(){le.current.emit("addUser",null===re||void 0===re?void 0:re._id)}),[re,a,u,le]),Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=null,!ie){e.next=9;break}return e.next=5,l.a.get("".concat(ue,"api/users/?member=").concat(ie));case 5:return n=e.sent,a={senderId:re._id,receiverId:n.data._id},e.next=9,l.a.post(ue+"api/chatrooms",a);case 9:return e.next=11,l.a.get(ue+"api/chatrooms",{params:{user_id:re._id}});case 11:if(s=e.sent,c(s.data),!a){e.next=18;break}return e.next=16,l.a.post(ue+"api/chatrooms/get",a);case 16:i=e.sent,j(i.data[0]);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}();Object(i.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})))()}),[null===re||void 0===re?void 0:re._id,ie,ue]),Object(n.useEffect)((function(){var e=null===u||void 0===u?void 0:u.members.find((function(e){return e!==re._id})),t=function(){var t=Object(i.a)(Object(r.a)().mark((function t(){var a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(ue+"api/users/"+e);case 3:a=t.sent,ee(a.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();u&&t()}),[re,u,ue]),Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get(ue+"api/messages/"+(null===u||void 0===u?void 0:u._id));case 3:t=e.sent,x(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();u&&e()}),[u,ue]),Object(n.useEffect)((function(){de()}),[O]);var de=function(){var e,t;null===(e=oe.current)||void 0===e||e.scroll({top:null===(t=oe.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})},je=Object(n.useState)(!1),be=Object(d.a)(je,2),me=be[0],pe=be[1],he=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={chatroomId:u._id,senderId:re._id,text:_},n=u.members.find((function(e){return e!==re._id})),le.current.emit("sendMessage",{senderId:re._id,receiverId:n,text:_}),e.prev=4,e.next=7,l.a.post(ue+"api/messages/",a);case 7:c=e.sent,x([].concat(Object(f.a)(O),[c.data])),I(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:pe(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),Oe=Object(n.useState)(!1),fe=Object(d.a)(Oe,2),ve=fe[0],xe=fe[1],ge=Object(n.useState)(!1),Ne=Object(d.a)(ge,2),ye=Ne[0],ke=Ne[1],we=function(){ke(!1===ye)};return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(y,{addchattoggler:function(){xe(!1===ve),console.log(ve)},addchattoggle:ve}),Object(b.jsx)(C,{toggler:function(){we()},togglestate:ye}),ne?"":Object(b.jsx)("div",{className:"menu-open",onClick:function(){ce(!0)},children:Object(b.jsx)(J.a,{children:Object(b.jsx)(z.a,{style:{fontSize:35,color:"#0e1012"}})})}),Object(b.jsxs)("div",{className:"home-components",children:[Object(b.jsxs)("div",{className:ne?"sidebar active":"sidebar",children:[Object(b.jsxs)("div",{className:"sidebar-top-header",children:[Object(b.jsxs)("div",{className:"sidebar-header",children:[Object(b.jsx)("div",{className:"menu-close",onClick:function(){ce(!1)},children:Object(b.jsx)(J.a,{sx:{width:"50px",height:"50px"},children:Object(b.jsx)(w.a,{style:{fontSize:35,color:"white"}})})}),Object(b.jsx)(J.a,{className:"user-profile",onClick:function(){we()},children:Object(b.jsx)("img",{className:"user-profile-image",src:null!==re&&void 0!==re&&re.avatar?re.avatar:ue+"api/images/noavatar.png",alt:""})}),Object(b.jsx)("div",{className:"logout-option",children:Object(b.jsx)(J.a,{onClick:function(){localStorage.removeItem("user"),window.location.href="/"},children:Object(b.jsx)(q.a,{})})})]}),Object(b.jsx)("div",{className:"sidebar-search",children:Object(b.jsxs)("div",{className:"sidebar-search-container",children:[Object(b.jsx)(T.a,{className:"sidebar-searchicon"}),Object(b.jsx)("input",{type:"text",name:"chat-search",placeholder:"S\xf8k etter brukernavnet...",onChange:function(e){return K(e.target.value)}})]})})]}),Object(b.jsx)(v.a,{className:"sidebar-members",noScrollX:!0,children:Object(b.jsx)("div",{className:"sidebar-chatoptions",children:a.filter((function(e){if(G){for(var t=0;t<e.usernames.length;t++){var a=e.usernames[t];if(a!==re.firstname+" "+re.lastname&&a.toLowerCase().includes(G.toLowerCase()))return!0}return!1}return!0})).map((function(e,t){return Object(b.jsx)("div",{onClick:function(t){j(e),ce(!1)},children:Object(b.jsx)(L,{chatroomtile:e,currentChat:u,currentUser:re})},t)}))})})]}),Object(b.jsx)("div",{className:"chatroom",children:u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"chatroom-header",children:Object(b.jsxs)("div",{className:"chatroom-chatinfo",children:[Object(b.jsx)("img",{className:"chatroom-profilepic",src:null!==$&&void 0!==$&&$.avatar?$.avatar:ue+"api/images/noavatar.png",alt:""}),Object(b.jsxs)("div",{className:"chatroom-chatinfo-right",children:[Object(b.jsx)("div",{className:"chatroom-chatinfo-name",children:Object(b.jsx)("a",{href:"https://upit.no/profil/"+(null===$||void 0===$?void 0:$.mem_id),name:"chat-info-name",className:"chatroom-chatinfo-name",children:$?(null===$||void 0===$?void 0:$.firstname)+" "+(null===$||void 0===$?void 0:$.lastname):""})}),Object(b.jsx)("span",{className:"chatroom-plans",children:null===$||void 0===$?void 0:$.plans.map((function(e,t){return Object(b.jsxs)("span",{className:"chatroom-plan",children:[e.planName,t<(null===$||void 0===$?void 0:$.plans.length)-1?",":""]},t)}))}),Object(b.jsxs)("div",{className:"chatroom-top-header",children:[Object(b.jsx)("span",{children:"Last seen: 2 hours ago"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("span",{children:"Local time: Jan 30, 2023, 5:10 AM"})]})]})]})}),Object(b.jsxs)("div",{className:"chatroom-messages-container",ref:oe,onClick:function(){pe(!1)},children:[Object(b.jsxs)("div",{className:"chatroom-safety",children:[Object(b.jsxs)("div",{className:"flex flex-row w-100 align-center gap-10",children:[Object(b.jsx)("div",{className:"safety-line"}),Object(b.jsxs)("div",{className:"chatroom-safety-header",children:[Object(b.jsx)(U.a,{}),Object(b.jsx)("span",{children:"We have your back"})]}),Object(b.jsx)("div",{className:"safety-line"})]}),Object(b.jsx)("span",{className:"chatroom-safety-text",children:"For added safety and your protection, keep payments and communications within upit. Learn more"})]}),O.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(N,{message:e,amigo:$,own:(null===e||void 0===e?void 0:e.senderId)===re._id})},t)}))]}),Object(b.jsx)("div",{className:me?"emoji-picker-open":"emoji-picker-close",children:Object(b.jsx)(A.a,{onSelect:function(e){var t=e.native;I(_+t)},emojiSize:25})}),Object(b.jsxs)("div",{className:"chatroom-footer",children:[Object(b.jsxs)("div",{className:"chatroom-footer-lefticons",children:[Object(b.jsx)(J.a,{onClick:function(){pe(!me)},children:Object(b.jsx)(B.a,{})}),Object(b.jsx)(J.a,{children:Object(b.jsx)(W.a,{})})]}),Object(b.jsxs)("form",{children:[Object(b.jsx)(M.a,{className:"message-input",name:"message-input",placeholder:"Type a message",maxRows:5,onKeyDown:function(e){if(13==e.keyCode&&!e.shiftKey)return e.preventDefault(),he(e),!1},onChange:function(e){I(e.target.value)},value:_,required:!0}),Object(b.jsx)("button",{className:"input-button",onClick:_?he:null,children:" Send a Message "})]}),Object(b.jsx)("div",{className:"chatroom-footer-righticon",onClick:_?he:null,children:Object(b.jsxs)(Y.a,{className:"btn-send",children:["SEND",Object(b.jsx)(R.a,{className:"ml-5",color:"white",size:18})]})})]})]}):Object(b.jsx)(F,{})})]})]})};var Q=function(){var e=Object(n.useContext)(p).isLoading;return Object(b.jsx)("div",{className:"App",children:e?Object(b.jsx)(O,{}):Object(b.jsx)(H,{})})};s.a.render(Object(b.jsx)(h,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}},[[158,1,2]]]);