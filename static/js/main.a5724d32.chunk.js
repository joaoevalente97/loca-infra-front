(this["webpackJsonploca-infra-front"]=this["webpackJsonploca-infra-front"]||[]).push([[0],{76:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(23),s=c.n(r),i=(c(67),c(61)),o=c(7),l=c(26),j=c.n(l),d=c(38),h=c(53),b=c(47),u=c(27),x=c(57),O=c(59),p=c(34),f=c(58),m=c(11),v=c(25),g=c(17),y=c(49),C=c(31),k=c(48),I=c(35),N=c(3),w=function(){return Object(N.jsxs)(C.a,{bg:"dark",variant:"dark",children:[Object(N.jsxs)(C.a.Brand,{href:"#items",children:["\xa0",Object(N.jsx)(I.a,{})," LocaInfra"]}),Object(N.jsx)(k.a,{classname:"mr-auto",defaultActiveKey:"#items",children:Object(N.jsx)(k.a.Item,{children:Object(N.jsx)(k.a.Link,{href:"#items",children:"Itens"})})})]})},E=function(){return Object(N.jsx)(C.a,{bg:"dark",fixed:"bottom",children:Object(N.jsx)(C.a.Brand,{href:"#items",className:"text-light mx-2",children:"LocaInfra\u2122  - Todos os direitos reservados"})})},L="https://loca-infra-back.herokuapp.com/",S=c(60),q=function(){var e={x:"",descricao:"",quantidade:"",locacao:""},t=Object(a.useState)(e),c=Object(u.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],C=Object(a.useState)(!1),k=Object(u.a)(C,2),q=k[0],T=k[1],B=Object(a.useState)(!1),F=Object(u.a)(B,2),H=F[0],A=F[1],M=Object(a.useState)({}),D=Object(u.a)(M,2),G=D[0],_=D[1],J=Object(a.useState)(""),P=Object(u.a)(J,2),Q=P[0],X=P[1],K=n.x,R=n.descricao,U=n.quantidade,z=n.locacao;function V(){return W.apply(this,arguments)}function W(){return(W=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(L,"/items"),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){l(e),console.log(e)})).catch((function(e){console.error("Erro ao obter os itens: ".concat(e.message))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){document.title="LocaInfra - Items",V()}),[]);var Y=function(e){r(Object(h.a)(Object(h.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))),_({})};function Z(){return(Z=Object(b.a)(j.a.mark((function t(c){var a,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),a=n.hasOwnProperty("_id")?"PUT":"POST",s="".concat(L,"/items"),t.next=5,fetch(s,{method:a,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){t._id||t.message?X("Registro salvo com sucesso"):X(""),r(e),V()})).catch((function(e){console.error("Erro ao salvar o item: ".concat(e.message))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return($=Object(b.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="".concat(L,"/items/").concat(n._id),t.next=3,fetch(c,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.message?X(t.message):X(""),r(e),V()})).catch((function(e){console.error("Erro ao excluir a item: ".concat(e.message))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(N.jsxs)(x.a,{fluid:!0,className:"p-0",children:[Object(N.jsx)(w,{}),Object(N.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"bg-warning text-dark",children:[Object(N.jsx)("th",{children:"X"}),Object(N.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(N.jsx)("th",{children:"Quantidade"}),Object(N.jsx)("th",{children:"Loca\xe7\xe3o"}),Object(N.jsx)("th",{children:"Op\xe7\xf5es"})]})}),Object(N.jsx)("tbody",{children:o.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"col-1",children:e.x}),Object(N.jsx)("td",{children:e.descricao}),Object(N.jsx)("td",{className:"col-1",children:e.quantidade}),Object(N.jsx)("td",{className:"col-1",children:e.locacao}),Object(N.jsxs)("td",{className:"col-1",children:[Object(N.jsx)(v.a,{className:"mx-1",variant:"outline-primary",title:"Editar o registro",onClick:function(){r(e),T(!0)},children:Object(N.jsx)(I.c,{})}),Object(N.jsx)(v.a,{className:"mx-1",variant:"outline-danger",title:"Apagar o registro",onClick:function(){r(e),A(!0)},children:Object(N.jsx)(I.b,{})})]})]},e._id)}))})]}),Object(N.jsx)(O.a,{className:"justify-content-md-center",children:Object(N.jsx)(v.a,{className:"col-2",variant:"primary",type:"submit",title:"Novo",onClick:function(){r(e),T(!0)},children:"Novo"})}),Object(N.jsxs)(g.a,{animation:!1,show:q,onHide:function(){return T(!1)},children:[Object(N.jsx)(g.a.Header,{children:Object(N.jsx)(g.a.Title,{children:"Edi\xe7\xe3o"})}),Object(N.jsx)(g.a.Body,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(m.a.Group,{controlId:"x",children:[Object(N.jsx)(m.a.Label,{children:"X"}),Object(N.jsx)(S.a,{name:"x",placeHolder:"Min 3 dig.",onChange:Y,value:K,isInvalid:!!G.x}),Object(N.jsx)(m.a.Control.Feedback,{type:"invalid",children:G.x})]}),Object(N.jsxs)(m.a.Group,{as:p.a,controlId:"quantidade",children:[Object(N.jsx)(m.a.Label,{children:"Quantidade"}),Object(N.jsx)(m.a.Control,{name:"quantidade",type:"number",placeholder:"Maior que 0",onChange:Y,value:U,isInvalid:!!G.quantidade}),Object(N.jsx)(m.a.Control.Feedback,{type:"invalid",children:G.quantidade})]}),Object(N.jsxs)(m.a.Group,{as:p.a,controlId:"locacao",children:[Object(N.jsx)(m.a.Label,{children:"Loca\xe7\xe3o"}),Object(N.jsx)(m.a.Control,{name:"locacao",placeholder:"Min 3 dig.",onChange:Y,value:z,isInvalid:!!G.locacao}),Object(N.jsx)(m.a.Control.Feedback,{type:"invalid",children:G.locacao})]}),Object(N.jsxs)(m.a.Group,{controlId:"descricao",children:[Object(N.jsx)(m.a.Label,{children:"Descri\xe7\xe3o"}),Object(N.jsx)(m.a.Control,{name:"descricao",placeholder:"Min 5 dig.",onChange:Y,value:R,isInvalid:!!G.descricao}),Object(N.jsx)(m.a.Control.Feedback,{type:"invalid",children:G.descricao})]})]})}),Object(N.jsxs)(g.a.Footer,{children:[Object(N.jsx)(v.a,{variant:"danger",onClick:function(){return T(!q)},children:"\u274cCancelar"}),Object(N.jsx)(v.a,{variant:"success",disabled:K.length<3||R.length<5||U<0||z.length<3,onClick:function(e){T(!q),function(e){Z.apply(this,arguments)}(e)},children:"\u2714\ufe0fConfirmar"})]})]}),Object(N.jsxs)(g.a,{animation:!1,show:H,onHide:function(){return A(!1)},children:[Object(N.jsx)(g.a.Header,{children:Object(N.jsx)(g.a.Title,{children:"Confirma\xe7\xe3o da Exclus\xe3o"})}),Object(N.jsx)(g.a.Body,{children:"Confirma a exclus\xe3o da item selecionada?"}),Object(N.jsxs)(g.a.Footer,{children:[Object(N.jsx)(v.a,{variant:"danger",onClick:function(){return A(!H)},children:"\u274cCancelar"}),Object(N.jsx)(v.a,{variant:"success",onClick:function(){A(!H),function(){$.apply(this,arguments)}()},children:"\u2714\ufe0fConfirmar"})]})]}),Object(N.jsxs)(y.a,{onClose:function(){return X("")},show:Q.length>0,animation:!1,delay:2e3,autohide:!0,className:"bg-success",style:{position:"absolute",top:10,right:10},children:[Object(N.jsx)(y.a.Header,{children:"Aviso"}),Object(N.jsx)(y.a.Body,{children:Q})]}),Object(N.jsx)(E,{})]})};function T(){return Object(N.jsx)(i.a,{children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",component:q}),Object(N.jsx)(o.a,{exact:!0,path:"/items",component:q})]})})}var B=function(){return Object(N.jsx)(T,{})};s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(B,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a5724d32.chunk.js.map