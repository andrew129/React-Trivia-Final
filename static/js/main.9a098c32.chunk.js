(this["webpackJsonpreact-trivia"]=this["webpackJsonpreact-trivia"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"question":"Minerals can from deep inside earth\'s crust by...","answers":["Cleavage and Fracture","Friction Along Faults","Crystallization of Melted Minerals","Evaporation of Ancient Seas"],"correctAnswer":"Crystallization of Melted Minerals"},{"question":"An example of a mineral made up of a pure element is","answers":["Copper","Quartz","Coal","Glass"],"correctAnswer":"Copper"},{"question":"Halite is a mineral formed by","answers":["Crystallization of Hot Water Solutions","Cooling of Magma","Evaporation","Cooling of Lava"],"correctAnswer":"Evaporation"},{"question":"Limestone is formed from:","answers":["crushed shells or coral","pebbles of various sizes","sand","water particles"],"correctAnswer":"crushed shells or coral"},{"question":"Rocks that were originally either sedimentary, igneous or metamorphic and have been changed further by heat and pressure are called:","answers":["volcanic","sedimented","metamorphic","igneous"],"correctAnswer":"metamorphic"},{"question":"Cementation of sedimentary rocks is the result of the chemical named:","answers":["hydrochloric acid","calcium carbonate","sodium chloride","carbon dihydrate"],"correctAnswer":"calcium carbonate"},{"question":"The process of breaking down of rocks into smaller particles is called:","answers":["weathering","erosion","sedimentation","grinding"],"correctAnswer":"weathering"},{"question":"minerals are...","answers":["made up of minerals","have 3 types: metamorphic, igneous, and sedimentary","made up of chemicals","made up of molecules"],"correctAnswer":"made up of chemicals"},{"question":"metamorphic rocks are formed by","answers":["cooling and hardening","heat and pressure","breaking down of mountains","none of the above"],"correctAnswer":"Evaporation"},{"question":"Flourite is a colorful mineral, what is the most valuable color","answers":["pink","blue","yellow","red"],"correctAnswer":"pink"}]')},function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,s=n(0),r=n.n(s),o=n(7),c=n.n(o),i=(n(14),n(15),n(16),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header-title"},"Mineral Trivia Game"),r.a.createElement("ul",{className:"header-list"},r.a.createElement("li",{className:"github"},r.a.createElement("p",null,"Andrew Stiles: "),r.a.createElement("p",null,"Github")),r.a.createElement("li",{className:"linkedin"},r.a.createElement("p",null,"Tim Stiles: "),r.a.createElement("p",null,"LinkedIn"))))}),l=(n(17),function(e){return r.a.createElement("div",{style:{height:"".concat(e.height)},className:"container"},e.children)}),u=n(1),m=n(2),d=n(4),h=n(3),f=n(5),p=n(8),w=(n(18),function(e){return r.a.createElement("button",{onClick:e.onClick,class:"btn"},e.message)}),g=(n(19),{borderRadius:20,padding:15,cursor:"pointer",fontSize:16,marginBottom:10,"&:hover":{background:"blue"}}),E=function(e){var t=e.answers.map((function(t){return r.a.createElement("button",{style:g,onClick:function(){return e.onClick(t)}},t)}));return r.a.createElement("div",{className:"answer-list"},t)},b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={seconds:10},n.run=function(){clearInterval(a),a=setInterval(n.decrement,1e3)},n.decrement=function(){n.setState({seconds:n.state.seconds-1}),0===n.state.seconds&&(n.stop(),setTimeout((function(){n.setState({seconds:10})}),1e3),n.props.changeQuestion(n.state.seconds),n.run())},n.stop=function(){clearInterval(a)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.run()}},{key:"render",value:function(){return r.a.createElement("p",{style:{fontSize:35}},this.state.seconds)}}]),t}(r.a.Component),v=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={questions:p,message:"Start Quiz",start:!1,count:0,quizEnd:!1,correctAnswers:0,incorrectAnswers:0,statement:"",color:""},n.handleStartClick=function(){n.setState({start:!0})},n.correctAnswers=function(){var e=[];return n.state.questions.forEach((function(t){e.push(t.correctAnswer)})),e},n.handleClickedAnswer=function(e){var t=n.correctAnswers();t.includes(e)&&n.setState({correctAnswers:n.state.correctAnswers+1,statement:"Correct!!",color:"green"}),t.includes(e)||n.setState({incorrectAnswers:n.state.incorrectAnswers+1,statement:"Wrong!!",color:"red"}),n.state.count===n.state.questions.length-1&&n.setState({start:!1,quizEnd:!0}),setTimeout((function(){n.setState({count:n.state.count+1,statement:""})}),1e3)},n.changeQuestion=function(e){setTimeout((function(){n.setState({count:n.state.count+1})}),1e3),10===e&&n.setState({incorrectAnswers:n.state.incorrectAnswers+1,statement:"Time's Up",color:"red"}),n.state.count===n.state.questions.length&&n.setState({start:!1,quizEnd:!0})},n.handleClickReset=function(){n.setState({start:!0,count:0,quizEnd:!1,correctAnswers:0,incorrectAnswers:0,statement:""})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"game-section"},!this.state.start&&!this.state.quizEnd&&r.a.createElement("div",{class:"game-initial-container"},r.a.createElement("p",{style:{fontSize:25,marginLeft:20}},r.a.createElement("strong",null,"Test Your knowledge of Rocks and Minerals with this quiz, you will have ten seconds to answer each question.")),r.a.createElement(w,{message:this.state.message,onClick:this.handleStartClick})),this.state.start&&!this.state.quizEnd&&r.a.createElement("div",{class:"game-start-container"},r.a.createElement("p",{style:{marginBottom:10,fontSize:25,color:"".concat(this.state.color),fontWeight:"bold"}},this.state.statement),r.a.createElement("p",{style:{fontWeight:"bold",marginBottom:18,fontSize:20}},this.state.questions[this.state.count].question),r.a.createElement(b,{changeQuestion:this.changeQuestion}),r.a.createElement(E,{answers:this.state.questions[this.state.count].answers,color:this.state.color,onClick:this.handleClickedAnswer})),this.state.quizEnd&&!this.state.start&&r.a.createElement("div",{class:"game-end-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("p",{style:{fontWeight:"bold"}},"Correct Answers: ",this.state.correctAnswers),r.a.createElement("p",{style:{fontWeight:"bold"}},"Incorrect Answers: ",this.state.incorrectAnswers),r.a.createElement("button",{onClick:this.handleClickReset,class:"reset-btn"},"Try Again?")))}}]),t}(r.a.Component));var A=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(l,null,r.a.createElement(v,null)))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9a098c32.chunk.js.map