/* ============================================================
 * DOMPurify 3.4.8 (内联) — (c) Cure53, Apache-2.0 / MPL-2.0
 * 用于评论富文本净化，无需再单独引入 CDN。
 * ============================================================ */
/*! @license DOMPurify 3.4.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.8/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t);else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const n=Object.entries,o=Object.setPrototypeOf,r=Object.isFrozen,i=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;let l=Object.freeze,c=Object.seal,s=Object.create,u="undefined"!=typeof Reflect&&Reflect,f=u.apply,m=u.construct;l||(l=function(e){return e}),c||(c=function(e){return e}),f||(f=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return e.apply(t,o)}),m||(m=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return new e(...n)});const p=L(Array.prototype.forEach),d=L(Array.prototype.lastIndexOf),h=L(Array.prototype.pop),g=L(Array.prototype.push),y=L(Array.prototype.splice),T=Array.isArray,b=L(String.prototype.toLowerCase),A=L(String.prototype.toString),S=L(String.prototype.match),E=L(String.prototype.replace),_=L(String.prototype.indexOf),N=L(String.prototype.trim),O=L(Number.prototype.toString),D=L(Boolean.prototype.toString),R="undefined"==typeof BigInt?null:L(BigInt.prototype.toString),w="undefined"==typeof Symbol?null:L(Symbol.prototype.toString),I=L(Object.prototype.hasOwnProperty),v=L(Object.prototype.toString),C=L(RegExp.prototype.test),x=(k=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(k,t)});var k;function L(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return f(e,t,o)}}function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;if(o&&o(e,null),!T(t))return e;let i=t.length;for(;i--;){let o=t[i];if("string"==typeof o){const e=n(o);e!==o&&(r(t)||(t[i]=e),o=e)}e[o]=!0}return e}function P(e){for(let t=0;t<e.length;t++){I(e,t)||(e[t]=null)}return e}function z(e){const o=s(null);for(const i of n(e)){var r=t(i,2);const n=r[0],a=r[1];I(e,n)&&(T(a)?o[n]=P(a):a&&"object"==typeof a&&a.constructor===Object?o[n]=z(a):o[n]=a)}return o}function U(e,t){for(;null!==e;){const n=a(e,t);if(n){if(n.get)return L(n.get);if("function"==typeof n.value)return L(n.value)}e=i(e)}return function(){return null}}const F=l(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=l(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),B=l(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),j=l(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),G=l(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),W=l(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Y=l(["#text"]),q=l(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),X=l(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$=l(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=l(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),V=c(/{{[\w\W]*|^[\w\W]*}}/g),Z=c(/<%[\w\W]*|^[\w\W]*%>/g),J=c(/\${[\w\W]*/g),Q=c(/^data-[\-\w.\u00B7-\uFFFF]+$/),ee=c(/^aria-[\-\w]+$/),te=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ne=c(/^(?:\w+script|data):/i),oe=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=c(/^html$/i),ie=c(/^[a-z][.\w]*(-[.\w]+)+$/i),ae=1,le=3,ce=7,se=8,ue=9,fe=11,me=function(){return"undefined"==typeof window?null:window};var pe=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me();const o=t=>e(t);if(o.version="3.4.8",o.removed=[],!t||!t.document||t.document.nodeType!==ue||!t.Element)return o.isSupported=!1,o;let r=t.document;const i=r,a=i.currentScript;t.DocumentFragment;const c=t.HTMLTemplateElement,u=t.Node,f=t.Element,m=t.NodeFilter,k=t.NamedNodeMap;void 0===k&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const L=t.DOMParser,P=t.trustedTypes,pe=f.prototype,de=U(pe,"cloneNode"),he=U(pe,"remove"),ge=U(pe,"nextSibling"),ye=U(pe,"childNodes"),Te=U(pe,"parentNode"),be=U(pe,"shadowRoot"),Ae=U(pe,"attributes"),Se=u&&u.prototype?U(u.prototype,"nodeType"):null,Ee=u&&u.prototype?U(u.prototype,"nodeName"):null;if("function"==typeof c){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let _e,Ne="",Oe=0;const De=function(e){if(Oe>0)throw x('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');Oe++;try{return _e.createHTML(e)}finally{Oe--}},Re=r,we=Re.implementation,Ie=Re.createNodeIterator,ve=Re.createDocumentFragment,Ce=Re.getElementsByTagName,xe=i.importNode;let ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};o.isSupported="function"==typeof n&&"function"==typeof Te&&we&&void 0!==we.createHTMLDocument;const Le=V,Me=Z,Pe=J,ze=Q,Ue=ee,Fe=ne,He=oe,Be=ie;let je=te,Ge=null;const We=M({},[...F,...H,...B,...G,...Y]);let Ye=null;const qe=M({},[...q,...X,...$,...K]);let Xe=Object.seal(s(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,Ke=null;const Ve=Object.seal(s(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ze=!0,Je=!0,Qe=!1,et=!0,tt=!1,nt=!0,ot=!1,rt=!1,it=!1,at=!1,lt=!1,ct=!1,st=!0,ut=!1;const ft="user-content-";let mt=!0,pt=!1,dt={},ht=null;const gt=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let yt=null;const Tt=M({},["audio","video","img","source","image","track"]);let bt=null;const At=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),St="http://www.w3.org/1998/Math/MathML",Et="http://www.w3.org/2000/svg",_t="http://www.w3.org/1999/xhtml";let Nt=_t,Ot=!1,Dt=null;const Rt=M({},[St,Et,_t],A);let wt=M({},["mi","mo","mn","ms","mtext"]),It=M({},["annotation-xml"]);const vt=M({},["title","style","font","a","script"]);let Ct=null;const xt=["application/xhtml+xml","text/html"];let kt=null,Lt=null;const Mt=r.createElement("form"),Pt=function(e){return e instanceof RegExp||e instanceof Function},zt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Lt&&Lt===e)return;e&&"object"==typeof e||(e={}),e=z(e),Ct=-1===xt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,kt="application/xhtml+xml"===Ct?A:b,Ge=I(e,"ALLOWED_TAGS")&&T(e.ALLOWED_TAGS)?M({},e.ALLOWED_TAGS,kt):We,Ye=I(e,"ALLOWED_ATTR")&&T(e.ALLOWED_ATTR)?M({},e.ALLOWED_ATTR,kt):qe,Dt=I(e,"ALLOWED_NAMESPACES")&&T(e.ALLOWED_NAMESPACES)?M({},e.ALLOWED_NAMESPACES,A):Rt,bt=I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)?M(z(At),e.ADD_URI_SAFE_ATTR,kt):At,yt=I(e,"ADD_DATA_URI_TAGS")&&T(e.ADD_DATA_URI_TAGS)?M(z(Tt),e.ADD_DATA_URI_TAGS,kt):Tt,ht=I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)?M({},e.FORBID_CONTENTS,kt):gt,$e=I(e,"FORBID_TAGS")&&T(e.FORBID_TAGS)?M({},e.FORBID_TAGS,kt):z({}),Ke=I(e,"FORBID_ATTR")&&T(e.FORBID_ATTR)?M({},e.FORBID_ATTR,kt):z({}),dt=!!I(e,"USE_PROFILES")&&(e.USE_PROFILES&&"object"==typeof e.USE_PROFILES?z(e.USE_PROFILES):e.USE_PROFILES),Ze=!1!==e.ALLOW_ARIA_ATTR,Je=!1!==e.ALLOW_DATA_ATTR,Qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,et=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,tt=e.SAFE_FOR_TEMPLATES||!1,nt=!1!==e.SAFE_FOR_XML,ot=e.WHOLE_DOCUMENT||!1,at=e.RETURN_DOM||!1,lt=e.RETURN_DOM_FRAGMENT||!1,ct=e.RETURN_TRUSTED_TYPE||!1,it=e.FORCE_BODY||!1,st=!1!==e.SANITIZE_DOM,ut=e.SANITIZE_NAMED_PROPS||!1,mt=!1!==e.KEEP_CONTENT,pt=e.IN_PLACE||!1,je=function(e){try{return C(e,""),!0}catch(e){return!1}}(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:te,Nt="string"==typeof e.NAMESPACE?e.NAMESPACE:_t,wt=I(e,"MATHML_TEXT_INTEGRATION_POINTS")&&e.MATHML_TEXT_INTEGRATION_POINTS&&"object"==typeof e.MATHML_TEXT_INTEGRATION_POINTS?z(e.MATHML_TEXT_INTEGRATION_POINTS):M({},["mi","mo","mn","ms","mtext"]),It=I(e,"HTML_INTEGRATION_POINTS")&&e.HTML_INTEGRATION_POINTS&&"object"==typeof e.HTML_INTEGRATION_POINTS?z(e.HTML_INTEGRATION_POINTS):M({},["annotation-xml"]);const t=I(e,"CUSTOM_ELEMENT_HANDLING")&&e.CUSTOM_ELEMENT_HANDLING&&"object"==typeof e.CUSTOM_ELEMENT_HANDLING?z(e.CUSTOM_ELEMENT_HANDLING):s(null);if(Xe=s(null),I(t,"tagNameCheck")&&Pt(t.tagNameCheck)&&(Xe.tagNameCheck=t.tagNameCheck),I(t,"attributeNameCheck")&&Pt(t.attributeNameCheck)&&(Xe.attributeNameCheck=t.attributeNameCheck),I(t,"allowCustomizedBuiltInElements")&&"boolean"==typeof t.allowCustomizedBuiltInElements&&(Xe.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),tt&&(Je=!1),lt&&(at=!0),dt&&(Ge=M({},Y),Ye=s(null),!0===dt.html&&(M(Ge,F),M(Ye,q)),!0===dt.svg&&(M(Ge,H),M(Ye,X),M(Ye,K)),!0===dt.svgFilters&&(M(Ge,B),M(Ye,X),M(Ye,K)),!0===dt.mathMl&&(M(Ge,G),M(Ye,$),M(Ye,K))),Ve.tagCheck=null,Ve.attributeCheck=null,I(e,"ADD_TAGS")&&("function"==typeof e.ADD_TAGS?Ve.tagCheck=e.ADD_TAGS:T(e.ADD_TAGS)&&(Ge===We&&(Ge=z(Ge)),M(Ge,e.ADD_TAGS,kt))),I(e,"ADD_ATTR")&&("function"==typeof e.ADD_ATTR?Ve.attributeCheck=e.ADD_ATTR:T(e.ADD_ATTR)&&(Ye===qe&&(Ye=z(Ye)),M(Ye,e.ADD_ATTR,kt))),I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)&&M(bt,e.ADD_URI_SAFE_ATTR,kt),I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.FORBID_CONTENTS,kt)),I(e,"ADD_FORBID_CONTENTS")&&T(e.ADD_FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.ADD_FORBID_CONTENTS,kt)),mt&&(Ge["#text"]=!0),ot&&M(Ge,["html","head","body"]),Ge.table&&(M(Ge,["tbody"]),delete $e.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const t=_e;_e=e.TRUSTED_TYPES_POLICY;try{Ne=De("")}catch(e){throw _e=t,e}}else void 0===_e&&null!==e.TRUSTED_TYPES_POLICY&&(_e=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(P,a)),_e&&"string"==typeof Ne&&(Ne=De(""));(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&Ge===We&&(Ge=z(Ge)),ke.uponSanitizeAttribute.length>0&&Ye===qe&&(Ye=z(Ye)),l&&l(e),Lt=e},Ut=M({},[...H,...B,...j]),Ft=M({},[...G,...W]),Ht=function(e){g(o.removed,{element:e});try{Te(e).removeChild(e)}catch(t){he(e)}},Bt=function(e,t){try{g(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){g(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(at||lt)try{Ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},jt=function(e){let t=null,n=null;if(it)e="<remove></remove>"+e;else{const t=S(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ct&&Nt===_t&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=_e?De(e):e;if(Nt===_t)try{t=(new L).parseFromString(o,Ct)}catch(e){}if(!t||!t.documentElement){t=we.createDocument(Nt,"template",null);try{t.documentElement.innerHTML=Ot?Ne:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Nt===_t?Ce.call(t,ot?"html":"body")[0]:ot?t.documentElement:i},Gt=function(e){return Ie.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Wt=function(e){var t,n;e.normalize();const o=Ie.call(e.ownerDocument||e,e,m.SHOW_TEXT|m.SHOW_COMMENT|m.SHOW_CDATA_SECTION|m.SHOW_PROCESSING_INSTRUCTION,null);let r=o.nextNode();for(;r;){let e=r.data;p([Le,Me,Pe],t=>{e=E(e,t," ")}),r.data=e,r=o.nextNode()}const i=null!==(t=null===(n=e.querySelectorAll)||void 0===n?void 0:n.call(e,"template"))&&void 0!==t?t:[];p(Array.from(i),e=>{qt(e.content)&&Wt(e.content)})},Yt=function(e){const t=Ee?Ee(e):null;return"string"==typeof t&&("form"===kt(t)&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||e.attributes!==Ae(e)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes||e.nodeType!==Se(e)||e.childNodes!==ye(e)))},qt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return Se(e)===fe}catch(e){return!1}},Xt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return"number"==typeof Se(e)}catch(e){return!1}};function $t(e,t,n){p(e,e=>{e.call(o,t,n,Lt)})}const Kt=function(e){let t=null;if($t(ke.beforeSanitizeElements,e,null),Yt(e))return Ht(e),!0;const n=kt(Ee?Ee(e):e.nodeName);if($t(ke.uponSanitizeElement,e,{tagName:n,allowedTags:Ge}),nt&&e.hasChildNodes()&&!Xt(e.firstElementChild)&&C(/<[/\w!]/g,e.innerHTML)&&C(/<[/\w!]/g,e.textContent))return Ht(e),!0;if(nt&&e.namespaceURI===_t&&"style"===n&&Xt(e.firstElementChild))return Ht(e),!0;if(e.nodeType===ce)return Ht(e),!0;if(nt&&e.nodeType===se&&C(/<[/\w]/g,e.data))return Ht(e),!0;if($e[n]||!(Ve.tagCheck instanceof Function&&Ve.tagCheck(n))&&!Ge[n]){if(!$e[n]&&Jt(n)){if(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n))return!1;if(Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))return!1}if(mt&&!ht[n]){const t=Te(e),n=ye(e);if(n&&t){for(let o=n.length-1;o>=0;--o){const r=de(n[o],!0);t.insertBefore(r,ge(e))}}}return Ht(e),!0}return((Se?Se(e):e.nodeType)!==ae||function(e){let t=Te(e);t&&t.tagName||(t={namespaceURI:Nt,tagName:"template"});const n=b(e.tagName),o=b(t.tagName);return!!Dt[e.namespaceURI]&&(e.namespaceURI===Et?t.namespaceURI===_t?"svg"===n:t.namespaceURI===St?"svg"===n&&("annotation-xml"===o||wt[o]):Boolean(Ut[n]):e.namespaceURI===St?t.namespaceURI===_t?"math"===n:t.namespaceURI===Et?"math"===n&&It[o]:Boolean(Ft[n]):e.namespaceURI===_t?!(t.namespaceURI===Et&&!It[o])&&!(t.namespaceURI===St&&!wt[o])&&!Ft[n]&&(vt[n]||!Ut[n]):!("application/xhtml+xml"!==Ct||!Dt[e.namespaceURI]))}(e))&&("noscript"!==n&&"noembed"!==n&&"noframes"!==n||!C(/<\/no(script|embed|frames)/i,e.innerHTML))?(tt&&e.nodeType===le&&(t=e.textContent,p([Le,Me,Pe],e=>{t=E(t,e," ")}),e.textContent!==t&&(g(o.removed,{element:e.cloneNode()}),e.textContent=t)),$t(ke.afterSanitizeElements,e,null),!1):(Ht(e),!0)},Vt=function(e,t,n){if(Ke[t])return!1;if(st&&("id"===t||"name"===t)&&(n in r||n in Mt))return!1;const o=Ye[t]||Ve.attributeCheck instanceof Function&&Ve.attributeCheck(t,e);if(Je&&!Ke[t]&&C(ze,t));else if(Ze&&C(Ue,t));else if(!o||Ke[t]){if(!(Jt(e)&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,e)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(e))&&(Xe.attributeNameCheck instanceof RegExp&&C(Xe.attributeNameCheck,t)||Xe.attributeNameCheck instanceof Function&&Xe.attributeNameCheck(t,e))||"is"===t&&Xe.allowCustomizedBuiltInElements&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))))return!1}else if(bt[t]);else if(C(je,E(n,He,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!yt[e]){if(Qe&&!C(Fe,E(n,He,"")));else if(n)return!1}else;return!0},Zt=M({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Jt=function(e){return!Zt[b(e)]&&C(Be,e)},Qt=function(e){$t(ke.beforeSanitizeAttributes,e,null);const t=e.attributes;if(!t||Yt(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ye,forceKeepAttr:void 0};let r=t.length;for(;r--;){const i=t[r],a=i.name,l=i.namespaceURI,c=i.value,s=kt(a),u=c;let f="value"===a?u:N(u);if(n.attrName=s,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,$t(ke.uponSanitizeAttribute,e,n),f=n.attrValue,!ut||"id"!==s&&"name"!==s||0===_(f,ft)||(Bt(a,e),f=ft+f),nt&&C(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){Bt(a,e);continue}if("attributename"===s&&S(f,"href")){Bt(a,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr){Bt(a,e);continue}if(!et&&C(/\/>/i,f)){Bt(a,e);continue}tt&&p([Le,Me,Pe],e=>{f=E(f,e," ")});const m=kt(e.nodeName);if(Vt(m,s,f)){if(_e&&"object"==typeof P&&"function"==typeof P.getAttributeType)if(l);else switch(P.getAttributeType(m,s)){case"TrustedHTML":f=De(f);break;case"TrustedScriptURL":f=_e.createScriptURL(f)}if(f!==u)try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),Yt(e)?Ht(e):h(o.removed)}catch(t){Bt(a,e)}}else Bt(a,e)}$t(ke.afterSanitizeAttributes,e,null)},en=function(e){let t=null;const n=Gt(e);for($t(ke.beforeSanitizeShadowDOM,e,null);t=n.nextNode();){$t(ke.uponSanitizeShadowNode,t,null),Kt(t),Qt(t),qt(t.content)&&en(t.content);if((Se?Se(t):t.nodeType)===ae){const e=be?be(t):t.shadowRoot;qt(e)&&(tn(e),en(e))}}$t(ke.afterSanitizeShadowDOM,e,null)},tn=function(e){const t=Se?Se(e):e.nodeType;if(t===ae){const t=be?be(e):e.shadowRoot;qt(t)&&(tn(t),en(t))}const n=ye?ye(e):e.childNodes;if(!n)return;const o=[];p(n,e=>{g(o,e)});for(const e of o)tn(e);if(t===ae){const t=Ee?Ee(e):null;if("string"==typeof t&&"template"===kt(t)){const t=e.content;qt(t)&&tn(t)}}};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,a=null,l=null;if(Ot=!e,Ot&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Xt(e)&&"string"!=typeof(e=function(e){switch(typeof e){case"string":return e;case"number":return O(e);case"boolean":return D(e);case"bigint":return R?R(e):"0";case"symbol":return w?w(e):"Symbol()";case"undefined":default:return v(e);case"function":case"object":{if(null===e)return v(e);const t=e,n=U(t,"toString");if("function"==typeof n){const e=n(t);return"string"==typeof e?e:v(e)}return v(e)}}}(e)))throw x("dirty is not a string, aborting");if(!o.isSupported)return e;if(rt||zt(t),o.removed=[],"string"==typeof e&&(pt=!1),pt){const t=Ee?Ee(e):e.nodeName;if("string"==typeof t){const e=kt(t);if(!Ge[e]||$e[e])throw x("root node is forbidden and cannot be sanitized in-place")}if(Yt(e))throw x("root node is clobbered and cannot be sanitized in-place");tn(e)}else if(Xt(e))n=jt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===ae&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r),tn(r);else{if(!at&&!tt&&!ot&&-1===e.indexOf("<"))return _e&&ct?De(e):e;if(n=jt(e),!n)return at?null:ct?Ne:""}n&&it&&Ht(n.firstChild);const c=Gt(pt?e:n);for(;a=c.nextNode();)Kt(a),Qt(a),qt(a.content)&&en(a.content);if(pt)return tt&&Wt(e),e;if(at){if(tt&&Wt(n),lt)for(l=ve.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(Ye.shadowroot||Ye.shadowrootmode)&&(l=xe.call(i,l,!0)),l}let s=ot?n.outerHTML:n.innerHTML;return ot&&Ge["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&C(re,n.ownerDocument.doctype.name)&&(s="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+s),tt&&p([Le,Me,Pe],e=>{s=E(s,e," ")}),_e&&ct?De(s):s},o.setConfig=function(){zt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),rt=!0},o.clearConfig=function(){Lt=null,rt=!1},o.isValidAttribute=function(e,t,n){Lt||zt({});const o=kt(e),r=kt(t);return Vt(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&g(ke[e],t)},o.removeHook=function(e,t){if(void 0!==t){const n=d(ke[e],t);return-1===n?void 0:y(ke[e],n,1)[0]}return h(ke[e])},o.removeHooks=function(e){ke[e]=[]},o.removeAllHooks=function(){ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},o}();return pe});
//# sourceMappingURL=purify.min.js.map

/* ============================================================
 * VirtualList 评论模块（已做 XSS 加固）
 * ============================================================ */
(async function(doc, win, layer, sbar) {

    // iOS 普通页面直接启用保护，不依赖调试参数或额外的图片调度模块。
    const isIOS = /iPad|iPhone|iPod/.test(win.navigator.userAgent);
    const commentHeightHoldEnabled = isIOS;
    // 只在旧高度仍被保护时定位，不能先缩短页面再补滚动。
    const commentAutoScrollEnabled = commentHeightHoldEnabled;
    // 500ms 只是首次安全检查的等待时间，不是强制释放占位的期限。
    const commentHeightHoldDelay = 500;
    // 给滚动范围的取整和视口尺寸变化预留 8px 余量。
    const commentHeightHoldSafety = 8;

    // 初始化
    const init = () => {
        const commentRoot = doc.querySelector('#comments');
        // 同一评论根节点只创建一次状态模型和事件监听，避免重复初始化造成一次点击发送多次请求。
        // 翻页、切换排序及回复弹层只替换内部列表，继续复用根节点上的点赞状态。
        if (!commentRoot || commentRoot.__commentLikes) return;
        // 回复表单从主表单克隆，统一继承 500 字输入上限。
        commentRoot.querySelectorAll('.respond textarea[name="text"]').forEach((textarea) => {
            textarea.maxLength = 500;
        });
        // ====== 安全工具函数 ======

        // HTML 文本 / 属性转义:用于 author、date 等纯文本字段
        const escapeHtml = (value) => {
            if (value === null || value === undefined) return '';
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        };

        // ID 白名单:只允许字母/数字/下划线/连字符,否则回退 '0'
        // 用于内联 onclick,杜绝引号闭合 + JS 注入
        const safeId = (value) => {
            const s = String(value ?? '');
            return /^[\w-]+$/.test(s) ? s : '0';
        };

        // 富文本净化:只允许加粗、斜体、链接等安全标签,用于 text 字段
        const sanitizeRich = (() => {
            if (win.DOMPurify) {
                // 给所有链接强制加安全属性(新标签页打开 + 断开 opener + nofollow)
                win.DOMPurify.addHook('afterSanitizeAttributes', (node) => {
                    if (node.tagName === 'A') {
                        node.setAttribute('target', '_blank');
                        node.setAttribute('rel', 'noopener noreferrer nofollow');
                    }
                });
            }
            return (html) => {
                if (html === null || html === undefined) return '';
                // 兜底:DOMPurify 未加载时退化为纯文本转义,绝不直接输出原文
                if (!win.DOMPurify) return escapeHtml(html);
                return win.DOMPurify.sanitize(String(html), {
                    ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'u', 's', 'a', 'br', 'p', 'blockquote', 'code', 'pre', 'ul', 'ol', 'li'],
                    ALLOWED_ATTR: ['href', 'title'],
                    // 只允许这些协议的链接,自动拦掉 javascript:/data:
                    ALLOWED_URI_REGEXP: /^(?:https?|mailto):/i,
                });
            };
        })();

        // ====== 业务逻辑 ======

        // 获取参数
        const script = document.currentScript || document.querySelector('script[src$="virtuallist.js"]');
        const api = script.getAttribute('data-api');

        // 评论排序模型开始
        // 接口一次返回完整列表，本模型只排列一级评论，子回复保留接口提供的顺序。
        // 每个排序结果都是浅拷贝数组：评论对象仍与点赞模型共用，数量变化可以在重绘时继续显示。
        // 排序依据在创建模型时保存；点赞接口没有返回新热度，因此点赞后不更新热度、不清除排序缓存。
        const createCommentSorter = (comments) => {
          const source = Array.isArray(comments) ? comments : [];
          const isMissing = (value) => value == null || (typeof value === 'string' && value.trim() === '');
          const readNumber = (value) => {
            if (typeof value !== 'number' && typeof value !== 'string') return null;
            if (isMissing(value)) return null;
            const number = Number(value);
            return Number.isFinite(number) ? number : null;
          };
          const readCount = (value) => {
            const number = readNumber(value);
            return number !== null && number >= 0 ? number : null;
          };
          const readTime = (comment) => {
            // 优先使用 created；只有字段缺失时才尝试解析绝对日期，避免用“几分钟前”推算排序时间。
            // created 存在但无效时直接标为未知，不能悄悄用精度更低的 date 覆盖错误数据。
            if (!isMissing(comment.created)) {
              const created = readCount(comment.created);
              if (created === null) return null;
              // 按当前数据的数量级区分秒和毫秒（不少于 1e11 时视为毫秒），值为 0 也有效。
              const milliseconds = created >= 1e11 ? created : created * 1000;
              return Number.isFinite(new Date(milliseconds).getTime()) ? milliseconds : null;
            }
            if (typeof comment.date !== 'string') return null;
            const match = /^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}):(\d{2}))?$/.exec(comment.date.trim());
            if (!match) return null;
            const [, year, month, day, hour = '0', minute = '0', second = '0'] = match;
            const parts = [year, month, day, hour, minute, second].map(Number);
            const date = new Date(0);
            date.setFullYear(parts[0], parts[1] - 1, parts[2]);
            date.setHours(parts[3], parts[4], parts[5], 0);
            // 拒绝自动进位后的日期（如 2 月 30 日），避免误判为有效日期。
            if (date.getFullYear() !== parts[0] || date.getMonth() !== parts[1] - 1 ||
                date.getDate() !== parts[2] || date.getHours() !== parts[3] ||
                date.getMinutes() !== parts[4] || date.getSeconds() !== parts[5]) return null;
            return date.getTime();
          };
          const readHeat = (comment) => {
            // 有效的 hot_score 是首选依据；缺失或无效时，沿用旧数据的“点赞数 + 回复数 × 1.5”兜底。
            // 兜底也必须有完整数据，不能把缺失字段当作 0；这个分数只在模型初始化时计算。
            const score = readNumber(comment.hot_score);
            if (score !== null) return score;
            const likes = readCount(comment.like_num);
            const replies = isMissing(comment.reply_num) && Array.isArray(comment.children)
              ? comment.children.length
              : readCount(comment.reply_num);
            if (likes === null || replies === null) return null;
            const heat = likes + replies * 1.5;
            return Number.isFinite(heat) ? heat : null;
          };
          const childrenById = new Map();
          // 父评论通过 coid 关联子回复，不能使用数组下标：切换排序后，同一下标可能已是另一条评论。
          // 同时保存原始下标，用于在置顶、热度和时间都相同时维持确定的顺序。
          const records = source.map((comment, index) => {
            const valid = comment !== null && typeof comment === 'object';
            if (valid && comment.coid != null) {
              childrenById.set(String(comment.coid), Array.isArray(comment.children) ? comment.children : []);
            }
            return {
              comment,
              index,
              pinned: valid && (comment.is_top === 1 || comment.is_top === '1') ? 1 : 0,
              god: valid && (comment.is_god === 1 || comment.is_god === '1') ? 1 : 0,
              time: valid ? readTime(comment) : null,
              heat: valid ? readHeat(comment) : null,
            };
          });
          const supported = {
            latest: records.length > 0 && records.every((record) => record.time !== null),
            hot: records.length > 0 && records.every((record) => record.heat !== null),
          };
          // 任一一级评论缺少某种排序所需的字段时，禁用该模式并保留原顺序，避免部分数据被猜测排序。
          // 此处缓存的是排列结果，与下方用于合并网络请求的 Promise 缓存相互独立。
          const cache = new Map();
          const supports = (mode) => supported[mode] === true;
          const compareTime = (left, right) => {
            // 已知日期排在未知日期之前，保证混合数据排序的传递性。
            if (left.time === null) return right.time === null ? 0 : 1;
            if (right.time === null) return -1;
            return right.time - left.time;
          };
          return {
            supports,
            get(mode) {
              if (!supports(mode)) return source;
              if (!cache.has(mode)) {
                // 两种模式都先按置顶、再按神评排序；最热再比较热度，最后按时间从新到旧和原始下标确定顺序。
                const sorted = records.slice().sort((left, right) => {
                  return right.pinned - left.pinned || right.god - left.god ||
                    (mode === 'hot' ? right.heat - left.heat : 0) ||
                    compareTime(left, right) || left.index - right.index;
                });
                cache.set(mode, sorted.map((record) => record.comment));
              }
              return cache.get(mode);
            },
            getChildren(coid) {
              return childrenById.get(String(coid)) || [];
            },
          };
        };
        // 评论排序模型结束

        // 评论点赞模型开始
        // 页面内共享状态；排序、分页和弹层只重新渲染，不重新创建访客身份。
        // 访客身份 vid 持久化在 localStorage（后端按 vid 去重，一个浏览器长期用一个）；选中态和取消凭证在 localStorage 保留 1 小时，刷新后恢复。
        // send 负责请求，onChange 负责同步界面；注入时钟和定时器便于在项目外验证到期及并发场景。
        const createCommentLikes = ({ send, onChange, onError, now = Date.now,
            setTimer = setTimeout, clearTimer = clearTimeout }) => {
            // 后端按 vid 对同一评论做去重（取消后释放），页面内不再有“到期后换新身份再赞”的轮次，因此永不到期。
            const cooldownMs = Infinity;
            // 每个 coid 只保存一份状态，主列表、子回复预览和弹层中的多个按钮共同使用它。
            // count / liked 用于展示，可能处于乐观更新中；confirmedCount 仅保存已确认的数量。
            // round：idle 表示未点赞，liked 表示本轮已成功，renewable 表示已到期可再赞，unknown 表示成功时间未知。
            // lastLikedAt 记录最近一次已确认点赞的响应时间；pending 和 nextActionAt 分别管理请求锁与一秒防连点。
            // vid / token 必须属于该评论同一次点赞；comments 保存对应原始对象，成功后统一回写 like_num。
            const states = new Map();
            // currentVid 只供普通点赞复用，取消必须读取该评论自己的凭证，不能直接使用这里的最新身份。
            const VID_STORAGE_KEY = 'cmt_vid';
            const readStoredVid = () => { try { return String(localStorage.getItem(VID_STORAGE_KEY) || ''); } catch (error) { return ''; } };
            const storeVid = (value) => { try { localStorage.setItem(VID_STORAGE_KEY, value); } catch (error) { /* 无法持久化时仅用内存 */ } };
            let currentVid = readStoredVid();
            // 已赞记录（coid => 点赞时间、凭证、当时数量）持久化 1 小时，与后端取消令牌有效期一致；刷新后据此恢复选中态并可取消，过期即丢弃。
            const LIKES_STORAGE_KEY = 'cmt_likes';
            const LIKE_KEEP_MS = 3600 * 1000;
            const readStoredLikes = () => {
                let likes = null;
                try { likes = JSON.parse(localStorage.getItem(LIKES_STORAGE_KEY)); } catch (error) { /* 读不到按无记录处理 */ }
                if (!likes || typeof likes !== 'object') return {};
                Object.keys(likes).forEach((coid) => { if (!(likes[coid]?.at + LIKE_KEEP_MS > now())) delete likes[coid]; });
                return likes;
            };
            // 写入前重新读取，避免覆盖其他标签页刚写入的记录；record 为空表示删除。
            const storeLike = (coid, record) => {
                const likes = readStoredLikes();
                if (record) likes[coid] = record; else delete likes[coid];
                try { localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likes)); } catch (error) { /* 无法持久化时仅用内存 */ }
            };
            const storedLikes = readStoredLikes();
            // issuingIdentity 指向当前签发队列的尾部；identityVersion 用于识别旧身份发出的在途请求。
            let issuingIdentity = null;
            let identityVersion = 0;
            let expiryTimer = null;
            let suspended = false;
            const countOf = (value) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
            // 请求进行中不切换轮次，避免把已发出的取消动作改成点赞；请求结束后再校正是否到期。
            // unknown 没有可信的本轮成功时间，即使保留着旧轮时间，也不能据此开放新的累计机会。
            const isExpired = (state) => !state.pending && state.round === 'liked'
                && state.lastLikedAt !== null && now() >= state.lastLikedAt + cooldownMs;
            const expire = (state) => {
                if (!isExpired(state)) return false;
                // 到期只撤掉选中外观并允许下一轮，保留累计数量和历史成功时间，不自动发送请求。
                // 旧凭证不用于新轮点赞，下一次成功响应会覆盖该评论的凭证对。
                state.round = 'renewable';
                state.liked = false;
                return true;
            };
            const read = (coid) => {
                const state = states.get(String(coid));
                // 定时器在后台可能延迟，重绘时也按真实时间计算外观。
                // 这里只返回展示结果，不在渲染过程中发请求；真正点击时还会再次检查到期状态。
                return state ? { count: state.count, liked: isExpired(state) ? false : state.liked,
                    pending: state.pending, disabled: state.pending }
                    : { count: 0, liked: false, pending: false, disabled: true };
            };
            const publish = (coid) => onChange(coid, read(coid));
            const cancelExpiryTimer = () => {
                if (expiryTimer !== null) clearTimer(expiryTimer);
                expiryTimer = null;
            };
            const scheduleExpiry = () => {
                // 全页只保留一个到期定时器，选择最早的截止时间；触发后批量处理已到期项并重新安排。
                // 暂停期间不调度，请求中的评论也不参与计算，避免过期时间反复触发零延迟检查。
                cancelExpiryTimer();
                if (suspended) return;
                let deadline = Infinity;
                states.forEach((state) => {
                    if (!state.pending && state.round === 'liked' && state.lastLikedAt !== null) {
                        deadline = Math.min(deadline, state.lastLikedAt + cooldownMs);
                    }
                });
                if (Number.isFinite(deadline)) {
                    expiryTimer = setTimer(refresh, Math.max(0, Math.min(cooldownMs, deadline - now())));
                }
            };
            const refresh = () => {
                states.forEach((state, coid) => { if (expire(state)) publish(coid); });
                scheduleExpiry();
            };
            const suspend = () => { suspended = true; cancelExpiryTimer(); };
            const resume = () => { suspended = false; refresh(); };
            // 只串行签发新身份。已有身份的普通请求可以并发，取消不等待轮换。
            const issueIdentity = async (operation) => {
                const preceding = issuingIdentity;
                const request = (async () => {
                    if (preceding) await preceding;
                    // 每条已到期评论的新一轮都需要独立签发，不能复用前一条刚取得的 vid。
                    return operation('');
                })();
                // 某条新一轮请求失败，不阻断其他已明确点击的新一轮请求。
                // settled 仅负责让队列继续；原请求的错误仍会通过下面的 await 交给当前评论回退和提示。
                const settled = request.then(() => {}, () => {});
                issuingIdentity = settled;
                try { await request; } finally {
                    // 若后续请求已经接到队尾，旧请求结束时不能清空新队尾，否则普通点赞会提前绕过轮换。
                    if (issuingIdentity === settled) issuingIdentity = null;
                }
            };
            const register = (comments) => {
                // 递归登记一级评论及子回复；再次遇到同一 coid 时保留已有凭证、计时和请求状态。
                // 原始对象只接收 confirmedCount，不能把请求中的临时加减数当成已确认数据。
                for (const comment of comments) {
                    const coid = String(comment?.coid ?? '');
                    if (/^[1-9]\d*$/.test(coid)) {
                        if (!states.has(coid)) {
                            states.set(coid, { count: countOf(comment.like_num), confirmedCount: countOf(comment.like_num), liked: false, pending: false,
                                round: 'idle', lastLikedAt: null,
                                vid: '', token: '', nextActionAt: 0, comments: new Set() });
                            // 一小时内赞过：恢复选中态和取消凭证。评论数据可能还没包含这一赞（落库有延迟），数量取两者较大值。
                            const saved = storedLikes[coid];
                            if (saved) {
                                const count = Math.max(countOf(comment.like_num), countOf(saved.count));
                                Object.assign(states.get(coid), { count, confirmedCount: count, liked: true, round: 'liked',
                                    lastLikedAt: saved.at, vid: String(saved.vid || ''), token: String(saved.token || '') });
                            }
                        }
                        const state = states.get(coid);
                        state.comments.add(comment);
                        comment.like_num = state.confirmedCount;
                    }
                    if (Array.isArray(comment?.children)) register(comment.children);
                }
            };
            const toggle = async (value) => {
                const coid = String(value);
                const state = states.get(coid);
                if (!state || state.pending || now() < state.nextActionAt) return;
                // 先校时再确定动作：未到期的已点赞项执行取消，已到期项执行不带旧 vid 的新一轮点赞。
                expire(state);
                const unlike = state.liked;
                // 没有可用的取消凭证（已点过赞但凭证不在本页，或已超过有效期）时不发请求也不提示，保持已赞外观。
                if (unlike && (state.round === 'unknown' || !state.vid || !state.token
                    || now() >= state.lastLikedAt + LIKE_KEEP_MS)) return;
                // 首次点击需要签发身份；若首次签发已在进行，其他普通点赞应等待并复用其结果。
                // renewable 始终独立签发；取消成功后的 idle 则复用页面当前 vid，不必再等待三小时。
                const needsNewIdentity = !unlike && (state.round === 'renewable' || (!currentVid && !issuingIdentity));
                // 保存操作前的展示快照。每条评论有独立请求锁，失败只恢复自身，不回退其他评论或全局身份。
                const previous = { count: state.count, liked: state.liked };
                let confirmed = false;
                let alreadyLiked = false;
                // 先更新共享展示状态；原始数据和取消凭证仍等待服务端确认。
                state.liked = !unlike;
                state.count = Math.max(0, previous.count + (unlike ? -1 : 1));
                state.pending = true;
                state.nextActionAt = now() + 1000;
                publish(coid);
                scheduleExpiry();
                try {
                    const operation = async (requestVid) => {
                        // 在实际发送时记录身份版本和请求所用的 vid，排队期间其他请求可能已经更新页面身份。
                        const requestVersion = identityVersion;
                        const params = { coid };
                        if (requestVid) params.vid = requestVid;
                        if (unlike) Object.assign(params, { act: 'unlike', token: state.token });
                        const { status, body } = await send(params);
                        // HTTP 成功不等于业务成功，还需检查业务码及返回的 coid，防止把异常响应提交到错误评论。
                        if (status !== 200 || body?.code !== 200) {
                            const message = typeof body?.msg === 'string' ? body.msg : '操作失败，请稍后再试';
                            if (!unlike && status === 400 && body?.code === 400 && message === '您已点过赞') {
                                alreadyLiked = true;
                            }
                            throw new Error(message);
                        }
                        if (String(body.data?.coid) !== coid) throw new Error('接口响应异常，请稍后再试');
                        // 数量已在点击时乐观加减，这里只确认并回写，不能再加减一次。
                        // like_num 已包含 APP 和网页点赞，不能另外加上 web_like_num。
                        confirmed = true;
                        state.confirmedCount = state.count;
                        state.comments.forEach((comment) => { comment.like_num = state.confirmedCount; });
                        if (unlike) {
                            // 仅清除该评论这一轮的记录；currentVid 和其他评论的凭证继续保留。
                            // 已成功消费的 token 不再复用，再次点赞会取得新的取消凭证。
                            state.round = 'idle';
                            state.lastLikedAt = null;
                            state.vid = '';
                            state.token = '';
                            storeLike(coid, null);
                        } else {
                            state.round = 'liked';
                            // 从成功响应时刻开始三小时周期，排队和网络等待不计入本轮冷却。
                            state.lastLikedAt = now();
                            const responseVid = typeof body.data.vid === 'string' ? body.data.vid : '';
                            // 必须使用请求快照配对，不能拿另一个响应刚更新的全局身份。
                            state.vid = responseVid || requestVid;
                            state.token = typeof body.data.token === 'string' ? body.data.token : '';
                            // 旧身份请求晚到时，只保存本条凭证，不覆盖已轮换的页面身份。
                            // 签发请求不带 vid 且已串行，可更新当前身份；普通请求则必须仍属于当前身份版本。
                            if (responseVid && (!requestVid || requestVersion === identityVersion)) {
                                currentVid = responseVid;
                                storeVid(responseVid);
                                identityVersion += 1;
                            }
                            // 成功响应缺少凭证时保留已确认的加数，但不能伪造 token 来允许取消。
                            if (!state.vid || !state.token) onError('点赞成功，但接口未返回完整取消凭证，暂时无法取消');
                            else storeLike(coid, { at: state.lastLikedAt, vid: state.vid, token: state.token, count: state.confirmedCount });
                        }
                    };
                    if (unlike) {
                        await operation(state.vid);
                    } else if (needsNewIdentity) {
                        await issueIdentity(operation);
                    } else {
                        // 等待已排队的轮换全部结束，再取当前身份；首次失败不自动补发签发。
                        while (issuingIdentity) await issuingIdentity;
                        if (!currentVid) throw new Error('访客凭证获取失败，请稍后再试');
                        await operation(currentVid);
                    }
                } catch (error) {
                    if (!confirmed) {
                        state.count = previous.count;
                        state.liked = alreadyLiked || previous.liked;
                        // 旧轮时间不能当作未知新轮的成功时间，旧轮 token 也不能用于取消新轮。
                        // “已点过赞”只恢复已选外观并撤回临时加数，不推算成功时间，也不自动申请下一轮身份。
                        if (alreadyLiked) state.round = 'unknown';
                    }
                    // “已点过赞”只把按钮恢复成已赞，不提示。
                    if (!alreadyLiked) onError(error?.message || '操作失败，请稍后再试');
                } finally {
                    state.pending = false;
                    // 取消请求可能跨过三小时截止点；即使失败，也应保留数量并恢复为到期后的可再赞状态。
                    expire(state);
                    publish(coid);
                    scheduleExpiry();
                }
            };
            return { register, read, toggle, refresh, suspend, resume };
        };
        // 评论点赞模型结束

        const updateLikeButton = (button, state) => {
            button.classList.toggle('is-active', state.liked);
            button.disabled = state.disabled;
            button.setAttribute('aria-pressed', String(state.liked));
            button.setAttribute('aria-busy', String(state.pending));
            button.setAttribute('aria-label', `${state.liked ? '取消点赞' : '点赞'}，点赞数 ${state.count}`);
            button.querySelector('.comment-like__count').textContent = state.count;
        };
        const syncLikeButtons = (coid) => {
            // 同一评论可能同时出现在预览和弹层，必须更新所有匹配按钮，不能只取一个相同的元素 ID。
            // 不传 coid 时用于整批重绘后的同步，补上构建页面期间可能发生的请求结果或状态变化。
            commentRoot.querySelectorAll('button.comment-like[data-coid]').forEach((button) => {
                if (coid === undefined || button.dataset.coid === coid) {
                    updateLikeButton(button, commentLikes.read(button.dataset.coid));
                }
            });
        };
        const commentLikes = createCommentLikes({
            send: async (params) => {
                // 使用同源路径和表单编码；本地联调由代理转发，业务脚本不固定测试后端域名。
                // 15 秒只限制前端等待，超时或断网不代表服务端未处理，所以这里不自动重试或发送补偿取消。
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 15000);
                try {
                    const response = await fetch('/comments/v2/like', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams(params).toString(),
                        signal: controller.signal,
                    });
                    let body;
                    // 400、429 也可能携带可展示的业务提示，先解析响应体，再交由点赞模型统一判断。
                    try { body = await response.json(); } catch (error) {
                        if (controller.signal.aborted) throw error;
                        throw new Error('点赞服务响应异常，请稍后再试');
                    }
                    return { status: response.status, body };
                } catch (error) {
                    if (controller.signal.aborted) throw new Error('请求超时，结果暂未确认，请稍后再试');
                    if (error instanceof TypeError) throw new Error('网络异常，结果暂未确认，请稍后再试');
                    throw error;
                } finally {
                    clearTimeout(timeout);
                }
            },
            onChange: syncLikeButtons,
            // 点赞失败原因不向用户暴露技术细节，统一提示。
            onError: () => layer.msg('操作太频繁，请稍后重试'),
        });
        commentRoot.__commentLikes = commentLikes;
        // 切后台或进入页面往返缓存时只暂停到期调度，保留当前文档的内存记录；返回前台后立即按当前时间校正。
        // 真正刷新或重新创建文档时会创建新的模型，不从浏览器存储恢复上一次的身份。
        const syncLikeLifecycle = () => {
            if (doc.visibilityState === 'hidden') commentLikes.suspend();
            else commentLikes.resume();
        };
        doc.addEventListener('visibilitychange', syncLikeLifecycle);
        win.addEventListener('pagehide', commentLikes.suspend);
        win.addEventListener('pageshow', syncLikeLifecycle);
        syncLikeLifecycle();
        // 将点击委托给稳定的根节点，翻页及弹层新增按钮无需重复绑定；点击数字或图标都定位到同一个按钮。
        commentRoot.addEventListener('click', (event) => {
            const button = event.target.closest('button.comment-like[data-coid]');
            if (!button || !commentRoot.contains(button)) return;
            event.preventDefault();
            void commentLikes.toggle(button.dataset.coid);
        });

        // 两种排序共享一次加载的数据；缺少真实排序字段时保留原顺序。
        let commentSorter = null;
        let requestedSort = 'hot';
        let displayedSort = null;
        let displayedItems = null;
        let sortReady = false;
        const commentSeparator = doc.querySelector('#comments .comment-separator');
        if (commentSeparator && !commentSeparator.querySelector('.comment-sort')) {
            commentSeparator.insertAdjacentHTML('beforeend', `
                <div class="comment-sort" role="group" aria-label="评论排序">
                    <button type="button" class="comment-sort__item" data-sort="latest" aria-pressed="false" disabled>最新</button>
                    <span class="comment-sort__separator" aria-hidden="true">｜</span>
                    <button type="button" class="comment-sort__item is-active" data-sort="hot" aria-pressed="true" disabled>最热</button>
                </div>
            `);
        }
        const sortButtons = [...(commentSeparator?.querySelectorAll('.comment-sort__item[data-sort]') || [])];
        const updateSortControls = () => {
            sortButtons.forEach((button) => {
                const available = sortReady && commentSorter?.supports(button.dataset.sort);
                const selected = button.dataset.sort === requestedSort;
                button.disabled = !available;
                button.classList.toggle('is-active', selected);
                button.setAttribute('aria-pressed', String(selected));
                button.title = available ? '' : (commentSorter ? '当前评论数据暂不支持此排序' : '评论加载中');
            });
        };
        updateSortControls();

        // 虚滚动锁
        const scrollLock = new ScrollLock();

        // data-api 指向包含子回复的完整评论列表；分页、排序和展开回复都使用这份数据。
        // 缓存加载中的 Promise 来合并并发读取，也复用成功结果；这不是排序数组的缓存。
        const getDate = (() => {
            let request = null;
            return () => {
                if (!request) {
                    request = fetch(api).then((response) => {
                        if (!response.ok) throw new Error(`评论数据获取失败, 状态码: ${response.status}`);
                        return response.json();
                    }).then((data) => {
                        if (!Array.isArray(data)) throw new Error('评论数据格式异常');
                        commentLikes.register(data);
                        return data;
                    }).catch((error) => {
                        // 失败结果不缓存，后续调用可以重新请求。
                        // 此处仍沿用原有返回空数组的展示行为；释放缓存不等于自动重试，也没有新增重试入口。
                        request = null;
                        console.error('评论数据获取失败:', error);
                        return [];
                    });
                }
                return request;
            };
        })();

        // 设置模板
        // 一级评论、前三条子回复、桌面展开区和移动弹层共用同一个模板，确保数量、选中态和标识口径一致。
        const template = (c, variant = '') => {
            const likeState = commentLikes.read(c?.coid);
            const likeCount = likeState.count;
            // 神评仅由接口 is_god 控制，与置顶或官方身份无关；兼容接口返回数字 1 或字符串 "1"。
            const godComment = c?.is_god;
            const isParent = variant === 'parent';
            const replyReturn = variant === 'inline-child' ? '' : 'return ';
            return `
                <div class="comment-item">
                    <div class="comment-author" itemprop="creator" itemscope="" itemtype="http://schema.org/Person">
                        <span itemprop="image">
                            <img class="avatar" src="../../usr/themes/Mirages/images/51cg.png?v=3&amp;s=100&amp;r=G&amp;d=" data-src="" alt="${escapeHtml(c?.author)}" width="100" height="100">
                        </span>
                        <cite class="fn color-main" itemprop="name">
                            <span>${escapeHtml(c?.author)}</span>
                            ${c?.is_top ? '<img class="is_top" src="/usr/themes/Mirages/images/top.png" alt="置顶" width="42" height="16">' : ''}
                            ${c?.is_official ? '<img class="is_official" src="/usr/themes/Mirages/images/offcial.png" alt="官方" width="42" height="16">' : ''}
                        </cite>
                    </div>
                    <div class="comment-content" itemprop="commentText">
                        <p>${sanitizeRich(c?.text)}${godComment === 1 || godComment === '1' ? '<span class="comment-good-badge">神评</span>' : ''}</p>
                    </div>
                    <div class="comment-actions">
                        <div class="comment-reply">
                            <a href="${isParent ? 'javascript:void(0);' : 'javascript:;'}" rel="nofollow" onclick="${replyReturn}UserComment.reply(event, '${safeId(c?.coid)}', ${safeId(c?.parent)});">回复</a>
                        </div>
                        <div class="comment-meta">
                            <a href="javascript:;"${isParent ? ' class="no-animation"' : ''}>
                                <time itemprop="commentTime" datetime="${escapeHtml(c?.date)}">${escapeHtml(c?.date)}</time>
                            </a>
                        </div>
                    </div>
                    <button type="button" class="comment-like${likeState.liked ? ' is-active' : ''}" data-coid="${safeId(c?.coid)}" aria-label="${likeState.liked ? '取消点赞' : '点赞'}，点赞数 ${likeCount}" aria-pressed="${likeState.liked}" aria-busy="${likeState.pending}"${likeState.disabled ? ' disabled' : ''}>
                        <span class="comment-like__count">${likeCount}</span>
                        <span class="comment-like__icons" aria-hidden="true">
                            <img class="comment-like__icon" src="/usr/themes/Mirages/images/comment-like.svg" alt="" aria-hidden="true">
                            <img class="comment-like__icon comment-like__icon--active" src="/usr/themes/Mirages/images/comment-liked.svg" alt="" aria-hidden="true">
                        </span>
                    </button>
                </div>
            `;
        }
        ;

        // 分页加载
        const commentList = new PagetionList({
            itemsPerPage: 50,
            listSelector: '.comment-list-content',
            nextSelector: '.comment-list-pagetion .next',
            prevSelector: '.comment-list-pagetion .prev',
            itemRenderer: (c, index) => {
                return `
                    ${template(c, 'parent')}
                    
                    <div class="comment-children" itemprop="discusses">
                        <ol class="comment-list comment-children-ol">
                            ${(c?.children.slice(0, 3)).map(child => `
                                <li itemscope="" itemtype="http://schema.org/UserComments" id="comment-${safeId(child.coid)}" class="comment-body comment-child comment-level-odd comment-odd">
                                    ${template(child, 'inline-child')}
                                </li>
                            `).join("")}
                        </ol>
                        
                        ${(c?.children?.length <= 3) ? `` : `
                            <div class="more-child-comment-btns">
                                <div class="border"></div>
                                <div class="flex show-more-child-comment">
                                    <a href="javascript:;" class="content" onclick="return onTypechoOpenChildComment(event, '${safeId(c.coid)}', this);">展开${Number(c?.children?.length) || 0}条回复</a>
                                    <div class="xqbj-icon-arrow"></div>
                                </div>
                                <div class='flex hide-more-child-comment' onclick="return onTypechoCloseChildComment('${safeId(c.coid)}', this);">
                                    <a href="javascript:;" class='content'>收起</a>
                                    <div class='xqbj-icon-arrow top'></div>
                                </div>
                            </div>
                        `}
                    </div>
                `;
            }
            ,
            dataFetcher: async () => {
                commentSorter = createCommentSorter(await getDate());
                requestedSort = commentSorter.supports('hot') ? 'hot'
                    : (commentSorter.supports('latest') ? 'latest' : null);
                return commentSorter.get(requestedSort);
            },
            onRender: (items) => {
                // 列表分帧构建期间可能已有点赞返回，插入页面后再读取最新状态，避免旧模板覆盖按钮状态。
                syncLikeButtons();
                displayedItems = items;
                displayedSort = ['hot', 'latest'].find((mode) =>
                    commentSorter.supports(mode) && commentSorter.get(mode) === items) || null;
                requestedSort = displayedSort;
                sortReady = true;
                updateSortControls();
            },
            onRenderError: () => {
                // 构建失败时页面仍展示旧列表，排序高亮和分页数据也应一起回到最后一次成功显示的结果。
                requestedSort = displayedSort;
                if (displayedItems) commentList.commentlist = displayedItems;
                updateSortControls();
            }
        });

        sortButtons.forEach((button) => {
            button.onclick = () => {
                const mode = button.dataset.sort;
                if (!sortReady || !commentSorter.supports(mode) || mode === requestedSort) return;
                // 先关闭旧排序下打开的回复弹层，再切回新排序第一页；点赞模型继续使用同一份 coid 状态。
                if (doc.querySelector('.popup-comment-list-container.show')) {
                    win.onTypechoCloseChildComment();
                }
                requestedSort = mode;
                updateSortControls();
                if (!commentList.setItems(commentSorter.get(mode))) {
                    requestedSort = displayedSort;
                    updateSortControls();
                }
            };
        });

        // 关闭回复展示：移动端清空虚拟列表并解除滚动锁；桌面端收起时保留最初的三条预览。
        // 这里只清理展示节点，不删除评论的点赞状态、取消凭证或三小时计时。
        window.onTypechoCloseChildComment = async (parentId=null, _this=null) => {
            const body = document.querySelector("body");
            const childCommentContainer = document.querySelector(".popup-comment-list-container");
            const childCommentListContainer = document.querySelector(".child-comment-list-content");

            // 隐藏数据
            if (childCommentContainer) {
                childCommentContainer.classList.remove("show");
            }

            // 清空数据
            if (childCommentListContainer) {
                childCommentListContainer.innerHTML = '';
            }

            if (win?.virtualList) {
                win.virtualList.destroy();
            }

            // 解除限制
            body.classList.remove("body-lock");
            scrollLock.unlock();

            if (parentId !== null && _this) {
                const childalldata = (commentSorter?.getChildren(parentId) || []);
                const commentChildren = _this.closest('div.comment-children');
                const commentChildrenShow = commentChildren.querySelector('div.show-more-child-comment');
                const commentChildrenHidn = commentChildren.querySelector('div.hide-more-child-comment');
                const commentChildrenList = commentChildren.querySelector('ol.comment-children-ol');
                const commentChildrenText = commentChildrenShow.querySelector('.content');
                Array.from(commentChildrenList.children).slice(3).forEach(child => child.remove());

                // 更新提示
                commentChildrenText.textContent = `展开${Number(childalldata?.length) || 0}条回复`;
                commentChildrenShow.style.display = 'flex';
                commentChildrenHidn.style.display = 'none';
            }
        }

        // 根据父评论 coid 读取回复，避免排序后按数组下标找到另一条评论。
        // 桌面端在原列表追加回复，移动端使用虚拟列表；两种展示都读取共享模板和点赞状态。
        window.onTypechoOpenChildComment = async (e, parentId, _this) => {
            e.preventDefault();

            // 
            // layer.load();

            const childalldata = (commentSorter?.getChildren(parentId) || []);

            // 沿用原有 750 像素交互断点；桌面每次追加最多 100 条，已显示的回复不重复插入。
            if (document?.documentElement?.clientWidth > 750) {
                const commentChildren = _this.closest('div.comment-children');
                const commentChildrenShow = commentChildren.querySelector('div.show-more-child-comment');
                const commentChildrenHidn = commentChildren.querySelector('div.hide-more-child-comment');
                const commentChildrenList = commentChildren.querySelector('ol.comment-children-ol');
                const commentChildrenLeng = commentChildrenList?.children?.length || 0;
                const commentChildrenText = commentChildrenShow.querySelector('.content');
                const childrendata = childalldata.slice(commentChildrenLeng, commentChildrenLeng + 100);
                const fragment = document.createDocumentFragment();

                for (let i = 0; i < childrendata.length; i++) {
                    const li = document.createElement("li");
                    li.id = `comment-${safeId(childrendata[i].coid)}`;
                    li.className = "comment-body comment-parent comment-odd";
                    li.innerHTML = template(childrendata[i]);
                    fragment.appendChild(li);
                }

                // 新增显示
                commentChildrenList.append(fragment);

                // 统计剩余
                const commentChildrenLength = 1 * ((childalldata?.length - commentChildrenList?.children?.length) || 0);

                // 更新提示
                if (commentChildrenLength > 0) {
                    commentChildrenText.textContent = `展开更多`;
                    commentChildrenHidn.style.display = 'flex';
                } else {
                    commentChildrenShow.style.display = 'none';
                    commentChildrenHidn.style.display = 'flex';
                }
            }
            // 打开移动端弹层时锁住背景滚动；先销毁上一次虚拟列表，避免旧监听器和旧节点残留。
            else {
                const body = document.querySelector("body");
                const childCommentContainer = document.querySelector(".popup-comment-list-container");

                if (childCommentContainer) {
                    childCommentContainer.classList.add("show");
                    body.classList.add("body-lock");
                    scrollLock.lock();
                }

                if (win?.virtualList) {
                    win.virtualList.destroy();
                }

                win['virtualList'] = new VirtualList({
                    containerSelector: '.child-comment-list-container',
                    listSelector: '.child-comment-list-content',
                    virtualElementSelector: '.child-comment-list-virtual',
                    estimatedItemHeight: 93.19,
                    // 更接近实际高度的估计值
                    bufferItems: 50,
                    // 适当增加缓冲数量
                    itemsPerGroup: 4,
                    // 每组4个项目
                    bufferGroups: 2,
                    // 预加载前后2组
                    itemRenderer: (c) => template(c),
                    dataFetcher: async () => {
                        return childalldata;
                    }
                });
            }

            layer.closeAll('loading');
        }
    }

    // 用户评论处理
    class UserComment {

        submitReply(e) {
            e.preventDefault();

            // 获取元素
            const respond = e.target.closest('.respond');
            const cid = respond?.dataset?.cid || -1;
            const coid = respond?.dataset?.coid || -1;
            const form = respond.querySelector('form');
            const formData = $(form).serialize();
            const text = respond.querySelector('[name="text"]').value;
            const author = respond.querySelector('[name="author"]').value;

            // 表单数据
            const data = {
                text,
                author,
                ...(cid && cid > 0 ? {
                    parent: cid
                } : {})
            };
            const url = $(form).attr('action');

            // 动画效果
            layer.load();

            // 参数校验
            if (!data?.text) {
                layer.closeAll('loading');
                layer.msg('评论不能为空！');
                return;
            }

            if (!data?.author) {
                layer.closeAll('loading');
                layer.msg('称呼不能为空！');
                return;
            }

            // 评论请求
            $.ajax({
                type: "POST",
                url: `${url}`,
                data,
                dataType: "json",
                success: function(res) {
                    if (res.status) {
                        layer.msg('评论成功,等待审核');
                        $(form).trigger('reset');
                    } else {
                        layer.msg('评论失败！');
                    }
                },
                error: function(res) {
                    layer.msg('评论失败！');
                },
                complete: function() {
                    layer.closeAll('loading');
                }
            });
        }

        reply(e, cid, coid) {
            e.preventDefault();
            e.stopPropagation();

            const licomment = e.target.closest('.comment-body');
            const licontent = licomment.querySelector('.comment-content');
            const recomment = document.querySelector('.respond');
            const childcomment = [...document.querySelectorAll('.child-respond')];
            const clonecomment = recomment.cloneNode(true);
            const clonetextarea = clonecomment.querySelector('textarea');

            // 清除评论
            childcomment.forEach(el => el.remove())

            // 表单检查
            clonecomment.classList.add('child-respond');
            clonecomment.dataset.cid = cid;
            clonecomment.dataset.coid = coid;

            // 设置光标
            clonetextarea && clonetextarea.focus();

            // 清空表单
            clonecomment.querySelector('form').reset();

            // 迁移表单
            licontent.insertAdjacentElement('afterend', clonecomment);

            return false;
        }

        cancelReply(e) {
            e.preventDefault();
            e.stopPropagation();

            const childcomment = [...document.querySelectorAll('.child-respond')];

            // 清除评论
            childcomment.forEach(el => el.remove())
        }
    }

    // 浏览滚动锁定
    class ScrollLock {
        constructor() {
            this.isLocked = false;
            this.scrollY = 0;
            this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        }

        // 锁定滚动
        lock() {
            if (this.isLocked)
                return;

            this.scrollY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)

            document.body.style.setProperty('--scroll-lock-position', `-${this.scrollY}px`);
            document.body.classList.add('body-lock');

            if (this.isIOS) {// document.addEventListener('touchmove', this.preventDefault, { passive: false });
            }

            this.isLocked = true;
        }

        // 解锁滚动
        unlock() {
            if (!this.isLocked)
                return;

            const scrollY = Math.abs(parseInt(document.body.style.getPropertyValue('--scroll-lock-position') || '0'));

            document.body.classList.remove('body-lock');
            document.body.style.removeProperty('--scroll-lock-position');

            if (this.isIOS) {// document.removeEventListener('touchmove', this.preventDefault);
            }

            this.isLocked = false;
        }

        // 阻止默认滚动行为
        preventDefault(e) {
            e.preventDefault();
        }

        // 切换锁定状态
        toggle() {
            if (this.isLocked) {
                this.unlock();
            } else {
                this.lock();
            }
        }
    }

    // 动态分页列表：离屏构建 -> 保留旧高度 -> 一次替换 -> 保护下定位 -> 安全回收高度。
    // 首次加载不保高、不自动定位；非 iOS 保留原来的翻页定位方式。
    class PagetionList {
        constructor(options) {
            // 初始化配置
            this.config = {
                itemsPerPage: 3,
                listSelector: '.comment-list-content',
                nextSelector: '.comment-list-pagetion .next',
                prevSelector: '.comment-list-pagetion .prev',
                ...options
            };

            this.commentlist = [];
            this.currentPage = 1;
            this.itemsPerPage = this.config.itemsPerPage;
            // 使用配置中的每页评论条数。
            this.totalPages = 0;
            // ready 防止数据未就绪时操作，busy 阻止一次翻页尚未收尾时重复点击。
            this.busy = true;
            this.ready = false;
            this.destroyed = false;
            // 每次翻页递增，旧的异步渲染和回调不能覆盖新一轮页面。
            this.renderGeneration = 0;
            this.pageFrame = 0;
            this.positionFrame = 0;
            this.cancelPosition = null;
            this.releaseFrame = 0;
            this.heightHold = null;
            this.heightHoldTimer = 0;

            // 获取DOM
            this.list = document.querySelector(this.config.listSelector);
            this.next = document.querySelector(this.config.nextSelector);
            this.prev = document.querySelector(this.config.prevSelector);
            this.commentNumElement = document.querySelector('.comment-num');
            if (commentHeightHoldEnabled) {
                // 离开页面不能强制缩高；BFCache 返回后仍通过相同安全门检查。
                win.addEventListener('pagehide', () => {
                    const hold = this.heightHold;
                    if (!hold) return;
                    clearTimeout(this.heightHoldTimer);
                    this.heightHoldTimer = 0;
                    hold.suspended = true;
                    hold.safeSample = null;
                    this.cancelPosition?.('pagehide');
                    hold.unwatch?.();
                });
                win.addEventListener('pageshow', () => {
                    const hold = this.heightHold;
                    if (!hold) return;
                    hold.suspended = false;
                    if (hold.waiting) this.scheduleHeightRelease(hold.generation, 'pageshow');
                });
            }
            // 添加事件
            this.initEventListeners();
            this.setBusy(true);

            // 初始化
            this.init();
        }

        setBusy(busy) {
            // 实际按钮可能是 <a>，disabled 不能代替点击处理器中的 busy 检查。
            this.busy = busy;
            this.next.disabled = busy;
            this.prev.disabled = busy;
            if (busy) {
                this.next.parentElement?.setAttribute("aria-busy", "true");
            } else {
                this.next.parentElement?.removeAttribute("aria-busy");
            }
        }

        holdListHeight(generation) {
            if (!commentHeightHoldEnabled || !this.ready || this.destroyed) return;
            // 在替换 DOM 前读取旧高度；content-box 的 min-height 不包含内边距和边框。
            const rect = this.list.getBoundingClientRect();
            const css = win.getComputedStyle(this.list);
            const extras = css.boxSizing === 'border-box' ? 0 :
                (parseFloat(css.paddingTop) || 0) + (parseFloat(css.paddingBottom) || 0) +
                (parseFloat(css.borderTopWidth) || 0) + (parseFloat(css.borderBottomWidth) || 0);
            const minHeight = Math.max(0, Math.ceil(rect.height - extras));
            if (!this.heightHold) {
                this.heightHold = {
                    generation,
                    node: this.list,
                    value: this.list.style.getPropertyValue('min-height'),
                    priority: this.list.style.getPropertyPriority('min-height'),
                    waiting: false,
                    suspended: false,
                    pointers: new Set()
                };
            }
            this.heightHold.generation = generation;
            this.list.style.setProperty('min-height', `${minHeight}px`, 'important');
        }

        heightReleaseRange(hold) {
            // 绝不临时移除 min-height 测量，避免测量本身先触发滚动钳制。
            // 正常流 li 的边界减去负 margin，是自然列表高度的保守下界。
            try {
                const node = hold.node;
                const css = win.getComputedStyle(node);
                const rect = node.getBoundingClientRect();
                if (!['block', 'flow-root', 'list-item'].includes(css.display) || css.transform !== 'none' ||
                    css.writingMode !== 'horizontal-tb' || Math.abs(rect.height - node.offsetHeight) > 2) {
                    return { safe: false, reason: 'unsupported-layout' };
                }
                let contentBottom = rect.top;
                let negativeMargins = 0;
                for (const child of node.children) {
                    const style = win.getComputedStyle(child);
                    if (style.display === 'none' || ['absolute', 'fixed'].includes(style.position)) continue;
                    if (style.cssFloat !== 'none' || style.transform !== 'none' ||
                        (style.position !== 'static' && (style.top !== 'auto' || style.bottom !== 'auto'))) {
                        return { safe: false, reason: 'unsupported-child-layout' };
                    }
                    contentBottom = Math.max(contentBottom, child.getBoundingClientRect().bottom);
                    negativeMargins += Math.max(0, -(parseFloat(style.marginTop) || 0)) + Math.max(0, -(parseFloat(style.marginBottom) || 0));
                }
                // 不加正向 padding/border/margin，宁可推迟回收，也不高估释放后的上限。
                const naturalHeightFloor = Math.max(0, Math.floor(contentBottom - rect.top - negativeMargins));
                const removedHeightCeiling = Math.max(0, Math.ceil(rect.height) - naturalHeightFloor);
                const scroller = document.scrollingElement || document.documentElement;
                const documentHeightFloor = Math.max(scroller.clientHeight, Math.floor(scroller.scrollHeight - removedHeightCeiling));
                const maxScrollFloor = Math.max(0, documentHeightFloor - scroller.clientHeight);
                const safeMaxScrollY = Math.max(0, maxScrollFloor - commentHeightHoldSafety);
                const scrollY = win.scrollY;
                const viewport = win.visualViewport;
                const visualBottom = viewport ? viewport.pageTop + viewport.height : scrollY + scroller.clientHeight;
                const bottomLimit = maxScrollFloor > 0 ? documentHeightFloor - commentHeightHoldSafety : documentHeightFloor;
                const valid = scroller.clientHeight > 0 && [rect.height, naturalHeightFloor, documentHeightFloor, scrollY, visualBottom].every(Number.isFinite);
                const safe = valid && scrollY >= 0 && scrollY <= safeMaxScrollY && visualBottom <= bottomLimit;
                return {
                    safe, reason: valid ? (safe ? 'within-new-range' : 'outside-new-range') : 'invalid-measurement',
                    scrollY, listHeight: rect.height, naturalHeightFloor, removedHeightCeiling,
                    documentHeightFloor, maxScrollFloor, safeMaxScrollY, visualBottom
                };
            } catch (error) {
                return { safe: false, reason: 'measurement-error', message: error?.message || String(error) };
            }
        }

        queueHeightReleaseCheck(hold, reason, delay = 150) {
            // 合并滚动/布局事件；用户仍在触摸或页面隐藏时不做高度回收。
            if (this.heightHold !== hold || !hold.waiting || hold.suspended) return;
            if (reason !== 'confirm-stability') hold.safeSample = null;
            clearTimeout(this.heightHoldTimer);
            this.heightHoldTimer = 0;
            if (document.visibilityState === 'hidden' || hold.pointers.size) return;
            const generation = hold.generation;
            try {
                this.heightHoldTimer = setTimeout(() => {
                    if (this.heightHold !== hold || hold.generation !== generation) return;
                    this.heightHoldTimer = 0;
                    if (!this.busy) this.releaseListHeight(generation, reason);
                }, delay);
            } catch (error) {
                // 调度失败也不能强制释放；下一次用户/布局事件可以再次请求检查。
            }
        }

        watchHeightRelease(hold) {
            // 不安全时等待位置、视口或内容变化，释放后统一移除这些临时监听。
            if (hold.unwatch || hold.suspended) return;
            const removers = [];
            const on = (target, type, listener, options = { passive: true }) => {
                if (!target?.addEventListener) return;
                target.addEventListener(type, listener, options);
                removers.push(() => target.removeEventListener(type, listener, options));
            };
            const check = () => this.queueHeightReleaseCheck(hold, 'position-or-content-change');
            on(win, 'scroll', check);
            on(win, 'resize', check);
            on(win, 'wheel', check);
            on(win, 'keydown', check);
            on(win.visualViewport, 'scroll', check);
            on(win.visualViewport, 'resize', check);
            on(hold.node, 'load', check, { capture: true, passive: true });
            on(hold.node, 'loadedmetadata', check, { capture: true, passive: true });
            on(document, 'pointerdown', event => {
                hold.pointers.add(event.pointerId);
                hold.safeSample = null;
                clearTimeout(this.heightHoldTimer);
                this.heightHoldTimer = 0;
            });
            const pointerEnd = event => { hold.pointers.delete(event.pointerId); check(); };
            on(document, 'pointerup', pointerEnd);
            on(document, 'pointercancel', pointerEnd);
            on(document, 'visibilitychange', () => {
                if (document.visibilityState === 'hidden') hold.pointers.clear();
                check();
            });
            if (typeof MutationObserver === 'function') {
                const observer = new MutationObserver(check);
                observer.observe(hold.node, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style', 'class', 'hidden', 'open'] });
                removers.push(() => observer.disconnect());
            }
            hold.unwatch = () => {
                for (const remove of removers) remove();
                hold.pointers.clear();
                hold.safeSample = null;
                hold.unwatch = null;
            };
        }

        releaseListHeight(generation, reason, positionSample = null) {
            // 定位成功可复用上一帧的安全读数；其余路径仍等待用户停止操作并稳定采样。
            const hold = this.heightHold;
            if (!hold || generation !== hold.generation) return;
            clearTimeout(this.heightHoldTimer);
            this.heightHoldTimer = 0;
            if (hold.node.isConnected) {
                if (hold.suspended || (this.busy && !positionSample?.safe) || document.visibilityState === 'hidden' || hold.pointers.size) return;
                const range = this.heightReleaseRange(hold);
                if (!range.safe && (positionSample || range.reason !== 'outside-new-range' || range.scrollY < 0)) {
                    hold.safeSample = null;
                    // 不支持的布局、测量失败或顶部回弹，继续等待位置或内容变化。
                    return;
                }
                const previous = positionSample || hold.safeSample;
                if (!previous) {
                    hold.safeSample = range;
                    // 两次安全读数间隔 100ms；期间有滚动/视口/内容事件便重新采样。
                    this.queueHeightReleaseCheck(hold, 'confirm-stability', 100);
                    return;
                }
                const stable = ['scrollY', 'visualBottom', 'documentHeightFloor', 'naturalHeightFloor'].every(key => Math.abs(range[key] - previous[key]) <= 1);
                if (!stable) {
                    hold.safeSample = null;
                    return;
                }
                if (!range.safe) {
                    // 已静止在旧占位尾部：先保高移到新页面最近的安全边界，再检查缩高。
                    // 不能仅等用户自己滚回来，也不能直接缩高触发浏览器滚动钳制。
                    hold.safeSample = null;
                    const viewport = win.visualViewport;
                    const visualHeight = viewport ? viewport.height + Math.max(0, viewport.offsetTop, viewport.pageTop - range.scrollY) : (document.scrollingElement || document.documentElement).clientHeight;
                    const top = Math.max(0, Math.floor(Math.min(range.safeMaxScrollY, range.documentHeightFloor - visualHeight - commentHeightHoldSafety)));
                    if (!Number.isFinite(top) || top >= range.scrollY) return;
                    try {
                        win.scrollTo({ top, behavior: 'auto' });
                        // 定位未生效时不循环重试；后续滚动/视口事件可以再次请求检查。
                        if (this.heightReleaseRange(hold).safe) this.queueHeightReleaseCheck(hold, 'position-recovered', 100);
                    } catch (error) {
                        // 定位失败仍保留高度，不能在异常路径强制缩短页面。
                    }
                    return;
                }
            }
            hold.unwatch?.();
            this.heightHold = null;
            if (hold.value) hold.node.style.setProperty('min-height', hold.value, hold.priority);
            else hold.node.style.removeProperty('min-height');
        }

        scheduleHeightRelease(generation, reason = 'complete') {
            const hold = this.heightHold;
            if (!hold || hold.generation !== generation) return;
            hold.waiting = true;
            this.watchHeightRelease(hold);
            this.queueHeightReleaseCheck(hold, reason, commentHeightHoldDelay);
        }

        releaseAfterPaint(generation = this.renderGeneration) {
            // 等待两次绘制调度，让新列表有机会完成布局，再解除加载锁。
            // 若其间已开始新一轮渲染，旧回调不能释放新轮次的锁，否则会重新放开过早的连续操作。
            this.releaseFrame = requestAnimationFrame(() => {
                if (this.destroyed || generation !== this.renderGeneration) return;
                this.releaseFrame = requestAnimationFrame(() => {
                    if (this.destroyed || generation !== this.renderGeneration) {
                        return;
                    }
                    this.setBusy(false);
                });
            });
        }

        positionAfterPaint(onComplete, generation) {
            const held = this.heightHold;
            // 只使用当前轮次、当前列表仍有效的高度占位，避免旧回调误滚动。
            const autoScrollEnabled = commentAutoScrollEnabled && held?.generation === generation && held.node === this.list && held.node.isConnected;
            let completed = false;
            let pendingFrame = 0;
            let deadline = 0;
            let attempts = 0;
            let sampledFrames = 0;
            let stableFrames = 0;
            let targetTop = null;
            let positionSample = null;
            const removers = [];
            const schedule = (callback) => {
                const frame = requestAnimationFrame(callback);
                pendingFrame = frame;
                return frame;
            };
            // 调度/布局/滚动失败也必须释放分页锁，且只执行一次收尾。
            const complete = (error = null) => {
                if (completed) return;
                completed = true;
                clearTimeout(deadline);
                if (pendingFrame) cancelAnimationFrame(pendingFrame);
                for (const remove of removers) remove();
                if (this.cancelPosition === cancel) this.cancelPosition = null;
                if (onComplete) onComplete(error);
                else this.setBusy(false);
            };
            const cancel = (reason) => {
                if (completed) return;
                const error = new Error(reason);
                error.name = 'AbortError';
                complete(error);
            };
            const current = () => !completed && !this.destroyed && generation === this.renderGeneration &&
                (!autoScrollEnabled || (this.heightHold === held && held.generation === generation && held.node.isConnected));
            const desiredTop = () => {
                const rect = this.list.getBoundingClientRect();
                // 列表顶部留出 130px；目标还要受缩高后的布局/可视视口边界限制。
                let top = Math.max(0, Math.round(win.scrollY + rect.top - 130));
                if (autoScrollEnabled) {
                    const range = this.heightReleaseRange(held);
                    if (range.reason === 'measurement-error' || range.reason === 'invalid-measurement') throw new Error('invalid-position-range');
                    if (Number.isFinite(range.safeMaxScrollY)) {
                        const viewport = win.visualViewport;
                        const visualHeight = viewport ? viewport.height + Math.max(0, viewport.offsetTop, viewport.pageTop - win.scrollY) : (document.scrollingElement || document.documentElement).clientHeight;
                        top = Math.min(top, range.safeMaxScrollY, Math.max(0, range.documentHeightFloor - visualHeight - commentHeightHoldSafety));
                    }
                }
                if (!Number.isFinite(top)) throw new Error('invalid-position-target');
                return Math.max(0, Math.floor(top));
            };
            const moveToTarget = () => {
                if (!current() || this.heightHold !== held || held.suspended || document.visibilityState === 'hidden') throw new Error('height-protection-unavailable');
                targetTop = desiredTop();
                attempts++;
                return win.scrollTo({ top: targetTop, behavior: 'auto' });
            };
            const settlePosition = () => {
                if (!current()) { cancel('stale-or-destroyed'); return; }
                try {
                    if (autoScrollEnabled) {
                        sampledFrames++;
                        const expectedTop = desiredTop();
                        const atTarget = Math.abs(win.scrollY - expectedTop) <= 2;
                        const sameTarget = Math.abs(expectedTop - targetTop) <= 2;
                        stableFrames = atTarget ? (sameTarget ? stableFrames + 1 : 1) : 0;
                        if (atTarget) targetTop = expectedTop;
                        const previousSample = positionSample;
                        positionSample = atTarget ? this.heightReleaseRange(held) : null;
                        // 连续两帧到位才完成；最多检查 8 帧，首次滚动之外只允许一次补偿。
                        if (stableFrames < 2) {
                            if (sampledFrames >= 8) { cancel('position-not-settled'); return; }
                            if (!atTarget) {
                                if (attempts >= 2) { cancel('position-target-not-reached'); return; }
                                moveToTarget();
                            }
                            this.positionFrame = schedule(settlePosition);
                            return;
                        }
                        // 连续两帧到位后同步复核并回收，避免解锁后再留下 500ms 可滚入的空白。
                        if (previousSample?.safe) this.releaseListHeight(generation, 'positioned', previousSample);
                    }
                    complete();
                } catch (error) {
                    complete(error);
                    throw error;
                }
            };
            this.cancelPosition = cancel;
            try {
                if (autoScrollEnabled) {
                    const on = (type, listener) => {
                        win.addEventListener(type, listener, { capture: true, passive: true });
                        removers.push(() => win.removeEventListener(type, listener, { capture: true }));
                    };
                    on('pointerdown', () => cancel('user-interaction'));
                    on('wheel', () => cancel('user-interaction'));
                    on('keydown', () => cancel('user-interaction'));
                    on('pagehide', () => cancel('pagehide'));
                    on('visibilitychange', () => { if (document.visibilityState === 'hidden') cancel('hidden'); });
                    // RAF 未执行也要解除翻页锁；超时只取消定位，不强制缩短页面。
                    deadline = setTimeout(() => cancel('position-timeout'), 1500);
                }
                this.positionFrame = schedule(() => {
                    if (!current()) { cancel('stale-or-destroyed'); return; }
                    try {
                        if (this.destroyed) {
                            complete();
                            return;
                        }
                        // 先在旧高度保护下定位，绝不先缩短页面再修正滚动位置。
                        if (autoScrollEnabled) moveToTarget();
                    } catch (error) {
                        complete(error);
                        throw error;
                    }
                    try {
                        this.positionFrame = schedule(settlePosition);
                    } catch (error) {
                        complete(error);
                        throw error;
                    }
                });
            } catch (error) {
                complete(error);
                throw error;
            }
        }

        // 添加事件
        initEventListeners() {
            this.next.addEventListener("click", (e) => {
                // 即使本次点击被忽略，也要阻止 #submit 的默认锚点跳转。
                e.preventDefault();
                if (this.busy || !this.ready) {
                    return;
                }
                const newStart = this.currentPage * this.itemsPerPage;
                const newEnd = newStart + this.itemsPerPage - 1;
                if (newStart < this.commentlist.length) {
                    this.changePage(newStart, newEnd);
                }
            }
            );

            this.prev.addEventListener("click", (e) => {
                e.preventDefault();
                if (this.busy || !this.ready) {
                    return;
                }
                const newStart = (this.currentPage - 2) * this.itemsPerPage;
                const newEnd = newStart + this.itemsPerPage - 1;
                if (newStart >= 0) {
                    this.changePage(newStart, newEnd);
                }
            }
            );
        }

        // 翻页后把评论区顶部带回视野
        // 原来靠 <a href="#submit"> 的锚点跳转实现, 副作用是改写 URL hash; 这里改成受控滚动
        scrollToListTop() {
            const anchor = document.querySelector(".comment-separator")
                || document.querySelector(".comment-list-container")
                || this.list;
            if (!anchor) return;

            // 顶部固定导航会盖住目标, 按实际高度让出偏移
            let offset = 0;
            const nav = document.querySelector(".navbar.fixed-top")
                || document.querySelector(".navbar-sidebar.nav-fixed");
            if (nav && getComputedStyle(nav).position === "fixed") {
                offset = nav.getBoundingClientRect().height;
            }

            const top = anchor.getBoundingClientRect().top + window.pageYOffset - offset - 12;
            // 用瞬时滚动, 与原锚点跳转的观感一致(平滑滚动跨越整页列表会很拖沓)
            window.scrollTo({ top: top < 0 ? 0 : top, behavior: "auto" });
        }

        setItems(items) {
            // 排序切换沿用当前分页实例，从新顺序的第一页展示，不重新加载接口或初始化点赞状态。
            if (!this.ready || this.destroyed) return false;
            this.commentlist = items;
            this.changePage(0, this.itemsPerPage - 1);
            return true;
        }

        changePage(start, end) {
            this.setBusy(true);
            // 每次翻页或切换排序都生成新轮次；异步构建及定位回调必须核对轮次，避免旧结果覆盖新操作。
            const generation = ++this.renderGeneration;
            this.cancelPosition?.('superseded');
            // 非 iOS 只复用安全构建与防重入，仍按原导航高度计算翻页定位。
            if (!commentHeightHoldEnabled) {
                this.build(start, end, generation).then((replaced) => {
                    if (this.destroyed || generation !== this.renderGeneration) return;
                    if (!replaced) {
                        this.setBusy(false);
                        return;
                    }
                    try {
                        this.scrollToListTop();
                    } catch (error) {
                        console.error('评论列表定位失败:', error);
                    } finally {
                        this.setBusy(false);
                    }
                }).catch((error) => {
                    if (this.destroyed || generation !== this.renderGeneration) return;
                    console.error('评论列表渲染失败:', error);
                    this.setBusy(false);
                });
                return;
            }
            // 新翻页接管现有占位，旧定时器不能在构建新页面时释放高度。
            if (this.heightHold) {
                clearTimeout(this.heightHoldTimer);
                this.heightHoldTimer = 0;
                this.heightHold.generation = generation;
                this.heightHold.waiting = false;
                this.heightHold.safeSample = null;
            }
            let released = false;
            const release = (reason) => {
                if (released) {
                    return;
                }
                released = true;
                // 成功或异常都请求安全检查，不能在错误路径绕过滚动范围判断。
                this.scheduleHeightRelease(generation, reason);
            };

            const finish = () => {
                if (this.destroyed || generation !== this.renderGeneration) {
                    release('stale-before-position');
                    return;
                }
                this.positionAfterPaint((positionError) => {
                    if (this.destroyed || generation !== this.renderGeneration) {
                        release('stale-after-position');
                        return;
                    }
                    try {
                        release(positionError ? 'error' : 'complete');
                    } finally {
                        this.setBusy(false);
                    }
                }, generation);
            };

            this.build(start, end, generation).then((replaced) => {
                if (this.destroyed || generation !== this.renderGeneration) {
                    release('stale-after-build');
                    return;
                }
                if (!replaced) {
                    try {
                        release('build-not-replaced');
                    } finally {
                        this.setBusy(false);
                    }
                    return;
                }
                finish();
            }).catch((error) => {
                if (this.destroyed || generation !== this.renderGeneration) {
                    release('stale-error');
                    return;
                }
                console.error('评论列表渲染失败:', error);
                try {
                    release('error');
                } finally {
                    this.setBusy(false);
                }
            });
        }

        // 更新按钮
        updatePaginationButtons() {
            this.prev.style.display = (this.currentPage === 1) ? "none" : "flex";
            this.next.style.display = (this.currentPage >= this.totalPages) ? "none" : "flex";
        }

        // 初始化
        async init() {
            try {
                this.commentlist = await this.config.dataFetcher();
                if (this.commentNumElement) {
                    this.commentNumElement.textContent = `已有 ${this.commentlist.length || 0} 条评论`;
                }
                const replaced = await this.build();
                if (this.destroyed) {
                    return;
                }
                this.ready = !!replaced;
                this.releaseAfterPaint();
            } catch (error) {
                console.error('评论列表初始化失败:', error);
                if (!this.destroyed) {
                    this.ready = false;
                    this.setBusy(false);
                }
            }
        }

        // 构建列表
        build(start=0, end=this.itemsPerPage - 1, generation=this.renderGeneration) {
            // 固定本轮读取的数组引用，防止构建到一半切换排序后，一页中混入两种顺序的数据。
            const comments = this.commentlist;
            const nextPage = Math.floor(start / this.itemsPerPage) + 1;
            const nextTotalPages = Math.ceil(comments.length / this.itemsPerPage);
            // 模板节点不进入可见 DOM；每批最多 10 条，构建失败时旧列表仍在。
            const page = document.createElement('template');
            let index = start;
            const batchSize = 10;

            return new Promise((resolve, reject) => {
                let settled = false;
                const finish = (value) => {
                    if (settled) return;
                    settled = true;
                    resolve(value);
                };
                const fail = (error) => {
                    if (settled) return;
                    settled = true;
                    if (!this.destroyed && generation === this.renderGeneration) {
                        this.config.onRenderError?.(error);
                    }
                    reject(error);
                };
                const scheduleBatch = () => {
                    try {
                        win.requestAnimationFrame(() => {
                            renderBatch().catch(fail);
                        });
                    } catch (error) {
                        fail(error);
                    }
                };
                const renderBatch = async () => {
                    if (this.destroyed || generation !== this.renderGeneration) {
                        finish(false);
                        return;
                    }
                    try {
                        const batch = [];
                        const batchEnd = Math.min(end, index + batchSize - 1, comments.length - 1);
                        for (; index <= batchEnd; index++) {
                            const item = comments[index];
                            const id = String(item?.coid ?? '0').replace(/[^\w-]/g, '') || '0';
                            const rendered = this.config.itemRenderer(item, index);
                            // 保留旧版异步模板契约；等待期间轮次可能失效，提交前必须再检查。
                            const html = rendered && typeof rendered.then === 'function' ? await rendered : rendered;
                            if (this.destroyed || generation !== this.renderGeneration) {
                                finish(false);
                                return;
                            }
                            batch.push(`<li id="comment-${id}" class="comment-body comment-parent comment-odd">${html ?? ''}</li>`);
                        }
                        const batchTemplate = document.createElement('template');
                        batchTemplate.innerHTML = batch.join('');
                        page.content.append(batchTemplate.content);
                        if (index <= end && index < comments.length) {
                            scheduleBatch();
                            return;
                        }
                        if (this.destroyed || generation !== this.renderGeneration) {
                            finish(false);
                            return;
                        }
                        // 全部构建完毕后一次提交，避免先清空列表导致页面高度骤降。
                        // 页码与按钮也在提交成功后更新，失败时不提前跳到下一页。
                        this.holdListHeight(generation);
                        this.list.replaceChildren(page.content);
                        this.currentPage = nextPage;
                        this.totalPages = nextTotalPages;
                        this.updatePaginationButtons();
                        // 页面提交后通知业务层同步排序高亮和点赞状态，补齐分帧构建期间发生的状态变化。
                        this.config.onRender?.(comments);
                        finish(true);
                    } catch (error) {
                        fail(error);
                    }
                };
                scheduleBatch();
            });
        }
    }

    // 构建虚拟列表
    class VirtualList {
        constructor(options) {
            this.config = {
                estimatedItemHeight: 40,
                itemsPerGroup: 4,
                // 每组4个项目
                bufferGroups: 2,
                // 预加载前后2组
                throttleTime: 16,
                ...options
            };

            this.container = document.querySelector(this.config.containerSelector);
            this.list = document.querySelector(this.config.listSelector);
            this.virtualElement = document.querySelector(this.config.virtualElementSelector);
            this.groupHeightCache = [];
            // 每组高度缓存
            this.offsetCache = [0];
            // 组偏移量缓存
            this.lastScrollTime = 0;
            this.isRendering = false;
            this.currentGroup = -1;
            this.totalGroups = 0;
            this.init();
        }

        async init() {
            const _this = this;

            this.currentGroup = -1;
            this.commentlist = await this.config.dataFetcher();
            this.totalGroups = Math.ceil(this.commentlist.length / this.config.itemsPerGroup);

            this.initializeCaches();
            this.calculateTotalHeight();

            this.container.style.overflow = 'auto';
            this.container.style.position = 'relative';
            this.container.style.willChange = 'scroll-position';

            this.list.style.position = 'absolute';
            this.list.style.top = '0';
            this.list.style.left = '0';
            this.list.style.width = '100%';
            this.list.style.willChange = 'transform';

            this.scrollTop = 0;
            this.container.scrollTop = 0;

            this.container.addEventListener('scroll', this.handleScroll.bind(this));
            await this.renderVisibleGroups();

            window.visualViewport.addEventListener('resize', function() {
                setTimeout( () => {
                    _this.container.scrollTop = _this.container.scrollTop + 1;
                }
                , 0);
            });
        }

        initializeCaches() {
            // 初始化时使用估计高度填充缓存
            this.groupHeightCache = new Array(this.totalGroups).fill(this.config.estimatedItemHeight * this.config.itemsPerGroup);
            this.offsetCache = new Array(this.totalGroups + 1);
            this.offsetCache[0] = 0;

            for (let i = 0; i < this.totalGroups; i++) {
                this.offsetCache[i + 1] = this.offsetCache[i] + this.groupHeightCache[i];
            }
        }

        iosKeyboardListeners() {
            let previousHeight = window.innerHeight;
            window.addEventListener('resize', function() {
                const currentHeight = window.innerHeight;
                if (currentHeight > previousHeight) {
                    console.log('键盘收起了');
                    alert('11');
                }

                // 键盘弹出时窗口高度会减少
                if (currentHeight < previousHeight) {
                    console.log('键盘弹出了');
                    alert('22');
                }

                previousHeight = currentHeight;
            });
        }

        handleScroll() {
            const now = Date.now();
            if (now - this.lastScrollTime < this.config.throttleTime || this.isRendering) {
                return;
            }
            this.lastScrollTime = now;

            if (this?.container?.scrollTop) {
                this.scrollTop = this.container.scrollTop;
                requestAnimationFrame( () => this.renderVisibleGroups());
            }
        }

        calculateTotalHeight() {
            this.totalHeight = this.offsetCache[this.totalGroups] || this.totalGroups * this.config.estimatedItemHeight * this.config.itemsPerGroup;
            this.virtualElement.style.height = `${this.totalHeight}px`;
        }

        getCurrentGroup() {
            const scrollTop = this.scrollTop;

            // 使用二分查找确定当前组
            let low = 0
              , high = this.totalGroups - 1;
            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (this.offsetCache[mid] <= scrollTop && scrollTop < this.offsetCache[mid + 1]) {
                    return mid;
                } else if (this.offsetCache[mid] < scrollTop) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return 0;
        }

        getVisibleRange() {
            const currentGroup = this.getCurrentGroup();
            if (currentGroup === this.currentGroup)
                return null;

            this.currentGroup = currentGroup;

            // 计算要渲染的组范围
            const startGroup = Math.max(0, currentGroup - this.config.bufferGroups);
            const endGroup = Math.min(this.totalGroups - 1, currentGroup + this.config.bufferGroups);

            return {
                startGroup,
                endGroup
            };
        }

        async renderVisibleGroups() {
            if (this.isRendering)
                return;
            this.isRendering = true;

            try {
                const range = this.getVisibleRange();
                if (!range)
                    return;

                const {startGroup, endGroup} = range;
                const offsetTop = this.offsetCache[startGroup] || 0;
                const fragment = document.createDocumentFragment();
                const existingNodes = new Map();

                // 收集现有节点以便复用
                Array.from(this.list.children).forEach(node => {
                    const groupId = node.dataset.groupId;
                    if (groupId)
                        existingNodes.set(groupId, node);
                }
                );

                // 创建或复用组节点
                for (let group = startGroup; group <= endGroup; group++) {
                    const startIdx = group * this.config.itemsPerGroup;
                    const endIdx = Math.min((group + 1) * this.config.itemsPerGroup, this.commentlist.length);
                    const groupItems = this.commentlist.slice(startIdx, endIdx);
                    let groupNode = existingNodes.get(`group-${group}`);

                    if (!groupNode) {
                        groupNode = document.createElement('li');
                        groupNode.dataset.groupId = `group-${group}`;

                        // 创建组内项目
                        groupItems.forEach( (item, i) => {
                            const itemNode = document.createElement('div');
                            itemNode.id = `comment-${item.coid}`;
                            itemNode.className = `comment-body`;
                            itemNode.innerHTML = this.config.itemRenderer(item, startIdx + i);
                            groupNode.appendChild(itemNode);
                        }
                        );
                    }

                    fragment.appendChild(groupNode);
                    existingNodes.delete(`group-${group}`);
                }

                // 一次性更新DOM
                this.list.style.transform = `translateY(${offsetTop}px)`;
                this.list.innerHTML = '';
                this.list.appendChild(fragment);

                // 更新高度缓存
                this.updateHeightCache(startGroup, endGroup);
            } finally {
                this.isRendering = false;
            }
        }

        updateHeightCache(startGroup, endGroup) {
            let heightChanged = false;
            const items = this.list.children;

            for (let i = 0; i < items.length; i++) {
                const group = startGroup + i;
                if (group > endGroup)
                    break;

                const measuredHeight = items[i].offsetHeight;
                if (this.groupHeightCache[group] !== measuredHeight) {
                    this.groupHeightCache[group] = measuredHeight;
                    heightChanged = true;
                }
            }

            if (heightChanged) {
                this.offsetCache[0] = 0;
                for (let i = 0; i < this.totalGroups; i++) {
                    this.offsetCache[i + 1] = this.offsetCache[i] + this.groupHeightCache[i];
                }
                this.calculateTotalHeight();
            }
        }

        destroy() {
            // 1. 移除事件监听器
            this.container.removeEventListener('scroll', this.handleScroll);

            // 2. 清理DOM引用
            if (this.list) {
                this.list.innerHTML = '';
                this.list.style.transform = `translateY(0px)`;
            }

            if (this.virtualElement) {
                this.virtualElement.style.height = '0';
                // 重置虚拟高度
            }

            // 3. 重置所有状态变量
            this.groupHeightCache = [];
            this.offsetCache = [0];
            this.currentGroup = -1;
            this.isRendering = false;
            this.lastScrollTime = 0;

            // 5. 清除引用（防止内存泄漏）
            this.container.replaceWith(this.container.cloneNode(true))
        }
    }

    // 实例化
    win.UserComment = new UserComment();
    win.ScrollLock = ScrollLock;
    win.VirtualList = VirtualList;
    win.PagetionList = PagetionList;

    // 初始化
    init();

}
)(document, window, layer, !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e()
}(this, (function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var o in t)
                    n.d(r, o, function(e) {
                        return t[e]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 65)
    }([function(t, e, n) {
        (function(e) {
            var n = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
        }
        ).call(this, n(68))
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(50)
          , i = n(3)
          , u = n(29)
          , c = n(55)
          , a = n(75)
          , s = o("wks")
          , f = r.Symbol
          , l = a ? f : f && f.withoutSetter || u;
        t.exports = function(t) {
            return i(s, t) || (c && i(f, t) ? s[t] = f[t] : s[t] = l("Symbol." + t)),
            s[t]
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , function(t, e, n) {
        var r = n(6)
          , o = n(45)
          , i = n(7)
          , u = n(25)
          , c = Object.defineProperty;
        e.f = r ? c : function(t, e, n) {
            if (i(t),
            e = u(e, !0),
            i(n),
            o)
                try {
                    return c(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (t[e] = n.value),
            t
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    , function(t, e, n) {
        var r = n(2);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(String(t) + " is not an object");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(6)
          , o = n(5)
          , i = n(14);
        t.exports = r ? function(t, e, n) {
            return o.f(t, e, i(1, n))
        }
        : function(t, e, n) {
            return t[e] = n,
            t
        }
    }
    , function(t, e, n) {
        var r, o, i, u = n(49), c = n(0), a = n(2), s = n(8), f = n(3), l = n(27), p = n(16), h = c.WeakMap;
        if (u) {
            var d = new h
              , v = d.get
              , y = d.has
              , m = d.set;
            r = function(t, e) {
                return m.call(d, t, e),
                e
            }
            ,
            o = function(t) {
                return v.call(d, t) || {}
            }
            ,
            i = function(t) {
                return y.call(d, t)
            }
        } else {
            var g = l("state");
            p[g] = !0,
            r = function(t, e) {
                return s(t, g, e),
                e
            }
            ,
            o = function(t) {
                return f(t, g) ? t[g] : {}
            }
            ,
            i = function(t) {
                return f(t, g)
            }
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!a(e) || (n = o(e)).type !== t)
                        throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    }
    , function(t, e, n) {
        var r = n(0);
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(8)
          , i = n(3)
          , u = n(26)
          , c = n(47)
          , a = n(9)
          , s = a.get
          , f = a.enforce
          , l = String(String).split("String");
        (t.exports = function(t, e, n, c) {
            var a = !!c && !!c.unsafe
              , s = !!c && !!c.enumerable
              , p = !!c && !!c.noTargetGet;
            "function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e),
            f(n).source = l.join("string" == typeof e ? e : "")),
            t !== r ? (a ? !p && t[e] && (s = !0) : delete t[e],
            s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && s(this).source || c(this)
        }
        ))
    }
    , function(t, e) {
        t.exports = {}
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(43).f
          , i = n(8)
          , u = n(11)
          , c = n(26)
          , a = n(69)
          , s = n(53);
        t.exports = function(t, e) {
            var n, f, l, p, h, d = t.target, v = t.global, y = t.stat;
            if (n = v ? r : y ? r[d] || c(d, {}) : (r[d] || {}).prototype)
                for (f in e) {
                    if (p = e[f],
                    l = t.noTargetGet ? (h = o(n, f)) && h.value : n[f],
                    !s(v ? f : d + (y ? "." : "#") + f, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l)
                            continue;
                        a(p, l)
                    }
                    (t.sham || l && l.sham) && i(p, "sham", !0),
                    u(n, f, p, t)
                }
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }
    , function(t, e, n) {
        var r = n(22)
          , o = n(24);
        t.exports = function(t) {
            return r(o(t))
        }
    }
    , function(t, e) {
        t.exports = {}
    }
    , function(t, e, n) {
        var r = n(31)
          , o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }
    , function(t, e, n) {
        var r = n(16)
          , o = n(2)
          , i = n(3)
          , u = n(5).f
          , c = n(29)
          , a = n(74)
          , s = c("meta")
          , f = 0
          , l = Object.isExtensible || function() {
            return !0
        }
          , p = function(t) {
            u(t, s, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        }
          , h = t.exports = {
            REQUIRED: !1,
            fastKey: function(t, e) {
                if (!o(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, s)) {
                    if (!l(t))
                        return "F";
                    if (!e)
                        return "E";
                    p(t)
                }
                return t[s].objectID
            },
            getWeakData: function(t, e) {
                if (!i(t, s)) {
                    if (!l(t))
                        return !0;
                    if (!e)
                        return !1;
                    p(t)
                }
                return t[s].weakData
            },
            onFreeze: function(t) {
                return a && h.REQUIRED && l(t) && !i(t, s) && p(t),
                t
            }
        };
        r[s] = !0
    }
    , function(t, e, n) {
        var r = n(76);
        t.exports = function(t, e, n) {
            if (r(t),
            void 0 === e)
                return t;
            switch (n) {
            case 0:
                return function() {
                    return t.call(e)
                }
                ;
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                }
                ;
            case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }
    , function(t, e, n) {
        var r = n(24);
        t.exports = function(t) {
            return Object(r(t))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(13)
          , o = n(0)
          , i = n(53)
          , u = n(11)
          , c = n(18)
          , a = n(33)
          , s = n(35)
          , f = n(2)
          , l = n(4)
          , p = n(59)
          , h = n(36)
          , d = n(77);
        t.exports = function(t, e, n) {
            var v = -1 !== t.indexOf("Map")
              , y = -1 !== t.indexOf("Weak")
              , m = v ? "set" : "add"
              , g = o[t]
              , x = g && g.prototype
              , b = g
              , w = {}
              , S = function(t) {
                var e = x[t];
                u(x, t, "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t),
                    this
                }
                : "delete" == t ? function(t) {
                    return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "get" == t ? function(t) {
                    return y && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                }
                : "has" == t ? function(t) {
                    return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n),
                    this
                }
                )
            };
            if (i(t, "function" != typeof g || !(y || x.forEach && !l((function() {
                (new g).entries().next()
            }
            )))))
                b = n.getConstructor(e, t, v, m),
                c.REQUIRED = !0;
            else if (i(t, !0)) {
                var _ = new b
                  , E = _[m](y ? {} : -0, 1) != _
                  , O = l((function() {
                    _.has(1)
                }
                ))
                  , T = p((function(t) {
                    new g(t)
                }
                ))
                  , A = !y && l((function() {
                    for (var t = new g, e = 5; e--; )
                        t[m](e, e);
                    return !t.has(-0)
                }
                ));
                T || ((b = e((function(e, n) {
                    s(e, b, t);
                    var r = d(new g, e, b);
                    return null != n && a(n, r[m], r, v),
                    r
                }
                ))).prototype = x,
                x.constructor = b),
                (O || A) && (S("delete"),
                S("has"),
                v && S("get")),
                (A || E) && S(m),
                y && x.clear && delete x.clear
            }
            return w[t] = b,
            r({
                global: !0,
                forced: b != g
            }, w),
            h(b, t),
            y || n.setStrong(b, t, v),
            b
        }
    }
    , function(t, e, n) {
        var r = n(4)
          , o = n(23)
          , i = "".split;
        t.exports = r((function() {
            return !Object("z").propertyIsEnumerable(0)
        }
        )) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        }
        : Object
    }
    , function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (null == t)
                throw TypeError("Can't call method on " + t);
            return t
        }
    }
    , function(t, e, n) {
        var r = n(2);
        t.exports = function(t, e) {
            if (!r(t))
                return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
                return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
                return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(8);
        t.exports = function(t, e) {
            try {
                o(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        }
    }
    , function(t, e, n) {
        var r = n(50)
          , o = n(29)
          , i = r("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }
    , function(t, e) {
        t.exports = !1
    }
    , function(t, e) {
        var n = 0
          , r = Math.random();
        t.exports = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
        }
    }
    , function(t, e, n) {
        var r = n(10)
          , o = n(0)
          , i = function(t) {
            return "function" == typeof t ? t : void 0
        };
        t.exports = function(t, e) {
            return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
        }
    }
    , function(t, e) {
        var n = Math.ceil
          , r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }
    , function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    , function(t, e, n) {
        var r = n(7)
          , o = n(54)
          , i = n(17)
          , u = n(19)
          , c = n(56)
          , a = n(58)
          , s = function(t, e) {
            this.stopped = t,
            this.result = e
        };
        (t.exports = function(t, e, n, f, l) {
            var p, h, d, v, y, m, g, x = u(e, n, f ? 2 : 1);
            if (l)
                p = t;
            else {
                if ("function" != typeof (h = c(t)))
                    throw TypeError("Target is not iterable");
                if (o(h)) {
                    for (d = 0,
                    v = i(t.length); v > d; d++)
                        if ((y = f ? x(r(g = t[d])[0], g[1]) : x(t[d])) && y instanceof s)
                            return y;
                    return new s(!1)
                }
                p = h.call(t)
            }
            for (m = p.next; !(g = m.call(p)).done; )
                if ("object" == typeof (y = a(p, x, g.value, f)) && y && y instanceof s)
                    return y;
            return new s(!1)
        }
        ).stop = function(t) {
            return new s(!0,t)
        }
    }
    , function(t, e, n) {
        var r = {};
        r[n(1)("toStringTag")] = "z",
        t.exports = "[object z]" === String(r)
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            if (!(t instanceof e))
                throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(5).f
          , o = n(3)
          , i = n(1)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }
    , function(t, e, n) {
        var r, o = n(7), i = n(79), u = n(32), c = n(16), a = n(80), s = n(46), f = n(27)("IE_PROTO"), l = function() {}, p = function(t) {
            return "<script>" + t + "<\/script>"
        }, h = function() {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            h = r ? function(t) {
                t.write(p("")),
                t.close();
                var e = t.parentWindow.Object;
                return t = null,
                e
            }(r) : function() {
                var t, e = s("iframe");
                return e.style.display = "none",
                a.appendChild(e),
                e.src = String("javascript:"),
                (t = e.contentWindow.document).open(),
                t.write(p("document.F=Object")),
                t.close(),
                t.F
            }();
            for (var t = u.length; t--; )
                delete h.prototype[u[t]];
            return h()
        };
        c[f] = !0,
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (l.prototype = o(t),
            n = new l,
            l.prototype = null,
            n[f] = t) : n = h(),
            void 0 === e ? n : i(n, e)
        }
    }
    , function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e, n) {
            for (var o in e)
                r(t, o, e[o], n);
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(13)
          , o = n(81)
          , i = n(64)
          , u = n(60)
          , c = n(36)
          , a = n(8)
          , s = n(11)
          , f = n(1)
          , l = n(28)
          , p = n(12)
          , h = n(63)
          , d = h.IteratorPrototype
          , v = h.BUGGY_SAFARI_ITERATORS
          , y = f("iterator")
          , m = function() {
            return this
        };
        t.exports = function(t, e, n, f, h, g, x) {
            o(n, e, f);
            var b, w, S, _ = function(t) {
                if (t === h && P)
                    return P;
                if (!v && t in T)
                    return T[t];
                switch (t) {
                case "keys":
                case "values":
                case "entries":
                    return function() {
                        return new n(this,t)
                    }
                }
                return function() {
                    return new n(this)
                }
            }, E = e + " Iterator", O = !1, T = t.prototype, A = T[y] || T["@@iterator"] || h && T[h], P = !v && A || _(h), j = "Array" == e && T.entries || A;
            if (j && (b = i(j.call(new t)),
            d !== Object.prototype && b.next && (l || i(b) === d || (u ? u(b, d) : "function" != typeof b[y] && a(b, y, m)),
            c(b, E, !0, !0),
            l && (p[E] = m))),
            "values" == h && A && "values" !== A.name && (O = !0,
            P = function() {
                return A.call(this)
            }
            ),
            l && !x || T[y] === P || a(T, y, P),
            p[e] = P,
            h)
                if (w = {
                    values: _("values"),
                    keys: g ? P : _("keys"),
                    entries: _("entries")
                },
                x)
                    for (S in w)
                        !v && !O && S in T || s(T, S, w[S]);
                else
                    r({
                        target: e,
                        proto: !0,
                        forced: v || O
                    }, w);
            return w
        }
    }
    , function(t, e, n) {
        var r = n(34)
          , o = n(11)
          , i = n(84);
        r || o(Object.prototype, "toString", i, {
            unsafe: !0
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(85).charAt
          , o = n(9)
          , i = n(39)
          , u = o.set
          , c = o.getterFor("String Iterator");
        i(String, "String", (function(t) {
            u(this, {
                type: "String Iterator",
                string: String(t),
                index: 0
            })
        }
        ), (function() {
            var t, e = c(this), n = e.string, o = e.index;
            return o >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, o),
            e.index += t.length,
            {
                value: t,
                done: !1
            })
        }
        ))
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(86)
          , i = n(87)
          , u = n(8)
          , c = n(1)
          , a = c("iterator")
          , s = c("toStringTag")
          , f = i.values;
        for (var l in o) {
            var p = r[l]
              , h = p && p.prototype;
            if (h) {
                if (h[a] !== f)
                    try {
                        u(h, a, f)
                    } catch (t) {
                        h[a] = f
                    }
                if (h[s] || u(h, s, l),
                o[l])
                    for (var d in i)
                        if (h[d] !== i[d])
                            try {
                                u(h, d, i[d])
                            } catch (t) {
                                h[d] = i[d]
                            }
            }
        }
    }
    , function(t, e, n) {
        var r = n(6)
          , o = n(44)
          , i = n(14)
          , u = n(15)
          , c = n(25)
          , a = n(3)
          , s = n(45)
          , f = Object.getOwnPropertyDescriptor;
        e.f = r ? f : function(t, e) {
            if (t = u(t),
            e = c(e, !0),
            s)
                try {
                    return f(t, e)
                } catch (t) {}
            if (a(t, e))
                return i(!o.f.call(t, e), t[e])
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable
          , o = Object.getOwnPropertyDescriptor
          , i = o && !r.call({
            1: 2
        }, 1);
        e.f = i ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable
        }
        : r
    }
    , function(t, e, n) {
        var r = n(6)
          , o = n(4)
          , i = n(46);
        t.exports = !r && !o((function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(2)
          , i = r.document
          , u = o(i) && o(i.createElement);
        t.exports = function(t) {
            return u ? i.createElement(t) : {}
        }
    }
    , function(t, e, n) {
        var r = n(48)
          , o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
            return o.call(t)
        }
        ),
        t.exports = r.inspectSource
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(26)
          , i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i
    }
    , function(t, e, n) {
        var r = n(0)
          , o = n(47)
          , i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i))
    }
    , function(t, e, n) {
        var r = n(28)
          , o = n(48);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(t, e, n) {
        var r = n(3)
          , o = n(15)
          , i = n(72).indexOf
          , u = n(16);
        t.exports = function(t, e) {
            var n, c = o(t), a = 0, s = [];
            for (n in c)
                !r(u, n) && r(c, n) && s.push(n);
            for (; e.length > a; )
                r(c, n = e[a++]) && (~i(s, n) || s.push(n));
            return s
        }
    }
    , function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }
    , function(t, e, n) {
        var r = n(4)
          , o = /#|\.prototype\./
          , i = function(t, e) {
            var n = c[u(t)];
            return n == s || n != a && ("function" == typeof e ? r(e) : !!e)
        }
          , u = i.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        }
          , c = i.data = {}
          , a = i.NATIVE = "N"
          , s = i.POLYFILL = "P";
        t.exports = i
    }
    , function(t, e, n) {
        var r = n(1)
          , o = n(12)
          , i = r("iterator")
          , u = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (o.Array === t || u[i] === t)
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        }
        ))
    }
    , function(t, e, n) {
        var r = n(57)
          , o = n(12)
          , i = n(1)("iterator");
        t.exports = function(t) {
            if (null != t)
                return t[i] || t["@@iterator"] || o[r(t)]
        }
    }
    , function(t, e, n) {
        var r = n(34)
          , o = n(23)
          , i = n(1)("toStringTag")
          , u = "Arguments" == o(function() {
            return arguments
        }());
        t.exports = r ? o : function(t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : u ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r
        }
    }
    , function(t, e, n) {
        var r = n(7);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)),
                e
            }
        }
    }
    , function(t, e, n) {
        var r = n(1)("iterator")
          , o = !1;
        try {
            var i = 0
              , u = {
                next: function() {
                    return {
                        done: !!i++
                    }
                },
                return: function() {
                    o = !0
                }
            };
            u[r] = function() {
                return this
            }
            ,
            Array.from(u, (function() {
                throw 2
            }
            ))
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o)
                return !1;
            var n = !1;
            try {
                var i = {};
                i[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                t(i)
            } catch (t) {}
            return n
        }
    }
    , function(t, e, n) {
        var r = n(7)
          , o = n(78);
        t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var t, e = !1, n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                e = n instanceof Array
            } catch (t) {}
            return function(n, i) {
                return r(n),
                o(i),
                e ? t.call(n, i) : n.__proto__ = i,
                n
            }
        }() : void 0)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5).f
          , o = n(37)
          , i = n(38)
          , u = n(19)
          , c = n(35)
          , a = n(33)
          , s = n(39)
          , f = n(83)
          , l = n(6)
          , p = n(18).fastKey
          , h = n(9)
          , d = h.set
          , v = h.getterFor;
        t.exports = {
            getConstructor: function(t, e, n, s) {
                var f = t((function(t, r) {
                    c(t, f, e),
                    d(t, {
                        type: e,
                        index: o(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    l || (t.size = 0),
                    null != r && a(r, t[s], t, n)
                }
                ))
                  , h = v(e)
                  , y = function(t, e, n) {
                    var r, o, i = h(t), u = m(t, e);
                    return u ? u.value = n : (i.last = u = {
                        index: o = p(e, !0),
                        key: e,
                        value: n,
                        previous: r = i.last,
                        next: void 0,
                        removed: !1
                    },
                    i.first || (i.first = u),
                    r && (r.next = u),
                    l ? i.size++ : t.size++,
                    "F" !== o && (i.index[o] = u)),
                    t
                }
                  , m = function(t, e) {
                    var n, r = h(t), o = p(e);
                    if ("F" !== o)
                        return r.index[o];
                    for (n = r.first; n; n = n.next)
                        if (n.key == e)
                            return n
                };
                return i(f.prototype, {
                    clear: function() {
                        for (var t = h(this), e = t.index, n = t.first; n; )
                            n.removed = !0,
                            n.previous && (n.previous = n.previous.next = void 0),
                            delete e[n.index],
                            n = n.next;
                        t.first = t.last = void 0,
                        l ? t.size = 0 : this.size = 0
                    },
                    delete: function(t) {
                        var e = h(this)
                          , n = m(this, t);
                        if (n) {
                            var r = n.next
                              , o = n.previous;
                            delete e.index[n.index],
                            n.removed = !0,
                            o && (o.next = r),
                            r && (r.previous = o),
                            e.first == n && (e.first = r),
                            e.last == n && (e.last = o),
                            l ? e.size-- : this.size--
                        }
                        return !!n
                    },
                    forEach: function(t) {
                        for (var e, n = h(this), r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first; )
                            for (r(e.value, e.key, this); e && e.removed; )
                                e = e.previous
                    },
                    has: function(t) {
                        return !!m(this, t)
                    }
                }),
                i(f.prototype, n ? {
                    get: function(t) {
                        var e = m(this, t);
                        return e && e.value
                    },
                    set: function(t, e) {
                        return y(this, 0 === t ? 0 : t, e)
                    }
                } : {
                    add: function(t) {
                        return y(this, t = 0 === t ? 0 : t, t)
                    }
                }),
                l && r(f.prototype, "size", {
                    get: function() {
                        return h(this).size
                    }
                }),
                f
            },
            setStrong: function(t, e, n) {
                var r = e + " Iterator"
                  , o = v(e)
                  , i = v(r);
                s(t, e, (function(t, e) {
                    d(this, {
                        type: r,
                        target: t,
                        state: o(t),
                        kind: e,
                        last: void 0
                    })
                }
                ), (function() {
                    for (var t = i(this), e = t.kind, n = t.last; n && n.removed; )
                        n = n.previous;
                    return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                        value: n.key,
                        done: !1
                    } : "values" == e ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (t.target = void 0,
                    {
                        value: void 0,
                        done: !0
                    })
                }
                ), n ? "entries" : "values", !n, !0),
                f(e)
            }
        }
    }
    , function(t, e, n) {
        var r = n(51)
          , o = n(32);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r, o, i, u = n(64), c = n(8), a = n(3), s = n(1), f = n(28), l = s("iterator"), p = !1;
        [].keys && ("next"in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : p = !0),
        null == r && (r = {}),
        f || a(r, l) || c(r, l, (function() {
            return this
        }
        )),
        t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: p
        }
    }
    , function(t, e, n) {
        var r = n(3)
          , o = n(20)
          , i = n(27)
          , u = n(82)
          , c = i("IE_PROTO")
          , a = Object.prototype;
        t.exports = u ? Object.getPrototypeOf : function(t) {
            return t = o(t),
            r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }
    , function(t, e, n) {
        t.exports = n(104)
    }
    , function(t, e, n) {
        n(67),
        n(40),
        n(41),
        n(42);
        var r = n(10);
        t.exports = r.Map
    }
    , function(t, e, n) {
        "use strict";
        var r = n(21)
          , o = n(61);
        t.exports = r("Map", (function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), o)
    }
    , function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function(t, e, n) {
        var r = n(3)
          , o = n(70)
          , i = n(43)
          , u = n(5);
        t.exports = function(t, e) {
            for (var n = o(e), c = u.f, a = i.f, s = 0; s < n.length; s++) {
                var f = n[s];
                r(t, f) || c(t, f, a(e, f))
            }
        }
    }
    , function(t, e, n) {
        var r = n(30)
          , o = n(71)
          , i = n(52)
          , u = n(7);
        t.exports = r("Reflect", "ownKeys") || function(t) {
            var e = o.f(u(t))
              , n = i.f;
            return n ? e.concat(n(t)) : e
        }
    }
    , function(t, e, n) {
        var r = n(51)
          , o = n(32).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }
    , function(t, e, n) {
        var r = n(15)
          , o = n(17)
          , i = n(73)
          , u = function(t) {
            return function(e, n, u) {
                var c, a = r(e), s = o(a.length), f = i(u, s);
                if (t && n != n) {
                    for (; s > f; )
                        if ((c = a[f++]) != c)
                            return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in a) && a[f] === n)
                            return t || f || 0;
                return !t && -1
            }
        };
        t.exports = {
            includes: u(!0),
            indexOf: u(!1)
        }
    }
    , function(t, e, n) {
        var r = n(31)
          , o = Math.max
          , i = Math.min;
        t.exports = function(t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e)
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = !r((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    }
    , function(t, e, n) {
        var r = n(55);
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    , function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(String(t) + " is not a function");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(2)
          , o = n(60);
        t.exports = function(t, e, n) {
            var i, u;
            return o && "function" == typeof (i = e.constructor) && i !== n && r(u = i.prototype) && u !== n.prototype && o(t, u),
            t
        }
    }
    , function(t, e, n) {
        var r = n(2);
        t.exports = function(t) {
            if (!r(t) && null !== t)
                throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(6)
          , o = n(5)
          , i = n(7)
          , u = n(62);
        t.exports = r ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, r = u(e), c = r.length, a = 0; c > a; )
                o.f(t, n = r[a++], e[n]);
            return t
        }
    }
    , function(t, e, n) {
        var r = n(30);
        t.exports = r("document", "documentElement")
    }
    , function(t, e, n) {
        "use strict";
        var r = n(63).IteratorPrototype
          , o = n(37)
          , i = n(14)
          , u = n(36)
          , c = n(12)
          , a = function() {
            return this
        };
        t.exports = function(t, e, n) {
            var s = e + " Iterator";
            return t.prototype = o(r, {
                next: i(1, n)
            }),
            u(t, s, !1, !0),
            c[s] = a,
            t
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = !r((function() {
            function t() {}
            return t.prototype.constructor = null,
            Object.getPrototypeOf(new t) !== t.prototype
        }
        ))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(30)
          , o = n(5)
          , i = n(1)
          , u = n(6)
          , c = i("species");
        t.exports = function(t) {
            var e = r(t)
              , n = o.f;
            u && e && !e[c] && n(e, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(34)
          , o = n(57);
        t.exports = r ? {}.toString : function() {
            return "[object " + o(this) + "]"
        }
    }
    , function(t, e, n) {
        var r = n(31)
          , o = n(24)
          , i = function(t) {
            return function(e, n) {
                var i, u, c = String(o(e)), a = r(n), s = c.length;
                return a < 0 || a >= s ? t ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        };
        t.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    }
    , function(t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(15)
          , o = n(88)
          , i = n(12)
          , u = n(9)
          , c = n(39)
          , a = u.set
          , s = u.getterFor("Array Iterator");
        t.exports = c(Array, "Array", (function(t, e) {
            a(this, {
                type: "Array Iterator",
                target: r(t),
                index: 0,
                kind: e
            })
        }
        ), (function() {
            var t = s(this)
              , e = t.target
              , n = t.kind
              , r = t.index++;
            return !e || r >= e.length ? (t.target = void 0,
            {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }
        ), "values"),
        i.Arguments = i.Array,
        o("keys"),
        o("values"),
        o("entries")
    }
    , function(t, e, n) {
        var r = n(1)
          , o = n(37)
          , i = n(5)
          , u = r("unscopables")
          , c = Array.prototype;
        null == c[u] && i.f(c, u, {
            configurable: !0,
            value: o(null)
        }),
        t.exports = function(t) {
            c[u][t] = !0
        }
    }
    , function(t, e, n) {
        n(90),
        n(40),
        n(41),
        n(42);
        var r = n(10);
        t.exports = r.Set
    }
    , function(t, e, n) {
        "use strict";
        var r = n(21)
          , o = n(61);
        t.exports = r("Set", (function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), o)
    }
    , function(t, e, n) {
        n(40),
        n(92),
        n(42);
        var r = n(10);
        t.exports = r.WeakMap
    }
    , function(t, e, n) {
        "use strict";
        var r, o = n(0), i = n(38), u = n(18), c = n(21), a = n(93), s = n(2), f = n(9).enforce, l = n(49), p = !o.ActiveXObject && "ActiveXObject"in o, h = Object.isExtensible, d = function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }, v = t.exports = c("WeakMap", d, a);
        if (l && p) {
            r = a.getConstructor(d, "WeakMap", !0),
            u.REQUIRED = !0;
            var y = v.prototype
              , m = y.delete
              , g = y.has
              , x = y.get
              , b = y.set;
            i(y, {
                delete: function(t) {
                    if (s(t) && !h(t)) {
                        var e = f(this);
                        return e.frozen || (e.frozen = new r),
                        m.call(this, t) || e.frozen.delete(t)
                    }
                    return m.call(this, t)
                },
                has: function(t) {
                    if (s(t) && !h(t)) {
                        var e = f(this);
                        return e.frozen || (e.frozen = new r),
                        g.call(this, t) || e.frozen.has(t)
                    }
                    return g.call(this, t)
                },
                get: function(t) {
                    if (s(t) && !h(t)) {
                        var e = f(this);
                        return e.frozen || (e.frozen = new r),
                        g.call(this, t) ? x.call(this, t) : e.frozen.get(t)
                    }
                    return x.call(this, t)
                },
                set: function(t, e) {
                    if (s(t) && !h(t)) {
                        var n = f(this);
                        n.frozen || (n.frozen = new r),
                        g.call(this, t) ? b.call(this, t, e) : n.frozen.set(t, e)
                    } else
                        b.call(this, t, e);
                    return this
                }
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(38)
          , o = n(18).getWeakData
          , i = n(7)
          , u = n(2)
          , c = n(35)
          , a = n(33)
          , s = n(94)
          , f = n(3)
          , l = n(9)
          , p = l.set
          , h = l.getterFor
          , d = s.find
          , v = s.findIndex
          , y = 0
          , m = function(t) {
            return t.frozen || (t.frozen = new g)
        }
          , g = function() {
            this.entries = []
        }
          , x = function(t, e) {
            return d(t.entries, (function(t) {
                return t[0] === e
            }
            ))
        };
        g.prototype = {
            get: function(t) {
                var e = x(this, t);
                if (e)
                    return e[1]
            },
            has: function(t) {
                return !!x(this, t)
            },
            set: function(t, e) {
                var n = x(this, t);
                n ? n[1] = e : this.entries.push([t, e])
            },
            delete: function(t) {
                var e = v(this.entries, (function(e) {
                    return e[0] === t
                }
                ));
                return ~e && this.entries.splice(e, 1),
                !!~e
            }
        },
        t.exports = {
            getConstructor: function(t, e, n, s) {
                var l = t((function(t, r) {
                    c(t, l, e),
                    p(t, {
                        type: e,
                        id: y++,
                        frozen: void 0
                    }),
                    null != r && a(r, t[s], t, n)
                }
                ))
                  , d = h(e)
                  , v = function(t, e, n) {
                    var r = d(t)
                      , u = o(i(e), !0);
                    return !0 === u ? m(r).set(e, n) : u[r.id] = n,
                    t
                };
                return r(l.prototype, {
                    delete: function(t) {
                        var e = d(this);
                        if (!u(t))
                            return !1;
                        var n = o(t);
                        return !0 === n ? m(e).delete(t) : n && f(n, e.id) && delete n[e.id]
                    },
                    has: function(t) {
                        var e = d(this);
                        if (!u(t))
                            return !1;
                        var n = o(t);
                        return !0 === n ? m(e).has(t) : n && f(n, e.id)
                    }
                }),
                r(l.prototype, n ? {
                    get: function(t) {
                        var e = d(this);
                        if (u(t)) {
                            var n = o(t);
                            return !0 === n ? m(e).get(t) : n ? n[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return v(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return v(this, t, !0)
                    }
                }),
                l
            }
        }
    }
    , function(t, e, n) {
        var r = n(19)
          , o = n(22)
          , i = n(20)
          , u = n(17)
          , c = n(95)
          , a = [].push
          , s = function(t) {
            var e = 1 == t
              , n = 2 == t
              , s = 3 == t
              , f = 4 == t
              , l = 6 == t
              , p = 5 == t || l;
            return function(h, d, v, y) {
                for (var m, g, x = i(h), b = o(x), w = r(d, v, 3), S = u(b.length), _ = 0, E = y || c, O = e ? E(h, S) : n ? E(h, 0) : void 0; S > _; _++)
                    if ((p || _ in b) && (g = w(m = b[_], _, x),
                    t))
                        if (e)
                            O[_] = g;
                        else if (g)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return m;
                            case 6:
                                return _;
                            case 2:
                                a.call(O, m)
                            }
                        else if (f)
                            return !1;
                return l ? -1 : s || f ? f : O
            }
        };
        t.exports = {
            forEach: s(0),
            map: s(1),
            filter: s(2),
            some: s(3),
            every: s(4),
            find: s(5),
            findIndex: s(6)
        }
    }
    , function(t, e, n) {
        var r = n(2)
          , o = n(96)
          , i = n(1)("species");
        t.exports = function(t, e) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0),
            new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        }
    }
    , function(t, e, n) {
        var r = n(23);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }
    , function(t, e, n) {
        n(41),
        n(98);
        var r = n(10);
        t.exports = r.Array.from
    }
    , function(t, e, n) {
        var r = n(13)
          , o = n(99);
        r({
            target: "Array",
            stat: !0,
            forced: !n(59)((function(t) {
                Array.from(t)
            }
            ))
        }, {
            from: o
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(19)
          , o = n(20)
          , i = n(58)
          , u = n(54)
          , c = n(17)
          , a = n(100)
          , s = n(56);
        t.exports = function(t) {
            var e, n, f, l, p, h, d = o(t), v = "function" == typeof this ? this : Array, y = arguments.length, m = y > 1 ? arguments[1] : void 0, g = void 0 !== m, x = s(d), b = 0;
            if (g && (m = r(m, y > 2 ? arguments[2] : void 0, 2)),
            null == x || v == Array && u(x))
                for (n = new v(e = c(d.length)); e > b; b++)
                    h = g ? m(d[b], b) : d[b],
                    a(n, b, h);
            else
                for (p = (l = x.call(d)).next,
                n = new v; !(f = p.call(l)).done; b++)
                    h = g ? i(l, m, [f.value, b], !0) : f.value,
                    a(n, b, h);
            return n.length = b,
            n
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(25)
          , o = n(5)
          , i = n(14);
        t.exports = function(t, e, n) {
            var u = r(e);
            u in t ? o.f(t, u, i(0, n)) : t[u] = n
        }
    }
    , function(t, e, n) {
        n(102);
        var r = n(10);
        t.exports = r.Object.assign
    }
    , function(t, e, n) {
        var r = n(13)
          , o = n(103);
        r({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(6)
          , o = n(4)
          , i = n(62)
          , u = n(52)
          , c = n(44)
          , a = n(20)
          , s = n(22)
          , f = Object.assign
          , l = Object.defineProperty;
        t.exports = !f || o((function() {
            if (r && 1 !== f({
                b: 1
            }, f(l({}, "a", {
                enumerable: !0,
                get: function() {
                    l(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b)
                return !0;
            var t = {}
              , e = {}
              , n = Symbol();
            return t[n] = 7,
            "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            }
            )),
            7 != f({}, t)[n] || "abcdefghijklmnopqrst" != i(f({}, e)).join("")
        }
        )) ? function(t, e) {
            for (var n = a(t), o = arguments.length, f = 1, l = u.f, p = c.f; o > f; )
                for (var h, d = s(arguments[f++]), v = l ? i(d).concat(l(d)) : i(d), y = v.length, m = 0; y > m; )
                    h = v[m++],
                    r && !p.call(d, h) || (n[h] = d[h]);
            return n
        }
        : f
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {};
        n.r(r),
        n.d(r, "keyboardHandler", (function() {
            return I
        }
        )),
        n.d(r, "mouseHandler", (function() {
            return R
        }
        )),
        n.d(r, "resizeHandler", (function() {
            return C
        }
        )),
        n.d(r, "selectHandler", (function() {
            return N
        }
        )),
        n.d(r, "touchHandler", (function() {
            return F
        }
        )),
        n.d(r, "wheelHandler", (function() {
            return H
        }
        ));
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            )(t, e)
        }
          , i = function() {
            return (i = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function u(t, e, n, r) {
            var o, i = arguments.length, u = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(t, e, n, r);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(e, n, u) : o(e, n)) || u);
            return i > 3 && u && Object.defineProperty(e, n, u),
            u
        }
        n(66),
        n(89),
        n(91),
        n(97),
        n(101);
        var c, a = new WeakMap;
        function s() {
            if (void 0 !== c)
                return c;
            var t = !1;
            try {
                var e = function() {}
                  , n = Object.defineProperty({}, "passive", {
                    enumerable: !0,
                    get: function() {
                        return t = !0,
                        !0
                    }
                });
                window.addEventListener("testPassive", e, n),
                window.removeEventListener("testPassive", e, n)
            } catch (t) {}
            return c = !!t && {
                passive: !1
            }
        }
        function f(t) {
            var e = a.get(t) || [];
            return a.set(t, e),
            function(t, n, r) {
                function o(t) {
                    t.defaultPrevented || r(t)
                }
                n.split(/\s+/g).forEach((function(n) {
                    e.push({
                        elem: t,
                        eventName: n,
                        handler: o
                    }),
                    t.addEventListener(n, o, s())
                }
                ))
            }
        }
        function l(t) {
            var e = function(t) {
                return t.touches ? t.touches[t.touches.length - 1] : t
            }(t);
            return {
                x: e.clientX,
                y: e.clientY
            }
        }
        function p(t, e) {
            return void 0 === e && (e = []),
            e.some((function(e) {
                return t === e
            }
            ))
        }
        var h = ["webkit", "moz", "ms", "o"]
          , d = new RegExp("^-(?!(?:" + h.join("|") + ")-)");
        function v(t, e) {
            e = function(t) {
                var e = {};
                return Object.keys(t).forEach((function(n) {
                    if (d.test(n)) {
                        var r = t[n];
                        n = n.replace(/^-/, ""),
                        e[n] = r,
                        h.forEach((function(t) {
                            e["-" + t + "-" + n] = r
                        }
                        ))
                    } else
                        e[n] = t[n]
                }
                )),
                e
            }(e),
            Object.keys(e).forEach((function(n) {
                var r = n.replace(/^-/, "").replace(/-([a-z])/g, (function(t, e) {
                    return e.toUpperCase()
                }
                ));
                t.style[r] = e[n]
            }
            ))
        }
        var y = function() {
            function t(t) {
                this.velocityMultiplier = window.devicePixelRatio,
                this.updateTime = Date.now(),
                this.delta = {
                    x: 0,
                    y: 0
                },
                this.velocity = {
                    x: 0,
                    y: 0
                },
                this.lastPosition = {
                    x: 0,
                    y: 0
                },
                this.lastPosition = l(t)
            }
            return t.prototype.update = function(t) {
                var e = this.velocity
                  , n = this.updateTime
                  , r = this.lastPosition
                  , o = Date.now()
                  , i = l(t)
                  , u = {
                    x: -(i.x - r.x),
                    y: -(i.y - r.y)
                }
                  , c = o - n || 16.7
                  , a = u.x / c * 16.7
                  , s = u.y / c * 16.7;
                e.x = a * this.velocityMultiplier,
                e.y = s * this.velocityMultiplier,
                this.delta = u,
                this.updateTime = o,
                this.lastPosition = i
            }
            ,
            t
        }()
          , m = function() {
            function t() {
                this._touchList = {}
            }
            return Object.defineProperty(t.prototype, "_primitiveValue", {
                get: function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.isActive = function() {
                return void 0 !== this._activeTouchID
            }
            ,
            t.prototype.getDelta = function() {
                var t = this._getActiveTracker();
                return t ? i({}, t.delta) : this._primitiveValue
            }
            ,
            t.prototype.getVelocity = function() {
                var t = this._getActiveTracker();
                return t ? i({}, t.velocity) : this._primitiveValue
            }
            ,
            t.prototype.getEasingDistance = function(t) {
                var e = 1 - t
                  , n = {
                    x: 0,
                    y: 0
                }
                  , r = this.getVelocity();
                return Object.keys(r).forEach((function(t) {
                    for (var o = Math.abs(r[t]) <= 10 ? 0 : r[t]; 0 !== o; )
                        n[t] += o,
                        o = o * e | 0
                }
                )),
                n
            }
            ,
            t.prototype.track = function(t) {
                var e = this
                  , n = t.targetTouches;
                return Array.from(n).forEach((function(t) {
                    e._add(t)
                }
                )),
                this._touchList
            }
            ,
            t.prototype.update = function(t) {
                var e = this
                  , n = t.touches
                  , r = t.changedTouches;
                return Array.from(n).forEach((function(t) {
                    e._renew(t)
                }
                )),
                this._setActiveID(r),
                this._touchList
            }
            ,
            t.prototype.release = function(t) {
                var e = this;
                delete this._activeTouchID,
                Array.from(t.changedTouches).forEach((function(t) {
                    e._delete(t)
                }
                ))
            }
            ,
            t.prototype._add = function(t) {
                this._has(t) && this._delete(t);
                var e = new y(t);
                this._touchList[t.identifier] = e
            }
            ,
            t.prototype._renew = function(t) {
                this._has(t) && this._touchList[t.identifier].update(t)
            }
            ,
            t.prototype._delete = function(t) {
                delete this._touchList[t.identifier]
            }
            ,
            t.prototype._has = function(t) {
                return this._touchList.hasOwnProperty(t.identifier)
            }
            ,
            t.prototype._setActiveID = function(t) {
                this._activeTouchID = t[t.length - 1].identifier
            }
            ,
            t.prototype._getActiveTracker = function() {
                return this._touchList[this._activeTouchID]
            }
            ,
            t
        }();
        function g(t, e, n) {
            return Math.max(e, Math.min(n, t))
        }
        function x(t, e, n) {
            var r;
            void 0 === e && (e = 0);
            var o = -1 / 0;
            return function() {
                for (var i = this, u = [], c = 0; c < arguments.length; c++)
                    u[c] = arguments[c];
                if (n) {
                    var a = Date.now()
                      , s = a - o;
                    o = a,
                    s >= e && t.apply(this, u)
                }
                clearTimeout(r),
                r = setTimeout((function() {
                    t.apply(i, u)
                }
                ), e)
            }
        }
        function b(t, e) {
            return void 0 === t && (t = -1 / 0),
            void 0 === e && (e = 1 / 0),
            function(n, r) {
                var o = "_" + r;
                Object.defineProperty(n, r, {
                    get: function() {
                        return this[o]
                    },
                    set: function(n) {
                        Object.defineProperty(this, o, {
                            value: g(n, t, e),
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
        }
        function w(t, e) {
            var n = "_" + e;
            Object.defineProperty(t, e, {
                get: function() {
                    return this[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        value: !!t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    })
                },
                enumerable: !0,
                configurable: !0
            })
        }
        function S() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return function(e, n, r) {
                var o = r.value;
                return {
                    get: function() {
                        return this.hasOwnProperty(n) || Object.defineProperty(this, n, {
                            value: x.apply(void 0, function() {
                                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                                    t += arguments[e].length;
                                var r = Array(t)
                                  , o = 0;
                                for (e = 0; e < n; e++)
                                    for (var i = arguments[e], u = 0, c = i.length; u < c; u++,
                                    o++)
                                        r[o] = i[u];
                                return r
                            }([o], t))
                        }),
                        this[n]
                    }
                }
            }
        }
        var _, E = function() {
            function t(t) {
                var e = this;
                void 0 === t && (t = {}),
                this.damping = .1,
                this.thumbMinSize = 20,
                this.renderByPixels = !0,
                this.alwaysShowTracks = !1,
                this.continuousScrolling = !0,
                this.delegateTo = null,
                this.plugins = {},
                Object.keys(t).forEach((function(n) {
                    e[n] = t[n]
                }
                ))
            }
            return Object.defineProperty(t.prototype, "wheelEventTarget", {
                get: function() {
                    return this.delegateTo
                },
                set: function(t) {
                    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),
                    this.delegateTo = t
                },
                enumerable: !0,
                configurable: !0
            }),
            u([b(0, 1)], t.prototype, "damping", void 0),
            u([b(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
            u([w], t.prototype, "renderByPixels", void 0),
            u([w], t.prototype, "alwaysShowTracks", void 0),
            u([w], t.prototype, "continuousScrolling", void 0),
            t
        }();
        !function(t) {
            t.X = "x",
            t.Y = "y"
        }(_ || (_ = {}));
        var O = function() {
            function t(t, e) {
                void 0 === e && (e = 0),
                this._direction = t,
                this._minSize = e,
                this.element = document.createElement("div"),
                this.displaySize = 0,
                this.realSize = 0,
                this.offset = 0,
                this.element.className = "scrollbar-thumb scrollbar-thumb-" + t
            }
            return t.prototype.attachTo = function(t) {
                t.appendChild(this.element)
            }
            ,
            t.prototype.update = function(t, e, n) {
                this.realSize = Math.min(e / n, 1) * e,
                this.displaySize = Math.max(this.realSize, this._minSize),
                this.offset = t / n * (e + (this.realSize - this.displaySize)),
                v(this.element, this._getStyle())
            }
            ,
            t.prototype._getStyle = function() {
                switch (this._direction) {
                case _.X:
                    return {
                        width: this.displaySize + "px",
                        "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                    };
                case _.Y:
                    return {
                        height: this.displaySize + "px",
                        "-transform": "translate3d(0, " + this.offset + "px, 0)"
                    };
                default:
                    return null
                }
            }
            ,
            t
        }()
          , T = function() {
            function t(t, e) {
                void 0 === e && (e = 0),
                this.element = document.createElement("div"),
                this._isShown = !1,
                this.element.className = "scrollbar-track scrollbar-track-" + t,
                this.thumb = new O(t,e),
                this.thumb.attachTo(this.element)
            }
            return t.prototype.attachTo = function(t) {
                t.appendChild(this.element)
            }
            ,
            t.prototype.show = function() {
                this._isShown || (this._isShown = !0,
                this.element.classList.add("show"))
            }
            ,
            t.prototype.hide = function() {
                this._isShown && (this._isShown = !1,
                this.element.classList.remove("show"))
            }
            ,
            t.prototype.update = function(t, e, n) {
                v(this.element, {
                    display: n <= e ? "none" : "block"
                }),
                this.thumb.update(t, e, n)
            }
            ,
            t
        }()
          , A = function() {
            function t(t) {
                this._scrollbar = t;
                var e = t.options.thumbMinSize;
                this.xAxis = new T(_.X,e),
                this.yAxis = new T(_.Y,e),
                this.xAxis.attachTo(t.containerEl),
                this.yAxis.attachTo(t.containerEl),
                t.options.alwaysShowTracks && (this.xAxis.show(),
                this.yAxis.show())
            }
            return t.prototype.update = function() {
                var t = this._scrollbar
                  , e = t.size
                  , n = t.offset;
                this.xAxis.update(n.x, e.container.width, e.content.width),
                this.yAxis.update(n.y, e.container.height, e.content.height)
            }
            ,
            t.prototype.autoHideOnIdle = function() {
                this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(),
                this.yAxis.hide())
            }
            ,
            u([S(300)], t.prototype, "autoHideOnIdle", null),
            t
        }()
          , P = new WeakMap;
        function j(t) {
            return Math.pow(t - 1, 3) + 1
        }
        var M, k, D, z = function() {
            function t(t, e) {
                var n = this.constructor;
                this.scrollbar = t,
                this.name = n.pluginName,
                this.options = i(i({}, n.defaultOptions), e)
            }
            return t.prototype.onInit = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onUpdate = function() {}
            ,
            t.prototype.onRender = function(t) {}
            ,
            t.prototype.transformDelta = function(t, e) {
                return i({}, t)
            }
            ,
            t.pluginName = "",
            t.defaultOptions = {},
            t
        }(), L = {
            order: new Set,
            constructors: {}
        };
        function I(t) {
            var e = f(t)
              , n = t.containerEl;
            e(n, "keydown", (function(e) {
                var r = document.activeElement;
                if ((r === n || n.contains(r)) && !function(t) {
                    return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled
                }(r)) {
                    var o = function(t, e) {
                        var n = t.size
                          , r = t.limit
                          , o = t.offset;
                        switch (e) {
                        case M.TAB:
                            return function(t) {
                                requestAnimationFrame((function() {
                                    t.scrollIntoView(document.activeElement, {
                                        offsetTop: t.size.container.height / 2,
                                        offsetLeft: t.size.container.width / 2,
                                        onlyScrollIfNeeded: !0
                                    })
                                }
                                ))
                            }(t);
                        case M.SPACE:
                            return [0, 200];
                        case M.PAGE_UP:
                            return [0, 40 - n.container.height];
                        case M.PAGE_DOWN:
                            return [0, n.container.height - 40];
                        case M.END:
                            return [0, r.y - o.y];
                        case M.HOME:
                            return [0, -o.y];
                        case M.LEFT:
                            return [-40, 0];
                        case M.UP:
                            return [0, -40];
                        case M.RIGHT:
                            return [40, 0];
                        case M.DOWN:
                            return [0, 40];
                        default:
                            return null
                        }
                    }(t, e.keyCode || e.which);
                    if (o) {
                        var i = o[0]
                          , u = o[1];
                        t.addTransformableMomentum(i, u, e, (function(n) {
                            n ? e.preventDefault() : (t.containerEl.blur(),
                            t.parent && t.parent.containerEl.focus())
                        }
                        ))
                    }
                }
            }
            ))
        }
        function R(t) {
            var e, n, r, o, i, u = f(t), c = t.containerEl, a = t.track, s = a.xAxis, h = a.yAxis;
            function d(e, n) {
                var r = t.size
                  , o = t.limit
                  , i = t.offset;
                return e === k.X ? g(n / (r.container.width + (s.thumb.realSize - s.thumb.displaySize)) * r.content.width, 0, o.x) - i.x : e === k.Y ? g(n / (r.container.height + (h.thumb.realSize - h.thumb.displaySize)) * r.content.height, 0, o.y) - i.y : 0
            }
            function y(t) {
                return p(t, [s.element, s.thumb.element]) ? k.X : p(t, [h.element, h.thumb.element]) ? k.Y : void 0
            }
            u(c, "click", (function(e) {
                if (!n && p(e.target, [s.element, h.element])) {
                    var r = e.target
                      , o = y(r)
                      , i = r.getBoundingClientRect()
                      , u = l(e);
                    if (o === k.X) {
                        var c = u.x - i.left - s.thumb.displaySize / 2;
                        t.setMomentum(d(o, c), 0)
                    }
                    o === k.Y && (c = u.y - i.top - h.thumb.displaySize / 2,
                    t.setMomentum(0, d(o, c)))
                }
            }
            )),
            u(c, "mousedown", (function(n) {
                if (p(n.target, [s.thumb.element, h.thumb.element])) {
                    e = !0;
                    var u = n.target
                      , a = l(n)
                      , f = u.getBoundingClientRect();
                    o = y(u),
                    r = {
                        x: a.x - f.left,
                        y: a.y - f.top
                    },
                    i = c.getBoundingClientRect(),
                    v(t.containerEl, {
                        "-user-select": "none"
                    })
                }
            }
            )),
            u(window, "mousemove", (function(u) {
                if (e) {
                    n = !0;
                    var c = l(u);
                    if (o === k.X) {
                        var a = c.x - r.x - i.left;
                        t.setMomentum(d(o, a), 0)
                    }
                    o === k.Y && (a = c.y - r.y - i.top,
                    t.setMomentum(0, d(o, a)))
                }
            }
            )),
            u(window, "mouseup blur", (function() {
                e = n = !1,
                v(t.containerEl, {
                    "-user-select": ""
                })
            }
            ))
        }
        function C(t) {
            f(t)(window, "resize", x(t.update.bind(t), 300))
        }
        function N(t) {
            var e, n = f(t), r = t.containerEl, o = t.contentEl, i = !1, u = !1;
            n(window, "mousemove", (function(n) {
                i && (cancelAnimationFrame(e),
                function n(r) {
                    var o = r.x
                      , i = r.y;
                    if (o || i) {
                        var u = t.offset
                          , c = t.limit;
                        t.setMomentum(g(u.x + o, 0, c.x) - u.x, g(u.y + i, 0, c.y) - u.y),
                        e = requestAnimationFrame((function() {
                            n({
                                x: o,
                                y: i
                            })
                        }
                        ))
                    }
                }(function(t, e) {
                    var n = t.bounding
                      , r = n.top
                      , o = n.right
                      , i = n.bottom
                      , u = n.left
                      , c = l(e)
                      , a = c.x
                      , s = c.y
                      , f = {
                        x: 0,
                        y: 0
                    };
                    return 0 === a && 0 === s || (a > o - 20 ? f.x = a - o + 20 : a < u + 20 && (f.x = a - u - 20),
                    s > i - 20 ? f.y = s - i + 20 : s < r + 20 && (f.y = s - r - 20),
                    f.x *= 2,
                    f.y *= 2),
                    f
                }(t, n)))
            }
            )),
            n(o, "contextmenu", (function() {
                u = !0,
                cancelAnimationFrame(e),
                i = !1
            }
            )),
            n(o, "mousedown", (function() {
                u = !1
            }
            )),
            n(o, "selectstart", (function() {
                u || (cancelAnimationFrame(e),
                i = !0)
            }
            )),
            n(window, "mouseup blur", (function() {
                cancelAnimationFrame(e),
                i = !1,
                u = !1
            }
            )),
            n(r, "scroll", (function(t) {
                t.preventDefault(),
                r.scrollTop = r.scrollLeft = 0
            }
            ))
        }
        function F(t) {
            var e, n = t.options.delegateTo || t.containerEl, r = new m, o = f(t), i = 0;
            o(n, "touchstart", (function(n) {
                r.track(n),
                t.setMomentum(0, 0),
                0 === i && (e = t.options.damping,
                t.options.damping = Math.max(e, .5)),
                i++
            }
            )),
            o(n, "touchmove", (function(e) {
                if (!D || D === t) {
                    r.update(e);
                    var n = r.getDelta()
                      , o = n.x
                      , i = n.y;
                    t.addTransformableMomentum(o, i, e, (function(n) {
                        n && e.cancelable && (e.preventDefault(),
                        D = t)
                    }
                    ))
                }
            }
            )),
            o(n, "touchcancel touchend", (function(n) {
                var o = r.getEasingDistance(e);
                t.addTransformableMomentum(o.x, o.y, n),
                0 == --i && (t.options.damping = e),
                r.release(n),
                D = null
            }
            ))
        }
        function H(t) {
            f(t)(t.options.delegateTo || t.containerEl, "onwheel"in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function(e) {
                var n = function(t) {
                    if ("deltaX"in t) {
                        var e = G(t.deltaMode);
                        return {
                            x: t.deltaX / W.STANDARD * e,
                            y: t.deltaY / W.STANDARD * e
                        }
                    }
                    return "wheelDeltaX"in t ? {
                        x: t.wheelDeltaX / W.OTHERS,
                        y: t.wheelDeltaY / W.OTHERS
                    } : {
                        x: 0,
                        y: t.wheelDelta / W.OTHERS
                    }
                }(e)
                  , r = n.x
                  , o = n.y;
                t.addTransformableMomentum(r, o, e, (function(t) {
                    t && e.preventDefault()
                }
                ))
            }
            ))
        }
        !function(t) {
            t[t.TAB = 9] = "TAB",
            t[t.SPACE = 32] = "SPACE",
            t[t.PAGE_UP = 33] = "PAGE_UP",
            t[t.PAGE_DOWN = 34] = "PAGE_DOWN",
            t[t.END = 35] = "END",
            t[t.HOME = 36] = "HOME",
            t[t.LEFT = 37] = "LEFT",
            t[t.UP = 38] = "UP",
            t[t.RIGHT = 39] = "RIGHT",
            t[t.DOWN = 40] = "DOWN"
        }(M || (M = {})),
        function(t) {
            t[t.X = 0] = "X",
            t[t.Y = 1] = "Y"
        }(k || (k = {}));
        var W = {
            STANDARD: 1,
            OTHERS: -3
        }
          , B = [1, 28, 500]
          , G = function(t) {
            return B[t] || B[0]
        }
          , X = new Map
          , U = function() {
            function t(t, e) {
                var n = this;
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.limit = {
                    x: 1 / 0,
                    y: 1 / 0
                },
                this.bounding = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                this._plugins = [],
                this._momentum = {
                    x: 0,
                    y: 0
                },
                this._listeners = new Set,
                this.containerEl = t;
                var r = this.contentEl = document.createElement("div");
                this.options = new E(e),
                t.setAttribute("data-scrollbar", "true"),
                t.setAttribute("tabindex", "-1"),
                v(t, {
                    overflow: "hidden",
                    outline: "none"
                }),
                window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"),
                r.className = "scroll-content",
                Array.from(t.childNodes).forEach((function(t) {
                    r.appendChild(t)
                }
                )),
                t.appendChild(r),
                this.track = new A(this),
                this.size = this.getSize(),
                this._plugins = function(t, e) {
                    return Array.from(L.order).filter((function(t) {
                        return !1 !== e[t]
                    }
                    )).map((function(n) {
                        var r = new (0,
                        L.constructors[n])(t,e[n]);
                        return e[n] = r.options,
                        r
                    }
                    ))
                }(this, this.options.plugins);
                var o = t.scrollLeft
                  , i = t.scrollTop;
                t.scrollLeft = t.scrollTop = 0,
                this.setPosition(o, i, {
                    withoutCallbacks: !0
                });
                var u = window.ResizeObserver;
                "function" == typeof u && (this._observer = new u((function() {
                    n.update()
                }
                )),
                this._observer.observe(r)),
                X.set(t, this),
                requestAnimationFrame((function() {
                    n._init()
                }
                ))
            }
            return Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    for (var t = this.containerEl.parentElement; t; ) {
                        var e = X.get(t);
                        if (e)
                            return e;
                        t = t.parentElement
                    }
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "scrollTop", {
                get: function() {
                    return this.offset.y
                },
                set: function(t) {
                    this.setPosition(this.scrollLeft, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "scrollLeft", {
                get: function() {
                    return this.offset.x
                },
                set: function(t) {
                    this.setPosition(t, this.scrollTop)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getSize = function() {
                return function(t) {
                    var e = t.containerEl
                      , n = t.contentEl
                      , r = getComputedStyle(e)
                      , o = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map((function(t) {
                        return r[t] ? parseFloat(r[t]) : 0
                    }
                    ))
                      , i = o[0] + o[1]
                      , u = o[2] + o[3];
                    return {
                        container: {
                            width: e.clientWidth,
                            height: e.clientHeight
                        },
                        content: {
                            width: n.offsetWidth - n.clientWidth + n.scrollWidth + u,
                            height: n.offsetHeight - n.clientHeight + n.scrollHeight + i
                        }
                    }
                }(this)
            }
            ,
            t.prototype.update = function() {
                !function(t) {
                    var e = t.getSize()
                      , n = {
                        x: Math.max(e.content.width - e.container.width, 0),
                        y: Math.max(e.content.height - e.container.height, 0)
                    }
                      , r = t.containerEl.getBoundingClientRect()
                      , o = {
                        top: Math.max(r.top, 0),
                        right: Math.min(r.right, window.innerWidth),
                        bottom: Math.min(r.bottom, window.innerHeight),
                        left: Math.max(r.left, 0)
                    };
                    t.size = e,
                    t.limit = n,
                    t.bounding = o,
                    t.track.update(),
                    t.setPosition()
                }(this),
                this._plugins.forEach((function(t) {
                    t.onUpdate()
                }
                ))
            }
            ,
            t.prototype.isVisible = function(t) {
                return function(t, e) {
                    var n = t.bounding
                      , r = e.getBoundingClientRect()
                      , o = Math.max(n.top, r.top)
                      , i = Math.max(n.left, r.left)
                      , u = Math.min(n.right, r.right);
                    return o < Math.min(n.bottom, r.bottom) && i < u
                }(this, t)
            }
            ,
            t.prototype.setPosition = function(t, e, n) {
                var r = this;
                void 0 === t && (t = this.offset.x),
                void 0 === e && (e = this.offset.y),
                void 0 === n && (n = {});
                var o = function(t, e, n) {
                    var r = t.options
                      , o = t.offset
                      , u = t.limit
                      , c = t.track
                      , a = t.contentEl;
                    return r.renderByPixels && (e = Math.round(e),
                    n = Math.round(n)),
                    e = g(e, 0, u.x),
                    n = g(n, 0, u.y),
                    e !== o.x && c.xAxis.show(),
                    n !== o.y && c.yAxis.show(),
                    r.alwaysShowTracks || c.autoHideOnIdle(),
                    e === o.x && n === o.y ? null : (o.x = e,
                    o.y = n,
                    v(a, {
                        "-transform": "translate3d(" + -e + "px, " + -n + "px, 0)"
                    }),
                    c.update(),
                    {
                        offset: i({}, o),
                        limit: i({}, u)
                    })
                }(this, t, e);
                o && !n.withoutCallbacks && this._listeners.forEach((function(t) {
                    t.call(r, o)
                }
                ))
            }
            ,
            t.prototype.scrollTo = function(t, e, n, r) {
                void 0 === t && (t = this.offset.x),
                void 0 === e && (e = this.offset.y),
                void 0 === n && (n = 0),
                void 0 === r && (r = {}),
                function(t, e, n, r, o) {
                    void 0 === r && (r = 0);
                    var i = void 0 === o ? {} : o
                      , u = i.easing
                      , c = void 0 === u ? j : u
                      , a = i.callback
                      , s = t.options
                      , f = t.offset
                      , l = t.limit;
                    s.renderByPixels && (e = Math.round(e),
                    n = Math.round(n));
                    var p = f.x
                      , h = f.y
                      , d = g(e, 0, l.x) - p
                      , v = g(n, 0, l.y) - h
                      , y = Date.now();
                    cancelAnimationFrame(P.get(t)),
                    function e() {
                        var n = Date.now() - y
                          , o = r ? c(Math.min(n / r, 1)) : 1;
                        if (t.setPosition(p + d * o, h + v * o),
                        n >= r)
                            "function" == typeof a && a.call(t);
                        else {
                            var i = requestAnimationFrame(e);
                            P.set(t, i)
                        }
                    }()
                }(this, t, e, n, r)
            }
            ,
            t.prototype.scrollIntoView = function(t, e) {
                void 0 === e && (e = {}),
                function(t, e, n) {
                    var r = void 0 === n ? {} : n
                      , o = r.alignToTop
                      , i = void 0 === o || o
                      , u = r.onlyScrollIfNeeded
                      , c = void 0 !== u && u
                      , a = r.offsetTop
                      , s = void 0 === a ? 0 : a
                      , f = r.offsetLeft
                      , l = void 0 === f ? 0 : f
                      , p = r.offsetBottom
                      , h = void 0 === p ? 0 : p
                      , d = t.containerEl
                      , v = t.bounding
                      , y = t.offset
                      , m = t.limit;
                    if (e && d.contains(e)) {
                        var x = e.getBoundingClientRect();
                        if (!c || !t.isVisible(e)) {
                            var b = i ? x.top - v.top - s : x.bottom - v.bottom + h;
                            t.setMomentum(x.left - v.left - l, g(b, -y.y, m.y - y.y))
                        }
                    }
                }(this, t, e)
            }
            ,
            t.prototype.addListener = function(t) {
                if ("function" != typeof t)
                    throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                this._listeners.add(t)
            }
            ,
            t.prototype.removeListener = function(t) {
                this._listeners.delete(t)
            }
            ,
            t.prototype.addTransformableMomentum = function(t, e, n, r) {
                this._updateDebounced();
                var o = this._plugins.reduce((function(t, e) {
                    return e.transformDelta(t, n) || t
                }
                ), {
                    x: t,
                    y: e
                })
                  , i = !this._shouldPropagateMomentum(o.x, o.y);
                i && this.addMomentum(o.x, o.y),
                r && r.call(this, i)
            }
            ,
            t.prototype.addMomentum = function(t, e) {
                this.setMomentum(this._momentum.x + t, this._momentum.y + e)
            }
            ,
            t.prototype.setMomentum = function(t, e) {
                0 === this.limit.x && (t = 0),
                0 === this.limit.y && (e = 0),
                this.options.renderByPixels && (t = Math.round(t),
                e = Math.round(e)),
                this._momentum.x = t,
                this._momentum.y = e
            }
            ,
            t.prototype.updatePluginOptions = function(t, e) {
                this._plugins.forEach((function(n) {
                    n.name === t && Object.assign(n.options, e)
                }
                ))
            }
            ,
            t.prototype.destroy = function() {
                var t = this.containerEl
                  , e = this.contentEl;
                !function(t) {
                    var e = a.get(t);
                    e && (e.forEach((function(t) {
                        var e = t.elem
                          , n = t.eventName
                          , r = t.handler;
                        e.removeEventListener(n, r, s())
                    }
                    )),
                    a.delete(t))
                }(this),
                this._listeners.clear(),
                this.setMomentum(0, 0),
                cancelAnimationFrame(this._renderID),
                this._observer && this._observer.disconnect(),
                X.delete(this.containerEl);
                for (var n = Array.from(e.childNodes); t.firstChild; )
                    t.removeChild(t.firstChild);
                n.forEach((function(e) {
                    t.appendChild(e)
                }
                )),
                v(t, {
                    overflow: ""
                }),
                t.scrollTop = this.scrollTop,
                t.scrollLeft = this.scrollLeft,
                this._plugins.forEach((function(t) {
                    t.onDestroy()
                }
                )),
                this._plugins.length = 0
            }
            ,
            t.prototype._init = function() {
                var t = this;
                this.update(),
                Object.keys(r).forEach((function(e) {
                    r[e](t)
                }
                )),
                this._plugins.forEach((function(t) {
                    t.onInit()
                }
                )),
                this._render()
            }
            ,
            t.prototype._updateDebounced = function() {
                this.update()
            }
            ,
            t.prototype._shouldPropagateMomentum = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0);
                var n = this.options
                  , r = this.offset
                  , o = this.limit;
                if (!n.continuousScrolling)
                    return !1;
                0 === o.x && 0 === o.y && this._updateDebounced();
                var i = g(t + r.x, 0, o.x)
                  , u = g(e + r.y, 0, o.y)
                  , c = !0;
                return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
            }
            ,
            t.prototype._render = function() {
                var t = this._momentum;
                if (t.x || t.y) {
                    var e = this._nextTick("x")
                      , n = this._nextTick("y");
                    t.x = e.momentum,
                    t.y = n.momentum,
                    this.setPosition(e.position, n.position)
                }
                var r = i({}, this._momentum);
                this._plugins.forEach((function(t) {
                    t.onRender(r)
                }
                )),
                this._renderID = requestAnimationFrame(this._render.bind(this))
            }
            ,
            t.prototype._nextTick = function(t) {
                var e = this.options
                  , n = this.offset
                  , r = this._momentum
                  , o = n[t]
                  , i = r[t];
                if (Math.abs(i) <= .1)
                    return {
                        momentum: 0,
                        position: o + i
                    };
                var u = i * (1 - e.damping);
                return e.renderByPixels && (u |= 0),
                {
                    momentum: u,
                    position: o + i - u
                }
            }
            ,
            u([S(100, !0)], t.prototype, "_updateDebounced", null),
            t
        }()
          , V = "smooth-scrollbar-style"
          , Y = !1;
        function q() {
            if (!Y && "undefined" != typeof window) {
                var t = document.createElement("style");
                t.id = V,
                t.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
                document.head && document.head.appendChild(t),
                Y = !0
            }
        }
        n.d(e, "ScrollbarPlugin", (function() {
            return z
        }
        ));
        var Q = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                new n)
            }(e, t),
            e.init = function(t, e) {
                if (!t || 1 !== t.nodeType)
                    throw new TypeError("expect element to be DOM Element, but got " + t);
                return q(),
                X.has(t) ? X.get(t) : new U(t,e)
            }
            ,
            e.initAll = function(t) {
                return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(n) {
                    return e.init(n, t)
                }
                ))
            }
            ,
            e.has = function(t) {
                return X.has(t)
            }
            ,
            e.get = function(t) {
                return X.get(t)
            }
            ,
            e.getAll = function() {
                return Array.from(X.values())
            }
            ,
            e.destroy = function(t) {
                var e = X.get(t);
                e && e.destroy()
            }
            ,
            e.destroyAll = function() {
                X.forEach((function(t) {
                    t.destroy()
                }
                ))
            }
            ,
            e.use = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    t.forEach((function(t) {
                        var e = t.pluginName;
                        if (!e)
                            throw new TypeError("plugin name is required");
                        L.order.add(e),
                        L.constructors[e] = t
                    }
                    ))
                }
                .apply(void 0, t)
            }
            ,
            e.attachStyle = function() {
                return q()
            }
            ,
            e.detachStyle = function() {
                return function() {
                    if (Y && "undefined" != typeof window) {
                        var t = document.getElementById(V);
                        t && t.parentNode && (t.parentNode.removeChild(t),
                        Y = !1)
                    }
                }()
            }
            ,
            e.version = "8.8.4",
            e.ScrollbarPlugin = z,
            e
        }(U);
        e.default = Q
    }
    ]).default
}
)));
