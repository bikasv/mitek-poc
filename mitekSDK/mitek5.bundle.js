(this.webpackJsonpmitekScienceSDK=this.webpackJsonpmitekScienceSDK||[]).push([[6],{160:function(e,t){},163:function(e,t){},181:function(e,t){},182:function(e,t){},278:function(e,t,n){"use strict";n.r(t),n.d(t,"processFrame",function(){return Z});var a=n(0),r=n(2),i=n(11),o=n(188),c=n.n(o),u=n(189),s=n(42);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n,a,r,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(a,r)}function E(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){A(i,a,r,o,c,"next",e)}function c(e){A(i,a,r,o,c,"throw",e)}o(void 0)})}}var f=Object(i.a)(),S=140,g=50,m=.33,O=1.6,N=10,d=5,l=60,D=120,I=5,p="",y=!1,P=new u.a({inputSize:160,scoreThreshold:.4}),w=document.createElement("canvas"),x=document.createElement("canvas"),M={ranOnce:!1},b=90;a.a.on("ORIENTATION_AXIS_CHANGE",function(e){b=e});var T=w.getContext("2d"),v=x.getContext("2d"),F={},C=!1,L=new ImageData(10,10),R=0,U=0,H=0,k="",B="",W=0,G={MISNAP_HEAD_TOO_CLOSE:0,MISNAP_HEAD_OUTSIDE:0,MISNAP_STAY_STILL:0,MISNAP_AXIS_ANGLE:0,MISNAP_HEAD_SKEWED:0,MISNAP_HEAD_TOO_FAR:0,NO_FACE_FOUND:0};function K(e,t,n){return new Promise(function(a){setTimeout(function(){x.width=t,x.height=n,v.save(),v.clearRect(0,0,x.width/4,x.height),v.translate(x.width/2,x.height/2),v.rotate(e*Math.PI/180),v.drawImage(w,-x.width/2,-x.height/2),v.translate(-x.width/2,-x.height/2),v.restore(),a(x)},10)})}function j(){return(j=E(regeneratorRuntime.mark(function e(t,n){var a,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null,w.width=t.imageData.width,w.height=t.imageData.height,T.putImageData(t.imageData,0,0),"MANUAL_CAPTURE"!==n){e.next=26;break}return u.f.setBackend("cpu"),r=t.imageData.width>t.imageData.height,e.next=9,u.b(w,P).withFaceLandmarks(!0).withFaceExpressions();case 9:if(a=e.sent,!q(a)){e.next=14;break}return e.abrupt("return",new Promise(function(e,t){setTimeout(function(){e(a)},50)}));case 14:if(!0!==r){e.next=19;break}return e.next=17,K(-90,t.imageData.width,t.imageData.height);case 17:e.next=20;break;case 19:x=w;case 20:return e.next=22,u.b(x,P).withFaceLandmarks(!0).withFaceExpressions();case 22:return a=e.sent,e.abrupt("return",new Promise(function(e,t){setTimeout(function(){e(a)},50)}));case 24:e.next=31;break;case 26:return u.f.setBackend("webgl"),e.next=29,u.b(w,P).withFaceLandmarks(!0).withFaceExpressions();case 29:return a=e.sent,e.abrupt("return",new Promise(function(e,t){setTimeout(function(){e(a)},50)}));case 31:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(){return(J=E(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.e.tinyFaceDetector.load(s.a.getPublicWP());case 2:return e.next=4,u.c(s.a.getPublicWP());case 4:return e.next=6,u.d(s.a.getPublicWP());case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var V,X=(V={x:0,y:0},function(e){var t=0==V.x?e._x:V.x,n=e._x,a=0==V.y?e._y:V.y,r=e._y,i=Math.abs(n-t),o=Math.abs(r-a);return V.x=e._x,V.y=e._y,i>70||o>70});function Y(e){if(!(e&&e.getNose()&&e.getLeftEye()&&e.getRightEye()))return!1;var t=e.getMouth()[0]._x-e.getJawOutline()[4]._x,n=e.getJawOutline()[12]._x-e.getMouth()[6]._x,a=e.getLeftEyeBrow()[0]._x-e.getJawOutline()[0]._x,r=e.getJawOutline()[16]._x-e.getRightEyeBrow()[4]._x;return a<d||r<d||t<N||n<N}var z=function(e){var t,n,a,i=e.faceDetectionWithBox,o=i.expressions.asSortedArray()[0].expression,c=h(i.detection.box)?i.detection.box:i.detectionResult.box,u={type:"MISNAP_HEAD_OUTSIDE",storeFrame:!1,detectionBox:c},s=(n=F,(t=c)._x+S>n.x&&t._x+t._width<n.x+n.width+S&&t._y>n.y&&t._y+t._height<n.y+n.height+g);if(function(e,t){return e.width*e.height/(t.width*t.height)>O}(c,F))return G.MISNAP_HEAD_TOO_CLOSE+=1,u.type="MISNAP_HEAD_TOO_CLOSE",u;if(s){if(Object(r.c)()&&!1===C&&((a=b)<l||a>D))return G.MISNAP_AXIS_ANGLE+=1,u.type="MISNAP_AXIS_ANGLE",u;if(X(c))return G.MISNAP_STAY_STILL+=1,u.type="MISNAP_STAY_STILL",u;if(Y(i.landmarks))return G.MISNAP_HEAD_SKEWED+=1,u.type="MISNAP_HEAD_SKEWED",u;if(function(e,t){return e.width*e.height/(t.width*t.height)<m}(c,F))return G.MISNAP_HEAD_TOO_FAR+=1,u.type="MISNAP_HEAD_TOO_FAR",u;var _="neutral"===o||"sad"===o;return R="happy"===o||"surprised"===o?R+1:R,u.storeFrame=_,R>1&&""===k&&(k=!0),""!==B&&""!==k?(R=0,U=0,k="",B="",u.type="MISNAP_SUCCESS",u):""===B&&""!==k?(u.type="MISNAP_STOP_SMILING",u):""===k?(u.type="MISNAP_SMILE",u):(u.type="MISNAP_READY_POSE",u)}return G.MISNAP_HEAD_OUTSIDE+=1,u.type="MISNAP_HEAD_OUTSIDE",u},q=function(e){return void 0!==e&&e},Q=null,Z=function(e){p=e.captureMode,function(e,t){return j.apply(this,arguments)}(e,p).then(function(e){return q(e)}).then(function(e){return!!(!1!==(t=e)&&t.hasOwnProperty("box")||t.hasOwnProperty("detection"))&&t;var t}).then(function(t){if(!1===t){if("MANUAL_CAPTURE"===p)return y=!0,M.resultCallback({warnings:{status:"failure",code:"NF",key:"NO_FACE_FOUND",score:0},imageData:e.imageData}),!1;G.NO_FACE_FOUND+=1,(W+=1)>=5&&(Q="NO_FACE_FOUND",W=0)}else W=0;return!1!==t&&t}).then(function(t){return"MANUAL_CAPTURE"!==p?Object(r.e)(t)?(W=0,z({faceDetectionWithBox:t})):((W+=1)>=5&&(W=0),{type:"NO_FACE_FOUND"}):Object(r.e)(t)?(t.imageHeight=e.imageData.height,t.imageWidth=e.imageData.width,(n={faceDetectionWithBox:t}.faceDetectionWithBox).expressions.asSortedArray()[0].expression,a=h(n.detection.box)?n.detection.box:n.detectionResult.box,i={type:"MISNAP_SUCCESS",storeFrame:!1,detectionBox:a},a.height/n.imageHeight>.7?(G.MISNAP_HEAD_TOO_CLOSE+=1,i.type="MISNAP_HEAD_TOO_CLOSE",i):Y(n.landmarks)?(G.MISNAP_HEAD_SKEWED+=1,i.type="MISNAP_HEAD_SKEWED",i):a.height/n.imageHeight<.3?(G.MISNAP_HEAD_TOO_FAR+=1,i.type="MISNAP_HEAD_TOO_FAR",i):i):!1===y?(M.resultCallback({warnings:{status:"failure",code:"NF",key:"NO_FACE_FOUND",score:0},imageData:e.imageData}),!1):void 0;var n,a,i}).then(function(t){if("MANUAL_CAPTURE"===p&&(L=e.imageData),!0===t.storeFrame){(U+=1)>=3&&(B=!0);var n=function(e,t){c.a.Fast.THRESHOLD=I;var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var a=n.getContext("2d");a.putImageData(e,0,0);var r=a.getImageData(t._x,t._y,t.width,t.height),i=c.a.Image.grayscale(r.data,r.width,r.height);return c.a.Fast.findCorners(i,r.width,r.height).length}(e.imageData,t.detectionBox);n>H&&(H=n,L=e.imageData,a.a.emit("LOG_MIBI_EVENT",{eventName:f.MitekMibiAction.AUTOCAPTURE_FAST_SCORE,eventValues:n}))}"MISNAP_SUCCESS"===t.type?(a.a.emit("LOG_MIBI_EVENT",{eventName:f.MitekMibiAction.FACE_FAILURE_COUNT,eventValues:G}),M.resultCallback({warnings:{status:"success"},imageData:L}),L=""):(a.a.emit("LOG_MIBI_EVENT",{eventName:f.MitekMibiAction.FACE_FAILURE_COUNT,eventValues:G}),M.resultCallback({imageData:L,warnings:{code:Q,status:"failure",key:t.type,score:null}}))}).catch(function(e){})},$=function(e){if(F=e,e.width>e.height){C=!0;var t=F.x+.3*F.width,n=F.x+.7*F.width-t;F.x=t,F.width=n}else C=!1},ee=function(){return a.a.removeListener("INNER_GUIDE_CHANGE",$)};t.default=function(e){var t=null;return M=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){_(e,t,n[t])})}return e}({},e,{ranOnce:!0}),new Promise(function(e,n){L=new ImageData(10,10),R=0,U=0,H=0,k="",B="",W=0,G.MISNAP_HEAD_TOO_CLOSE=0,G.MISNAP_HEAD_OUTSIDE=0,G.MISNAP_STAY_STILL=0,G.MISNAP_AXIS_ANGLE=0,G.MISNAP_HEAD_SKEWED=0,G.MISNAP_HEAD_TOO_FAR=0,G.NO_FACE_FOUND=0,function(){return J.apply(this,arguments)}().then(function(n){t=setInterval(function(){!0===u.e.tinyFaceDetector.isLoaded&&!0===u.e.faceExpressionNet.isLoaded&&!0===u.e.faceLandmark68TinyNet.isLoaded&&(clearInterval(t),a.a.on("INNER_GUIDE_CHANGE",$),a.a.on("SDK_STOP",ee),a.a.on("SDK_ERROR",ee),a.a.on("FRAME_CAPTURE_RESULT",ee),e({msg:"ready"}))},50)}).catch(function(e){})})}}}]);