webpackJsonp([1],{139:function(t,e){},140:function(t,e,s){function n(t){s(170)}var a=s(4)(s(162),s(180),n,"data-v-fcfcfba2",null);t.exports=a.exports},160:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(142),a=s(140),r=s.n(a),c=s(138),l=s.n(c),i=s(0),j=s.n(i);s(139),n.a.config.productionTip=!1,n.a.prototype.$http=l.a,s(2),n.a.use(s(141),{moment:j.a}),new n.a({el:"#app",render:function(t){return t(r.a)}})},161:function(t,e,s){"use strict";var n=s(165),a=s.n(n);e.a={fetch:function(){return JSON.parse(localStorage.getItem("readhub.tab/v1.2/entries")||"[]")},save:function(t){localStorage.setItem("readhub.tab/v1.2/entries",a()(t))},channel:{fetch:function(){return localStorage.getItem("readhub.tab/v1.2/channel")||"topic"},save:function(t){localStorage.setItem("readhub.tab/v1.2/channel",t)}}}},162:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(161),a=s(176),r=s.n(a),c=s(177),l=s.n(c);e.default={name:"app",components:{Entry:r.a,Setting:l.a},data:function(){return{entries:n.a.fetch(),channel:n.a.channel.fetch()}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.$http.get("https://api.readhub.cn/"+t.channel,{params:{pageSize:20}}).then(function(e){t.entries=e.data.data,n.a.save(e.data.data)})},updateChannel:function(t){this.channel=t,this.fetchData(),n.a.channel.save(t)}}}},163:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(173),a=s.n(n);e.default={name:"entry",props:{entry:{type:Object}},data:function(){return{isActive:!1}},created:function(){var t=this;setTimeout(function(){t.isActive=!0},500)},filters:{pangu:function(t){if(!t)return"";var e=document.createElement("div");return e.innerHTML=t,a.a.spacing(e.innerText)},renderUrl:function(t){return t.newsArray?"https://readhub.cn/topic/"+t.id:t.url}}}},164:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"setting",props:{channel:{type:String}},methods:{updateChannel:function(t){this.$emit("update",t.target.value)}}}},168:function(t,e){},169:function(t,e){},170:function(t,e){},172:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":11,"./af.js":11,"./ar":18,"./ar-dz":12,"./ar-dz.js":12,"./ar-kw":13,"./ar-kw.js":13,"./ar-ly":14,"./ar-ly.js":14,"./ar-ma":15,"./ar-ma.js":15,"./ar-sa":16,"./ar-sa.js":16,"./ar-tn":17,"./ar-tn.js":17,"./ar.js":18,"./az":19,"./az.js":19,"./be":20,"./be.js":20,"./bg":21,"./bg.js":21,"./bm":22,"./bm.js":22,"./bn":23,"./bn.js":23,"./bo":24,"./bo.js":24,"./br":25,"./br.js":25,"./bs":26,"./bs.js":26,"./ca":27,"./ca.js":27,"./cs":28,"./cs.js":28,"./cv":29,"./cv.js":29,"./cy":30,"./cy.js":30,"./da":31,"./da.js":31,"./de":34,"./de-at":32,"./de-at.js":32,"./de-ch":33,"./de-ch.js":33,"./de.js":34,"./dv":35,"./dv.js":35,"./el":36,"./el.js":36,"./en-SG":37,"./en-SG.js":37,"./en-au":38,"./en-au.js":38,"./en-ca":39,"./en-ca.js":39,"./en-gb":40,"./en-gb.js":40,"./en-ie":41,"./en-ie.js":41,"./en-il":42,"./en-il.js":42,"./en-nz":43,"./en-nz.js":43,"./eo":44,"./eo.js":44,"./es":47,"./es-do":45,"./es-do.js":45,"./es-us":46,"./es-us.js":46,"./es.js":47,"./et":48,"./et.js":48,"./eu":49,"./eu.js":49,"./fa":50,"./fa.js":50,"./fi":51,"./fi.js":51,"./fo":52,"./fo.js":52,"./fr":55,"./fr-ca":53,"./fr-ca.js":53,"./fr-ch":54,"./fr-ch.js":54,"./fr.js":55,"./fy":56,"./fy.js":56,"./ga":57,"./ga.js":57,"./gd":58,"./gd.js":58,"./gl":59,"./gl.js":59,"./gom-latn":60,"./gom-latn.js":60,"./gu":61,"./gu.js":61,"./he":62,"./he.js":62,"./hi":63,"./hi.js":63,"./hr":64,"./hr.js":64,"./hu":65,"./hu.js":65,"./hy-am":66,"./hy-am.js":66,"./id":67,"./id.js":67,"./is":68,"./is.js":68,"./it":70,"./it-ch":69,"./it-ch.js":69,"./it.js":70,"./ja":71,"./ja.js":71,"./jv":72,"./jv.js":72,"./ka":73,"./ka.js":73,"./kk":74,"./kk.js":74,"./km":75,"./km.js":75,"./kn":76,"./kn.js":76,"./ko":77,"./ko.js":77,"./ku":78,"./ku.js":78,"./ky":79,"./ky.js":79,"./lb":80,"./lb.js":80,"./lo":81,"./lo.js":81,"./lt":82,"./lt.js":82,"./lv":83,"./lv.js":83,"./me":84,"./me.js":84,"./mi":85,"./mi.js":85,"./mk":86,"./mk.js":86,"./ml":87,"./ml.js":87,"./mn":88,"./mn.js":88,"./mr":89,"./mr.js":89,"./ms":91,"./ms-my":90,"./ms-my.js":90,"./ms.js":91,"./mt":92,"./mt.js":92,"./my":93,"./my.js":93,"./nb":94,"./nb.js":94,"./ne":95,"./ne.js":95,"./nl":97,"./nl-be":96,"./nl-be.js":96,"./nl.js":97,"./nn":98,"./nn.js":98,"./pa-in":99,"./pa-in.js":99,"./pl":100,"./pl.js":100,"./pt":102,"./pt-br":101,"./pt-br.js":101,"./pt.js":102,"./ro":103,"./ro.js":103,"./ru":104,"./ru.js":104,"./sd":105,"./sd.js":105,"./se":106,"./se.js":106,"./si":107,"./si.js":107,"./sk":108,"./sk.js":108,"./sl":109,"./sl.js":109,"./sq":110,"./sq.js":110,"./sr":112,"./sr-cyrl":111,"./sr-cyrl.js":111,"./sr.js":112,"./ss":113,"./ss.js":113,"./sv":114,"./sv.js":114,"./sw":115,"./sw.js":115,"./ta":116,"./ta.js":116,"./te":117,"./te.js":117,"./tet":118,"./tet.js":118,"./tg":119,"./tg.js":119,"./th":120,"./th.js":120,"./tl-ph":121,"./tl-ph.js":121,"./tlh":122,"./tlh.js":122,"./tr":123,"./tr.js":123,"./tzl":124,"./tzl.js":124,"./tzm":126,"./tzm-latn":125,"./tzm-latn.js":125,"./tzm.js":126,"./ug-cn":127,"./ug-cn.js":127,"./uk":128,"./uk.js":128,"./ur":129,"./ur.js":129,"./uz":131,"./uz-latn":130,"./uz-latn.js":130,"./uz.js":131,"./vi":132,"./vi.js":132,"./x-pseudo":133,"./x-pseudo.js":133,"./yo":134,"./yo.js":134,"./zh-cn":2,"./zh-cn.js":2,"./zh-hk":135,"./zh-hk.js":135,"./zh-tw":136,"./zh-tw.js":136};n.keys=function(){return Object.keys(r)},n.resolve=a,t.exports=n,n.id=172},176:function(t,e,s){function n(t){s(169)}var a=s(4)(s(163),s(179),n,"data-v-980ed84a",null);t.exports=a.exports},177:function(t,e,s){function n(t){s(168)}var a=s(4)(s(164),s(178),n,"data-v-13b14a79",null);t.exports=a.exports},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"setting"},[s("a",{staticClass:"source",attrs:{href:"https://readhub.cn"}},[t._v("Readhub")]),t._v(" "),s("select",{attrs:{id:"channel"},domProps:{value:t.channel},on:{change:t.updateChannel}},[s("option",{attrs:{value:"topic"}},[t._v("热门话题")]),t._v(" "),s("option",{attrs:{value:"news"}},[t._v("科技动态")]),t._v(" "),s("option",{attrs:{value:"technews"}},[t._v("开发者资讯")]),t._v(" "),s("option",{attrs:{value:"blockchain"}},[t._v("区块链快讯")])]),t._v(" "),s("label",{staticClass:"label-channel",attrs:{for:"channel"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 478.7 478.7"}},[s("path",{attrs:{d:"M454.2 189.1l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7 -6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5 -7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6c-14.3 2.4-24.7 14.7-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6c2.4 14.3 14.7 24.7 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5l0 0c7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6c14.3-2.4 24.7-14.7 24.7-29.2v-42.1C478.9 203.8 468.5 191.5 454.2 189.1zM451.9 260.4c0 1.3-0.9 2.4-2.2 2.6l-42 7c-5.3 0.9-9.5 4.8-10.8 9.9 -3.8 14.7-9.6 28.8-17.4 41.9 -2.7 4.6-2.5 10.3 0.6 14.7l24.7 34.8c0.7 1 0.6 2.5-0.3 3.4l-29.8 29.8c-0.7 0.7-1.4 0.8-1.9 0.8 -0.6 0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6 -13.1 7.8-27.2 13.6-41.9 17.4 -5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-0.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8 -14.3-3.7-28.1-9.4-41-16.8 -2.1-1.2-4.5-1.8-6.8-1.8 -2.7 0-5.5 0.8-7.8 2.5l-35 24.9c-0.5 0.3-1 0.5-1.5 0.5 -0.4 0-1.2-0.1-1.9-0.8l-29.8-29.8c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2 0.6-14.8 -7.8-13-13.8-27.1-17.6-41.8 -1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3 0.9-2.4 2.2-2.6l41.7-7c5.3-0.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5 0.3-3.4l29.8-29.8c0.7-0.7 1.4-0.8 1.9-0.8 0.6 0 1.1 0.2 1.5 0.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8 0.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c0.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4 0.9 2.6 2.2l7 41.7c0.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-0.6l34.5-24.8c0.5-0.3 1-0.5 1.5-0.5 0.4 0 1.2 0.1 1.9 0.8l29.8 29.8c0.9 0.9 1 2.3 0.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-0.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3 0.2 2.2 1.3 2.2 2.6v42.1H451.9z"}}),s("path",{attrs:{d:"M239.4 136c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3S296.4 136 239.4 136zM239.4 315.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3S281.5 315.6 239.4 315.6z"}})])])])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"entry",class:{active:t.isActive}},[s("h3",{staticClass:"title"},[s("a",{attrs:{href:t._f("renderUrl")(t.entry)}},[t.entry.order>1e6?s("span",[t._v("🔝")]):t._e(),t._v(" "+t._s(t._f("pangu")(t.entry.title)))])]),t._v(" "),s("div",{staticClass:"meta"},[s("time",[t._v(t._s(t._f("moment")(t.entry.publishDate,"from")))]),t._v(" "),t.entry.siteName?s("a",{attrs:{href:t.entry.url}},[t._v(t._s(t.entry.siteName))]):t._e(),t._v(" "),t._l(t.entry.newsArray,function(e,n){return[n<3?s("a",{attrs:{href:e.url}},[t._v(t._s(e.siteName))]):t._e(),t._v(" "),n>=3&&n+1==t.entry.newsArray.length?s("span",[t._v("等 "+t._s(t.entry.newsArray.length)+" 个来源")]):t._e()]})],2)])},staticRenderFns:[]}},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._l(t.entries,function(t){return s("entry",{key:t.guid,attrs:{entry:t}})}),t._v(" "),s("setting",{attrs:{channel:t.channel},on:{update:t.updateChannel}})],2)},staticRenderFns:[]}}},[160]);
//# sourceMappingURL=app.76a64ad77c50dbf5946a.js.map