(this.webpackJsonphealthy=this.webpackJsonphealthy||[]).push([[0],{47:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,d,s,l,u,j,b,f=t(0),O=t.n(f),h=t(14),m=t.n(h),p=(t(47),t(2)),g=t(7),x=t(6),v=t(8),y=t(3),N=t(4),S=t(17),I=t(16),C=function(e,n){var t=Object(f.useMemo)((function(){return n}),[]),c=localStorage.getItem(e),r=c?JSON.parse(c):t,a=Object(f.useState)(r),i=Object(x.a)(a,2),o=i[0],d=i[1];return Object(f.useEffect)((function(){var n=localStorage.getItem(e);d(n?JSON.parse(n):t)}),[t,e]),[o,Object(f.useCallback)((function(n){d(n),localStorage.setItem(e,JSON.stringify(n))}),[e])]},w=t(1),k="EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP",E=O.a.createContext({key:k,setKey:function(){}}),F=function(e){var n=C("API_KEY",k),t=Object(x.a)(n,2),c=t[0],r={key:void 0===c?"":c,setKey:t[1]};return Object(w.jsx)(E.Provider,Object(N.a)({value:r},e))},T=function(e){return{name:e.nutrientName,id:e.nutrientId,value:e.value,unit:e.unitName,group:"lol"}},P=function(e){return{name:e.description,brand:e.brandOwner,id:e.fdcId,nutrients:e.foodNutrients.map(T).filter(A).sort(B)}},D=function(e){var n;return{name:e.nutrient.name,id:e.nutrient.id,unit:e.nutrient.unitName,value:e.amount,group:null===(n=L.find((function(n){return n.fdcId===e.nutrient.id})))||void 0===n?void 0:n.group}},M=function(e){return{name:e.description,brand:e.brandOwner,id:e.fdcId,nutrients:e.foodNutrients.map(D).filter(A).sort(B)}},A=function(e){return W.includes(e.name)},B=function(e,n){return W.indexOf(e.name)-W.indexOf(n.name)},L=[{fdcId:1051,fdcName:"Water",group:"macro"},{fdcId:1008,fdcName:"Energy",group:"macro"},{fdcId:1003,fdcName:"Protein",group:"macro"},{fdcId:1004,fdcName:"Total lipid (fat)",group:"lipid"},{fdcId:2039,fdcName:"Carbohydrates",group:"macro"},{fdcId:1079,fdcName:"Fiber, total dietary",group:"macro"},{fdcId:1063,fdcName:"Sugars, Total NLEA",group:"macro"},{fdcId:1087,fdcName:"Calcium, Ca",group:"mineral"},{fdcId:1089,fdcName:"Iron, Fe",group:"mineral"},{fdcId:1090,fdcName:"Magnesium, Mg",group:"mineral"},{fdcId:1091,fdcName:"Phosphorus, P",group:"mineral"},{fdcId:1092,fdcName:"Potassium, K",group:"mineral"},{fdcId:1093,fdcName:"Sodium, Na",group:"mineral"},{fdcId:1095,fdcName:"Zinc, Zn",group:"mineral"},{fdcId:1098,fdcName:"Copper, Cu",group:"mineral"},{fdcId:1101,fdcName:"Manganese, Mn",group:"mineral"},{fdcId:1103,fdcName:"Selenium, Se",group:"mineral"},{fdcId:1162,fdcName:"Vitamin C, total ascorbic acid",group:"vitamin"},{fdcId:1165,fdcName:"Thiamin",group:"vitamin"},{fdcId:1166,fdcName:"Riboflavin",group:"vitamin"},{fdcId:1167,fdcName:"Niacin",group:"vitamin"},{fdcId:1170,fdcName:"Pantothenic acid",group:"vitamin"},{fdcId:1175,fdcName:"Vitamin B-6",group:"vitamin"},{fdcId:1106,fdcName:"Vitamin A, RAE",group:"vitamin"},{fdcId:1107,fdcName:"Carotene, beta",group:"vitamin"},{fdcId:1109,fdcName:"Vitamin E (alpha-tocopherol)",group:"vitamin"},{fdcId:1185,fdcName:"Vitamin K (phylloquinone)",group:"vitamin"},{fdcId:1258,fdcName:"Fatty acids, total saturated",group:"lipid"},{fdcId:1292,fdcName:"Fatty acids, total monounsaturated",group:"lipid"},{fdcId:1293,fdcName:"Fatty acids, total polyunsaturated",group:"lipid"}],W=Object.values(L).map((function(e){return e.fdcName})),R=function(e,n){return e&&n?"https://api.nal.usda.gov/fdc/v1/food/".concat(n,"?api_key=").concat(e):null},K=function(e){if(e&&"fdcId"in e)return e},_=function(e){if(e&&!("fdcId"in e))return e},J=function(e){var n=Object(f.useContext)(E).key,t=R(n,e),c=Object(I.b)(t),r=c.data,a=c.error,i=K(r);return{food:i&&M(i),data:r,apiError:_(r),error:a,isLoading:t&&!a&&!r}},z=function(e){var n=e.morsel,t=Object(S.a)(e,["morsel"]),c=J(n.id),r=c.food,a=c.error;return Object(w.jsxs)("div",Object(N.a)(Object(N.a)({},t),{},{children:[a&&a.toString(),!r&&!a&&"loading...",r&&"".concat(n.amount).concat(n.unit," ").concat(null===r||void 0===r?void 0:r.name," (").concat(null===r||void 0===r?void 0:r.brand,")")]}))},U=y.a.ul(c||(c=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  li {\n    list-style: none;\n  }\n"]))),V=function(e){var n=e.meal,t=Object(S.a)(e,["meal"]),c=function(e){var n=Object(f.useContext)(E).key,t=e.map(Object(v.partial)(R,n)),c=Object(I.c)((function(e){return t[e]})),r=c.data,a=c.error,i=c.setSize;Object(f.useEffect)((function(){i(e.length)}),[i,e.length]);var o=Object(v.compact)(null===r||void 0===r?void 0:r.map(K)).map(M),d=Object(v.compact)(null===r||void 0===r?void 0:r.map(_));return{foods:o,responses:r,errors:d,error:a}}(Object(v.map)(n.foods,"id")).foods;if(!c)return null;var r=L.map((function(e){var n,t;return{name:e.fdcName,value:c.reduce((function(n,t){var c,r;return n+(null!==(c=null===(r=Object(v.find)(t.nutrients,{name:e.fdcName}))||void 0===r?void 0:r.value)&&void 0!==c?c:0)}),0),unit:null===(n=Object(v.find)(null===(t=Object(v.first)(c))||void 0===t?void 0:t.nutrients,{name:e.fdcName}))||void 0===n?void 0:n.unit,group:e.group}})),a=Object(v.groupBy)(r,"group");return Object(w.jsxs)("div",Object(N.a)(Object(N.a)({},t),{},{children:[Object(w.jsx)("h3",{children:n.date}),Object(w.jsx)(U,{children:n.foods.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(z,{morsel:e})},e.id)}))}),Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Nutrient"}),Object(w.jsx)("th",{children:"Amount"})]})}),Object(w.jsx)("tbody",{children:Object.keys(a).map((function(e){return Object(w.jsxs)(O.a.Fragment,{children:[Object(w.jsx)("h4",{children:e}),a[e].map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.name}),Object(w.jsxs)("td",{children:[Math.round(e.value)," ",e.unit]})]})}))]},e)}))})]})]}))},Y=y.a.main.attrs({id:"main"})(r||(r=Object(p.a)(["\n  padding: 4px;\n"]))),q=O.a.createContext({meals:[],setMeals:function(){}}),G=function(e){var n=C("meals",[]),t=Object(x.a)(n,2),c={meals:t[0],setMeals:t[1]};return Object(w.jsx)(q.Provider,Object(N.a)({value:c},e))},H=y.a.div(a||(a=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),X=function(){var e=Object(f.useContext)(q).meals,n=void 0===e?[]:e,t=Object(f.useMemo)((function(){return Object(v.orderBy)(n,["date"],["desc"])}),[n]),c=Object(f.useState)(0),r=Object(x.a)(c,2),a=r[0],i=r[1];Object(f.useEffect)((function(){i(0)}),[n]);var o=a<t.length-1,d=a>0,s=t[a];return Object(w.jsxs)(Y,{children:[Object(w.jsx)("h2",{children:"Meals"}),Object(w.jsxs)(H,{children:[Object(w.jsx)("button",{onClick:function(){o&&i(a+1)},disabled:!o,children:"< Prev"}),Object(w.jsx)("button",{onClick:function(){d&&i(a-1)},disabled:!d,children:"Next >"})]}),s&&Object(w.jsx)(V,{meal:s})]})},Z=t(15),Q=y.a.nav(i||(i=Object(p.a)(["\n  background-color: #eeeeee;\n  border-top: 1px solid #777777;\n  box-sizing: border-box;\n\n  ul {\n    padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    list-style: none;\n\n    li {\n      margin: 0;\n    }\n\n    li:not(:last-child) {\n      border-right: 1px solid black;\n    }\n  }\n"]))),$=Object(y.a)(Z.b)(o||(o=Object(p.a)(["\n  padding: 1rem 0;\n  display: flex;\n  justify-content: center;\n"]))),ee=t(13),ne=y.a.button(d||(d=Object(p.a)(["\n  padding: 0.7em;\n  /* background: linear-gradient(90deg, #ffcdd2 0%, #e1bee7 100%);\n  border: 1px solid #7b1fa2; */\n\n  button + & {\n    margin-left: 4px;\n  }\n"]))),te=y.a.input(s||(s=Object(p.a)([""]))),ce=t(30),re=t.n(ce);re.a.setAppElement("#root");var ae,ie,oe,de,se,le,ue,je=Object(y.a)(re.a)(l||(l=Object(p.a)(["\n  margin: 1rem;\n  background-color: white;\n  border: 1px solid black;\n"]))),be=y.a.div(u||(u=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 1rem;\n  border-bottom: 1px solid grey;\n  background-color: lightgrey;\n"]))),fe=y.a.h1(j||(j=Object(p.a)(["\n  margin: 0;\n"]))),Oe=y.a.div(b||(b=Object(p.a)(["\n  margin-top: 1rem;\n  padding: 1rem;\n"]))),he=function(e){var n=e.isOpen,t=e.onClose,c=e.title,r=e.children;return Object(w.jsxs)(je,{isOpen:n,onRequestClose:t,contentLabel:c,children:[Object(w.jsxs)(be,{children:[Object(w.jsx)(fe,{children:c}),Object(w.jsx)("button",{onClick:t,children:"close"})]}),Object(w.jsx)(Oe,{children:r})]})},me=t(41),pe=t.n(me),ge=t(24),xe=t(19),ve=y.a.div(ae||(ae=Object(p.a)(["\n  :not(:first-child) {\n    margin-top: 8px;\n  }\n"]))),ye=function(e){var n=e.id,t=e.onDone,c=J(n),r=c.food,a=c.error,i=Object(f.useState)(100),o=Object(x.a)(i,2),d=o[0],s=o[1],l=Object(f.useState)(pe()().format("YYYY-MM-DD")),u=Object(x.a)(l,2),j=u[0],b=u[1],O=Object(f.useContext)(q),h=O.meals,m=O.setMeals,p=function(){s(100)};Object(f.useEffect)((function(){return p(),p}),[]);var g=Object(xe.d)(),y=function(e,n,t){var c,r,a,i=Object(v.findIndex)(h||[],{date:t}),o={id:e,amount:n,unit:"g"};if(console.log({existingMealIndex:i}),-1===i)m([].concat(Object(ee.a)(h||[]),[{date:t,foods:[o]}]));else{var d=h[i];m((c=h,r=i,a=Object(N.a)(Object(N.a)({},d),{},{foods:[].concat(Object(ee.a)(d.foods),[o])}),Object.assign(Object(ee.a)(c),Object(ge.a)({},r,a))))}};return Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(n,d,j),g.success("You did it!!!"),t()},children:[a&&Object(w.jsx)("code",{children:JSON.stringify(a)}),!r&&"loading...",Object(w.jsx)(ve,{children:Object(w.jsxs)("label",{children:["Which meal?",Object(w.jsx)(te,{type:"date",onChange:function(e){return b(e.target.value)},value:j})]})}),Object(w.jsx)(ve,{children:Object(w.jsxs)("label",{children:["How Much ",null===r||void 0===r?void 0:r.name,"?",Object(w.jsx)(te,{type:"number",onChange:function(e){return s(Number(e.target.value))},value:d})]})}),Object(w.jsxs)(ve,{children:[Object(w.jsx)(ne,{onClick:function(){t()},children:"Cancel"}),Object(w.jsx)(ne,{type:"submit",children:"Do it baby!"})]})]})},Ne=function(e){var n=e.id,t=e.isOpen,c=e.onClose;return Object(w.jsx)(he,{isOpen:t,onClose:c,title:"Add Food To Meal",children:Object(w.jsx)(ye,{id:n,onDone:c})})},Se=Object(y.a)(ne)(ie||(ie=Object(p.a)(["\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: none;\n"]))),Ie=y.a.div(oe||(oe=Object(p.a)(["\n  max-width: 400px;\n"]))),Ce=y.a.div(de||(de=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  margin-bottom: 4px;\n"]))),we=Object(y.a)(Se)(se||(se=Object(p.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),ke=y.a.div(le||(le=Object(p.a)(["\n  /* justify-content: center; */\n  display: flex;\n  align-items: center;\n"]))),Ee=function(e){var n=e.food,t=e.actions,c=e.onClick,r=Object(S.a)(e,["food","actions","onClick"]);return Object(w.jsx)(Ie,Object(N.a)(Object(N.a)({},r),{},{children:Object(w.jsxs)(Ce,{children:[Object(w.jsxs)(we,{onClick:c,children:[n.name," ",n.brand&&"(".concat(n.brand,")")]}),Object(w.jsx)(ke,{children:t})]})}))},Fe=O.a.createContext({starred:[],setStarred:function(){}}),Te=function(e){var n=C("starred",[]),t=Object(x.a)(n,2),c=t[0],r={starred:void 0===c?[]:c,setStarred:t[1]};return Object(w.jsx)(Fe.Provider,Object(N.a)({value:r},e))},Pe=function(e,n){var t=Object(I.b)(function(e,n){return e&&0!==e.trim().length&&n&&0!==n.length?"https://api.nal.usda.gov/fdc/v1/foods/search?api_key=".concat("EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP","&query=").concat(encodeURIComponent(e.trim()),"&dataType=").concat(encodeURIComponent(n.join(","))):null}(e,n));return{data:t.data,error:t.error}};!function(e){e.BRANDED="Branded",e.SURVEY="Survey (FNDDS)",e.LEGACY="SR Legacy",e.FOUNDATION="Foundation"}(ue||(ue={}));var De,Me,Ae,Be,Le,We,Re,Ke,_e,Je,ze,Ue=t(31),Ve=Object(y.a)(Se)(De||(De=Object(p.a)(["\n  font-size: 1.5rem;\n  line-height: 1;\n  color: #ffeb3b;\n"]))),Ye=function(e){var n=e.isStarred,t=e.setIsStarred,c=Object(S.a)(e,["isStarred","setIsStarred"]),r=Object(f.useCallback)((function(){return t(!n)}),[n,t]);return Object(w.jsx)(Ve,Object(N.a)(Object(N.a)({"aria-label":"Star","aria-pressed":n,onClick:r},c),{},{children:n?Object(w.jsx)(Ue.a,{}):Object(w.jsx)(Ue.b,{})}))},qe={primary:"#e91e63",onPrimary:"black",secondary:"#ffeb3b",onSecondary:"black"},Ge={surface:"white",onSurface:"black",critical:"#f44336",onCritical:"black",warning:"#ffc107",onWarning:"black",success:"#8bc34a",onSuccess:"black",highlight:"",interactive:qe.secondary,onInteractive:qe.onSecondary,actionPrimary:qe.primary,border:"#BDBDBD"},He=Object(y.a)(te).attrs({type:"text"})(Me||(Me=Object(p.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.5rem;\n"]))),Xe=y.a.ul(Ae||(Ae=Object(p.a)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 1rem;\n  display: grid;\n  gap: 1rem;\n  li {\n    list-style: none;\n  }\n"]))),Ze=y.a.div(Be||(Be=Object(p.a)(["\n  margin-top: 8px;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n"]))),Qe=Object(y.a)(Ee)(Le||(Le=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),Ge.border),$e=function(){var e,n=C("searchQuery",""),t=Object(x.a)(n,2),c=t[0],r=t[1],a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,t=Object(f.useState)(e),c=Object(x.a)(t,2),r=c[0],a=c[1];return Object(f.useEffect)((function(){var t=setTimeout((function(){return a(e)}),n);return function(){return clearTimeout(t)}}),[e,n]),r}(c),i=C("dataTypes",[ue.FOUNDATION]),o=Object(x.a)(i,2),d=o[0],s=o[1],l=Pe(a,d),u=l.data,j=l.error,b=(null===u||void 0===u||null===(e=u.foods)||void 0===e?void 0:e.map(P))||[],O=Object(f.useContext)(Fe),h=O.starred,m=O.setStarred,p=function(e){s(Object(v.uniq)([].concat(Object(ee.a)(d),[e])))},g=function(e){return s(Object(v.without)(d,e))},y=Object(f.useState)(),N=Object(x.a)(y,2),S=N[0],I=N[1],k=Object(f.useState)(!1),E=Object(x.a)(k,2),F=E[0],T=E[1];return Object(w.jsxs)(Y,{children:[S&&Object(w.jsx)(Ne,{id:S,isOpen:F,onClose:function(){T(!1),I(void 0)}}),Object(w.jsx)(He,{value:c,onChange:function(e){return r(e.target.value)},placeholder:"Search For Food"}),Object(w.jsx)(Ze,{children:Object.values(ue).map((function(e){return Object(w.jsxs)("label",{style:{marginRight:"10px"},children:[Object(w.jsx)("input",{type:"checkbox",name:e,defaultChecked:d.includes(e),onChange:function(n){return(n.target.checked?p:g)(e)}},e),e]})}))}),Object(w.jsx)(Xe,{children:b.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(Qe,{food:e,onClick:function(){return n=e.id,I(n),void T(!0);var n},actions:Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Ye,{isStarred:null===h||void 0===h?void 0:h.includes(e.id),setIsStarred:function(n){return m(n?[].concat(Object(ee.a)(h||[]),[e.id]):Object(v.without)(h,e.id))}})})})},e.id)}))}),Object(w.jsx)("pre",{children:Object(w.jsx)("code",{children:JSON.stringify(j,null,2)})})]})},en=function(e){var n=e.id,t=J(n),c=t.food,r=t.error,a=Object(f.useContext)(Fe),i=a.starred,o=a.setStarred,d=!c&&!r,s=null===i||void 0===i?void 0:i.includes(n);return Object(w.jsxs)(w.Fragment,{children:[d&&Object(w.jsx)("span",{children:"Loading..."}),c&&Object(w.jsx)(Ee,{food:c,actions:Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("button",{onClick:s?function(){return o(Object(v.without)(i,n))}:function(){return o(Object(v.uniq)([].concat(Object(ee.a)(i||[]),[n])))},children:s?"Unstar":"Star"})})}),JSON.stringify(r)]})},nn=function(){var e=C("starred",[]),n=Object(x.a)(e,2),t=n[0],c=n[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("ul",{children:(t||[]).map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(en,{id:e})},e)}))}),Object(w.jsx)("button",{onClick:function(){return c([])},children:"Clear Starred Items"})]})},tn=y.a.span(We||(We=Object(p.a)(['\n  margin-left: 4px;\n  &[data-status="loading"] {\n    color: blue;\n  }\n  &[data-status="valid"] {\n    color: green;\n  }\n  &[data-status="invalid"] {\n    color: red;\n  }\n']))),cn=function(e){var n=Object(f.useContext)(E),t=n.key,c=n.setKey,r=J(747447),a=r.food,i=r.apiError,o=r.error,d=r.isLoading,s=Boolean(a),l=Boolean(i||o);return Object(w.jsxs)(Y,Object(N.a)(Object(N.a)({},e),{},{children:[Object(w.jsx)("h2",{children:"Settings"}),Object(w.jsx)("p",{children:"You can change some settings here :)"}),Object(w.jsx)("h3",{children:Object(w.jsx)("label",{htmlFor:"apiKey",children:"API Key"})}),Object(w.jsx)("p",{children:"This app comes with a default API key. If that one ever gets invalidated or starts hitting the rate-limit too often, you can request your own from the FDA website and paste it below."}),Object(w.jsx)(te,{id:"apiKey",type:"text",value:t,onChange:function(e){return c(e.target.value)}}),Object(w.jsxs)(tn,{"data-status":(d?"loading":s&&"valid")||l&&"invalid",children:[d&&"loading...",a&&"\u2714\ufe0f valid",l&&"\u274c invalid"]})]}))},rn=y.a.nav(Re||(Re=Object(p.a)(["\n  color: white;\n  background-color: salmon;\n  border-bottom: 1px solid violet;\n\n  width: 100%;\n  padding: 4px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  a {\n    color: white;\n  }\n"]))),an=function(e){return Object(w.jsxs)(rn,Object(N.a)(Object(N.a)({},e),{},{children:[Object(w.jsx)(Z.b,{to:"/",children:Object(w.jsx)("h1",{children:"Healthy"})}),Object(w.jsx)("div",{children:Object(w.jsx)(Z.b,{to:"/settings",children:"Settings"})})]}))},on=function(e){var n=Object.assign({},e);return Object(w.jsx)(Y,Object(N.a)(Object(N.a)({},n),{},{children:Object(w.jsx)("pre",{children:Object(w.jsx)("code",{children:JSON.stringify(Object({NODE_ENV:"production",PUBLIC_URL:"/healthy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),null,2)})})}))},dn=y.a.a(Ke||(Ke=Object(p.a)(["\n  left: -999px;\n  position: absolute;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  z-index: -999;\n  &:focus,\n  &:active {\n    color: #fff;\n    background-color: #000;\n    left: auto;\n    top: auto;\n    width: 30%;\n    height: auto;\n    overflow: auto;\n    margin: 10px 35%;\n    padding: 5px;\n    border-radius: 15px;\n    border: 4px solid yellow;\n    text-align: center;\n    font-size: 1.2em;\n    z-index: 999;\n  }\n"]))),sn=y.a.div(_e||(_e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),ln=Object(y.a)((function(e){return Object(w.jsx)(Q,Object(N.a)(Object(N.a)({},e),{},{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)($,{to:"/",children:"Search"})}),Object(w.jsx)("li",{children:Object(w.jsx)($,{to:"/starred",children:"Starred"})}),Object(w.jsx)("li",{children:Object(w.jsx)($,{to:"/meals",children:"My Meals"})})]})}))}))(Je||(Je=Object(p.a)(["\n  order: 1;\n"]))),un=y.a.div(ze||(ze=Object(p.a)(["\n  flex-grow: 1;\n  overflow: auto;\n"]))),jn=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(dn,{href:"#main",children:"Jump to Main Content"}),Object(w.jsxs)(sn,{children:[Object(w.jsx)(ln,{}),Object(w.jsxs)(un,{children:[Object(w.jsx)(an,{}),Object(w.jsxs)(g.c,{children:[Object(w.jsx)(g.a,{path:"/",exact:!0,children:Object(w.jsx)($e,{})}),Object(w.jsx)(g.a,{path:"/starred",children:Object(w.jsx)(nn,{})}),Object(w.jsx)(g.a,{path:"/meals",children:Object(w.jsx)(X,{})}),Object(w.jsx)(g.a,{path:"/settings",children:Object(w.jsx)(cn,{})}),Object(w.jsx)(g.a,{path:"/debug",children:Object(w.jsx)(on,{})})]})]})]})]})},bn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var On=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))},hn=function(e,n){return fetch(e,n).then((function(e){return e.json()}))},mn=function(e){var n=e.children;return Object(w.jsx)(I.a,{value:{refreshInterval:0,revalidateOnFocus:!1,dedupingInterval:6e5,fetcher:hn},children:n})},pn=t(42),gn={position:xe.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:xe.c.SCALE},xn=function(e){return Object(w.jsx)(xe.a,Object(N.a)(Object(N.a)({},e),{},{template:pn.a},gn))};m.a.render(Object(w.jsx)(O.a.StrictMode,{children:Object(w.jsx)(mn,{children:Object(w.jsx)(xn,{children:Object(w.jsx)(F,{children:Object(w.jsx)(Te,{children:Object(w.jsx)(G,{children:Object(w.jsx)(Z.a,{basename:"/healthy",children:Object(w.jsx)(jn,{})})})})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/healthy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/healthy","/service-worker.js");bn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):fn(n,e)}))}}(),On()}},[[63,1,2]]]);
//# sourceMappingURL=main.1d44f1ec.chunk.js.map