(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),l=c(20),a=c.n(l),i=(c(26),c(3)),r=(c(35),c(5)),o=c(6),j=c.n(o),d=c(0),h=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pet").then((function(e){n(e.data.pets)})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))}),[]),c.sort((function(e,t){var c=e.type.toUpperCase(),s=t.type.toUpperCase();return c<s?-1:c>s?1:0})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"These pets are looking for a good home"}),Object(d.jsx)(i.a,{to:"/api/pet/new",className:"card-link",children:"add a pet to the shelter"}),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table table-reflow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.type}),Object(d.jsxs)("td",{children:[Object(d.jsx)(i.a,{to:"/api/pet/".concat(e._id),className:"card-link",children:"Details"})," | ",Object(d.jsx)(i.a,{to:"/api/pet/edit/".concat(e._id),className:"card-link",children:"Edit"})]})]})}))})]})})]})},b=c(7),p=c(9),O=function(){var e=Object(s.useState)({title:"",type:"",description:"",skills1:"",skills2:"",skills3:""}),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)({}),a=Object(r.a)(l,2),o=a[0],h=a[1],O=function(e){n(Object(p.a)(Object(p.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Know a pet needing a good home?"}),Object(d.jsx)(i.a,{to:"/",className:"card-link",children:"Home"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pet/new",c).then((function(e){e.data.error?h(e.data.error.errors):Object(i.c)("/")})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{onChange:O,type:"text",name:"title",id:"",className:"form-control"}),Object(d.jsx)("p",{className:"alert-danger",children:o.title?o.title.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Type:"}),Object(d.jsx)("input",{onChange:O,type:"text",name:"type",id:"",className:"form-control"}),Object(d.jsx)("p",{className:"alert-danger",children:o.type?o.type.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Description:"}),Object(d.jsx)("textarea",{onChange:O,name:"description",id:"",cols:"20",rows:"5",className:"form-control"}),Object(d.jsx)("p",{className:"alert-danger",children:o.description?o.description.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h4",{children:"Skills (optional):"}),Object(d.jsx)("label",{children:"Skill 1:"}),Object(d.jsx)("input",{onChange:O,type:"text",name:"skills1",id:"",className:"form-control"}),Object(d.jsx)("label",{children:"Skill 2:"}),Object(d.jsx)("input",{onChange:O,type:"text",name:"skills2",id:"",className:"form-control"}),Object(d.jsx)("label",{children:"Skill 3:"}),Object(d.jsx)("input",{onChange:O,type:"text",name:"skills3",id:"",className:"form-control"})]}),Object(d.jsx)("input",{type:"submit",value:"Add Pet"})]})]})},u=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),n=c[0],l=c[1],a=Object(s.useState)(),o=Object(r.a)(a,2),h=o[0],b=o[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){e.data.error?b(e.data.error):l(e.data.pets)})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))}),[]);return Object(d.jsx)("div",{children:h?Object(d.jsx)("h1",{children:"Nope not found"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{children:["Pet Details ",n.title]}),Object(d.jsx)(i.a,{to:"/",className:"card-link",children:"Home"}),Object(d.jsxs)("button",{onClick:function(t){j.a.delete("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){Object(i.c)("/")})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))},className:"btn btn-warning",children:["Adopt ",n.title]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Type: $",n.type]}),Object(d.jsxs)("p",{children:["Pet Description: ",n.description]}),Object(d.jsxs)("p",{children:["Skills: ",n.skills1,", ",n.skills2,", ",n.skills3]})]})]})})},x=function(e){var t=Object(s.useState)({title:"",type:"",description:"",skills1:"",skills2:"",skills3:""}),c=Object(r.a)(t,2),n=c[0],l=c[1],a=Object(s.useState)({}),o=Object(r.a)(a,2),h=o[0],O=o[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){l(e.data.pets)})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))}),[]);var u=function(e){l(Object(p.a)(Object(p.a)({},n),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Edit ",n.title]}),Object(d.jsx)(i.a,{to:"/",className:"card-link",children:"Home"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pet/edit/".concat(e._id),n).then((function(e){console.log("************************",e),e.data.error?O(e.data.error.errors):(l(e.data.pet),Object(i.c)("/"))})).catch((function(e){return console.log("Somethings wrong with Axios call",e)}))},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Title:"}),Object(d.jsx)("input",{onChange:u,type:"text",name:"title",id:"",className:"form-control",value:n.title}),Object(d.jsx)("p",{className:"alert-danger",children:h.title?h.title.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Type:"}),Object(d.jsx)("input",{onChange:u,type:"text",name:"type",id:"",className:"form-control",value:n.type}),Object(d.jsx)("p",{className:"alert-danger",children:h.type?h.type.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Description:"}),Object(d.jsx)("textarea",{onChange:u,name:"description",id:"",cols:"20",rows:"5",className:"form-control",value:n.description}),Object(d.jsx)("p",{className:"alert-danger",children:h.description?h.description.message:null})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h4",{children:"Skills (optional):"}),Object(d.jsx)("label",{children:"Skill 1:"}),Object(d.jsx)("input",{onChange:u,type:"text",name:"skills1",id:"",className:"form-control",value:n.skills1}),Object(d.jsx)("label",{children:"Skill 2:"}),Object(d.jsx)("input",{onChange:u,type:"text",name:"skills2",id:"",className:"form-control",value:n.skills2}),Object(d.jsx)("label",{children:"Skill 3:"}),Object(d.jsx)("input",{onChange:u,type:"text",name:"skills3",id:"",className:"form-control",value:n.skills3})]}),Object(d.jsx)("input",{type:"submit",value:"Edit Pet"})]})})]})};var m=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Pet Shelter"}),Object(d.jsxs)(i.b,{children:[Object(d.jsx)(h,{path:"/"}),Object(d.jsx)(O,{path:"/api/pet/new"}),Object(d.jsx)(u,{path:"/api/pet/:_id"}),Object(d.jsx)(x,{path:"/api/pet/edit/:_id"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),l(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),g()}},[[55,1,2]]]);
//# sourceMappingURL=main.71c17b53.chunk.js.map