(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,a,t){e.exports=t(174)},127:function(e,a,t){},174:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=(t(127),t(118)),c=t(56),m=t(117),s=t(175),u=t(228),p=t(235),d=t(236),E=t(229),g=t(230),b=t(231),v=t(213),h=t(41),f=t(224),y=t(225),k=t(226),j=t(227),w=t(113),O=t.n(w),C=t(114),x=t.n(C),S=t(75),N=t.n(S),M=t(232),P=t(115),L=t.n(P),J=t(51),R=t(40),B=t(29),W=t(30),z=t(32),A=t(31),D=t(33),H=t(111),I=t.n(H),F=t(214),T=t(215),_=t(216),q=t(156),G=t(217),U=t(218),V=t(219),X=t(220),$=t(109),K=t.n($),Q=t(88),Y=t.n(Q),Z=t(234),ee=t(212),ae=t(110),te=t.n(ae),ne=t(85),re=t(233),le=function(e){function a(){var e,t;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(z.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.getModalStyle=function(){return{position:"absolute",top:"".concat(45,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -",50,"%)")}},t}return Object(D.a)(a,e),Object(W.a)(a,[{key:"render",value:function(){var e=this.state.open,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ee.a,{onClick:this.handleOpen,size:"small",fullWidth:!0},"Contact me"),r.a.createElement(Z.a,{className:a.modal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e,onClose:this.handleClose},r.a.createElement("div",{style:this.getModalStyle(),className:a.paper},r.a.createElement(h.a,{variant:"h6"},"Contact me"),r.a.createElement(h.a,{variant:"subtitle2"},"I will respond asap"),r.a.createElement(re.a,{id:"filled-email-input",label:"Email",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",fullWidth:!0}),r.a.createElement(re.a,{id:"filled-email-input",className:a.textField2,label:"First name",type:"text",name:"first_name",margin:"normal",variant:"outlined"}),r.a.createElement(re.a,{id:"filled-email-input",className:a.textField,label:"Last name",type:"text",name:"last_name",margin:"normal",variant:"outlined"}),r.a.createElement(re.a,{id:"filled-email-input",label:"Subject",type:"text",name:"subject",variant:"outlined",fullWidth:!0,margin:"normal"}),r.a.createElement(re.a,{id:"filled-email-input",label:"Message",type:"text",name:"message",margin:"normal",variant:"outlined",rows:6,fullWidth:!0,multiline:!0}),r.a.createElement(ee.a,{variant:"contained",color:"secondary",size:"small",className:a.button},r.a.createElement(te.a,null)))))}}]),a}(n.Component),ie=Object(ne.a)(function(e){return{modal:{top:"".concat(50,"%"),alignItems:"center",justifyContent:"center"},paper:{width:"60%",outline:"none",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4)}}})(le),oe={card:{maxWidth:345},media:{height:0,paddingTop:"80.25%"},avatar:{backgroundColor:Y.a[500]},paper:{padding:20},textField:{marginLeft:"2%",width:"49%"},textField2:{width:"49%"},subSkill:{marginLeft:20,marginTop:20}},ce=function(e){function a(){var e,t;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(z.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).state={user:{}},t}return Object(D.a)(a,e),Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this;K.a.get("https://api.github.com/users/lolwuz").then(function(a){e.setState({user:a.data})})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.user,t=a.name,n=a.login,l=a.bio,i=a.avatar_url;return r.a.createElement("div",null,r.a.createElement(F.a,{container:!0,justify:"center",spacing:3},r.a.createElement(F.a,{item:!0,alignItems:"center",md:4},r.a.createElement(T.a,{className:e.card},r.a.createElement(_.a,{avatar:r.a.createElement(q.a,null,"L"),title:t,subheader:n}),r.a.createElement(G.a,{className:e.media,image:i,title:t}),r.a.createElement(U.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},l)),r.a.createElement(V.a,null,r.a.createElement(ie,null)))),r.a.createElement(F.a,{item:!0,md:4},r.a.createElement(T.a,null,r.a.createElement(U.a,null,r.a.createElement(h.a,{variant:"h6"},"Javascript/Typescript"),r.a.createElement(X.a,{variant:"determinate",value:80}),r.a.createElement("div",{className:e.subSkill},r.a.createElement(h.a,{variant:"subtitle2"},"React"),r.a.createElement(X.a,{variant:"determinate",value:80}),r.a.createElement(h.a,{variant:"subtitle2"},"Angular"),r.a.createElement(X.a,{variant:"determinate",value:50}),r.a.createElement(h.a,{variant:"subtitle2"},"Jquery"),r.a.createElement(X.a,{variant:"determinate",value:40}),r.a.createElement(h.a,{variant:"subtitle2"},"Vue.js"),r.a.createElement(X.a,{variant:"determinate",value:20})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6"},"HTML/CSS"),r.a.createElement(X.a,{variant:"determinate",value:80}),r.a.createElement("div",{className:e.subSkill},r.a.createElement(h.a,{variant:"subtitle2"},"HTML"),r.a.createElement(X.a,{variant:"determinate",value:80}),r.a.createElement(h.a,{variant:"subtitle2"},"CSS"),r.a.createElement(X.a,{variant:"determinate",value:60}),r.a.createElement(h.a,{variant:"subtitle2"},"SASS"),r.a.createElement(X.a,{variant:"determinate",value:40}))))),r.a.createElement(F.a,{item:!0,md:4},r.a.createElement(T.a,null,r.a.createElement(U.a,null,r.a.createElement(h.a,{variant:"h6"},"Python"),r.a.createElement(X.a,{variant:"determinate",value:70}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6"},"C++"),r.a.createElement(X.a,{variant:"determinate",value:60}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6"},"C#"),r.a.createElement(X.a,{variant:"determinate",value:60}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body1"},"Basic C, Java and PHP experience."))))))}}]),a}(n.Component),me=I()(oe)(ce),se=[{name:"Robotica",description:"Robotica project IDP.",link:"https://github.com/lolwuz/IDP-2018"}],ue=function(e){function a(){return Object(B.a)(this,a),Object(z.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(D.a)(a,e),Object(W.a)(a,[{key:"render",value:function(){var e=se.map(function(e){return r.a.createElement(F.a,{item:!0,md:4})});return r.a.createElement(F.a,{container:!0,spacing:4},e)}}]),a}(n.Component),pe=t(5),de=t(223),Ee=t(237),ge=t(221),be=t(74),ve=t(222),he=[{name:"Javascript",color:ge.a[500]},{name:"Socket.io",color:ge.a[700]},{name:"Python",color:be.a[500]},{name:"Flask",color:be.a[700]},{name:"Java",color:ve.a[500]}],fe=function(e){function a(){var e,t;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(z.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).getLanguageColor=function(e){var a=ge.a[700];for(var t in he){var n=he[t];n.name===e&&(a=n.color)}return{backgroundColor:a}},t.getLanguageLink=function(){},t}return Object(D.a)(a,e),Object(W.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.name,n=a.description,l=a.img,i=a.link,o=a.languages,c=a.classes,m=o.map(function(a,t){return r.a.createElement(Ee.a,{key:t,label:a,style:e.getLanguageColor(a),size:"small",className:c.chip})});return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i,className:c.a},r.a.createElement(T.a,{className:c.card},r.a.createElement(de.a,null,r.a.createElement(G.a,{component:"img",alt:l,height:"140",image:"/static/"+l,title:"Contemplative Reptile"}),r.a.createElement(U.a,{className:c.cardContent},r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},n),r.a.createElement("div",{className:c.languageList},m)))))}}]),a}(n.Component),ye=Object(pe.a)({card:{maxWidth:500},a:{textDecoration:"none"},chip:{marginRight:5,marginTop:5},cardContent:{height:200,maxHeight:200},languageList:{position:"absolute",bottom:20}})(fe),ke=[{name:"MySchoolsMod",description:"Moderation tool for MySchoolsNetwork",link:"https://mod.myschoolsnetwork.com",languages:["Javascript","React","Redux"],img:"myschoolsnetwork.png"},{name:"Buggle.ga",description:"A word game inspired by Boggle. Made in Jquery, Angular and React using Socket.io for multiplayer gameplay.",link:"https://buggle.ga",languages:["Javascript","Redux","Angular","Jquery","Socket.io","Python","Flask"],img:"buggle.jpg"},{name:"Portfolio",description:"Personal portfolio website created by Marten Hoekstra",link:"https://lolwuz.ga",languages:["Javascript","React","Material-ui"],img:"portfolio.png"},{name:"IMDB Movie Chatbot",description:"Personal portfolio website created by Marten Hoekstra",link:"https://lolwuz.ga",languages:["Java"],img:"portfolio.png"},{name:"Teamspeak 3",description:"Multi-purpose voice server for projects, work and discussion",link:"ts3server://arankieskamp.com",languages:[],img:"ts.jpg"},{name:"Discord",description:"058 Discord server",link:"https://discord.gg/PRGrXjh",languages:[],img:"discord.jpg"}],je=function(e){function a(){return Object(B.a)(this,a),Object(z.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(D.a)(a,e),Object(W.a)(a,[{key:"render",value:function(){var e=ke.map(function(e){return r.a.createElement(F.a,{item:!0,md:4},r.a.createElement(ye,e))});return r.a.createElement("div",null,r.a.createElement(F.a,{container:!0,spacing:4},e))}}]),a}(n.Component),we=Object(m.a)({palette:{type:"dark"}}),Oe=Object(s.a)(function(e){var a;return{root:{display:"flex"},drawer:Object(c.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:(a={marginLeft:240},Object(c.a)(a,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),Object(c.a)(a,"backgroundColor",ge.a[500]),a),menuButton:Object(c.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}});var Ce=function(e){var a=e.container,t=Oe(),n=r.a.useState(!1),l=Object(o.a)(n,2),i=l[0],c=l[1];function m(){c(!i)}var s=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar},r.a.createElement(h.a,{variant:"h6",noWrap:!0},"lolwuz.ga"),"@2019 - Marten Hoekstra"),r.a.createElement(f.a,null),r.a.createElement(v.a,null,r.a.createElement(y.a,{component:J.b,to:"/",button:!0},r.a.createElement(k.a,null,r.a.createElement(O.a,null)),r.a.createElement(j.a,{primary:"About"})),r.a.createElement(y.a,{component:J.b,to:"/projects/",button:!0},r.a.createElement(k.a,null,r.a.createElement(x.a,null)),r.a.createElement(j.a,{primary:"Projects"})),r.a.createElement(y.a,{component:J.b,to:"/servers/",button:!0},r.a.createElement(k.a,null,r.a.createElement(N.a,null)),r.a.createElement(j.a,{primary:"Live Projects"}))),r.a.createElement(f.a,null),r.a.createElement(y.a,{href:"https://github.com/lolwuz",button:!0},r.a.createElement(k.a,null,r.a.createElement(N.a,null)),r.a.createElement(j.a,{primary:"Github"})),r.a.createElement(y.a,{component:J.b,to:"/servers/",button:!0},r.a.createElement(k.a,null,r.a.createElement(N.a,null)),r.a.createElement(j.a,{primary:"LinkedIn"})),r.a.createElement(v.a,null));return r.a.createElement(u.a,{theme:we},r.a.createElement(J.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(E.a,null),r.a.createElement(g.a,{position:"fixed",className:t.appBar},r.a.createElement(b.a,{className:t.toolbar},r.a.createElement(M.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:m,className:t.menuButton},r.a.createElement(L.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0},"Portfolio website by Marten Hoekstra"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"Mailbox folders"},r.a.createElement(p.a,{smUp:!0,implementation:"css"},r.a.createElement(d.a,{container:a,variant:"temporary",anchor:"rtl"===we.direction?"right":"left",open:i,onClose:m,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},s)),r.a.createElement(p.a,{xsDown:!0,implementation:"css"},r.a.createElement(d.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},s))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/",exact:!0,component:me}),r.a.createElement(R.a,{path:"/projects/",component:ue}),r.a.createElement(R.a,{path:"/servers/",component:je}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,1,2]]]);
//# sourceMappingURL=main.b14ec7bc.chunk.js.map