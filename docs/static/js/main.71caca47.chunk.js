(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n(57)},31:function(t,e,n){},33:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=(n(31),n(14)),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=(n(33),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{padding:"10px",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n),a.a.createElement("button",{style:h,onClick:this.props.delTodo.bind(this,e)},"x"))}}]),e}(o.Component)),h={background:"red",color:"white",border:"none",float:"right",borderRadius:"50%",padding:"5px 9px"},f=m,b=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(f,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component),y=n(22),v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){n.setState(Object(y.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{style:{flex:"10",padding:"5px"},type:"text",name:"title",placeholder:"Add todo....",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component),g=n(12),j=n.n(g),E=n(58);var O={background:"black",color:"white",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"},w=function(){return a.a.createElement("header",{style:O},a.a.createElement("h1",null,"TodoList"),a.a.createElement(E.a,{style:k,to:"/"}," Home ")," |",a.a.createElement(E.a,{style:k,to:"/About"}," About "))};var x=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0."))},C=n(59),T=n(60),S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){j.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(C.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(w,null),a.a.createElement(T.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{addTodo:t.addTodo}),a.a.createElement(b,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(T.a,{path:"/about",component:x}))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.71caca47.chunk.js.map