System.register(["./index-legacy-859a0602.js"],(function(e,t){"use strict";var r;return{setters:[t=>{r=t.G,e("GESTURE_CONTROLLER",t.G)}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=(e,t,r,s)=>{const o=n(e)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let c,a;return e.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),e[c](t,r,o),()=>{e[a](t,r,o)}},n=e=>{if(void 0===s)try{const t=Object.defineProperty({},"passive",{get:()=>{s=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){s=!1}return!!s};let s;const o=e=>e instanceof Document?e:e.ownerDocument,c=(e("createGesture",(e=>{let n=!1,s=!1,u=!0,l=!1;const d=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),v=d.canStart,m=d.onWillStart,p=d.onStart,y=d.onEnd,X=d.notCaptured,Y=d.onMove,h=d.threshold,g=d.passive,_=d.blurOnStart,b={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},f=((e,t,r)=>{const n=r*(Math.PI/180),s="x"===e,o=Math.cos(n),c=t*t;let a=0,i=0,u=!1,l=0;return{start(e,t){a=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-a,n=t-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(s?r:n)/v;return l=m>o?1:m<-o?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(d.direction,d.threshold,d.maxAngle),T=r.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=()=>{n&&(l=!1,Y&&Y(b))},S=()=>!!T.capture()&&(n=!0,u=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime,m?m(b).then(L):L(),!0),L=()=>{_&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;(null==e?void 0:e.blur)&&e.blur()}})(),p&&p(b),u=!0},G=()=>{n=!1,s=!1,l=!1,u=!0,T.release()},x=e=>{const t=n,r=u;G(),r&&(c(b,e),t?y&&y(b):X&&X(b))},D=((e,r,n,s,c)=>{let a,i,u,l,d,v,m,p=0;const y=s=>{p=Date.now()+2e3,r(s)&&(!i&&n&&(i=t(e,"touchmove",n,c)),u||(u=t(s.target,"touchend",Y,c)),l||(l=t(s.target,"touchcancel",Y,c)))},X=s=>{p>Date.now()||r(s)&&(!v&&n&&(v=t(o(e),"mousemove",n,c)),m||(m=t(o(e),"mouseup",h,c)))},Y=e=>{g(),s&&s(e)},h=e=>{_(),s&&s(e)},g=()=>{i&&i(),u&&u(),l&&l(),i=u=l=void 0},_=()=>{v&&v(),m&&m(),v=m=void 0},b=()=>{g(),_()},f=(r=!0)=>{r?(a||(a=t(e,"touchstart",y,c)),d||(d=t(e,"mousedown",X,c))):(a&&a(),d&&d(),a=d=void 0,b())};return{enable:f,stop:b,destroy:()=>{f(!1),s=n=r=void 0}}})(d.el,(e=>{const t=i(e);return!(s||!u)&&(a(e,b),b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime=t,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=e,(!v||!1!==v(b))&&(T.release(),!!T.start()&&(s=!0,0===h?S():(f.start(b.startX,b.startY),!0))))}),(e=>{n?!l&&u&&(l=!0,c(b,e),requestAnimationFrame(E)):(c(b,e),f.detect(b.currentX,b.currentY)&&(f.isGesture()&&S()||w()))}),x,{capture:!1,passive:g}),w=()=>{G(),D.stop(),X&&X(b)};return{enable(e=!0){e||(n&&x(void 0),G()),D.enable(e)},destroy(){T.destroy(),D.destroy()}}})),(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,s=e.currentTime;a(t,e);const o=e.currentX,c=e.currentY,u=(e.currentTime=i(t))-s;if(u>0&&u<100){const t=(o-r)/u,s=(c-n)/u;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*s+.3*e.velocityY}e.deltaX=o-e.startX,e.deltaY=c-e.startY,e.event=t}),a=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},i=e=>e.timeStamp||Date.now()}}}));
