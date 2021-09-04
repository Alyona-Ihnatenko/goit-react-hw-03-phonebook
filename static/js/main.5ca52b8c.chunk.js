(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__oidzZ",input:"ContactForm_input__mQE_N"}},,function(t,e,n){t.exports={list:"ContactList_list__18JgX",item:"ContactList_item__2X_8_"}},function(t,e,n){t.exports={label:"Filter_label__1-KAF",input:"Filter_input__Gf5g6"}},,,function(t,e,n){t.exports={button:"Button_button__1cAh2"}},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),i=(n(20),n(14)),s=n(2),u=n(3),l=n(5),m=n(4),b=n(9),d=n.n(b),h=n(13),j=n.n(h),f=n(0);function p(t){var e=t.type,n=t.handleClick,a=t.buttonName;return Object(f.jsx)("button",{type:e,className:j.a.button,onClick:n,children:a})}var O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contactList,n=t.handleRemove;return Object(f.jsx)("ul",{className:d.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:d.a.item,children:[Object(f.jsxs)("p",{children:[a,": ",c," "]}),Object(f.jsx)(p,{type:"button",handleClick:function(){return n(e)},buttonName:"Delete"})]},e)}))})}}]),n}(c.a.Component),v=n(24),C=n(10),x=n.n(C);function _(t){var e=t.onChange;return Object(f.jsxs)("label",{className:x.a.label,htmlFor:Object(v.a)(),children:["Find contacts by name",Object(f.jsx)("input",{className:x.a.input,type:"text",onChange:e,name:"filter",required:!0})]})}var g=n(11),y=n(6),N=n(7),S=n.n(N),k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t.onSubmit=function(e){e.preventDefault(),t.props.handleSubmit(Object(g.a)(Object(g.a)({},t.state),{},{id:Object(v.a)()})),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.onSubmit,e=this.handleChange;return Object(f.jsxs)("form",{className:S.a.form,onSubmit:t,children:[Object(f.jsxs)("label",{htmlFor:Object(v.a)(),children:["Name",Object(f.jsx)("input",{className:S.a.input,type:"text",onChange:e,name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{htmlFor:Object(v.a)(),children:["Number",Object(f.jsx)("input",{className:S.a.input,type:"tel",onChange:e,name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)(p,{type:"submit",buttonName:"Add contact"})]})}}]),n}(c.a.Component),A=(n(22),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?alert("".concat(e.name,"  already exists")):t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}}))},t.handleRemove=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.findContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.sameName=function(e){t.state.contacts.map((function(t){return t.name===e.name&&alert("".concat(e.name," is already in contacts")),t}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.findContacts();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"mainTitle",children:"Phonebook"}),Object(f.jsx)(k,{handleSubmit:this.addContact}),Object(f.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),Object(f.jsx)(_,{value:t,onChange:this.changeFilter}),Object(f.jsx)(O,{contactList:e,handleRemove:this.handleRemove})]})}}]),n}(c.a.Component));r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5ca52b8c.chunk.js.map