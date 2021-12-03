(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/geoportal-access-lib-samples/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"09da":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[e._m(1),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",value:"true",id:"reverse"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"true")>-1:e.checked},on:{change:function(t){var n=e.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i="true",o=e._i(n,i);r.checked?o<0&&(e.checked=n.concat([i])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=a}}}),e._v(" Position d'arrivée ")]),n("p",[e._v("Methode de calcul : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.method.selected,expression:"method.selected"}],attrs:{id:"method"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.method,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"time"}},[e._v("Isochrones")]),n("option",{attrs:{value:"distance"}},[e._v("Isodistances")])])]),e._m(2),n("p",[e._v("Graphe : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.graph.selected,expression:"graph.selected"}],attrs:{id:"graph"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.graph,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Pieton"}},[e._v("Piéton")]),n("option",{attrs:{value:"Voiture"}},[e._v("Voiture")])])])]),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"isocurve"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.isoCurve() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/od5pf6qw/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" longitude : "),n("input",{attrs:{type:"text",id:"lon",size:"10"}}),e._v(" latitude : "),n("input",{attrs:{type:"text",id:"lat",size:"10"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Limite de temps (secondes) ou de distance (m) "),n("input",{attrs:{type:"text",id:"limit",size:"10"}})])}],i=n("66a8"),o=n("a036"),s={name:"MyCptIsoCurve",components:{TheVersion:o["a"]},data:function(){return{checked:!0,graph:{selected:"Pieton"},method:{selected:"distance"}}},methods:{go:function(){var e=document.getElementById("lon").value,t=document.getElementById("lat").value,n=document.getElementById("reverse").checked,r=document.getElementById("limit").value,a=document.getElementById("graph").selectedIndex,o=document.getElementById("graph").options[a].value,s=document.getElementById("method").selectedIndex,c=document.getElementById("method").options[s].value,l=document.getElementById("result");try{i["a"].Services.isoCurve({position:{x:e,y:t},time:"time"==c?r:null,distance:"distance"==c?r:null,graph:o,reverse:n,apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",onSuccess:function(e){l.innerHTML="<p>"+JSON.stringify(e)+"</p>"},onFailure:function(e){l.innerHTML="<p>"+e+"</p>"}})}catch(u){l.innerHTML="<p>"+u+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"48b79416",null);t["a"]=u.exports},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},"1a5e":function(e,t,n){},2:function(e,t){},3:function(e,t){},"33cb":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[e._m(1),n("p",[e._v("Reponse non structurée : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"returnfreeform"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&(e.checked=n.concat([i])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=a}}})]),n("p",[e._v("Critères de Filtrages :")]),e._m(2),n("p",[e._v("Type de Géocodage : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"PositionOfInterest"}},[e._v("Toponymes")]),n("option",{attrs:{value:"StreetAddress"}},[e._v("Adresses")]),n("option",{attrs:{value:"CadastralParcel"}},[e._v("Parcelles Cadastrales")]),n("option",{attrs:{value:"PositionOfInterest,StreetAddress"}},[e._v("Toponymes et Adresses")])])])]),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"geocode"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.geocode() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/saye4oaz/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Localisant à géocoder : "),n("input",{attrs:{type:"text",id:"location",value:"Saint-Mandé"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("input",{attrs:{type:"text",size:"15",id:"filterProp"}}),e._v(" : "),n("input",{attrs:{type:"text",size:"15",id:"filterValue"}})])}],i=n("66a8"),o=n("a036"),s={name:"MyCptGeocode",components:{TheVersion:o["a"]},data:function(){return{selected:"PositionOfInterest",checked:!1}},methods:{go:function(){var e=document.getElementById("result"),t=document.getElementById("type").selectedIndex,n=document.getElementById("filterProp").value,r=document.getElementById("filterValue").value,a=document.getElementById("location").value,o=document.getElementById("returnfreeform").checked,s={};n&&r&&(s[n]=r),s.type=[document.getElementById("type").options[t].value];try{i["a"].Services.geocode({apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",location:a,returnFreeForm:o,filterOptions:s,onSuccess:function(t){e.innerHTML="<p>"+JSON.stringify(t)+"</p>"},onFailure:function(t){e.innerHTML="<p>"+t+"</p>"}})}catch(c){e.innerHTML="<p>"+c+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"7193e6d5",null);t["a"]=u.exports},"34c6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[e._m(1),e._m(2),e._m(3),n("p",[e._v(" Eviter : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.constraint.toll.checked,expression:"constraint.toll.checked"}],attrs:{type:"checkbox",id:"toll"},domProps:{checked:Array.isArray(e.constraint.toll.checked)?e._i(e.constraint.toll.checked,null)>-1:e.constraint.toll.checked},on:{change:function(t){var n=e.constraint.toll.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&e.$set(e.constraint.toll,"checked",n.concat([i])):o>-1&&e.$set(e.constraint.toll,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.constraint.toll,"checked",a)}}}),e._v(" péages "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.constraint.bridge.checked,expression:"constraint.bridge.checked"}],attrs:{type:"checkbox",id:"bridge"},domProps:{checked:Array.isArray(e.constraint.bridge.checked)?e._i(e.constraint.bridge.checked,null)>-1:e.constraint.bridge.checked},on:{change:function(t){var n=e.constraint.bridge.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&e.$set(e.constraint.bridge,"checked",n.concat([i])):o>-1&&e.$set(e.constraint.bridge,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.constraint.bridge,"checked",a)}}}),e._v(" ponts "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.constraint.tunnel.checked,expression:"constraint.tunnel.checked"}],attrs:{type:"checkbox",id:"tunnel"},domProps:{checked:Array.isArray(e.constraint.tunnel.checked)?e._i(e.constraint.tunnel.checked,null)>-1:e.constraint.tunnel.checked},on:{change:function(t){var n=e.constraint.tunnel.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&e.$set(e.constraint.tunnel,"checked",n.concat([i])):o>-1&&e.$set(e.constraint.tunnel,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.constraint.tunnel,"checked",a)}}}),e._v(" tunnels ")]),n("p",[e._v("Graphe : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.graph.selected,expression:"graph.selected"}],attrs:{id:"graph"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.graph,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Pieton"}},[e._v("Piéton")]),n("option",{attrs:{value:"Voiture"}},[e._v("Voiture")])]),e._v(" Methode de calcul : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.method.selected,expression:"method.selected"}],attrs:{id:"method"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.method,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"fastest"}},[e._v("le plus rapide")]),n("option",{attrs:{value:"shortest"}},[e._v("le plus court")])])])]),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"route"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.route() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/g51jh882/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" lon départ: "),n("input",{attrs:{type:"text",id:"lon1",size:"10",value:"2.4236"}}),e._v(" lat départ : "),n("input",{attrs:{type:"text",id:"lat1",size:"10",value:"48.8559"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" lon inter : "),n("input",{attrs:{type:"text",id:"lon2",size:"10",value:"2.4270"}}),e._v(" lat inter : "),n("input",{attrs:{type:"text",id:"lat2",size:"10",value:"48.8556"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" lon arrivée: "),n("input",{attrs:{type:"text",id:"lon3",size:"10",value:"2.4282"}}),e._v(" lat arrivée : "),n("input",{attrs:{type:"text",id:"lat3",size:"10",value:"48.8455"}})])}],i=n("66a8"),o=n("a036"),s={name:"MyCptRoute",components:{TheVersion:o["a"]},data:function(){return{constraint:{toll:{checked:!0},tunnel:{checked:!0},bridge:{checked:!0}},graph:{selected:"Pieton"},method:{selected:"fastest"}}},methods:{go:function(){var e=document.getElementById("lon1").value,t=document.getElementById("lat1").value,n=document.getElementById("lon2").value,r=document.getElementById("lat2").value,a=document.getElementById("lon3").value,o=document.getElementById("lat3").value,s=[],c=document.getElementById("toll").checked;c&&s.push("toll");var l=document.getElementById("bridge").checked;l&&s.push("bridge");var u=document.getElementById("tunnel").checked;u&&s.push("tunnel");var d=document.getElementById("graph").selectedIndex,p=document.getElementById("graph").options[d].value,v=document.getElementById("method").selectedIndex,m=document.getElementById("method").options[v].value,f=document.getElementById("result");try{i["a"].Services.route({startPoint:{x:e,y:t},endPoint:{x:a,y:o},viaPoints:[{x:n,y:r}],graph:p,avoidFeature:s,routePreference:m,apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",onSuccess:function(e){f.innerHTML="<p>"+JSON.stringify(e)+"</p>"},onFailure:function(e){f.innerHTML="<p>"+e+"</p>"}})}catch(h){f.innerHTML="<p>"+h+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"381bef31",null);t["a"]=u.exports},3832:function(e,t,n){},"3dfd":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader",{attrs:{title:"Exemples d'utilisation de l'API des Services"}}),e._m(0),n("TheListSample"),n("router-view"),n("TheFooter")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-vuejs"},[r("p",{},[r("a",{attrs:{href:"http://ignf.github.io/geoportal-access-lib/"}},[r("img",{attrs:{src:n("67c8"),alt:"IGN",width:"94",height:"100"}})])]),r("h1",[e._v("Accès à la "),r("a",{attrs:{href:"http://ignf.github.io/geoportal-access-lib/latest/jsdoc/"}},[e._v("JSDOC")]),e._v(" de la bibliothèque d’accès aux services")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header-content"},[e._m(0),n("h1",[e._v(e._s(e.title))])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"logoIGN"},[r("a",{attrs:{href:"https://www.ign.fr"}},[r("img",{attrs:{src:n("67c8"),alt:"IGN",width:"94",height:"100"}})])])}],s={name:"TheHeader",props:{title:String}},c=s,l=(n("d6db"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,"5f40cc69",null),d=u.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("div",{staticClass:"header-content"},[r("p",[r("img",{staticClass:"logo",attrs:{src:n("f7a1"),alt:"IGN",title:"IGN",width:"51",height:"25"}}),r("img",{staticClass:"baseline",attrs:{src:n("f207"),alt:"L'information grandeur nature",title:"L'information grandeur nature",width:"256",height:"21"}})])])])}],m={name:"TheFooter"},f=m,h=(n("bf47"),Object(l["a"])(f,p,v,!1,null,"7491ea1d",null)),g=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"samples"}},[e._v(" Liste des exemples : "),n("ul",[n("li",[n("router-link",{staticClass:"button",attrs:{to:"/geocode"}},[e._v("Geocodage")]),e._v(" [Géocoder des adresses, toponymes et parcelles cadastrales]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/autocomplete"}},[e._v("Autocompletion")]),e._v(" [Obtenir des suggestions d'adresses ou de toponymes à partir de textes incomplets]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/reversegeocode"}},[e._v("Geocodage inverse")]),e._v(" [Obtenir des localisants (toponymes, adresses, parcelles cadastrales) proche d'une position donnée]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/alti"}},[e._v("Calcul altimétrique")]),e._v(" [Obtenir des altitudes en un ou plusieurs points ou calculer des profils altimétriques]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/route"}},[e._v("Calcul d'itinéraire")]),e._v(" [Calculer un itinéraire piéton ou routier]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/isocurve"}},[e._v("Calcul d'isochrone")]),e._v(" [Calculer des isochrones / isodistances autour d'un point]")],1),n("li",[n("router-link",{staticClass:"button",attrs:{to:"/getconfig"}},[e._v("Autoconfiguration")]),e._v(" [Obtenir des informations relatives à un contrat d'accès au Géoportail]")],1)])])},_=[],A={name:"TheListSample"},b=A,k=(n("cbd7"),Object(l["a"])(b,y,_,!1,null,"3f2a1be2",null)),E=k.exports,I={name:"App",components:{TheHeader:d,TheListSample:E,TheFooter:g}},x=I,O=(n("034f"),Object(l["a"])(x,r,a,!1,null,null,null));t["a"]=O.exports},4:function(e,t){},"48f6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[e._m(1),n("p",[e._v("Type de Géocodage : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"PositionOfInterest"}},[e._v("Toponymes")]),n("option",{attrs:{value:"StreetAddress"}},[e._v("Adresses")]),n("option",{attrs:{value:"CadastralParcel"}},[e._v("Parcelles Cadastrales")])])]),e._m(2)]),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"reversegeocode"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.reverseGeocode() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/4t0wfey5/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" longitude : "),n("input",{attrs:{type:"text",id:"lon",size:"10",value:"2.4244"}}),e._v(" latitude : "),n("input",{attrs:{type:"text",id:"lat",size:"10",value:"48.8449"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" rayon de recherche : "),n("input",{attrs:{type:"text",id:"rayon",size:"5",value:"100"}})])}],i=n("66a8"),o=n("a036"),s={name:"MyCptReverseGeocode",components:{TheVersion:o["a"]},data:function(){return{selected:"PositionOfInterest"}},methods:{go:function(){var e=document.getElementById("lon").value,t=document.getElementById("lat").value,n=document.getElementById("type").selectedIndex,r={type:[document.getElementById("type").options[n].value]},a=document.getElementById("rayon").value;a&&(r.circle={x:t,y:e,radius:a});var o=document.getElementById("result");try{i["a"].Services.reverseGeocode({position:{x:t,y:e},filterOptions:r,srs:"EPSG:4326",apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",onSuccess:function(e){o.innerHTML="<p>"+JSON.stringify(e)+"</p>"},onFailure:function(e){o.innerHTML="<p>"+e+"</p>"}})}catch(s){o.innerHTML="<p>"+s+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"0c94f80e",null);t["a"]=u.exports},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t),function(e){var t=n("2b0e"),r=n("8c4f"),a=n("3dfd"),i=n("fe8b"),o=n("bb66"),s=n("33cb"),c=n("f5ed"),l=n("34c6"),u=n("09da"),d=n("48f6");t["a"].use(r["a"]),t["a"].config.productionTip=!1;const p=new r["a"]({mode:"history",base:e,routes:[{path:"/geocode",component:s["a"]},{path:"/autocomplete",component:c["a"]},{path:"/reversegeocode",component:d["a"]},{path:"/alti",component:i["a"]},{path:"/route",component:l["a"]},{path:"/isocurve",component:u["a"]},{path:"/getconfig",component:o["a"]}]});new t["a"]({router:p,render:e=>e(a["a"])}).$mount("#app")}.call(this,"/")},6:function(e,t){},"67c8":function(e,t,n){e.exports=n.p+"img/logoIGN.c8530552.png"},7:function(e,t){},"71a4":function(e,t,n){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},a036:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"info"}},[n("p",[e._v(" Bibliothèque d'accès version "+e._s(e.version)+" ( "+e._s(e.date)+" )")])])},a=[],i=n("66a8"),o={name:"TheVersion",data:function(){return{version:i["a"].servicesVersion,date:i["a"].servicesDate}}},s=o,c=n("2877"),l=Object(c["a"])(s,r,a,!1,null,"4bc84aa6",null);t["a"]=l.exports},bb66:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),e._m(1),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"getconfig"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("div",{attrs:{id:"rawResult"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.getConfig() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/0hsanbv2/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"params"}},[n("p",[e._v("Clef Géoportail : "),n("input",{attrs:{type:"text",id:"apiKey",value:"jhyvi0fgmnuxvfv0zjzorvdn"}})])])}],i=n("66a8"),o=n("a036"),s={name:"MyCptGetConfig",components:{TheVersion:o["a"]},data:function(){return{checked:!1}},methods:{go:function(){var e=document.getElementById("apiKey").value,t=document.getElementById("result"),n=document.getElementById("rawResult");try{i["a"].Services.getConfig({protocol:"XHR",apiKey:e,onSuccess:function(r){n.innerHTML="<p>"+JSON.stringify(r)+"</p>";var a="",i=r.getLayersConf(e);for(var o in a+="<b>Ressources disponibles ("+Object.keys(i).length+")</b> : <br/>",i){var s="";s+=i[o].title+" ("+i[o].name+") - service : "+i[o].serviceParams.id,a+="* "+s+"<br/>"}a+="<br/><b>Paramètres de la couche WMTS ORTHOIMAGERY.ORTHOPHOTOS</b> :</br>";var c=i["ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS"];c&&(a+="* server URL : "+c.serviceParams.serverUrl[e]+"<br/>",a+="* layerName : "+c.name+"</br>",a+="* projection : "+c.defaultProjection+"</br>",a+="* format : "+c.formats[0].name+"</br>",a+="* style : "+c.styles[0].name+"</br>",a+="* tms : "+c.wmtsOptions.tileMatrixSetLink+"</br>..."),a+="<br/><b>TileMatrixSets disponibles</b> :</br>";var l=r.getTileMatrixSets();for(var u in l)a+="* "+u+" ("+l[u].projection+")<br/>";t.innerHTML="<p>"+a+"</p>"},onFailure:function(e){n.innerHTML="<p>"+e+"</p>"}})}catch(r){n.innerHTML="<p>"+r+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"28474808",null);t["a"]=u.exports},bf47:function(e,t,n){"use strict";n("71a4")},cbd7:function(e,t,n){"use strict";n("1a5e")},d6db:function(e,t,n){"use strict";n("3832")},f207:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAVBAMAAABbMC3JAAAAMFBMVEX///////////////////////////////////////////////////////////////9Or7hAAAAAD3RSTlMAESIzRFVmd4iZqrvM3e5GKvWZAAAD90lEQVRIibWWz2vbZhjHH8c/5F8R7m2QNtZxMFbnMGgpFOc/iHco7SGbBDuOTGKDrSWlcil0PbRIt44dJpf9AUq3XXpo7BXGCuuiDMaWQ1o7G0mzMGYc2ZJdWX73vFLkuk7jZMF7DrL0Ps/z1ed9nucVBhirhbhjJibV0f548Wg6qcphEdOZ4Vev0mu+NDpt8hB/YNlDAcSZoQXWA9AvbIxMY0vweDwA8jBAdole/2YCgPdfL6zC2ngAFG5oIU+7H7FfBgQ9Ct8YFC4eqPjZKABG2gfQn4Gzfi14GhJ5madlIOVgUKi8uQ+A33pFa+IJXkRnYCWkV2gmLWqUZsTI0usALtGbqV7hoxb+yj5juICjTsdBz4C48ifASVqUqBAAPC5gXNUoAdzpa52ycIsO5z94yScJAqQ7NoS2UiYV/wYGvD7AF9NCGfceMqRY9yFdKHjraZRmbZ+w/O7TDOgCg8NfQ7Syy50n5IIJkS6DEfV+VR98iR3EN14jxb1kQ8FHTdqGmD2Jz+FuEOp5mXobNOKIUhUlkhac/l7O9AFYXBM7HkBoB3j1SgfmPpDEBtb9viyd0ytMDeImGFyMBJ+M2MY1eHOFg9QWW/OT43a6AmFHa0G8xXZg4vYfAYAnvSz8A1fLBaVQV4HRVNBvU0DFr3JOgtO6S6s2E2vizusbwC/WjAbqgVzEw5qoweQSiB/vkKCaaZUX5DY2bZZt+Mn5EtsCpvlMgKQ55wJDK+OZ5002oZ4BWdDfQQm2l4Ed+T5l8yual0B2n+ENf/lyA0416iXIy81eA9IbFCBVS9boJMqfk6e1PdWcIKqyCdE2IICXrAj53kyKAiZMmRQYEpx5z8sXKcCcpJ0hLWBfQMTyfNO/+C0ogmJrWA2FPDCZ6j0iQL7u/mVCTp0wViHRxA9FrnSOnCVXrD1VfrZcUdC1C7LtJ5cz+p3tKQrAtAxx7Q23P3nUq3EMkSC3JM9b7vWsFQDECZoKyU2QV3GiUuS3KCHOCcJBtkc+tWD6O+0HByIdbEWaEItx+5OVI72aomK7r9rLBS9ZftINffXchkvGJ6Qbra51AgDPq1w0FjchtZsnlffc7C7AOhfXcPs6AmCvNLIwy7g3xQ9XQXYk+Bl7bN6FdYhWn8P87/AQ5skjo81N/Arymj82sVsXTR5vdWcm8eI8TU7U7wHMymT7OiiP8BAHtYK3qTdJvgXt64gV73IojnV6izg34VVb6C0nghZDCM8H/6N3tz4YFKsGn+1Iq79FgSZnQnCgoZe2xjo4wreVeGPwMVze9ykb9NojnMc0/Yx59OD/A4D/6T8AJJrjB4iT3aOGLt4qV8YPAAtHFp0i7eG/V8ewfwGnwLDMSQM+cgAAAABJRU5ErkJggg=="},f5ed:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[n("p",[e._v(" Restriction spatiale : ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.territory.selected,expression:"territory.selected"}],attrs:{id:"territory"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.territory,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"no"}},[e._v("-Aucune-")]),n("option",{attrs:{value:"METROPOLE"}},[e._v("Métropole")]),n("option",{attrs:{value:"DOMTOM"}},[e._v("Outre-mer")]),n("option",{attrs:{value:"01"}},[e._v("Ain")]),n("option",{attrs:{value:"20"}},[e._v("Corse")]),n("option",{attrs:{value:"30"}},[e._v("Gard")]),n("option",{attrs:{value:"75"}},[e._v("Paris")]),n("option",{attrs:{value:"974"}},[e._v("La Réunion")])]),n("p",[e._v(" Type de localisants : "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.localisant.selected,expression:"localisant.selected"}],attrs:{id:"localisant"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.localisant,"selected",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"PositionOfInterest"}},[e._v("Toponymes")]),n("option",{attrs:{value:"StreetAddress"}},[e._v("Adresses")])])]),n("p",[e._v(" Localisant : "),n("input",{attrs:{type:"text",id:"location"},on:{keyup:e.suggest}})])]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.autoComplete() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/jsjqk4wq/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])}],i=n("66a8"),o=n("a036"),s={name:"MyCptAutoComplete",components:{TheVersion:o["a"]},data:function(){return{localisant:{selected:"PositionOfInterest"},territory:{selected:"no"}}},methods:{suggest:function(){console.log(this.localisant.selected,this.territory.selected);var e=document.getElementById("location").value,t=document.getElementById("result"),n=document.getElementById("localisant").selectedIndex,r=document.getElementById("localisant").options[n].value,a=document.getElementById("territory").selectedIndex,o=document.getElementById("territory").options[a].value,s={};o&&"no"!=o&&(s.territory=[o]),s.type=[r];try{i["a"].Services.autoComplete({text:e,apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",filterOptions:s,onSuccess:function(e){var n="";if(e.suggestedLocations)for(var r=0;r<e.suggestedLocations.length;r++){var a=e.suggestedLocations[r];n+="<p>"+a.fullText+"</p>"}t.innerHTML=n},onFailure:function(e){t.innerHTML="<p>"+e+"</p>"}})}catch(c){t.innerHTML="<p>"+c+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"4b14c4a3",null);t["a"]=u.exports},f7a1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAZCAYAAACclhZ6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5RJREFUeNq8mFtIVUEUhvcx89ZFSrt4CUvErhJEkVjUU4poFJR0f8qiyG70UvTUQxIGEWhlYZeXgjJ88EGKDCnKDpVdTUUKKwJLS44FmVpn90/8J3bDPnvP7CP98KF7nDNnrVlr1qytzzTNOMMwooEJfGAYDBpqigGzwSIwH0zkeD94BvzgFfjlsk4hmAouGuqKAvG0WeinAWdqQAdo489KYLiQCPaCFjBkhtcgaAbbwRiH9faAIChW+O4Q2eA5aKfdNWKwUTKg3mWRfNBq6ssPUsKsWco5AZCn6EyOtH6jCNWQFL4hh9CWgnow19DXYjA5zN9CqZIIroEchfXEsfhhtTtaw5gScJa5alUvuAsegAANE2dnKZlgmRdQ+J40UMtz1KW1XQhPgxSu6zYhzQQ9NqlzEmQ4pEIWqOLcDyA5zLxtNms/cpgvmAcGLPMbohR9PgwmWZ6DoAzsA+8cPvea83aBPjCgsc8LwRUQp1Pe3JQJ1kpjF8ApDcNOg53cBB2tAOcU7VSaVADGW56/geMeCsB9zciEtAVUqExUKQD50nMz6JTGUsASMIcVSVy8PeAJ+WpEpgNM0/JInBkFMqSxDsvvImJHWOnSwqwhHL8MzrCiqagNJEul/Cj4worqKc1iiFUfpfuhwMERoWw6LCJapJGSmxhhq6rAGq/O+CwXmt1n+hmV9woGZoE6ngE3jQWNLBqmlEmXeAH3y7a5OTP8p4H7V6nSs2gkV4JWxca0BixXjNB5cNDG0as8o991nZEP70ybeS9o4AnwWcHIXI3DX2FTzcQ5rgYJutXMz7bEaki2TUXrY9WpBMUgj6mVwB5KtCaP2du1a1YzEZ0ksNUylujlnrlhE+b9DvPf8qBupOMlNKKcvVmmh9Js8vzURXpp3uOLltw9r1f4rI+RauJ9U81c96JhFo+mSJwZtMnZaLY0ZTal2yrxhjnF0jkbGm+xdhIHfh1o8eqMwepRK43Fc9fvsJFcwFdfcdnNYOdwDEw3Rla9TN1OL+1MqEveAabZVKJcIqLQzVI+jgc2kg10Uheb3waQ7mVhUa1Wg5sOrU86I5HkkrYjoZdgAxvfv84k2KRPOH0Cq8AhRkFHT8HuML3VaA0b5OK0mVkR68MbWiHTJ0jnRAhvKSyUyj6piBdpCotBkPdKN8u0n9F86PD/hVlgmcWGN+C2xkaJTSoSzoxEyJPpTCwNGqAzAeP/Kf23AAMAAaq4gDOc7sEAAAAASUVORK5CYII="},fe8b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),n("div",{attrs:{id:"params"}},[e._m(1),e._m(2),e._m(3),n("p",[e._v(" zonly "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"zonly"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&(e.checked=n.concat([i])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=a}}})])]),n("div",{attrs:{id:"go"}},[n("input",{attrs:{type:"button",value:"getAltitude"},on:{click:e.go}})]),n("div",{attrs:{id:"result"}}),n("TheVersion")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Utilisation de Gp.Services.getAltitude() "),n("a",{attrs:{href:"http://jsfiddle.net/ignfgeoportail/owxffaf3/embedded/result,js,html,css/"}},[e._v("(jsfiddle)")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" longitude 1 : "),n("input",{attrs:{type:"text",id:"lon1",size:"10",value:"2.4244"}}),e._v(" latitude 1 : "),n("input",{attrs:{type:"text",id:"lat1",size:"10",value:"48.8449"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" longitude 2 : "),n("input",{attrs:{type:"text",id:"lon2",size:"10",value:"2.4236"}}),e._v(" latitude 2 : "),n("input",{attrs:{type:"text",id:"lat2",size:"10",value:"48.8459"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" sampling (nombre de points intermédaires) : "),n("input",{attrs:{type:"text",id:"sampling",size:"5",value:"10"}})])}],i=n("66a8"),o=n("a036"),s={name:"MyCptAlti",components:{TheVersion:o["a"]},data:function(){return{checked:!1}},methods:{go:function(){var e=document.getElementById("lon1").value,t=document.getElementById("lat1").value,n=document.getElementById("lon2").value,r=document.getElementById("lat2").value,a=this.checked,o=document.getElementById("sampling").value,s=document.getElementById("result"),c=[];e&&t&&c.push({lon:e,lat:t}),n&&r&&c.push({lon:n,lat:r});try{i["a"].Services.getAltitude({positions:c,sampling:o,apiKey:"jhyvi0fgmnuxvfv0zjzorvdn",zonly:a,onSuccess:function(e){s.innerHTML="<p>"+JSON.stringify(e)+"</p>"},onFailure:function(e){s.innerHTML="<p>"+e+"</p>"}})}catch(l){s.innerHTML="<p>"+l+"</p>"}}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"d673e5c8",null);t["a"]=u.exports}});
//# sourceMappingURL=app.1e51b88a.js.map