(function(e){function t(t){for(var s,o,l=t[0],n=t[1],d=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,l=1;l<r.length;l++){var n=r[l];0!==i[n]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=n;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Базовый алгоритм для расчета рейтинга игроков")]),e._m(0),r("h2",{staticClass:"subtitle"},[e._v("Рейтинг игроков")]),r("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.disabledTrue,expression:"disabledTrue"}],staticClass:"playerlist"},[e._m(1),e._l(e.sortPlayersArr,(function(t,s){return r("li",{key:t.name},[r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sortPlayersArr[s].name,expression:"sortPlayersArr[index].name"}],attrs:{type:"text",disabled:e.inpDisabledArr[s].isDisabled},domProps:{value:e.sortPlayersArr[s].name},on:{input:function(t){t.target.composing||e.$set(e.sortPlayersArr[s],"name",t.target.value)}}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sortPlayersArr[s].win,expression:"sortPlayersArr[index].win"}],attrs:{type:"text",index:s,fieldType:"win",disabled:e.inpDisabledArr[s].isDisabled},domProps:{value:e.sortPlayersArr[s].win},on:{input:[function(t){t.target.composing||e.$set(e.sortPlayersArr[s],"win",t.target.value)},e.resort]}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sortPlayersArr[s].ko,expression:"sortPlayersArr[index].ko"}],attrs:{type:"text",index:s,fieldType:"ko",disabled:e.inpDisabledArr[s].isDisabled},domProps:{value:e.sortPlayersArr[s].ko},on:{input:[function(t){t.target.composing||e.$set(e.sortPlayersArr[s],"ko",t.target.value)},e.resort]}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sortPlayersArr[s].loose,expression:"sortPlayersArr[index].loose"}],attrs:{type:"text",index:s,fieldType:"loose",disabled:e.inpDisabledArr[s].isDisabled},domProps:{value:e.sortPlayersArr[s].loose},on:{input:[function(t){t.target.composing||e.$set(e.sortPlayersArr[s],"loose",t.target.value)},e.resort]}})]),r("span",[e._v(e._s(t.pts))]),r("div",{staticClass:"playerlist__action"},[r("button",{staticClass:"btn",attrs:{counter:s},on:{click:e.showFields}},[r("img",{attrs:{src:e.penImage}})]),r("button",{staticClass:"btn",attrs:{counter:s},on:{click:e.spliceArr}},[r("img",{attrs:{src:e.deleteImage}})])])])}))],2),r("div",{staticClass:"addnewplayer"},[r("h2",{staticClass:"subtitle"},[e._v("Добавить игрока")]),r("ul",{staticClass:"addplayer"},[r("li",[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formFields.name,expression:"formFields.name"}],staticClass:"field",class:{error:!e.validateFields.name},attrs:{type:"text",id:"nickinp"},domProps:{value:e.formFields.name},on:{input:function(t){t.target.composing||e.$set(e.formFields,"name",t.target.value)}}})]),r("li",[e._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formFields.win,expression:"formFields.win"}],staticClass:"field",class:{error:!e.validateFields.win},attrs:{type:"text",id:"wininp",keyTitle:"win"},domProps:{value:e.formFields.win},on:{input:[function(t){t.target.composing||e.$set(e.formFields,"win",t.target.value)},e.formValidate]}})]),r("li",[e._m(4),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formFields.ko,expression:"formFields.ko"}],staticClass:"field",class:{error:!e.validateFields.ko},attrs:{type:"text",id:"koinp",keyTitle:"ko"},domProps:{value:e.formFields.ko},on:{input:[function(t){t.target.composing||e.$set(e.formFields,"ko",t.target.value)},e.formValidate]}})]),r("li",[e._m(5),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formFields.loose,expression:"formFields.loose"}],staticClass:"field",class:{error:!e.validateFields.loose},attrs:{type:"text",id:"looseinp",keyTitle:"loose"},domProps:{value:e.formFields.loose},on:{input:[function(t){t.target.composing||e.$set(e.formFields,"loose",t.target.value)},e.formValidate]}})]),r("li",[e._m(6),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formFields.lko,expression:"formFields.lko"}],staticClass:"field",class:{error:!e.validateFields.lko},attrs:{type:"text",id:"looseko",keyTitle:"lko"},domProps:{value:e.formFields.lko},on:{input:[function(t){t.target.composing||e.$set(e.formFields,"lko",t.target.value)},e.formValidate]}})])]),r("button",{staticClass:"btn",on:{click:e.addPlayer}},[e._v("Добавить")]),r("br"),r("br"),r("p",[e._v(e._s(e.sortPlayersArr))])])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"article"},[r("p",{staticClass:"article__title"},[e._v("Расчет производится по простой формуле:")]),r("p",[e._v("W = 150, KO = 100, L= 50, LKO = 100")]),r("p",[e._v("(W + KO) - (L + LKO) = PTS")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v("Nickname")]),r("span",[e._v("Win")]),r("span",[e._v("KO")]),r("span",[e._v("Looses")]),r("span",[e._v("PTS")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addplayer__title"},[r("label",{attrs:{for:"nickinp"}},[e._v("Nickname")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addplayer__title"},[r("label",{attrs:{for:"wininp"}},[e._v("Win")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addplayer__title"},[r("label",{attrs:{for:"koinp"}},[e._v("KO")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addplayer__title"},[r("label",{attrs:{for:"looseinp"}},[e._v("Looses")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addplayer__title"},[r("label",{attrs:{for:"looseko"}},[e._v("Loose KO")])])}],n=(r("a434"),r("ac1f"),r("466d"),r("a9e3"),r("a15b"),r("4e82"),r("e67d")),d=r.n(n),c=[{name:"Boxing Fanatico",win:83,ko:80,loose:2,lko:2},{name:"Aimbot",win:97,ko:12,loose:5,lko:4},{name:"Hartigan",win:100,ko:77,loose:6,lko:3}],u=r("c4cc"),p=r.n(u),m=r("d739"),f=r.n(m),v={name:"HelloWorld",data:function(){return{penImage:p.a,deleteImage:f.a,dataPlayer:c,sortPlayersArr:[],isShowFields:!1,inpDisabledArr:[],isHasError:!1,validateFields:{name:!0,win:!0,ko:!0,loose:!0,lko:!0},formFields:{name:"",win:"",ko:"",loose:"",lko:""}}},mounted:function(){this.sortPlayersArr=this.sortPlayers(this.dataPlayer)},directives:{ClickOutside:d.a},methods:{disabledTrue:function(){if(this.isShowFields){for(var e=0;e<this.inpDisabledArr.length;e++)this.inpDisabledArr[e].isDisabled=!0;this.isShowFields=!1}},showFields:function(e){var t=e.currentTarget.getAttribute("counter");this.inpDisabledArr[t].isDisabled=!1,this.isShowFields=!0},spliceArr:function(e){var t=e.currentTarget.getAttribute("counter");this.sortPlayersArr.splice(t,1)},formValidate:function(e){var t=e.currentTarget.getAttribute("keyTitle"),r=this.formFields[t].match(/[0-9a-zA-Z]/g);this.formFields[t]=r?Number(r.join("")):""},addPlayer:function(){for(var e in this.formFields)""==this.formFields[e]?(this.isHasError=!0,this.validateFields[e]=!1):(this.isHasError=!1,this.validateFields[e]=!0);if(!this.isHasError){var t={};for(var r in this.formFields)t[r]=this.formFields[r];for(var s in this.dataPlayer.push(t),this.sortPlayersArr=this.sortPlayers(this.dataPlayer),this.formFields)this.formFields[s]=""}},resort:function(e){var t=Number(e.currentTarget.getAttribute("index")),r=e.currentTarget.getAttribute("fieldType"),s=this.sortPlayersArr[t][r].match(/[0-9a-zA-Z]/g);if(s){var i=Number(s.join(""));this.sortPlayersArr[t][r]=i}else this.sortPlayersArr[t][r]=0;this.sortPlayersArr=this.sortPlayers(this.sortPlayersArr)},sortPlayers:function(e){for(var t=[],r=0;r<e.length;r++){var s=150*e[r].win+100*e[r].ko-(50*e[r].loose+100*e[r].lko);e[r].pts=s;var i={isDisabled:!0};this.inpDisabledArr.push(i),t.push(this.dataPlayer[r]),t.sort((function(e,t){return e.pts<t.pts?1:-1}))}return t}}},y=v,h=r("2877"),b=Object(h["a"])(y,o,l,!1,null,null,null),_=b.exports,g={name:"App",components:{HelloWorld:_}},P=g,k=(r("034f"),Object(h["a"])(P,i,a,!1,null,null,null)),w=k.exports,A=r("2f62");s["a"].use(A["a"]);var F=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({store:F,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,r){},c4cc:function(e,t,r){e.exports=r.p+"img/pen.912bdd59.svg"},d739:function(e,t,r){e.exports=r.p+"img/delete.2c5552a1.svg"}});
//# sourceMappingURL=app.3c9e628a.js.map