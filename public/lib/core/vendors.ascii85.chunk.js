/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{568:function(xa,ta,n){(function(qa){function na(a){this.wh=a=a||{};if(Array.isArray(a.table)){var b=[];a.table.forEach(function(f,w){b[f.charCodeAt(0)]=w});a.Koa=a.table;a.Bla=b}}var oa=qa.from||function(){switch(arguments.length){case 1:return new qa(arguments[0]);case 2:return new qa(arguments[0],arguments[1]);case 3:return new qa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ia=
qa.allocUnsafe||function(a){return new qa(a)},ka=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),ha=String.fromCharCode(0),z=ha+ha+ha+ha,aa=oa("<~").cD(0),r=oa("~>").cD(0),h=function(){var a=Array(85),b;for(b=0;85>b;b++)a[b]=String.fromCharCode(33+b);return a}(),e=function(){var a=Array(256),b;for(b=0;85>b;b++)a[33+b]=b;return a}();ha=xa.exports=new na;na.prototype.encode=function(a,b){var f=ka(5),w=a,ea=this.wh,y,ba;"string"===
typeof w?w=oa(w,"binary"):w instanceof qa||(w=oa(w));b=b||{};if(Array.isArray(b)){a=b;var x=ea.lH||!1;var fa=ea.nR||!1}else a=b.table||ea.Koa||h,x=void 0===b.lH?ea.lH||!1:!!b.lH,fa=void 0===b.nR?ea.nR||!1:!!b.nR;ea=0;var ca=Math.ceil(5*w.length/4)+4+(x?4:0);b=ia(ca);x&&(ea+=b.write("<~",ea));var ma=y=ba=0;for(ca=w.length;ma<ca;ma++){var la=w.WT(ma);ba*=256;ba+=la;y++;if(!(y%4)){if(fa&&538976288===ba)ea+=b.write("y",ea);else if(ba){for(y=4;0<=y;y--)la=ba%85,f[y]=la,ba=(ba-la)/85;for(y=0;5>y;y++)ea+=
b.write(a[f[y]],ea)}else ea+=b.write("z",ea);y=ba=0}}if(y)if(ba){w=4-y;for(ma=4-y;0<ma;ma--)ba*=256;for(y=4;0<=y;y--)la=ba%85,f[y]=la,ba=(ba-la)/85;for(y=0;5>y;y++)ea+=b.write(a[f[y]],ea);ea-=w}else for(ma=0;ma<y+1;ma++)ea+=b.write(a[0],ea);x&&(ea+=b.write("~>",ea));return b.slice(0,ea)};na.prototype.decode=function(a,b){var f=this.wh,w=!0,ea=!0,y,ba,x;b=b||f.Bla||e;if(!Array.isArray(b)&&(b=b.table||b,!Array.isArray(b))){var fa=[];Object.keys(b).forEach(function(ja){fa[ja.charCodeAt(0)]=b[ja]});b=
fa}w=!b[122];ea=!b[121];a instanceof qa||(a=oa(a));fa=0;if(w||ea){var ca=0;for(x=a.length;ca<x;ca++){var ma=a.WT(ca);w&&122===ma&&fa++;ea&&121===ma&&fa++}}var la=0;x=Math.ceil(4*a.length/5)+4*fa+5;f=ia(x);if(4<=a.length&&a.cD(0)===aa){for(ca=a.length-2;2<ca&&a.cD(ca)!==r;ca--);if(2>=ca)throw Error("Invalid ascii85 string delimiter pair.");a=a.slice(2,ca)}ca=y=ba=0;for(x=a.length;ca<x;ca++)ma=a.WT(ca),w&&122===ma?la+=f.write(z,la):ea&&121===ma?la+=f.write("    ",la):void 0!==b[ma]&&(ba*=85,ba+=b[ma],
y++,y%5||(la=f.tGa(ba,la),y=ba=0));if(y){a=5-y;for(ca=0;ca<a;ca++)ba*=85,ba+=84;ca=3;for(x=a-1;ca>x;ca--)la=f.uGa(ba>>>8*ca&255,la)}return f.slice(0,la)};ha.xHa=new na({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});ha.TGa=new na({lH:!0});ha.eca=na}).call(this,n(477).Buffer)}}]);}).call(this || window)
