(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,o){t.exports=o(43)},23:function(t,e,o){},43:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(15),l=o.n(r),c=o(16),i=o(2),d=o(3),s=o(5),u=o(4),p=o(6);o(23);var m={textAlign:"center",backgroundColor:"#2980b9",color:"#fff",padding:"5px 0px"},h=function(){return a.a.createElement("header",{style:m},a.a.createElement("h1",null,"To Do List"))},f=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.handleInput=function(t){o.setState({title:t.target.value}),console.log(o.state.title)},o.handleSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{style:b,onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do",style:y,onChange:this.handleInput,value:this.state.title}),a.a.createElement("input",{type:"submit",style:v})))}}]),e}(a.a.Component),b={display:"flex"},y={padding:"5px 5px",flexGrow:"8"},v={padding:"5px 5px",flexGrow:"1",backgroundColor:"#007bff",border:"none",color:"white",cursor:"pointer"},g=f,k=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"5px",borderBottom:"1px solid #ccc",textDecoration:o.props.todo.completed?"line-through":"none"}},o.btnStyle={background:"#dc3545",color:"#fff",border:"none",borderRadius:"25px",float:"right",cursor:"pointer",padding:"4px 7px"},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"markComplete",value:function(t){console.log(this.props)}},{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),e,". ",o,a.a.createElement("button",{style:this.btnStyle,onClick:this.props.delTodo.bind(this,e)},"X")))}}]),e}(a.a.Component),j=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"markComplete",value:function(){console.log("hello")}},{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(k,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(a.a.Component),O=o(8),x=o.n(O),w=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){o.setState({todos:o.state.todos.map(function(e){return t===e.id&&(e.completed=!e.completed),e})})},o.delTodo=function(t){x.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){o.setState({todos:o.state.todos.filter(function(e){return t!==e.id})})})},o.addTodo=function(t){var e={id:o.state.num,title:t,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[e]),num:o.state.num+1})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;x.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){t.setState({todos:e.data,num:11})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement(g,{addTodo:this.addTodo}),a.a.createElement(j,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.fd6b240e.chunk.js.map