(this["webpackJsonpgps-raycasting"]=this["webpackJsonpgps-raycasting"]||[]).push([[0],{30:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t(0),o=t.n(a),c=t(21),i=t.n(c),s=(t(30),t(23)),u=t(1),l=t(13),y=t(9),d=t(12),f=t(22),x=t.n(f),j=t(14),b=function(e){var n=e.lines,t=Object(a.useState)([]),o=Object(d.a)(t,2),c=o[0],i=o[1],s=Object(a.useState)(0),u=Object(d.a)(s,2),f=u[0],b=u[1],h=Object(a.useState)(1e3),p=Object(d.a)(h,2),v=p[0],w=p[1],O=function(e,n){i((function(t){return[].concat(Object(l.a)(t),[{a:e,b:n}])}))},g=Object(a.useState)(null),m=Object(d.a)(g,2),V=m[0],k=m[1],H=function(e,n,t){var r=t.a.x,a=t.a.y,o=t.b.x,c=t.b.y,i=j.Vector.fromAngle(n.angle),s=V.pos.x,u=V.pos.y,l=V.pos.x+i.x,y=V.pos.y+i.y,d=(r-o)*(u-y)-(a-c)*(s-l);if(0!==d){var f=((r-s)*(u-y)-(a-u)*(s-l))/d;if(f>0&&f<1&&-((r-o)*(a-u)-(a-c)*(r-s))/d>0){var x=e.createVector();return x.x=r+f*(o-r),x.y=a+f*(c-a),x}}},W=function(e,n){for(var t=[],r=0;r<360;r+=1)t.push({pos:n,angle:e.radians(r)});return t};return Object(r.jsx)(x.a,{setup:function(e,t){var r,a=window.innerWidth,o=window.innerHeight,c=Object(y.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,s=e.createVector(i.x1,i.y1),u=e.createVector(i.x2,i.y2);O(s,u)}}catch(d){c.e(d)}finally{c.f()}var l=e.createVector(a/2,o/2);k({pos:l,rays:W(e,l)}),e.createCanvas(a,o).parent(t)},draw:function(e){e.background(0);var n,t=Object(y.a)(c);try{for(t.s();!(n=t.n()).done;){var r=n.value;e.stroke(255),e.line(r.a.x,r.a.y,r.b.x,r.b.y)}}catch(d){t.e(d)}finally{t.f()}e.fill(255),e.ellipse(V.pos.x,V.pos.y,4);var a,o,i,s=Object(y.a)(V.rays);try{for(s.s();!(a=s.n()).done;){var u=a.value;e.stroke(255),e.push(),e.translate(u.pos.x,u.pos.y);var l=j.Vector.fromAngle(u.angle);e.line(0,0,10*l.x,10*l.y),e.pop()}}catch(d){s.e(d)}finally{s.f()}o=e.mouseX,i=e.mouseY,V.pos.set(o,i),b(f+.01),w(v+.01),function(e){var n,t=Object(y.a)(V.rays);try{for(t.s();!(n=t.n()).done;){var r,a=n.value,o=1/0,i=null,s=Object(y.a)(c);try{for(s.s();!(r=s.n()).done;){var u=r.value,l=H(e,a,u);if(l){var f=j.Vector.dist(V.pos,l);f<o&&(o=f,i=l)}}}catch(d){s.e(d)}finally{s.f()}i&&(e.stroke(255,69),e.line(V.pos.x,V.pos.y,i.x,i.y))}}catch(d){t.e(d)}finally{t.f()}}(e)}})};var h=function(e){var n=function(){return Math.floor(Math.random()*window.innerWidth)+1},t=function(){return Math.floor(Math.random()*window.innerHeight)+1};return Object(r.jsx)("div",{children:Object(r.jsx)(b,{lines:function(e){for(var r=[{x1:0,y1:0,x2:window.innerWidth,y2:0},{x1:window.innerWidth,y1:0,x2:window.innerWidth,y2:window.innerHeight},{x1:window.innerWidth,y1:window.innerHeight,x2:0,y2:window.innerHeight},{x1:0,y1:window.innerHeight,x2:0,y2:0}],a=0;a<e;a++)r=[].concat(Object(l.a)(r),[{x1:n(),y1:t(),x2:n(),y2:t()}]);return r}(5)})})};var p=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,children:Object(r.jsx)(h,{})}),Object(r.jsx)(u.a,{path:"*",to:"/"})]})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ccfd6a90.chunk.js.map