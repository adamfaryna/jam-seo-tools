(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Ynb":function(e,t,r){e.exports=r.p+"static/devakimbo-logo-83f61385472fbfadc8c8dee3a2669b6e.png"},"661n":function(e,t,r){},"8JX0":function(e,t,r){},BXT9:function(e,t,r){},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("Zttt"),l=r("rePB"),c=(r("lHz7"),r("jadI"),function(e){var t=e.title,r=e.instructions,n=e.onChange,o=e.name,i=e.placeholder,l=e.keywords,c=void 0===l?"":l,s=e.className,u=void 0===s?"":s;return a.a.createElement("section",{className:"keyword-picker "+u},a.a.createElement("h2",null,t),a.a.createElement("p",null,r),a.a.createElement("input",{className:"keyword-picker",name:o,type:"text",placeholder:i,value:c,onChange:function(e){return n(e.target.value)}}))});r("BXT9");function s(e,t){var r=100*e/t;return r<100?r:100}var u=function(e){var t=e.children,r=e.title,n=e.instructions,o=e.state,i=e.max,l=e.className,c=void 0===l?"":l,u=e.countWords,d=void 0!==u&&u,m=o.length,p=void 0===m?0:m,f=o.lengthVerdict,g=o.readibility;return a.a.createElement("section",{className:"text-analyzer "+c},a.a.createElement("h2",null,r),a.a.createElement("p",null,n),t,a.a.createElement("div",{className:"progress"},a.a.createElement("div",{className:"progress-bar "+f.tag},a.a.createElement("span",{style:{width:s(p,i)+"%"}},p)),a.a.createElement("div",{className:"progress-info"},d?"Words":"Characters"," number:"," ",a.a.createElement("span",{className:"report-colored "+f.tag},p," / ",i," - ",f.verdict)),a.a.createElement("div",{className:"read-score"},"Readibility score:"," ",a.a.createElement("span",{className:"report-colored "+g.tag},g.score," / 100 - ",g.verdict," ",a.a.createElement("span",{className:"info"},"(i)",a.a.createElement("span",{className:"tooltip"},"The best text should contain short sentences and words."))))))},d=(r("661n"),r("oWFr")),m=function(e){var t=e.status;return a.a.createElement("section",{className:"report box"},a.a.createElement("h2",null,"SEO Report"),a.a.createElement("p",null,"What's good and bad about your current SEO."),a.a.createElement("ul",null,Object.keys(t).map((function(e,r){var o;return a.a.createElement(n.Fragment,{key:r+"_"+e},Object(d.c)(t[e].notEmptyVerdict)&&a.a.createElement("li",null,a.a.createElement("span",{className:"report-colored "+t[e].notEmptyVerdict.tag},e,": ",t[e].notEmptyVerdict.verdict)),Object(d.c)(t[e].lengthVerdict)&&a.a.createElement("li",null,a.a.createElement("span",{className:"report-colored "+t[e].lengthVerdict.tag},e,": ",t[e].lengthVerdict.verdict)),Object(d.c)(t[e].readibility)&&t[e].readibility.verdict!==(null===(o=t[e].lengthVerdict)||void 0===o?void 0:o.verdict)&&a.a.createElement("li",null,a.a.createElement("span",{className:"report-colored "+t[e].readibility.tag},e,": ",t[e].readibility.verdict)),t[e].keywordsSaturation&&t[e].keywordsSaturation.map((function(t,r){return a.a.createElement("li",{key:r+"_"+e+"_"+r},a.a.createElement("span",{className:"report-colored "+t.tag},e," keyword: ",t.verdict))})))}))))};r("E9XD");var p=function(e){return e.length?("."===(e=e.trim())[e.length-1]&&(e=e.substring(0,e.length-1)),e.split(". ")):[]},f=function(e){if(!e.length)return 0;var t=(e=(e=(e=(e=e.trim()).toLowerCase()).replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return t?t.length:1},g=function(e){return e.length?(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" "):[]},y=function(e){return g(e).length},h=function(e){if(!e.length)return{score:0,tag:"empty",verdict:"Field is empty, please fill it"};var t=function(e){if(!e.length)return 0;e=e.replace(/^```[\s\S]*?```/gim,"");var t=p(e),r=g(e),n=Math.floor(r.length/t.length),a=r.reduce((function(e,t){return e+f(t)}),0),o=Math.floor(a/r.length),i=Math.floor(206.835-1.015*n-84.6*o);return i<0?i=0:i>100&&(i=100),i}(e);return t>=90&&t<=100?{score:t,tag:"ok",verdict:"Super easy to read"}:t>=80&&t<=89?{score:t,tag:"ok",verdict:"East to read"}:t>=70&&t<=79?{score:t,tag:"warn",verdict:"Fairly easy to read"}:t>=60&&t<=69?{score:t,tag:"warn",verdict:"Standard readability"}:t>=50&&t<=59?{score:t,tag:"error",verdict:"Fairly difficult to read"}:t>=30&&t<=49?{score:t,tag:"error",verdict:"Difficult to read"}:{score:t,tag:"error",verdict:"Very confusing to read"}},E=function(e,t,r){return void 0===r&&(r=null),0===e?{tag:"empty",verdict:"Field is empty, please fill it"}:e<t?{tag:"error",verdict:"Too short"}:r&&e>r?{tag:"error",verdict:"Too long"}:{tag:"ok",verdict:"Length is good"}},v=function(e,t){if(!(e=O(e)).length||!t.length)return[];var r=[];return e.forEach((function(e){r.push(k(e,t))})),r},w=function(e,t){if(!(e=O(e)).length||!t.length)return[];var r=[];return e.forEach((function(e){var n,a;r.push(0===(a=N(n=e,t))?{tag:"warn",verdict:"'"+n+"' is not present in the title"}:1===a?{tag:"ok",verdict:"'"+n+"' is present in the title"}:{tag:"warn",verdict:"'"+n+"' occurs too many times it the title"})})),r},b=function(e,t){if(!(e=O(e)).length||!t.length)return[];var r=[];return e.forEach((function(e){var n,a;r.push(0===(a=N(n=e,t))?{tag:"warn",verdict:"'"+n+"' is not present in the description"}:1===a||2===a?{tag:"ok",verdict:"'"+n+"' is present in the description"}:{tag:"error",verdict:"'"+n+"' occurs too many times it the description"})})),r},k=function(e,t){t=(t=t.replace(/^#.*$/gi,"")).replace(/^```[\s\S]*?```/gim,"");var r=N(e,t);if(0===r)return{tag:"error",verdict:"'"+e+"' is not present in the post"};var n=y(t),a=Math.round(100*Number(r/n).toFixed(2));return a<=1?{tag:"warn",verdict:"'"+e+"' saturation is low "+a+"%"}:a<=5?{tag:"ok",verdict:"'"+e+"' saturation is good "+a+"%"}:{tag:"error",verdict:"'"+e+"' saturation is too high "+a+"%"}},N=function(e,t){var r=new RegExp("( |^)"+e+"[. ]?","gi");return(t.match(r)||[]).length},O=function(e){return e=e.trim().split(",").reduce((function(e,t){var r=t.trim().toLowerCase();return r.length&&e.push(r),e}),[]),Array.from(new Set(e))},S=function(e,t){return e.length?(e=O(e)).length<t?{tag:"warn",verdict:"You choose too few keywords "+e.length+". Try to generate about 5-15 (or more) unique keywords."}:{tag:"ok",verdict:"You choose good number of keywords '"+e.length+"' keywords."}:{tag:"empty",verdict:"Field is empty, please fill it"}};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=null;var P=function(){var e,t=Object(o.useStaticQuery)("2568732120").site.siteMetadata.post,r=Object(n.useReducer)((e=t,function(t,r){var n=r.type,a=r.payload;switch(n){case"updateKeywords":return j(j({},t),{},{Keywords:{content:a,notEmptyVerdict:S(a,e.keywordsMin)},Title:j(j({},t.Title),{},{keywordsSaturation:w(a,t.Title.content)}),Description:j(j({},t.Description),{},{keywordsSaturation:b(a,t.Description.content)}),"Post content":j(j({},t["Post content"]),{},{keywordsSaturation:v(a,t["Post content"].content)})});case"updateTitle":return j(j({},t),{},{Title:{content:a,length:a.length,lengthVerdict:E(a.length,e.titleMin,e.titleMax),keywordsSaturation:w(t.Keywords.content,a),readibility:h(a)}});case"updateDescription":return j(j({},t),{},{Description:{content:a,length:a.length,lengthVerdict:E(a.length,e.descriptionMin,e.descriptionMax),keywordsSaturation:b(t.Keywords.content,a),readibility:h(a)}});case"updateContent":return j(j({},t),{},{"Post content":{content:a,length:y(a),lengthVerdict:E(y(a),e.postWordsMin),keywordsSaturation:v(t.Keywords.content,a),readibility:h(a)}});default:throw new Error}}),function(e){if(!x){var t=("undefined"==typeof window?{getItem:function(){return""}}:window.sessionStorage).getItem("analysers-state");x=t?JSON.parse(t):{Keywords:{content:"",notEmptyVerdict:S("",e.keywordsMin)},Title:{content:"",length:0,lengthVerdict:E(0,e.titleMin,e.titleMax),keywordsSaturation:w("",""),readibility:h("")},Description:{content:"",length:0,lengthVerdict:E(0,e.descriptionMin,e.descriptionMax),keywordsSaturation:b("",""),readibility:h("")},"Post content":{content:"",length:0,lengthVerdict:E(0,e.postWordsMin),keywordsSaturation:v("",""),readibility:h("")}}}return x}(t)),i=r[0],l=r[1];return Object(n.useEffect)((function(){sessionStorage.setItem("analysers-state",JSON.stringify(i))})),a.a.createElement("section",{className:"analysers"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"column column-50"},a.a.createElement("form",null,a.a.createElement(c,{title:"Keywords",instructions:"The list of unique 5-15 keywords (or more) you want to target in your post. Separate keywords by the comma.",name:"Keywords",keywords:i.Keywords.content,placeholder:"Enter in a keywords",onChange:function(e){return l({type:"updateKeywords",payload:e})},className:"box"}),a.a.createElement(u,{title:"Post Title",instructions:"Copy & Paste your post title below or type it there.",state:i.Title,max:t.titleMax,className:"box"},a.a.createElement("textarea",{name:"title",cols:"30",rows:"5",value:i.Title.content,placeholder:"Enter in a post title",onChange:function(e){return l({type:"updateTitle",payload:e.target.value})}})),a.a.createElement(u,{title:"Post Description",instructions:"Copy & Paste your post description below or type it there.",state:i.Description,max:t.descriptionMax,className:"box"},a.a.createElement("textarea",{name:"description",cols:"30",rows:"5",value:i.Description.content,placeholder:"Enter in a post description",onChange:function(e){return l({type:"updateDescription",payload:e.target.value})}})),a.a.createElement(u,{title:"Post content",instructions:"Copy & Paste your post content below or type it there. Post analyser recognisez markdown semantic, so you can copy your post in markdown.",state:i["Post content"],max:t.postWordsMin,countWords:!0,className:"box"},a.a.createElement("textarea",{name:"content",cols:"30",rows:"10",value:i["Post content"].content,placeholder:"Enter in a post content",onChange:function(e){return l({type:"updateContent",payload:e.target.value})}})))),a.a.createElement("div",{className:"column column-offset-5 column-45 "},a.a.createElement(m,{status:i}))))},D=function(e){var t=e.title,r=e.children,n=e.className,o=void 0===n?"":n;return a.a.createElement("section",{className:"block-of-text "+o},a.a.createElement("header",null,a.a.createElement("h2",null,t)),r)},T=(r("8JX0"),r("2Ynb")),V=r.n(T),C=r("wKwe"),I=function(){return a.a.createElement("section",{className:"sponsors"},a.a.createElement("header",null,a.a.createElement("h2",null,"Our Sponsors")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(C.a,{href:"https://devakimbo.com/",title:"DEV Akimbo"},a.a.createElement("img",{alt:"Logo of DEV Akimbo",src:V.a})))))},W=(r("rgJv"),r("lgHX")),J=r.n(W),K=function(){var e=Object(o.useStaticQuery)("2762187734").site.siteMetadata.contact,t=(e.hash,e.name),r=e.url;return a.a.createElement("section",{className:"made-by"},a.a.createElement(C.a,{href:r,title:t},a.a.createElement("img",{alt:"Photo of "+t,src:J.a})),a.a.createElement("p",null,"Made by"," ",a.a.createElement(C.a,{href:r,title:t},t)))},A=r("SwDj");t.default=function(){var e=Object(o.useStaticQuery)("3159585216").site.siteMetadata.title;return a.a.createElement(i.a,{title:"Home"},a.a.createElement("section",{className:"row"},a.a.createElement("p",{className:"column introduction"},"The ",e," is a set of complementary SEO tools for JAMstack powered blogs 🔥 If you choose JAMstack over a popular CMS for your blogging platform, you probably found that some essential SEO tools are missing. This website offers a"," ",a.a.createElement("span",{style:{fontWeight:600,textDecoration:"underline"}},"set of powerful SEO tools for FREE")," ","to fill this gap 🙌",a.a.createElement("br",null),a.a.createElement("br",null),"Use the tools below to optimize the SEO of your blog posts' content, titles, and descriptions. When you will be happy with the results, just copy values from the fields into your blog post. Done, your post is ready to launch 🚀")),a.a.createElement(P,null),a.a.createElement("section",null,a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"column column-50"},a.a.createElement(D,{title:"About",className:"about"},a.a.createElement("p",null,"Hi, my name is Adam Faryna. I started the JAM SEO tools project out of frustration, I experienced after I moved"," ",a.a.createElement("a",{href:"https://devakimbo.com",target:"_blank"},"my blog")," ","from WordPress to JAMstack. While WP offers many SEO plugins that are extremely useful for anyone who blogs, I couldn’t find any similar solution for JAMstack. That’s how the idea of JAM SEO tools have born."),a.a.createElement("p",null,"I will add more tools and features over time. If you have a feature-request drop me a message at ",a.a.createElement(A.a,null),"."),a.a.createElement("p",null,"If you want to become a sponsor of this project drop me a message at ",a.a.createElement(A.a,null),"."))),a.a.createElement("div",{className:"column column-50 "},a.a.createElement(I,null)))),a.a.createElement(K,null))}},SwDj:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("wKwe");t.a=function(e){var t=e.title,r=void 0===t?"Twitter":t,n=Object(o.useStaticQuery)("788635192").site.siteMetadata.twitterContact;return a.a.createElement(i.a,{href:n,title:r})}},jadI:function(e,t,r){},lHz7:function(e,t,r){},lgHX:function(e,t,r){e.exports=r.p+"static/adamfaryna-round-0598365b281083d9643179272fe1414d.png"},rgJv:function(e,t,r){},wKwe:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.href,r=e.title,n=e.children,o=e.className,i=void 0===o?"":o;return n||(n=a.a.createElement("span",null,r)),a.a.createElement("a",{href:t,title:r,className:i,rel:"noopener noreferrer",target:"_blank"},n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-52838867652b3ba3fc64.js.map