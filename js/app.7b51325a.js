webpackJsonp([1],{0:function(e,t,n){e.exports=n("NHnr")},"3a+o":function(e,t){},"49M4":function(e,t){},"67z8":function(e,t){},E027:function(e,t){},G3BA:function(e,t){},LShs:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],s=n("XyMi");function r(e){n("G3BA")}var c=null,l=!1,u=r,d=null,m=null,p=Object(s["a"])(c,o,i,l,u,d,m),v=p.exports,h=n("/ocq"),f={name:"spinner",props:{message:{type:String,default:"Loading..."}},data:function(){return{}},methods:{}},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-container"},[n("div",{staticClass:"spinner-content"},[n("svg",{staticClass:"spinner",attrs:{width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})]),n("br"),n("div",{staticClass:"spinner-message"},[e._v(e._s(e.message))])])])},w=[];function b(e){n("67z8")}var _=!1,C=b,y="data-v-087ba85a",L=null,x=Object(s["a"])(f,g,w,_,C,y,L),k=x.exports,E=n("7QTg"),$=n.n(E),j=n("DNVT"),R={name:"login",components:{Spinner:k,swiper:E["swiper"],swiperSlide:E["swiperSlide"]},data:function(){return{credentials:{username:"",password:""},loggingIn:!1,error:""}},methods:{submit:function(){this.loggingIn=!0;var e={username:this.credentials.username,password:this.credentials.password};console.log(e);var t=new j["a"](".swiper-container",{on:{init:function(){console.log("swiper initialized")}}});t.slideTo(1)}}},D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ev-login col-sm-4 offset-sm-4"},[e.error?n("div",{staticClass:"alert alert-danger"},[n("p",[e._v(e._s(e.error))])]):e._e(),n("div",{staticClass:"form-group "},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"form-control js-login__username w33",attrs:{type:"text","data-id":"login.username",placeholder:"Enter your username"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control js-login__password w33 ",attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),n("button",{staticClass:"btn btn-primary solid black js-login__submit",attrs:{"data-id":"login.submit"},on:{click:function(t){e.submit()}}},[e._v("\n    Login   "),n("i",{staticClass:"fa fa-arrow-circle-o-right"})]),n("br"),n("br"),n("br"),n("a",{attrs:{href:"#"}},[e._v("Forgot your password?")]),n("br"),e._v("\n  Don’t have an account?  "),n("a",{attrs:{href:"#"}},[e._v("Sign up here.")])])},N=[];function S(e){n("Vk8s")}var O=!1,A=S,T="data-v-9e49eb7e",I=null,G=Object(s["a"])(R,D,N,O,A,T,I),F=G.exports,B={name:"database",data:function(){return{msg:"Imagens on Firebase"}}},M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"database"},[n("h1",[e._v(e._s(e.msg))]),n("div",{staticClass:"container",attrs:{id:"imgf"}})])},U=[];function q(e){n("3a+o")}var z=!1,H=q,P="data-v-7dd425f2",V=null,W=Object(s["a"])(B,M,U,z,H,P,V),Q=W.exports,J=(n("A0n/"),n("fx22"),n("EuXz"),n("7t+N")),X={name:"foto",data:function(){return{msg:"Escolher Arquivo",image:"",imageB:"",urr:""}},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;if(t.length){this.createImage(t[0]);var n=e.target.files[0];console.log("<filename >",n)}},createImage:function(e){new Image;var t=new FileReader,n=this;t.onload=function(t){n.image=t.target.result,J("#lastIMG").append('<img  src="'+n.image+'" width="100px" height="auto"/>');var a=(new Date).toISOString(),o={id:a,image:n.image,fileName:e.name,user:5585558};console.log("variavel>",o),writeData("posts",o),"indexedDB"in window&&readAllData("posts").then(function(e){console.log("From cache",e)}),fetch("http://192.168.0.8/lambanca",{method:"POST",headers:{"Access-Control-Allow-Origin":"*/*","Content-Type":"application/json",Accept:"application/json"},dataType:"json",mode:"cors",body:JSON.stringify([o])}).then(function(e){return console.log(e),e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log("******")}),J("#imgLoad").remove()},t.readAsDataURL(e),console.log("readerfile > ",t)},removeImage:function(e){J("#lastIMG").remove()}}};readAllData("posts").then(function(e){var t=!0,n=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;J("#lastIMG").append('<img  src="'+s.image+'" width="100px" height="auto"/>'),J("#imgf").append('<img  src="'+s.image+'" width="100px" height="auto"/>')}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"foto"},[n("h1",[e._v(e._s(e.msg))]),e.image?n("div",[n("img",{attrs:{id:"imgLoad",src:e.image,width:"100px",height:"100px"}}),n("input",{attrs:{id:"inputF",type:"file",accept:"video/*;capture=camcorder"},on:{change:e.onFileChange}}),n("button",{on:{click:e.removeImage}},[e._v("Remove image")])]):n("div",[n("input",{attrs:{id:"inputF",type:"file",accept:"video/*;capture=camcorder"},on:{change:e.onFileChange}})]),n("div",{attrs:{id:"lastIMG"}})])},K=[];function Y(e){n("49M4")}var ee=!1,te=Y,ne="data-v-3a6ab014",ae=null,oe=Object(s["a"])(X,Z,K,ee,te,ne,ae),ie=oe.exports,se=(n("Sazm"),n("7t+N"));window.getLocationV=function(){function e(e){se("#demo").text("Latitude: "+e.coords.latitude+" Longitude: "+e.coords.longitude),window.latData=e.coords.latitude,window.longData=e.coords.longitude}navigator.geolocation?navigator.geolocation.watchPosition(e):se("#demo").append("Geolocation is not supported by this browser.")},getLocationV();var re={name:"geolocate",data:function(){return{msg:"Geo Locate",numLT:"",numLG:""}},methods:{sendop:function(e){},avancar:function(){var e=new j["a"](".swiper-container",{});e.slideTo(3)},getLocation:function(){console.log("lat"),document.getElementById("latNum").value=latData,document.getElementById("logNum").value=longData}}},ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"geolocate"},[n("h1",[e._v(e._s(e.msg))]),n("p",{attrs:{id:"demo"}},[e._v("Lat")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numLT,expression:"numLT",modifiers:{number:!0}}],attrs:{id:"latNum",type:"number"},domProps:{value:e.numLT},on:{change:e.sendop,input:function(t){t.target.composing||(e.numLT=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numLG,expression:"numLG",modifiers:{number:!0}}],attrs:{id:"logNum",type:"number"},domProps:{value:e.numLG},on:{change:e.sendop,input:function(t){t.target.composing||(e.numLG=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("br"),n("button",{staticClass:"btavancar",on:{click:e.getLocation}},[e._v("Get Location")]),n("br"),n("button",{staticClass:"btavancar",on:{click:e.avancar}},[e._v("AVANÇAR")])])},le=[];function ue(e){n("atyV")}var de=!1,me=ue,pe="data-v-3fe32816",ve=null,he=Object(s["a"])(re,ce,le,de,me,pe,ve),fe=he.exports,ge=n("7t+N"),we={name:"tagnumber",data:function(){return{msg:"TAG #",num:""}},methods:{sendop:function(e){return window.tagNum1=this.num,console.log(window.tagNum1),window.tagNum1},showreader:function(){ge(".qrcode-reader").css("display","block"),ge(".btreader").css("display","none"),console.log("content")},avancar:function(){var e=new j["a"](".swiper-container",{});e.slideTo(2)}}},be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tagnumber"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("\n  Informe o número da tag ou utilize o Leitor\n  ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.num,expression:"num",modifiers:{number:!0}}],attrs:{id:"tagNum",type:"number"},domProps:{value:e.num},on:{change:e.sendop,input:function(t){t.target.composing||(e.num=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("br"),n("button",{staticClass:"btreader",on:{click:e.showreader}},[e._v("QR CAM")]),n("br"),n("button",{staticClass:"btavancar",on:{click:e.avancar}},[e._v("AVANÇAR")])])},_e=[];function Ce(e){n("wEnv")}var ye=!1,Le=Ce,xe="data-v-0ebf62f2",ke=null,Ee=Object(s["a"])(we,be,_e,ye,Le,xe,ke),$e=Ee.exports,je=n("rzQm"),Re=n.n(je),De=(n("y9m4"),n("SldL"),n("7hDC")),Ne=n.n(De),Se=n("Biqn"),Oe=n.n(Se),Ae=n("rnZi"),Te=n.n(Ae),Ie=n("DEG1"),Ge=n.n(Ie),Fe=(n("7t+N"),[]),Be=40,Me=400,Ue={name:"qrcode-reader",props:{paused:{type:Boolean,default:!1},videoConstraints:{type:[Object,Boolean],default:function(){return{}}}},data:function(){return{stream:null,streamWidth:null,streamHeight:null,streamLoaded:!0,decodeResult:null,locateResult:Fe,canvasContext:null}},computed:{shouldScan:function(){return!this.paused&&this.streamLoaded},shouldDecode:function(){return this.shouldScan&&void 0!==this.$listeners.decode},shouldLocate:function(){return this.shouldScan&&void 0!==this.$listeners.locate},constraints:function(){var e;return e=Ge()(this.videoConstraints)?this.videoConstraints:Oe()({facingMode:{ideal:"environment"},width:{min:360,ideal:360,max:720},height:{min:240,ideal:240,max:480}},this.videoConstraints),{audio:!1,video:e}},streamBounds:function(){return[0,0,this.streamWidth,this.streamHeight]}},watch:{decodeResult:function(e){null!==e&&this.$emit("decode",e)},locateResult:function(e){this.$emit("locate",e)},shouldScan:function(e){e?this.$refs.video.play():this.$refs.video.pause()},shouldDecode:function(e){e&&this.keepDecoding()},shouldLocate:function(e){e&&this.keepLocating()},paused:function(e){var t=this;if(!1===e){var n=function(){t.decodeResult=null},a=this.$refs.video;a.addEventListener("timeupdate",n,{once:!0})}},constraints:{deep:!0,handler:function(){this.$emit("init",this.startCamera())}}},mounted:function(){this.$emit("init",this.startCamera())},beforeDestroy:function(){this.stopCamera()},methods:{startCamera:function(){var e=Ne()(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("WebRTC API not supported in this browser");case 2:return this.stopCamera(),e.next=5,navigator.mediaDevices.getUserMedia(this.constraints);case 5:return this.stream=e.sent,t=this.$refs.video,n=new Promise(function(e,n){t.addEventListener("loadeddata",e,{once:!0}),t.addEventListener("error",n,{once:!0})}),void 0!==t.srcObject?t.srcObject=this.stream:void 0!==t.mozSrcObject?t.mozSrcObject=this.stream:window.URL.createObjectURL?t.src=window.URL.createObjectURL(this.stream):window.webkitURL?t.src=window.webkitURL.createObjectURL(this.stream):t.src=this.stream,t.playsInline=!0,t.play(),e.next=13,n;case 13:this.streamLoaded=!0,this.streamWidth=t.videoWidth,this.streamHeight=t.videoHeight,a=document.createElement("canvas"),a.width=this.streamWidth,a.height=this.streamHeight,this.canvasContext=a.getContext("2d");case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),stopCamera:function(){this.streamLoaded=!1,null!==this.stream&&(this.stream.getTracks().forEach(function(e){return e.stop()}),this.stream=null,this.streamWidth=null,this.streamHeight=null)},captureFrame:function(){var e,t;return(e=this.canvasContext).drawImage.apply(e,[this.$refs.video].concat(Re()(this.streamBounds))),(t=this.canvasContext).getImageData.apply(t,Re()(this.streamBounds))},keepDecoding:function(){var e=this;if(this.shouldDecode){var t=this.captureFrame();window.requestAnimationFrame(function(){var n=t.data,a=t.width,o=t.height,i=Te()(n,a,o);null!==i&&(e.decodeResult=i.data),window.setTimeout(e.keepDecoding,Me)})}},keepLocating:function(){var e=this;if(this.shouldLocate){var t=this.captureFrame();window.requestAnimationFrame(function(){var n=t.data,a=t.width,o=t.height,i=Te()(n,a,o);if(null===i)e.locateResult=Fe;else{var s=e.$refs.video,r=s.offsetWidth/e.streamWidth,c=s.offsetHeight/e.streamHeight,l=[i.location.topLeftCorner,i.location.topRightCorner,i.location.bottomRightCorner,i.location.bottomLeftCorner];e.locateResult=l.map(function(e){var t=e.x,n=e.y;return{x:t*r,y:n*c}})}window.setTimeout(e.keepLocating,Be)})}}}},qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qrcode-reader"},[n("video",{ref:"video",staticClass:"qrcode-reader__camera"}),n("div",{staticClass:"qrcode-reader__overlay"},[e._t("default")],2),n("div",[e._v(e._s(e.decodeResult)+"\n  ")])])},ze=[];function He(e){n("E027")}var Pe=!1,Ve=He,We=null,Qe=null,Je=Object(s["a"])(Ue,qe,ze,Pe,Ve,We,Qe),Xe=Je.exports,Ze=(n("v2ns"),n("7t+N")),Ke=(n("Sazm"),{name:"carrosell",components:{swiper:E["swiper"],swiperSlide:E["swiperSlide"],Tagnumber:$e,QrcodeReader:Xe,Geolocate:fe,Database:Q,Login:F,Foto:ie},data:function(){return{menuCross:!1,swiperOption:{direction:"horizontal",initialSlide:0,resistanceRatio:1,slidesPerView:"auto",slideToClickedSlide:!1,on:{slideChange:function(){this.activeIndex}},spaceBetween:1,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{swiper:function(){return this.$refs.swiper.swiper}},methods:{toggleMenu:function(){!0===this.menuCross?(this.menuCross=!1,Ze(".menu").css("display","none")):(this.menuCross=!0,Ze(".menu").css("display","block"))},onDecode:function(e){this.paused=!0,console.log(e);var t=e,n=t.substr(0,20),a="http://sid.anubz.io/",o=t.substr(20,7);console.log(n,"<>",a),n===a?(document.getElementById("tagNum").value=o,console.log(o),Ze(".qrcode-reader").remove()):console.log("woooops")}}}),Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carrosell"},[n("div",{staticClass:"menu-button",class:{cross:e.menuCross},on:{click:e.toggleMenu}},[n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"})]),n("swiper",{ref:"swiper",staticStyle:{height:"auto"},attrs:{options:e.swiperOption}},[n("div",{staticClass:"menu",staticStyle:{display:"none"}},[e._v("Menu slide")]),n("swiper-slide",[n("login")],1),n("swiper-slide",[n("tagnumber"),n("qrcode-reader",{staticStyle:{display:"none"},on:{decode:e.onDecode}})],1),n("swiper-slide",[n("geolocate")],1),n("swiper-slide",[n("foto")],1),n("swiper-slide",[n("database")],1),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},et=[];function tt(e){n("LShs")}var nt=!1,at=tt,ot=null,it=null,st=Object(s["a"])(Ke,Ye,et,nt,at,ot,it),rt=st.exports,ct={name:"home",components:{Carrosell:rt}},lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("carrosell")],1)},ut=[],dt=!1,mt=null,pt=null,vt=null,ht=Object(s["a"])(ct,lt,ut,dt,mt,pt,vt),ft=ht.exports,gt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},wt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],bt=null,_t=!1,Ct=null,yt=null,Lt=null,xt=Object(s["a"])(bt,gt,wt,_t,Ct,yt,Lt),kt=xt.exports;a["a"].use(h["a"]);var Et=new h["a"]({routes:[{path:"/",name:"home",component:ft},{path:"/about",name:"about",component:kt}]}),$t=n("ydGU");Object($t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use($.a),a["a"].config.productionTip=!1,new a["a"]({router:Et,render:function(e){return e(v)}}).$mount("#app")},Vk8s:function(e,t){},atyV:function(e,t){},v2ns:function(e,t){},wEnv:function(e,t){}},[0]);
//# sourceMappingURL=app.7b51325a.js.map