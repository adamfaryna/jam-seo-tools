"use strict";(self.webpackChunkseo_tools=self.webpackChunkseo_tools||[]).push([[678],{9662:function(e,t,n){var r=n(614),o=n(6330),a=TypeError;e.exports=function(e){if(r(e))return e;throw a(o(e)+" is not a function")}},9483:function(e,t,n){var r=n(4411),o=n(6330),a=TypeError;e.exports=function(e){if(r(e))return e;throw a(o(e)+" is not a constructor")}},1530:function(e,t,n){var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9670:function(e,t,n){var r=n(111),o=String,a=TypeError;e.exports=function(e){if(r(e))return e;throw a(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),a=n(6244),i=function(e){return function(t,n,i){var c,l=r(t),s=a(l),u=o(i,s);if(e&&n!=n){for(;s>u;)if((c=l[u++])!=c)return!0}else for(;s>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),a=r("".slice);e.exports=function(e){return a(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),a=n(4326),i=n(5112)("toStringTag"),c=Object,l="Arguments"===a(function(){return arguments}());e.exports=r?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),i))?n:l?a(t):"Object"===(r=a(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),a=n(1236),i=n(3070);e.exports=function(e,t,n){for(var c=o(t),l=i.f,s=a.f,u=0;u<c.length;u++){var p=c[u];r(e,p)||n&&r(n,p)||l(e,p,s(t,p))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6178:function(e){e.exports=function(e,t){return{value:e,done:t}}},8880:function(e,t,n){var r=n(9781),o=n(3070),a=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),a=n(6339),i=n(3072);e.exports=function(e,t,n,c){c||(c={});var l=c.enumerable,s=void 0!==c.name?c.name:t;if(r(n)&&a(n,s,c),c.global)l?e[t]=n:i(t,n);else{try{c.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,a=n(7854),i=n(8113),c=a.process,l=a.Deno,s=c&&c.versions||l&&l.version,u=s&&s.v8;u&&(o=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,a=n(8880),i=n(8052),c=n(3072),l=n(9920),s=n(4705);e.exports=function(e,t){var n,u,p,f,d,m=e.target,g=e.global,y=e.stat;if(n=g?r:y?r[m]||c(m,{}):(r[m]||{}).prototype)for(u in t){if(f=t[u],p=e.dontCallGetSet?(d=o(n,u))&&d.value:n[u],!s(g?u:m+(y?".":"#")+u,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;l(f,p)}(e.sham||p&&p.sham)&&a(f,"sham",!0),i(n,u,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),a=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,c=o(a,"name"),l=c&&"something"===function(){}.name,s=c&&(!r||r&&i(a,"name").configurable);e.exports={EXISTS:c,PROPER:l,CONFIGURABLE:s}},1470:function(e,t,n){var r=n(4326),o=n(1702);e.exports=function(e){if("Function"===r(e))return o(e)}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,a=o.call,i=r&&o.bind.bind(a,a);e.exports=r?i:function(e){return function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),a=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),a=n(317);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),a=n(4326),i=Object,c=r("".split);e.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"===a(e)?c(e,""):i(e)}:i},2788:function(e,t,n){var r=n(1702),o=n(614),a=n(5465),i=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(e){return i(e)}),e.exports=a.inspectSource},9909:function(e,t,n){var r,o,a,i=n(4811),c=n(7854),l=n(111),s=n(8880),u=n(2597),p=n(5465),f=n(6200),d=n(3501),m="Object already initialized",g=c.TypeError,y=c.WeakMap;if(i||p.state){var v=p.state||(p.state=new y);v.get=v.get,v.has=v.has,v.set=v.set,r=function(e,t){if(v.has(e))throw g(m);return t.facade=e,v.set(e,t),t},o=function(e){return v.get(e)||{}},a=function(e){return v.has(e)}}else{var h=f("state");d[h]=!0,r=function(e,t){if(u(e,h))throw g(m);return t.facade=e,s(e,h,t),t},o=function(e){return u(e,h)?e[h]:{}},a=function(e){return u(e,h)}}e.exports={set:r,get:o,has:a,enforce:function(e){return a(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}}}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4411:function(e,t,n){var r=n(1702),o=n(7293),a=n(614),i=n(648),c=n(5005),l=n(2788),s=function(){},u=[],p=c("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),m=!f.exec(s),g=function(e){if(!a(e))return!1;try{return p(s,u,e),!0}catch(t){return!1}},y=function(e){if(!a(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!d(f,l(e))}catch(t){return!0}};y.sham=!0,e.exports=!p||o((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?y:g},4705:function(e,t,n){var r=n(7293),o=n(614),a=/#|\.prototype\./,i=function(e,t){var n=l[c(e)];return n===u||n!==s&&(o(t)?r(t):!!t)},c=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},l=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),a=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===a}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},7850:function(e,t,n){var r=n(111),o=n(4326),a=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"===o(e))}},2190:function(e,t,n){var r=n(5005),o=n(614),a=n(7976),i=n(3307),c=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&a(t.prototype,c(e))}},3061:function(e,t,n){var r=n(3383).IteratorPrototype,o=n(30),a=n(9114),i=n(8003),c=n(7497),l=function(){return this};e.exports=function(e,t,n,s){var u=t+" Iterator";return e.prototype=o(r,{next:a(+!s,n)}),i(e,u,!1,!0),c[u]=l,e}},3383:function(e,t,n){var r,o,a,i=n(7293),c=n(614),l=n(111),s=n(30),u=n(9518),p=n(8052),f=n(5112),d=n(1913),m=f("iterator"),g=!1;[].keys&&("next"in(a=[].keys())?(o=u(u(a)))!==Object.prototype&&(r=o):g=!0),!l(r)||i((function(){var e={};return r[m].call(e)!==e}))?r={}:d&&(r=s(r)),c(r[m])||p(r,m,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7497:function(e){e.exports={}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),a=n(614),i=n(2597),c=n(9781),l=n(6530).CONFIGURABLE,s=n(2788),u=n(9909),p=u.enforce,f=u.get,d=String,m=Object.defineProperty,g=r("".slice),y=r("".replace),v=r([].join),h=c&&!o((function(){return 8!==m((function(){}),"length",{value:8}).length})),E=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===g(d(t),0,7)&&(t="["+y(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||l&&e.name!==t)&&(c?m(e,"name",{value:t,configurable:!0}):e.name=t),h&&n&&i(n,"arity")&&e.length!==n.arity&&m(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?c&&m(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=p(e);return i(r,"source")||(r.source=v(E,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return a(this)&&f(this).source||s(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30:function(e,t,n){var r,o=n(9670),a=n(6048),i=n(748),c=n(3501),l=n(490),s=n(317),u=n(6200),p="prototype",f="script",d=u("IE_PROTO"),m=function(){},g=function(e){return"<"+f+">"+e+"</"+f+">"},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t,n;v="undefined"!=typeof document?document.domain&&r?y(r):(t=s("iframe"),n="java"+f+":",t.style.display="none",l.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(g("document.F=Object")),e.close(),e.F):y(r);for(var o=i.length;o--;)delete v[p][i[o]];return v()};c[d]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[p]=o(e),n=new m,m[p]=null,n[d]=e):n=v(),void 0===t?n:a.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),a=n(3070),i=n(9670),c=n(5656),l=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){i(e);for(var n,r=c(t),o=l(t),s=o.length,u=0;s>u;)a.f(e,n=o[u++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),a=n(3353),i=n(9670),c=n(4948),l=TypeError,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p="enumerable",f="configurable",d="writable";t.f=r?a?function(e,t,n){if(i(e),t=c(t),i(n),"function"==typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=u(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:p in n?n[p]:r[p],writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(i(e),t=c(t),i(n),o)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),a=n(5296),i=n(9114),c=n(5656),l=n(4948),s=n(2597),u=n(4664),p=Object.getOwnPropertyDescriptor;t.f=r?p:function(e,t){if(e=c(e),t=l(t),u)try{return p(e,t)}catch(n){}if(s(e,t))return i(!o(a.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),o=n(614),a=n(7908),i=n(6200),c=n(8544),l=i("IE_PROTO"),s=Object,u=s.prototype;e.exports=c?s.getPrototypeOf:function(e){var t=a(e);if(r(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof s?u:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),a=n(5656),i=n(1318).indexOf,c=n(3501),l=r([].push);e.exports=function(e,t){var n,r=a(e),s=0,u=[];for(n in r)!o(c,n)&&o(r,n)&&l(u,n);for(;t.length>s;)o(r,n=t[s++])&&(~i(u,n)||l(u,n));return u}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),o=n(614),a=n(111),i=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!a(c=r(n,e)))return c;if(o(n=e.valueOf)&&!a(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!a(c=r(n,e)))return c;throw i("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),a=n(8006),i=n(5181),c=n(9670),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(c(e)),n=i.f;return n?l(t,n(e)):t}},7651:function(e,t,n){var r=n(6916),o=n(9670),a=n(614),i=n(4326),c=n(2261),l=TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var s=r(n,e,t);return null!==s&&o(s),s}if("RegExp"===i(e))return r(c,e,t);throw l("RegExp#exec called on incompatible receiver")}},2261:function(e,t,n){var r,o,a=n(6916),i=n(1702),c=n(1340),l=n(7066),s=n(2999),u=n(2309),p=n(30),f=n(9909).get,d=n(9441),m=n(7168),g=u("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,v=y,h=i("".charAt),E=i("".indexOf),b=i("".replace),x=i("".slice),w=(o=/b*/g,a(y,r=/a/,"a"),a(y,o,"a"),0!==r.lastIndex||0!==o.lastIndex),S=s.BROKEN_CARET,O=void 0!==/()??/.exec("")[1];(w||O||S||d||m)&&(v=function(e){var t,n,r,o,i,s,u,d=this,m=f(d),k=c(e),N=m.raw;if(N)return N.lastIndex=d.lastIndex,t=a(v,N,k),d.lastIndex=N.lastIndex,t;var j=m.groups,I=S&&d.sticky,P=a(l,d),T=d.source,M=0,A=k;if(I&&(P=b(P,"y",""),-1===E(P,"g")&&(P+="g"),A=x(k,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==h(k,d.lastIndex-1))&&(T="(?: "+T+")",A=" "+A,M++),n=new RegExp("^(?:"+T+")",P)),O&&(n=new RegExp("^"+T+"$(?!\\s)",P)),w&&(r=d.lastIndex),o=a(y,I?n:d,A),I?o?(o.input=x(o.input,M),o[0]=x(o[0],M),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:w&&o&&(d.lastIndex=d.global?o.index+o[0].length:r),O&&o&&o.length>1&&a(g,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&j)for(o.groups=s=p(null),i=0;i<j.length;i++)s[(u=j[i])[0]]=o[u[1]];return o}),e.exports=v},7066:function(e,t,n){var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),o=n(2597),a=n(7976),i=n(7066),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||o(e,"flags")||!a(c,e)?t:r(i,e)}},2999:function(e,t,n){var r=n(7293),o=n(7854).RegExp,a=r((function(){var e=o("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),i=a||r((function(){return!o("a","y").sticky})),c=a||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:i,UNSUPPORTED_Y:a}},9441:function(e,t,n){var r=n(7293),o=n(7854).RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,t,n){var r=n(7293),o=n(7854).RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},8003:function(e,t,n){var r=n(3070).f,o=n(2597),a=n(5112)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,a)&&r(e,a,{configurable:!0,value:t})}},6200:function(e,t,n){var r=n(2309),o=n(9711),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(e,t,n){var r=n(9670),o=n(9483),a=n(8554),i=n(5112)("species");e.exports=function(e,t){var n,c=r(e).constructor;return void 0===c||a(n=r(c)[i])?t:o(n)}},8710:function(e,t,n){var r=n(1702),o=n(9303),a=n(1340),i=n(4488),c=r("".charAt),l=r("".charCodeAt),s=r("".slice),u=function(e){return function(t,n){var r,u,p=a(i(t)),f=o(n),d=p.length;return f<0||f>=d?e?"":void 0:(r=l(p,f))<55296||r>56319||f+1===d||(u=l(p,f+1))<56320||u>57343?e?c(p,f):r:e?s(p,f,f+2):u-56320+(r-55296<<10)+65536}};e.exports={codeAt:u(!1),charAt:u(!0)}},6293:function(e,t,n){var r=n(7392),o=n(7293),a=n(7854).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),a=n(2190),i=n(8173),c=n(2140),l=n(5112),s=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!o(e)||a(e))return e;var n,l=i(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||a(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,a=Math.random(),i=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+a,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),a=r.WeakMap;e.exports=o(a)&&/native code/.test(String(a))},5112:function(e,t,n){var r=n(7854),o=n(2309),a=n(2597),i=n(9711),c=n(6293),l=n(3307),s=r.Symbol,u=o("wks"),p=l?s.for||s:s&&s.withoutSetter||i;e.exports=function(e){return a(u,e)||(u[e]=c&&a(s,e)?s[e]:p("Symbol."+e)),u[e]}},6373:function(e,t,n){var r=n(2109),o=n(6916),a=n(1470),i=n(3061),c=n(6178),l=n(4488),s=n(7466),u=n(1340),p=n(9670),f=n(8554),d=n(4326),m=n(7850),g=n(4706),y=n(8173),v=n(8052),h=n(7293),E=n(5112),b=n(6707),x=n(1530),w=n(7651),S=n(9909),O=n(1913),k=E("matchAll"),N="RegExp String",j=N+" Iterator",I=S.set,P=S.getterFor(j),T=RegExp.prototype,M=TypeError,A=a("".indexOf),C=a("".matchAll),R=!!C&&!h((function(){C("a",/./)})),D=i((function(e,t,n,r){I(this,{type:j,regexp:e,string:t,global:n,unicode:r,done:!1})}),N,(function(){var e=P(this);if(e.done)return c(void 0,!0);var t=e.regexp,n=e.string,r=w(t,n);return null===r?(e.done=!0,c(void 0,!0)):e.global?(""===u(r[0])&&(t.lastIndex=x(n,s(t.lastIndex),e.unicode)),c(r,!1)):(e.done=!0,c(r,!1))})),F=function(e){var t,n,r,o=p(this),a=u(e),i=b(o,RegExp),c=u(g(o));return t=new i(i===RegExp?o.source:o,c),n=!!~A(c,"g"),r=!!~A(c,"u"),t.lastIndex=s(o.lastIndex),new D(t,a,n,r)};r({target:"String",proto:!0,forced:R},{matchAll:function(e){var t,n,r,a,i=l(this);if(f(e)){if(R)return C(i,e)}else{if(m(e)&&(t=u(l(g(e))),!~A(t,"g")))throw M("`.matchAll` does not allow non-global regexes");if(R)return C(i,e);if(void 0===(r=y(e,k))&&O&&"RegExp"===d(e)&&(r=F),r)return o(r,e,i)}return n=u(i),a=new RegExp(e,"g"),O?o(F,a,n):a[k](n)}}),O||k in T||v(T,k,F)},3728:function(e,t,n){n(6373)},699:function(e,t,n){var r=n(7294);t.Z=e=>{let{href:t,title:n,children:o,className:a=""}=e;return o||(o=r.createElement("span",null,n)),r.createElement("a",{href:t,title:n,className:a,rel:"noopener noreferrer",target:"_blank"},o)}},9933:function(e,t,n){var r=n(7294),o=n(1883),a=n(699);t.Z=e=>{let{title:t="Twitter"}=e;const{site:{siteMetadata:{twitterContact:n}}}=(0,o.useStaticQuery)("788635192");return r.createElement(a.Z,{href:n,title:t})}},7456:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(7294),o=n(1883),a=n(8595);var i=e=>{let{title:t,instructions:n,onChange:o,name:a,placeholder:i,keywords:c="",className:l=""}=e;return r.createElement("section",{className:"keyword-picker "+l},r.createElement("h2",null,t),r.createElement("p",null,n),r.createElement("input",{className:"keyword-picker",name:a,type:"text",placeholder:i,value:c,onChange:e=>o(e.target.value)}))};function c(e,t){const n=100*e/t;return n<100?n:100}var l=e=>{let{children:t,title:n,instructions:o,state:a,max:i,className:l="",checkReadibility:s=!1,countWords:u=!1}=e;const{length:p=0,lengthVerdict:f,readibility:d}=a;return r.createElement("section",{className:"text-analyzer "+l},r.createElement("h2",null,n),r.createElement("p",null,o),t,r.createElement("div",{className:"progress"},r.createElement("div",{className:"progress-bar "+f.tag},r.createElement("span",{style:{width:c(p,i)+"%"}},p)),r.createElement("div",{className:"progress-info"},u?"Words":"Characters"," number:"," ",r.createElement("span",{className:"report-colored "+f.tag},p," / ",i," - ",f.verdict)),s&&r.createElement("div",{className:"read-score"},"Readibility score:"," ",r.createElement("span",{className:"report-colored "+d.tag},d.score," / 100 - ",d.verdict," ",r.createElement("span",{className:"info"},"(i)",r.createElement("span",{className:"tooltip"},"The best text should contain short sentences and words."))))))},s=n(6847);var u=e=>{let{status:t}=e;return r.createElement("section",{className:"report box"},r.createElement("h2",null,"SEO Report"),r.createElement("p",null,"What's good and bad about your current SEO."),r.createElement("ul",null,Object.keys(t).map(((e,n)=>{var o;return r.createElement(r.Fragment,{key:n+"_"+e},(0,s.UE)(t[e].notEmptyVerdict)&&r.createElement("li",null,r.createElement("span",{className:"report-colored "+t[e].notEmptyVerdict.tag},e,": ",t[e].notEmptyVerdict.verdict)),(0,s.UE)(t[e].lengthVerdict)&&r.createElement("li",null,r.createElement("span",{className:"report-colored "+t[e].lengthVerdict.tag},e,": ",t[e].lengthVerdict.verdict)),(0,s.UE)(t[e].readibility)&&t[e].readibility.verdict!==(null===(o=t[e].lengthVerdict)||void 0===o?void 0:o.verdict)&&r.createElement("li",null,r.createElement("span",{className:"report-colored "+t[e].readibility.tag},e,": ",t[e].readibility.verdict)),t[e].keywordsSaturation&&t[e].keywordsSaturation.map(((t,n)=>r.createElement("li",{key:n+"_"+e+"_"+n},r.createElement("span",{className:"report-colored "+t.tag},e," keyword: ",t.verdict)))))}))))};n(3728);const p=e=>e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/^#.*$/gim,"")).replace(/^\|.*$/gim,"")).replace(/!?\[(.+)\]\(.*\)\.?/gi,"$1.")).replace(/^\s*(\d+\.|[\-\+\*]).*$/gim,"")).replace(/<!--[\s\S]*-->/gim,"")).replace(/^\s*\[.+\]:.+$/gim,"")).replace(/\[(.+)\]\[.+\]/gi,"$1")).replace(/{[\s\S]+?\}/gi,"")).replace(/^```[\s\S]*?```/gim,"")).replace(/>.*$/gim,"")).replace(/\[(.+?)\](?:.*)(\.)?/gi,"$1$2")).replace(/`(.+?)`/gi,"X")).replace(/^\*+|[_=-]{2,}$/gim,"")).replace(/^ {2,}.+$/gim,"")).replace(/^\s*$(?:\r\n?|\n)/gm,"")).replace(/(?:\r\n?|\n)/gm," ")).replace(/ {2,}$/gi," ")).replace(/(\w)([.?!):])(\w)/gi,"$1$2 $3"),f=e=>e.length?("."===(e=e.trim())[e.length-1]&&(e=e.substring(0,e.length-1)),e.split(". ")):[],d=e=>{if(!e.length)return 0;const t=(e=(e=(e=(e=e.trim()).toLowerCase()).replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return t?t.length:1},m=e=>e.length?(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" "):[],g=e=>m(e).length,y=e=>{if(!e.length)return{score:0,tag:"empty",verdict:"Field is empty, please fill it"};const t=(e=>{if(!e.length)return 0;e=p(e);const t=f(e),n=m(e),r=Math.floor(n.length/t.length),o=n.reduce(((e,t)=>e+d(t)),0),a=Math.floor(o/n.length);let i=Math.floor(206.835-1.015*r-84.6*a);return i<0?i=0:i>100&&(i=100),i})(e);return t>=90&&t<=100?{score:t,tag:"ok",verdict:"Super easy to read"}:t>=80&&t<=89?{score:t,tag:"ok",verdict:"East to read"}:t>=70&&t<=79?{score:t,tag:"ok",verdict:"Fairly easy to read"}:t>=60&&t<=69?{score:t,tag:"ok",verdict:"Standard readability"}:t>=50&&t<=59?{score:t,tag:"warn",verdict:"Fairly difficult to read"}:t>=30&&t<=49?{score:t,tag:"error",verdict:"Difficult to read"}:{score:t,tag:"error",verdict:"Very confusing to read"}},v=function(e,t,n){return void 0===n&&(n=null),0===e?{tag:"empty",verdict:"Field is empty, please fill it"}:e<t?{tag:"error",verdict:"Too short"}:n&&e>n?{tag:"error",verdict:"Too long"}:{tag:"ok",verdict:"Length is good"}},h=(e,t)=>{if(e=S(e),t=p(t),!e.length||!t.length)return[];const n=[];return e.forEach((e=>{n.push(x(e,t))})),n},E=(e,t)=>{if(!(e=S(e)).length||!t.length)return[];const n=[];return e.forEach((e=>{n.push(((e,t)=>{const n=w(e,t);return 0===n?{tag:"warn",verdict:"'"+e+"' is not present in the title"}:1===n?{tag:"ok",verdict:"'"+e+"' is present in the title"}:{tag:"warn",verdict:"'"+e+"' occurs too many times it the title"}})(e,t))})),n},b=(e,t)=>{if(!(e=S(e)).length||!t.length)return[];const n=[];return e.forEach((e=>{n.push(((e,t)=>{const n=w(e,t);return 0===n?{tag:"warn",verdict:"'"+e+"' is not present in the description"}:1===n||2===n?{tag:"ok",verdict:"'"+e+"' is present in the description"}:{tag:"error",verdict:"'"+e+"' occurs too many times it the description"}})(e,t))})),n},x=(e,t)=>{t=(t=t.replace(/^#.*$/gi,"")).replace(/^```[\s\S]*?```/gim,"");const n=w(e,t);if(0===n)return{tag:"error",verdict:"'"+e+"' is not present in the post"};const r=g(t);let o=Math.round(100*Number(n/r).toFixed(2));return o<=1?{tag:"warn",verdict:"'"+e+"' saturation is low "+o+"%"}:o<=4.5?{tag:"ok",verdict:"'"+e+"' saturation is good "+o+"%"}:{tag:"error",verdict:"'"+e+"' saturation is too high "+o+"%"}},w=(e,t)=>{const n=new RegExp("( |^)"+e+"[. ]?","gi");return(t.match(n)||[]).length},S=e=>(e=e.trim().split(",").reduce(((e,t)=>{const n=t.trim().toLowerCase();return n.length&&e.push(n),e}),[]),Array.from(new Set(e))),O=(e,t)=>e.length?(e=S(e)).length<t?{tag:"warn",verdict:"You choose too few keywords "+e.length+". Try to generate about 5-15 (or more) unique keywords."}:{tag:"ok",verdict:"You choose good number of keywords '"+e.length+"' keywords."}:{tag:"empty",verdict:"Field is empty, please fill it"};let k=null;var N=()=>{const{site:{siteMetadata:{post:e}}}=(0,o.useStaticQuery)("2568732120"),{0:t,1:n}=(0,r.useReducer)((a=e,(e,t)=>{let{type:n,payload:r}=t;switch(n){case"updateKeywords":return{...e,Keywords:{content:r,notEmptyVerdict:O(r,a.keywordsMin)},Title:{...e.Title,keywordsSaturation:E(r,e.Title.content)},Description:{...e.Description,keywordsSaturation:b(r,e.Description.content)},"Post content":{...e["Post content"],keywordsSaturation:h(r,e["Post content"].content)}};case"updateTitle":return{...e,Title:{content:r,length:r.length,lengthVerdict:v(r.length,a.titleMin,a.titleMax),keywordsSaturation:E(e.Keywords.content,r)}};case"updateDescription":return{...e,Description:{content:r,length:r.length,lengthVerdict:v(r.length,a.descriptionMin,a.descriptionMax),keywordsSaturation:b(e.Keywords.content,r),readibility:y(r)}};case"updateContent":return{...e,"Post content":{content:r,length:g(r),lengthVerdict:v(g(r),a.postWordsMin),keywordsSaturation:h(e.Keywords.content,r),readibility:y(r)}};default:throw new Error}}),function(e){if(!k){const t=("undefined"==typeof window?{getItem:()=>""}:window.sessionStorage).getItem("analysers-state");k=t?JSON.parse(t):{Keywords:{content:"",notEmptyVerdict:O("",e.keywordsMin)},Title:{content:"",length:0,lengthVerdict:v(0,e.titleMin,e.titleMax),keywordsSaturation:E("","")},Description:{content:"",length:0,lengthVerdict:v(0,e.descriptionMin,e.descriptionMax),keywordsSaturation:b("",""),readibility:y("")},"Post content":{content:"",length:0,lengthVerdict:v(0,e.postWordsMin),keywordsSaturation:h("",""),readibility:y("")}}}return k}(e));var a;return(0,r.useEffect)((()=>{sessionStorage.setItem("analysers-state",JSON.stringify(t))})),r.createElement("section",{className:"analysers"},r.createElement("div",{className:"row"},r.createElement("div",{className:"column column-50"},r.createElement("form",null,r.createElement(i,{title:"Keywords",instructions:"The list of unique 5-15 keywords (or more) you want to target in your post. Separate keywords by the comma.",name:"Keywords",keywords:t.Keywords.content,placeholder:"Enter in a keywords",onChange:e=>n({type:"updateKeywords",payload:e}),className:"box"}),r.createElement(l,{title:"Post Title",instructions:"Copy & Paste your post title below or type it there.",state:t.Title,max:e.titleMax,className:"box"},r.createElement("textarea",{name:"title",cols:"30",rows:"5",value:t.Title.content,placeholder:"Enter in a post title",onChange:e=>n({type:"updateTitle",payload:e.target.value})})),r.createElement(l,{title:"Post Description",instructions:"Copy & Paste your post description below or type it there.",state:t.Description,max:e.descriptionMax,checkReadibility:!0,className:"box"},r.createElement("textarea",{name:"description",cols:"30",rows:"5",value:t.Description.content,placeholder:"Enter in a post description",onChange:e=>n({type:"updateDescription",payload:e.target.value})})),r.createElement(l,{title:"Post Content",instructions:"Copy & Paste your post content below or type it there. Post analyser recognisez markdown semantic, so you can copy your post in markdown.",state:t["Post content"],max:e.postWordsMin,countWords:!0,checkReadibility:!0,className:"box"},r.createElement("textarea",{name:"content",cols:"30",rows:"10",value:t["Post content"].content,placeholder:"Enter in a post content",onChange:e=>n({type:"updateContent",payload:e.target.value})})))),r.createElement("div",{className:"column column-offset-5 column-45 "},r.createElement(u,{status:t}))))};var j=e=>{let{title:t,children:n,className:o=""}=e;return r.createElement("section",{className:"block-of-text "+o},r.createElement("header",null,r.createElement("h2",null,t)),n)},I=n.p+"static/devakimbo-logo-3dce7e94c2d6af3a1fbe763b8fe4f6ad.png",P=n(699);var T=()=>r.createElement("section",{className:"sponsors"},r.createElement("header",null,r.createElement("h2",null,"Our Sponsors")),r.createElement("ul",null,r.createElement("li",null,r.createElement(P.Z,{href:"https://devakimbo.com/",title:"DEV Akimbo"},r.createElement("img",{alt:"Logo of DEV Akimbo",src:I}))))),M=n.p+"static/adamfaryna-round-7a653436f9c29040a5c83a82b5c88ea6.png";var A=()=>{const{site:{siteMetadata:{contact:{hash:e,name:t,url:n}}}}=(0,o.useStaticQuery)("2762187734");return r.createElement("section",{className:"made-by"},r.createElement(P.Z,{href:n,title:t},r.createElement("img",{alt:"Photo of "+t,src:M})),r.createElement("p",null,"Made by"," ",r.createElement(P.Z,{href:n,title:t},t)))},C=n(9933);var R=()=>{const{site:{siteMetadata:{title:e}}}=(0,o.useStaticQuery)("3159585216");return r.createElement(a.Z,{title:"Home"},r.createElement("h1",null,e),r.createElement("section",{className:"introduction"},r.createElement("div",{className:"row"},r.createElement("div",{className:"column"},r.createElement("p",null,"The ",e," is a set of complementary SEO tools for JAMstack powered blogs ",r.createElement("span",{className:"emoji"},"🔥")," If you choose JAMstack over a popular CMS for your blogging platform, you probably already found that some essential SEO tools are missing"," ",r.createElement("span",{className:"emoji"},"🤦")," This website brings a"," ",r.createElement("span",{style:{fontWeight:600,textDecoration:"underline"}},"set of powerful SEO tools for FREE")," ","to fill this gap ",r.createElement("span",{className:"emoji"},"🙌"),r.createElement("br",null),r.createElement("br",null),"Use the tools below to optimize the SEO of your blog posts' content, titles, and descriptions. When you will be happy with the results, just copy values from the fields into your blog post. Done, your post is ready to launch"," ",r.createElement("span",{className:"emoji"},"🚀"))))),r.createElement("section",{className:"instructions"},r.createElement("div",{className:"row"},r.createElement("div",{className:"column"},r.createElement("h2",null,"Optimize SEO of your blog posts in 8 easy steps"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"column column-55"},r.createElement("p",null,"Watch the video on the right or follow the step below."),r.createElement("ol",null,r.createElement("li",null,"Open markdown file with your blog post"),r.createElement("li",null,"Copy & paste post title from frontmatter into Post Title field"),r.createElement("li",null,"Copy & paste post description from frontmatter into the Post Description field"),r.createElement("li",null,"Copy & paste post content into the Post Content field"),r.createElement("li",null,"Type in keywords that you want your post to target into the Keywords field"),r.createElement("li",null,"Check status below every filled field and SEO report column"),r.createElement("li",null,"Fix all the ",r.createElement("span",{className:"red"},"errors")," and"," ",r.createElement("span",{className:"blue"},"empty")," to perfect"," ",r.createElement("span",{className:"green"},"green")," (or close) report"),r.createElement("li",null,"Copy and paste values from fields to your markdown file")),r.createElement("p",{style:{fontWeight:"bold",fontSize:"20px"}},"DONE!")),r.createElement("div",{className:"column column-offset-5 column-40"},r.createElement("iframe",{src:"https://www.youtube.com/embed/L3LYmyFA2Lg",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),r.createElement("div",{className:"row",style:{marginTop:"30px"}},r.createElement("div",{className:"column"},r.createElement("p",null,"You can also use this website to create SEO optimized post from scratch. Just start filling all the fields, and copy the values to the markdown file afterward.")))),r.createElement(N,null),r.createElement("section",null,r.createElement("div",{className:"row"},r.createElement("div",{className:"column column-50"},r.createElement(j,{title:"About",className:"about"},r.createElement("p",null,"Hi, my name is Adam Faryna. I started the JAM SEO tools project out of frustration, I experienced after I moved"," ",r.createElement("a",{href:"https://devakimbo.com",target:"_blank"},"my blog")," ","from WordPress to JAMstack. While WP offers many SEO plugins that are extremely useful for anyone who blogs, I couldn’t find any similar solution for JAMstack. That’s how the idea of JAM SEO tools have born."),r.createElement("p",null,"I will add more tools and features over time. If you have a feature-request drop me a message at ",r.createElement(C.Z,null),"."),r.createElement("p",null,"If you want to become a sponsor of this project drop me a message at ",r.createElement(C.Z,null),"."))),r.createElement("div",{className:"column column-50 "},r.createElement(T,null)))),r.createElement(A,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4417bc6a159677b39134.js.map