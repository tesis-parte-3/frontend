/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{564:function(xa,ta,n){n.r(ta);var qa=n(0),na=n(1);n.n(na);var oa=n(3),ia=n(186);xa=n(54);var ka=n(116),ha=n(311),z=n(91),aa=n(310);n=n(476);var r=window,h=function(){function b(f,w,ea){var y=-1===f.indexOf("?")?"?":"&";switch(w){case z.a.NEVER_CACHE:this.url=f+y+"_="+Object(na.uniqueId)();break;default:this.url=f}this.zg=ea;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=aa.a.NOT_STARTED}b.prototype.start=function(f,w){var ea=this,y=this,ba=this.request,x;y.fC=0;f&&Object.keys(f).forEach(function(fa){ea.request.setRequestHeader(fa,f[fa])});w&&(this.request.withCredentials=w);this.qK=setInterval(function(){var fa=0===window.document.URL.indexOf("file:///");fa=200===ba.status||
fa&&0===ba.status;if(ba.readyState!==aa.b.DONE||fa){try{ba.responseText}catch(ca){return}y.fC<ba.responseText.length&&(x=y.$ya())&&y.trigger(b.Events.DATA,[x]);0===ba.readyState&&(clearInterval(y.qK),y.trigger(b.Events.DONE))}else clearInterval(y.qK),y.trigger(b.Events.DONE,["Error received return status "+ba.status])},1E3);this.request.send(null);this.status=aa.a.STARTED};b.prototype.$ya=function(){var f=this.request,w=f.responseText;if(0!==w.length)if(this.fC===w.length)clearInterval(this.qK),this.trigger(b.Events.DONE);
else return w=Math.min(this.fC+3E6,w.length),f=r.I3(f,this.fC,!0,w),this.fC=w,f};b.prototype.abort=function(){clearInterval(this.qK);var f=this;this.request.onreadystatechange=function(){Object(oa.j)("StreamingRequest aborted");f.status=aa.a.ABORTED;return f.trigger(b.Events.ABORTED)};this.request.abort()};b.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=aa.a.SUCCESS;return f.trigger(b.Events.DONE)};this.request.abort()};b.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return b}();Object(xa.a)(h);var e;(function(b){b[b.LOCAL_HEADER=0]="LOCAL_HEADER";b[b.FILE=1]="FILE";b[b.CENTRAL_DIR=2]="CENTRAL_DIR"})(e||(e={}));var a=function(b){function f(){var w=b.call(this)||this;w.buffer="";w.state=e.LOCAL_HEADER;w.FV=4;w.Yo=null;w.qx=ia.c;w.Kq={};return w}Object(qa.c)(f,b);f.prototype.Sya=function(w){var ea;for(w=this.buffer+w;w.length>=this.qx;)switch(this.state){case e.LOCAL_HEADER:this.Yo=ea=this.dza(w.slice(0,this.qx));if(ea.ey!==ia.g)throw Error("Wrong signature in local header: "+
ea.ey);w=w.slice(this.qx);this.state=e.FILE;this.qx=ea.tO+ea.Zt+ea.IA+this.FV;this.trigger(f.Events.HEADER,[ea]);break;case e.FILE:this.Yo.name=w.slice(0,this.Yo.Zt);this.Kq[this.Yo.name]=this.Yo;ea=this.qx-this.FV;var y=w.slice(this.Yo.Zt+this.Yo.IA,ea);this.trigger(f.Events.FILE,[this.Yo.name,y,this.Yo.MO]);w=w.slice(ea);if(w.slice(0,this.FV)===ia.h)this.state=e.LOCAL_HEADER,this.qx=ia.c;else return this.state=e.CENTRAL_DIR,!0}this.buffer=w;return!1};f.Events={HEADER:"header",FILE:"file"};return f}(ha.a);
Object(xa.a)(a);xa=function(b){function f(w,ea,y,ba,x){y=b.call(this,w,y,ba)||this;y.url=w;y.stream=new h(w,ea);y.Be=new a;y.b8=window.createPromiseCapability();y.E8={};y.zg=x;return y}Object(qa.c)(f,b);f.prototype.jD=function(w){var ea=this;this.request([this.Al,this.yn,this.zl]);this.stream.addEventListener(h.Events.DATA,function(y){try{if(ea.Be.Sya(y))return ea.stream.finish()}catch(ba){throw ea.stream.abort(),ea.et(ba),w(ba),ba;}});this.stream.addEventListener(h.Events.DONE,function(y){ea.qya=
!0;ea.b8.resolve();y&&(ea.et(y),w(y))});this.Be.addEventListener(a.Events.HEADER,Object(na.bind)(this.D8,this));this.Be.addEventListener(a.Events.FILE,Object(na.bind)(this.uza,this));return this.stream.start(this.zg,this.withCredentials)};f.prototype.C3=function(w){var ea=this;this.b8.promise.then(function(){w(Object.keys(ea.Be.Kq))})};f.prototype.zr=function(){return!0};f.prototype.request=function(w){var ea=this;this.qya&&w.forEach(function(y){ea.E8[y]||ea.rFa(y)})};f.prototype.D8=function(){};
f.prototype.abort=function(){this.stream&&this.stream.abort()};f.prototype.rFa=function(w){this.trigger(ka.a.Events.PART_READY,[{Hb:w,error:"Requested part not found",Ak:!1,Ah:!1}])};f.prototype.uza=function(w,ea,y){this.E8[w]=!0;this.trigger(ka.a.Events.PART_READY,[{Hb:w,data:ea,Ak:!1,Ah:!1,error:null,ge:y}])};return f}(ka.a);Object(n.a)(xa);Object(n.b)(xa);ta["default"]=xa}}]);}).call(this || window)
