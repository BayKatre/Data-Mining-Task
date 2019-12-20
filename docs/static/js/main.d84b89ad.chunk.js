(this["webpackJsonpdata-mining-task"]=this["webpackJsonpdata-mining-task"]||[]).push([[0],{116:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),o=(a(96),a(97),a(7)),s=a(8),c=a(10),u=a(9),d=a(11),m=(a(98),a(2)),h=(a(99),a(81)),f=a.n(h),p=new function e(){Object(o.a)(this,e),this.fetchDataset=function(){return f.a.get("https://baykatre.com/csvjson.json")}},g=(a(116),a(18)),k=function(e){var t={columns:[{label:"ID",field:"id",sort:"asc",width:50},{label:"Location",field:"location",sort:"asc",width:100},{label:"Mag",field:"mag",sort:"asc",width:50},{label:"Latitude",field:"latitude",sort:"asc",width:50},{label:"Longitude",field:"longitude",sort:"asc",width:50},{label:"Depth",field:"depth",sort:"asc",width:100},{label:"Date",field:"date",sort:"asc",width:50},{label:"Time",field:"time",sort:"asc",width:50}],rows:e.data};return t.rows===[]?r.a.createElement(r.a.Fragment,null):r.a.createElement(g.e,{striped:!0,bordered:!0,small:!0,data:t})},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).isEmpty=function(e){return Object.entries(e).length?0:1},a.state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(m.f,{active:this.isEmpty(e),loader:!0},r.a.createElement(k,{data:e}))}}]),t}(n.Component),E=a(87),v=a(3),w=a(32),S=a(88),D=a.n(S),j=(a(142),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=a.state.testEuklid,t=Object.entries(e).filter((function(t){if(t[1]===Object(w.min)(Object.values(e)))return t[0]}))[0][0];a.setState({findedGroup:t})},a.createCard=function(){var e=a.state.findedGroup;return"small"===e?r.a.createElement(m.a,{type:"info",icon:"check"},"Girilen verilere g\xf6re bu b\xf6lgede ",r.a.createElement("strong",null,"k\xfc\xe7\xfck")," \xf6l\xe7ekli bir deprem beklenmektedir."):"middle"===e?r.a.createElement(m.a,{type:"secondary",icon:"bell"},"Girilen verilere g\xf6re bu b\xf6lgede ",r.a.createElement("strong",null,"orta")," \xf6l\xe7ekli bir deprem beklenmektedir."):"serious"===e?r.a.createElement(m.a,{type:"danger",icon:"alert-triangle"},"Girilen verilere g\xf6re bu b\xf6lgede ",r.a.createElement("strong",null,"ciddi")," \xf6l\xe7ekli bir deprem beklenmektedir."):void 0},a.state={findedGroup:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.e,null,r.a.createElement(m.j.Header,{title:"Test Sonu\xe7lar\u0131",subTitle:""}),r.a.createElement(m.d,{title:"Veriler",statusColor:"cyan",className:"card-test",body:this.createCard()}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e}}]),t}(n.Component)),y=(a(143),function(e){var t={columns:[{label:"Location",field:"location",sort:"asc",width:100},{label:"Mag",field:"mag",sort:"asc",width:50},{label:"Latitude",field:"latitude",sort:"asc",width:50},{label:"Longitude",field:"longitude",sort:"asc",width:50},{label:"Depth",field:"depth",sort:"asc",width:100},{label:"Date",field:"date",sort:"asc",width:50}],rows:e.data};return t.rows===[]?r.a.createElement(r.a.Fragment,null):r.a.createElement(g.e,{striped:!0,bordered:!0,small:!0,data:t})}),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).euklid={small:999999999999,middle:99999999999,serious:99999999999},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.openAddModal=function(e){a.setState({eventDataForTalkers:e}),a.handleOpenModal()},a.handleOpenModal=function(){a.setState({showModal:!0})},a.handleCloseModal=function(){a.setState({showModal:!1})},a.componentDidMount=function(){a.findZScores()},a.findZScores=function(){var e=a.state.data.filter((function(e){return e.mag>1&&e.mag<5})).map((function(e){return e.latitude})),t=a.state.data.filter((function(e){return e.mag>1&&e.mag<5})).map((function(e){return e.longitude})),n=a.state.data.filter((function(e){return e.mag>1&&e.mag<5})).map((function(e){return e.depth})),r=a.state.data.filter((function(e){return e.mag>5&&e.mag<7})).map((function(e){return e.latitude})),l=a.state.data.filter((function(e){return e.mag>5&&e.mag<7})).map((function(e){return e.longitude})),i=a.state.data.filter((function(e){return e.mag>5&&e.mag<7})).map((function(e){return e.depth})),o=a.state.data.filter((function(e){return e.mag>7&&e.mag<8})).map((function(e){return e.latitude})),s=a.state.data.filter((function(e){return e.mag>7&&e.mag<8})).map((function(e){return e.longitude})),c=a.state.data.filter((function(e){return e.mag>7&&e.mag<8})).map((function(e){return e.depth}));a.smLatitudeScore=e,a.smLongitudeScore=t,a.smDepthScore=n,a.mLatitudeScore=r,a.mLongitudeScore=l,a.mDepthScore=i,a.seLatitudeScore=o,a.seLongitudeScore=s,a.seDepthScore=c},a.calculate=function(e,t,n){a.euklid={small:999999999999,middle:99999999999,serious:99999999999};for(var r=Object(w.max)([a.smLatitudeScore.length,a.mLatitudeScore.length,a.seLatitudeScore.length]),l=0;l<r;l++){var i=Math.sqrt(Math.pow(a.smLatitudeScore[l]-e,2)+Math.pow(a.smLongitudeScore[l]-t,2)+Math.pow(a.smDepthScore[l]-n,2)),o=Math.sqrt(Math.pow(a.mLatitudeScore[l]-e,2)+Math.pow(a.mLongitudeScore[l]-t,2)+Math.pow(a.mDepthScore[l]-n,2)),s=Math.sqrt(Math.pow(a.seLatitudeScore[l]-e,2)+Math.pow(a.seLongitudeScore[l]-t,2)+Math.pow(a.seDepthScore[l]-n,2));a.euklid.small>i&&(a.euklid.small=i),a.euklid.middle>o&&(a.euklid.middle=o),a.euklid.serious>s&&(a.euklid.serious=s)}a.setState({testEuklid:a.euklid,showModal:!0})},a.state={data:[],latitude:v.number,longitude:v.number,depth:v.number,bDepthScore:[],showModal:!1,testEuklid:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"createForm",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.g,null,r.a.createElement(m.g.Group,{label:"Latitude"},r.a.createElement(m.g.Input,{icon:"feather",name:"latitude",placeholder:"Latitude",position:"append",value:this.state.latitude,onChange:this.handleChange})),r.a.createElement(m.g.Group,{label:"Longitude"},r.a.createElement(m.g.Input,{icon:"layers",name:"longitude",placeholder:"Longitude",position:"append",value:this.state.longitude,onChange:this.handleChange})),r.a.createElement(m.g.Group,{label:"Depth"},r.a.createElement(m.g.Input,{icon:"bookmark",name:"depth",placeholder:"Depth",position:"append",value:this.state.depth,onChange:this.handleChange}))),r.a.createElement(m.c,{color:"primary",style:{float:"right"},onClick:function(){return e.calculate(e.state.latitude,e.state.longitude,e.state.depth)}},"Calculate"),r.a.createElement(D.a,{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:M,ariaHideApp:!1,contentLabel:"Add Talker Modal"},r.a.createElement(j,{testEuklid:this.state.testEuklid}),r.a.createElement(m.c,{color:"cyan",className:"button-close",onClick:this.handleCloseModal},"Kapat")))}},{key:"render",value:function(){var e=this.props.testData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.h.Row,null,r.a.createElement(m.h.Col,{width:6},r.a.createElement(y,{data:e})),r.a.createElement(m.h.Col,{width:6},this.createForm())))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e}}]),t}(n.Component),M={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"40vw",height:"35vw"}},C=a(89);Array.prototype.groupBy=function(e){return this.reduce((function(t,a){var n=a[e];return t[n]=t[n]||[],t[n].push(a),t}),{})};var L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.filterData(),a.createModelSuccess()},a.filterData=function(){var e=a.state.data;if(e){var t=e.groupBy("location"),n=Object.entries(t).map((function(e){return{x:e[0],y:e[1].length}}));a.setState({locationBased:n})}},a.createModelSuccess=function(){var e=a.state,t=e.testData,n=e.data;a.euklid={small:999999999999,middle:99999999999,serious:99999999999};var r=[],l=[],i=[],o=[],s=[],c=[],u=Object.values(t).map((function(e){var t,a=999999;return Object.values(n).forEach((function(n){var r=Math.sqrt(Math.pow(n.latitude-e.latitude,2)+Math.pow(n.longitude-e.longitude,2)+Math.pow(n.depth-e.depth,2));a>r&&(a=r,t=n.mag)})),t>1&&t<5?e.mag>1&&e.mag<4?(r.push(!0),o.push(!0),c.push(!0),!0):(r.push(!1),o.push(!1),c.push(!1),!1):t>=5&&t<7?e.mag>=5&&e.mag<7?(l.push(!0),i.push(!0),c.push(!0),!0):(l.push(!1),i.push(!1),c.push(!1),!1):t>=7&&t<8?e.mag>=7&&e.mag<7?(l.push(!0),o.push(!0),s.push(!0),!0):(l.push(!1),o.push(!1),s.push(!1),!1):void 0})).filter((function(e){return!0===e}));a.setState({successStatus:u.length/t.length});var d={kesinlik:r.filter((function(e){return!0===e})).length/r.length,anma:r.filter((function(e){return!0===e})).length/(r.filter((function(e){return!0===e})).length+l.filter((function(e){return!1===e})).length),f:0},m={kesinlik:i.filter((function(e){return!0===e})).length/i.length,anma:i.filter((function(e){return!0===e})).length/(i.filter((function(e){return!0===e})).length+o.filter((function(e){return!1===e})).length),f:0},h={kesinlik:s.length?s.filter((function(e){return!0===e})).length/s.length:0,anma:s.length?s.filter((function(e){return!0===e})).length/(s.filter((function(e){return!0===e})).length+c.filter((function(e){return!1===e})).length):0,f:0};d={kesinlik:d.kesinlik,anma:d.anma,f:d.kesinlik+d.anma?2*d.kesinlik*d.anma/(d.kesinlik+d.anma):0},m={kesinlik:m.kesinlik,anma:m.anma,f:m.kesinlik+m.anma?2*m.kesinlik*m.anma/(m.kesinlik+m.anma):0},h={kesinlik:h.kesinlik,anma:h.anma,f:h.kesinlik+h.anma?2*h.kesinlik*h.anma/(h.kesinlik+h.anma):0},console.log(s)},a.findKesinlik=function(e,t,n){a.setState({sm:e,me:t,se:n})},a.createPieData=function(){var e=a.state.successStatus;return{labels:["Success Rate","Error Rate"],datasets:[{data:[e,1-e],backgroundColor:["#46BFBD","#F7464A"],hoverBackgroundColor:["#5AD3D1","#FF5A5E"]}]}},a.state={data:[],locationBased:[],testData:[],successStatus:0,sm:{kesinlik:0,anma:0,f:0},me:{kesinlik:0,anma:0,f:0},se:{kesinlik:0,anma:0,f:0}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.sm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.d,null,r.a.createElement("h3",{className:"mt-5"},"Model Success - Accuracy"),r.a.createElement(C.a,{data:this.createPieData(),options:{responsive:!0}}),r.a.createElement("h4",{className:"mt-8"},"For Small Expected Earthquakes"),r.a.createElement(m.h.Row,{className:"mt-3 mb-5",cards:!0,alignItems:"center"},r.a.createElement(m.h.Col,null,r.a.createElement(m.b,{color:"primary",className:"mr-1"},"Kesinlik"),r.a.createElement("h5",{className:"mt-1"},e.kesinlik)),r.a.createElement(m.h.Col,null,r.a.createElement(m.b,{color:"primary",className:"mr-1"},"Anma"),r.a.createElement("h5",{className:"mt-1"},e.anma)),r.a.createElement(m.h.Col,null,r.a.createElement(m.b,{color:"primary",className:"mr-1"},"F - \xd6l\xe7\xfct\xfc"),r.a.createElement("h5",{className:"mt-1"},e.f))),r.a.createElement(m.a,{type:"danger",icon:"alert-triangle"},"Other values didn't calculate because of there is no true guess for middle and serious eartquakes. It causes that Turkey doesn't have enough serious earthquake datas for our guess.")))}}]),t}(n.Component);L.getDerivedStateFromProps=function(e,t){return e};var F=L,N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).route=function(e){a.setState({location:e})},a.componentDidMount=function(){p.fetchDataset().then((function(e){var t=e.data,n=t.slice(-500,-1);t=t.slice(0,t.length-500),a.setState({data:t,testData:n})}))},a.state={location:"data",data:[],testData:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.location,n=t.data,l=t.testData;return r.a.createElement(m.e,null,r.a.createElement(m.j,null,r.a.createElement(m.j.Header,{title:"Data Mining Earthquake Task",subTitle:"..."}),r.a.createElement(m.i,null,r.a.createElement(m.i.Item,{icon:"globe",active:"data"===a,onClick:function(){return e.route("data")}},"Earthquake Data"),r.a.createElement(m.i.Item,{icon:"map",active:"test"===a,onClick:function(){return e.route("test")}},"Test"),r.a.createElement(m.i.Item,{icon:"globe",active:"analysis"===a,onClick:function(){return e.route("analysis")}},"Analysis")),r.a.createElement(m.h.Row,{cards:!0,deck:!0},r.a.createElement(m.h.Col,{md:10,offset:1,className:"column"},r.a.createElement(m.d,{title:"Earthquake Data",className:"mt-4",body:"data"===a?r.a.createElement(b,{data:n}):"test"===a?r.a.createElement(O,{data:n,testData:l}):"analysis"===a?r.a.createElement(F,{data:n,testData:l}):""})))))}}]),t}(n.Component);var q=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(235)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.d84b89ad.chunk.js.map