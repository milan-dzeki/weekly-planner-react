(this["webpackJsonpweekly-planner"]=this["webpackJsonpweekly-planner"]||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},40:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(19),c=s.n(n),i=(s(37),s(7)),o=(s(38),s(28)),l=s(15),d=s(1),r=function(e){var t=e.showNavlist,s=e.children;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("section",{className:"header__left",children:[Object(d.jsx)("article",{className:"header__left-icon",children:Object(d.jsx)(o.a,{})}),Object(d.jsx)("article",{className:"header__left-title",children:"weekly planner"})]}),Object(d.jsx)("section",{className:"header__right",onClick:t,children:Object(d.jsx)(l.a,{})}),s]})},j=(s(40),s(29)),b=s(26),u=s(21),m=s(14),O=function(e){var t=e.navlistOpen,s=e.hideNavlist;return Object(d.jsxs)("nav",{className:t?"navlist navlist-show":"navlist",children:[Object(d.jsx)("div",{className:"navlist__close",onClick:s,children:Object(d.jsx)(l.d,{className:"navlist__close-icon"})}),Object(d.jsxs)("ul",{className:"navlist__list",children:[Object(d.jsx)("li",{className:"navlist__list-item",children:Object(d.jsxs)(m.b,{to:"/",className:"navlist__list-item__link",onClick:s,children:[Object(d.jsx)("div",{className:"navlist__list-item__icon",children:Object(d.jsx)(j.a,{})}),Object(d.jsx)("p",{className:"navlist__list-item__text",children:"tasks"})]})}),Object(d.jsx)("li",{className:"navlist__list-item",children:Object(d.jsxs)(m.b,{to:"/done",className:"navlist__list-item__link",onClick:s,children:[Object(d.jsx)("div",{className:"navlist__list-item__icon",children:Object(d.jsx)(b.a,{})}),Object(d.jsx)("p",{className:"navlist__list-item__text",children:"done"})]})}),Object(d.jsx)("li",{className:"navlist__list-item",children:Object(d.jsxs)(m.b,{to:"/failed",className:"navlist__list-item__link",onClick:s,children:[Object(d.jsx)("div",{className:"navlist__list-item__icon",children:Object(d.jsx)(b.b,{})}),Object(d.jsx)("p",{className:"navlist__list-item__text",children:"failed"})]})}),Object(d.jsx)("li",{className:"navlist__list-item",children:Object(d.jsxs)(m.b,{to:"/stats",className:"navlist__list-item__link",onClick:s,children:[Object(d.jsx)("div",{className:"navlist__list-item__icon",children:Object(d.jsx)(u.a,{})}),Object(d.jsx)("p",{className:"navlist__list-item__text",children:"stats"})]})})]})]})},_=(s(49),function(e){var t=e.show,s=e.backdropClicked;return Object(d.jsx)("div",{className:t?"backdrop backdrop-show":"backdrop",onClick:s})}),f=function(e){var t=e.children,s=Object(a.useState)(!1),n=Object(i.a)(s,2),c=n[0],o=n[1];Object(a.useEffect)((function(){var e=window.matchMedia("(min-width: 800px)"),t=function(){e.matches&&o(!1)};return window.addEventListener("load",t),window.addEventListener("resize",t),function(){window.removeEventListener("load",t),window.removeEventListener("resize",t)}}),[]);var l=function(){o(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(r,{showNavlist:function(){o(!0)},children:[Object(d.jsx)(_,{show:c,backdropClicked:l}),Object(d.jsx)(O,{navlistOpen:c,hideNavlist:l})]}),Object(d.jsx)("main",{children:t})]})},x=s(5),h=(s(50),s(63)),y=(s(51),function(e){var t=e.nameValue,s=e.dayValue,a=e.nameValueChanged,n=e.dayValueChanged,c=e.formSubmit,i=e.submitBtnPrefix,o=e.children;return Object(d.jsx)("section",{className:"form",children:Object(d.jsxs)("div",{className:"form__center",children:[Object(d.jsx)("h3",{className:"form__title",children:"set your task"}),o,Object(d.jsxs)("form",{className:"form__form",onSubmit:c,children:[Object(d.jsxs)("div",{className:"form__control",children:[Object(d.jsx)("label",{className:"form__label",htmlFor:"name",children:"task name:"}),Object(d.jsx)("input",{className:"form__input",id:"name",name:"name",type:"text",value:t,onChange:a})]}),Object(d.jsxs)("div",{className:"form__control",children:[Object(d.jsx)("label",{htmlFor:"day",className:"form__label",children:"day:"}),Object(d.jsxs)("select",{className:"form__input",id:"day",name:"day",value:s||"",onChange:n,children:[Object(d.jsx)("option",{value:"",hidden:!0}),Object(d.jsx)("option",{value:"monday",children:"Monday"}),Object(d.jsx)("option",{value:"tuesday",children:"Tuesday"}),Object(d.jsx)("option",{value:"wednesday",children:"Wednesday"}),Object(d.jsx)("option",{value:"thursday",children:"Thursday"}),Object(d.jsx)("option",{value:"friday",children:"Friday"}),Object(d.jsx)("option",{value:"saturday",children:"Saturday"}),Object(d.jsx)("option",{value:"sunday",children:"Sunday"})]})]}),Object(d.jsxs)("button",{type:"submit",className:"form__submit",children:[i," item"]})]})]})})}),k=(s(52),function(e){var t=e.formAlertShow,s=e.formAlertBcg,a=e.formAlertMsg;return Object(d.jsx)("div",{className:"form-alert",style:{display:t?"block":"none",backgroundColor:s},children:a})}),v=(s(53),function(e){var t=e.taskboxesType,s=e.taskboxes,n=Object(a.useState)(0),c=Object(i.a)(n,2),o=c[0],r=c[1],j=Object(a.useState)(window.innerWidth),b=Object(i.a)(j,2),u=b[0],m=b[1],O=function(){m(window.innerWidth),r(0)};Object(a.useEffect)((function(){return window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}}),[u]),Object(a.useEffect)((function(){r(0)}),[]);return Object(d.jsxs)("div",{className:"taskboxes taskboxes__".concat(t),children:[Object(d.jsx)("div",{className:"taskboxes__btn taskboxes__btn--left",onClick:function(){o>0&&u<1e3&&r((function(e){return e-1})),o>0&&u>1e3&&r((function(e){return e-.5}))},children:Object(d.jsx)(l.b,{})}),Object(d.jsx)("div",{className:"taskboxes__btn taskboxes__btn--right",onClick:function(){o<6&&u<1e3&&r((function(e){return e+1})),o<3&&u>1e3&&r((function(e){return e+.5}))},children:Object(d.jsx)(l.c,{})}),Object(d.jsx)("div",{className:"taskboxes__items",children:Object(d.jsx)("div",{className:"taskboxes__items-flex",style:{transform:"translateX(calc(-100% * ".concat(o,"))")},children:s})})]})}),N=(s(54),s(55),function(e){var t,s=e.btnType,a=e.clicked,n=e.btnDisabled;switch(s){case"edit":t="btn--edit";break;case"remove":t="btn--remove";break;case"done":t="btn--done";break;case"failed":t="btn--failed";break;case"clear list":t="btn--clear";break;default:t=null}return Object(d.jsx)("button",{className:"btn ".concat(t),disabled:n,onClick:a,children:s})}),p=function(e){var t,s=e.listType,a=e.taskboxDay,n=e.taskboxItems,c=e.itemBtnClicked;return t=0===n.length?Object(d.jsx)("p",{style:{textAlign:"center",padding:"2rem 0",fontSize:"2rem"},children:"No added tasks yet"}):n.map((function(e){return Object(d.jsxs)("li",{id:e.id,className:"taskbox__item",children:[Object(d.jsx)("p",{className:"taskbox__item-name",children:e.name}),Object(d.jsxs)("div",{className:"taskbox__item-btns",children:[("failed"===s||"toDo"===s)&&Object(d.jsx)(N,{btnType:"done",clicked:function(){return c("Are you sure you have completed this task?","done",s,a,e.id)}}),"toDo"===s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{btnType:"failed",clicked:function(){return c("Are you sure you cannot accomplish this task?","failed",s,a,e.id)}}),Object(d.jsx)(N,{btnType:"edit",clicked:function(){return c("Are you sure waht to edit this task?","edit",s,a,e.id)}})]}),Object(d.jsx)(N,{btnType:"remove",clicked:function(){return c("Are you sure you want to remove this task?","remove",s,a,e.id)}})]})]},e.id)})),Object(d.jsxs)("article",{className:"taskbox taskbox--".concat(a),children:[Object(d.jsx)("h2",{className:"taskbox__day",children:a}),Object(d.jsx)("ul",{className:"taskbox__items",children:t}),Object(d.jsx)(N,{btnType:"clear list",className:"taskbox__clear-btn",btnDisabled:0===n.length||!1,clicked:function(){return c("Are you sure you want to delete all tasks from for this day?","clear",s,a,null)}})]})},w=(s(56),function(e){var t=e.questionModalShow,s=e.questionModalType,a=e.questionModalText,n=e.actionCancelled,c=e.actionConfirmed;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{show:t}),Object(d.jsxs)("div",{className:t?"question-modal question-modal--".concat(s," question-modal__show"):"question-modal",children:[Object(d.jsx)("h2",{className:"question-modal__title",children:"watch out"}),Object(d.jsx)("p",{className:"question-modal__text",children:a}),Object(d.jsxs)("div",{className:"question-modal__btns",children:[Object(d.jsx)("button",{className:"question-modal__btn question-modal__btn--cancel",onClick:n,children:"cancel"}),Object(d.jsx)("button",{className:"question-modal__btn question-modal__btn--confirm",onClick:c,children:"confirm"})]})]})]})}),g=s(8),T="SET_TASKS",C="ADD_NEW_TASK",D="REMOVE_TASK",S="TASK_FAILED",q="TASK_DONE",M="EDIT_TASK",E="CLEAR_LIST",I=function(){var e=Object(a.useState)({show:!1,text:"",action:"",listType:"",day:"",itemId:""}),t=Object(i.a)(e,2),s=t[0],n=t[1],c=function(){n({show:!1,text:"",action:"",listType:"",day:"",itemId:""})},o=Object(g.b)(),l=function(e,t,s){return o(function(e,t,s){return{type:D,list:e,day:t,itemId:s}}(e,t,s))},d=function(e,t,s){return o(function(e,t,s){return{type:q,list:e,day:t,itemId:s}}(e,t,s))},r=function(e,t,s){return o(function(e,t,s){return{type:S,list:e,day:t,itemId:s}}(e,t,s))},j=function(e,t,s){return o(function(e,t,s){return{type:M,list:e,day:t,itemId:s}}(e,t,s))},b=function(e,t){return o(function(e,t){return{type:E,list:e,day:t}}(e,t))};return{questionModal:s,closeQuestionModal:c,itemBtnClicked:function(e,t,s,a,c){n({show:!0,text:e,action:t,listType:s,day:a,itemId:c})},questionModalConfirm:function(e,t,a){"remove"===s.action&&l(e,t,a),"done"===s.action&&d(e,t,a),"failed"===s.action&&r(e,t,a),"edit"===s.action&&j(e,t,a),"clear"===s.action&&b(e,t),c()}}},A=function(){var e=I(),t=e.questionModal,s=e.closeQuestionModal,n=e.itemBtnClicked,c=e.questionModalConfirm,o=Object(g.c)((function(e){return e.tasks.toDo})),l=Object(g.b)(),r=Object(a.useState)(""),j=Object(i.a)(r,2),b=j[0],u=j[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),_=O[0],f=O[1],x=Object(a.useState)("add"),N=Object(i.a)(x,2),T=N[0],D=N[1],S=Object(g.c)((function(e){return e.tasks.editTask})),q=Object(a.useState)({show:!1,msg:"",bcg:""}),M=Object(i.a)(q,2),E=M[0],A=M[1],F=function(e,t){return l(function(e,t){return{type:C,task:e,day:t}}(e,t))};Object(a.useEffect)((function(){S&&(u(S.name),f(S.day),D("edit"))}),[S]);var B=Object.keys(o).map((function(e){return Object(d.jsx)(p,{listType:"toDo",taskboxDay:e,taskboxItems:o[e],itemBtnClicked:n},e)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{questionModalShow:t.show,questionModalType:t.action,questionModalText:t.text,actionCancelled:s,actionConfirmed:function(){return c(t.listType,t.day,t.itemId)}}),Object(d.jsx)(y,{nameValue:b,nameValueChanged:function(e){u(e.target.value)},submitBtnPrefix:T,dayValue:_,dayValueChanged:function(e){f(e.target.value)},formSubmit:function(e){if(e.preventDefault(),""===b.trim()||""===_)A({show:!0,msg:"enter valid values in order to add task",bcg:"red"});else{A(S?{show:!0,msg:"task edited",bcg:"green"}:{show:!0,msg:"new task added",bcg:"green"});var t={id:Object(h.a)(),name:b};F(t,_),u(""),f(""),D("add")}setTimeout((function(){A({show:!1,msg:"",bcg:""})}),1500)},children:Object(d.jsx)(k,{formAlertShow:E.show,formAlertMsg:E.msg,formAlertBcg:E.bcg})}),Object(d.jsxs)("section",{className:"home__tasks",children:[Object(d.jsx)("h2",{className:"home__tasks-title",children:"things to do this week"}),Object(d.jsx)("div",{className:"home__tasks-boxes",children:Object(d.jsx)(v,{taskboxesType:"toDo",taskboxes:B})})]})]})},F=(s(58),s(31)),B=function(){var e=I(),t=e.questionModal,s=e.closeQuestionModal,a=e.itemBtnClicked,n=e.questionModalConfirm,c=Object(g.c)((function(e){return e.tasks.done})),i=Object.keys(c).map((function(e){return Object(d.jsx)(p,{taskboxDay:e,listType:"done",taskboxItems:c[e],itemBtnClicked:a},e)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{questionModalShow:t.show,questionModalType:t.action,questionModalText:t.text,actionCancelled:s,actionConfirmed:function(){return n(t.listType,t.day,t.itemId)}}),Object(d.jsxs)("section",{className:"done",children:[Object(d.jsxs)("div",{className:"done__title",children:[Object(d.jsx)(F.a,{className:"done__title-icon"}),Object(d.jsx)("h2",{className:"done__title-text",children:"accomplished tasks"})]}),Object(d.jsx)("div",{className:"done__taskboxes",children:Object(d.jsx)(v,{taskboxesType:"done",taskboxes:i})})]})]})},L=(s(59),s(32)),V=function(){var e=I(),t=e.questionModal,s=e.closeQuestionModal,a=e.itemBtnClicked,n=e.questionModalConfirm,c=Object(g.c)((function(e){return e.tasks.failed})),i=Object.keys(c).map((function(e){return Object(d.jsx)(p,{taskboxDay:e,listType:"failed",taskboxItems:c[e],itemBtnClicked:a},e)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{questionModalShow:t.show,questionModalType:t.action,questionModalText:t.text,actionCancelled:s,actionConfirmed:function(){return n(t.listType,t.day,t.itemId)}}),Object(d.jsxs)("section",{className:"failed",children:[Object(d.jsxs)("div",{className:"failed__title",children:[Object(d.jsx)(L.a,{className:"failed__title-icon"}),Object(d.jsx)("h2",{className:"failed__title-text",children:"failed tasks"})]}),Object(d.jsx)("div",{className:"failed__taskboxes",children:Object(d.jsx)(v,{taskboxesType:"failed",taskboxes:i})})]})]})},K=s(13),z=(s(60),function(){var e,t=Object(g.c)((function(e){return e.tasks})),s=Object(a.useMemo)((function(){return{toDo:t.toDo,done:t.done,failed:t.failed}}),[t]),n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],r=Object(a.useState)(null),j=Object(i.a)(r,2),b=j[0],m=j[1],O=Object(a.useState)(null),_=Object(i.a)(O,2),f=_[0],x=_[1],h=Object(a.useState)({}),y=Object(i.a)(h,2),k=y[0],v=y[1],N=function(e,t){var s=t/e*100;return 0===e&&(s=0),s};return Object(a.useEffect)((function(){var e=Object.keys(s).map((function(e){return Object.keys(s[e]).map((function(t){return s[e][t]})).reduce((function(e,t){return e.concat(t)}),[])})).reduce((function(e,t){return e.concat(t)}),[]).length,t=Object.keys(s.toDo).map((function(e){return s.toDo[e]})).reduce((function(e,t){return e.concat(t)}),[]).length,a=Object.keys(s.done).map((function(e){return s.done[e]})).reduce((function(e,t){return e.concat(t)}),[]).length,n=Object.keys(s.failed).map((function(e){return s.failed[e]})).reduce((function(e,t){return e.concat(t)}),[]).length;l(N(e,t).toFixed(2)),m(N(e,a).toFixed(2)),x(N(e,n).toFixed(2))}),[s]),Object(a.useEffect)((function(){var e={};for(var t in s.toDo)e[t]={toDo:Object(K.a)(s.toDo[t]).length,done:Object(K.a)(s.done[t]).length,failed:Object(K.a)(s.failed[t]).length,total:Object(K.a)(s.toDo[t]).length+Object(K.a)(s.done[t]).length+Object(K.a)(s.failed[t]).length};var a={};for(var n in e)a[n]={toDo:N(e[n].total,e[n].toDo).toFixed(2),done:N(e[n].total,e[n].done).toFixed(2),failed:N(e[n].total,e[n].failed).toFixed(2)};v(a)}),[s]),e=0===Object.keys(k).length?Object(d.jsx)("div",{children:"loading"}):Object.keys(s.toDo).map((function(e){return Object(d.jsxs)("div",{className:"stats__stats-day stats__stats-day--".concat(e),children:[Object(d.jsx)("h4",{className:"stats__stats-day__title",children:e}),Object(d.jsxs)("div",{className:"stats__stats-day__box",children:[Object(d.jsxs)("p",{className:"toDo",children:["tasks to be done: ",k[e].toDo,"%"]}),Object(d.jsxs)("p",{className:"done",children:["tasks you accomlished: ",k[e].done,"%"]}),Object(d.jsxs)("p",{className:"failed",children:["tasks you failed to do: ",k[e].failed,"%"]})]})]},e)})),Object(d.jsxs)("section",{className:"stats",children:[Object(d.jsxs)("div",{className:"stats__title",children:[Object(d.jsx)(u.b,{className:"stats__title-icon"}),Object(d.jsx)("h2",{className:"stats__title-text",children:"statistics"})]}),Object(d.jsxs)("article",{className:"stats__stats",children:[Object(d.jsxs)("div",{className:"stats__stats-all",children:[Object(d.jsx)("h3",{className:"stats__stats-title",children:"all tasks statistics"}),Object(d.jsxs)("div",{className:"stats__stats-box",children:[Object(d.jsxs)("p",{className:"stats__stats-box__toDo",children:["tasks to be done: ",o,"%"]}),Object(d.jsxs)("p",{className:"stats__stats-box__done",children:["tasks you accomlished: ",b,"%"]}),Object(d.jsxs)("p",{className:"stats__stats-box__failed",children:["tasks you failed to do: ",f,"%"]})]})]}),Object(d.jsxs)("div",{className:"stats__stats-byday",children:[Object(d.jsx)("h3",{className:"stats__stats-title",children:"statistics by day"}),Object(d.jsx)("div",{className:"stats__stats-byday__content",children:e})]})]})]})}),X=function(){return Object(d.jsx)(f,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/",exact:!0,component:A}),Object(d.jsx)(x.a,{path:"/done",exact:!0,component:B}),Object(d.jsx)(x.a,{path:"/failed",exact:!0,component:V}),Object(d.jsx)(x.a,{path:"/stats",exact:!0,component:z})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},Q=s(27),R=s(6),W=s(3),J={toDo:{monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},done:{monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},failed:{monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},editTask:null},U=function(){var e,t,s,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return Object(W.a)(Object(W.a)({},a),{},{toDo:Object(W.a)(Object(W.a)({},a.toDo),{},Object(R.a)({},n.day,[].concat(Object(K.a)(a.toDo[n.day]),[n.task]))),editTask:null});case D:var c=a[n.list][n.day].filter((function(e){return e.id!==n.itemId}));return Object(W.a)(Object(W.a)({},a),{},Object(R.a)({},n.list,Object(W.a)(Object(W.a)({},a[n.list]),{},Object(R.a)({},n.day,c))));case q:var i=a[n.list][n.day].find((function(e){return e.id===n.itemId})),o=a[n.list][n.day].filter((function(e){return e.id!==n.itemId}));return Object(W.a)(Object(W.a)({},a),{},(e={},Object(R.a)(e,n.list,Object(W.a)(Object(W.a)({},a[n.list]),{},Object(R.a)({},n.day,o))),Object(R.a)(e,"done",Object(W.a)(Object(W.a)({},a.done),{},Object(R.a)({},n.day,a.done[n.day].concat(i)))),e));case S:var l=a[n.list][n.day].find((function(e){return e.id===n.itemId})),d=a[n.list][n.day].filter((function(e){return e.id!==n.itemId}));return Object(W.a)(Object(W.a)({},a),{},(t={},Object(R.a)(t,n.list,Object(W.a)(Object(W.a)({},a[n.list]),{},Object(R.a)({},n.day,d))),Object(R.a)(t,"failed",Object(W.a)(Object(W.a)({},a.failed),{},Object(R.a)({},n.day,a.failed[n.day].concat(l)))),t));case M:var r=a[n.list][n.day].find((function(e){return e.id===n.itemId}));r.day=n.day;var j=a[n.list][n.day].filter((function(e){return e.id!==n.itemId}));return Object(W.a)(Object(W.a)({},a),{},(s={},Object(R.a)(s,n.list,Object(W.a)(Object(W.a)({},a[n.list]),{},Object(R.a)({},n.day,j))),Object(R.a)(s,"editTask",r),s));case E:return Object(W.a)(Object(W.a)({},a),{},Object(R.a)({},n.list,Object(W.a)(Object(W.a)({},a[n.list]),{},Object(R.a)({},n.day,[]))));case T:return n.tasks;default:return a}},G=Object(Q.a)({tasks:U}),H=Object(Q.b)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(d.jsx)(g.a,{store:H,children:Object(d.jsx)(m.a,{basename:"/weekly-planner-react/",children:Object(d.jsx)(X,{})})}),document.getElementById("root")),P()}},[[61,1,2]]]);
//# sourceMappingURL=main.7ded8170.chunk.js.map