(function(e){function t(t){for(var a,s,c=t[0],l=t[1],i=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/passgen/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4062:function(e,t,r){},"45ac":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",{staticClass:"main-background"},[r("PasswordGenerator")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"password-card",attrs:{width:"500"}},[r("v-card-title",[e._v(" Random Password Generator ")]),r("v-card-text",[r("PasswordDisplay"),r("v-form",[r("v-text-field",{attrs:{label:"Length of characters",type:"number",rules:e.rules.length,outlined:""},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}}),r("v-switch",{attrs:{label:"Has Numbers?"},model:{value:e.hasNumbers,callback:function(t){e.hasNumbers=t},expression:"hasNumbers"}}),r("v-switch",{attrs:{label:"Has Symbols?"},model:{value:e.hasSymbols,callback:function(t){e.hasSymbols=t},expression:"hasSymbols"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{disabled:e.tooFewChars,elevation:"0",dark:"",block:"",color:"primary"},on:{click:function(t){return t.preventDefault(),e.generatePassword.apply(null,arguments)}}},[e._v(" Generate! ")])],1),r("v-card-actions",[r("h6",{staticClass:"copy"},[e._v("© 2021 Holger Mueller")])])],1)],1)],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[r("v-text-field",{ref:"passwordToCopy",staticClass:"centered-text",attrs:{value:e.generatedPassword,"append-icon":"mdi-clipboard",readonly:"",outlined:"","background-color":"ivory",color:"black",append:n},on:{focus:function(e){return e.target.select()},"click:append":function(t){e.copyToClipboard(),e.showMessage()},append:a}})]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("span",[e._v("Copied!")])])],1)},i=[],u={name:"PasswordDisplay",data:function(){return{show:!1}},computed:{generatedPassword:function(){return this.$store.getters.password}},methods:{copyToClipboard:function(){this.$refs.passwordToCopy.focus(),document.execCommand("copy")},showMessage:function(){return this.show=!this.show}}},d=u,p=(r("5e5d"),r("2877")),f=r("6544"),h=r.n(f),b=r("8654"),v=r("3a2f"),m=Object(p["a"])(d,l,i,!1,null,"fad5a9a6",null),w=m.exports;h()(m,{VTextField:b["a"],VTooltip:v["a"]});var g={name:"PasswordGenerator",components:{PasswordDisplay:w},data:function(){return{length:8,hasNumbers:!0,hasSymbols:!0,rules:{length:[function(e){return(e||"").length>7||"Your password should be longer than 7 characters."}]}}},computed:{tooFewChars:function(){return this.length<=7||null==this.length||void 0==this.length}},methods:{generatePassword:function(){this.$store.dispatch("generatePassword",{length:this.length,hasNumbers:this.hasNumbers,hasSymbols:this.hasSymbols})}}},y=g,P=(r("fd52"),r("8336")),x=r("b0af"),S=r("99d9"),C=r("62ad"),_=r("a523"),O=r("4bd4"),k=r("0fd9"),V=r("b73d"),T=Object(p["a"])(y,s,c,!1,null,"df541ce8",null),j=T.exports;h()(T,{VBtn:P["a"],VCard:x["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:C["a"],VContainer:_["a"],VForm:O["a"],VRow:k["a"],VSwitch:V["a"],VTextField:b["a"]});var M={name:"App",components:{PasswordGenerator:j},data:function(){return{}}},N=M,$=(r("8c00"),r("7496")),A=r("f6c4"),D=Object(p["a"])(N,n,o,!1,null,"1879bd28",null),G=D.exports;h()(D,{VApp:$["a"],VMain:A["a"]});var E=r("2f62"),F={state:{password:"Password appears here"},mutations:{SET_PASSWORD:function(e,t){e.password=t}},actions:{generatePassword:function(e,t){var r=e.commit,a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="0123456789",o="!@#$%^&*_-+=",s=t.length,c=t.hasNumbers,l=t.hasSymbols,i=a;c&&(i+=n),l&&(i+=o);for(var u="",d=0;d<s;d++)u+=i.charAt(Math.floor(Math.random()*i.length));r("SET_PASSWORD",u)}},getters:{password:function(e){return e.password}}};a["a"].use(E["a"]);var R=new E["a"].Store({modules:{PassGen:F}}),H=r("f309");a["a"].use(H["a"]);var J=new H["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:J,store:R,render:function(e){return e(G)}}).$mount("#app")},"5e5d":function(e,t,r){"use strict";r("a0aa")},"8c00":function(e,t,r){"use strict";r("4062")},a0aa:function(e,t,r){},fd52:function(e,t,r){"use strict";r("45ac")}});
//# sourceMappingURL=app.3228911e.js.map