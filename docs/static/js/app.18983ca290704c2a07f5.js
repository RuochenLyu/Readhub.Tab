webpackJsonp([1],{125:function(t,e){},126:function(t,e,s){function n(t){s(156)}var a=s(4)(s(148),s(165),n,"data-v-fcfcfba2",null);t.exports=a.exports},146:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(128),a=s(126),r=s.n(a),c=s(124),l=s.n(c),i=s(0),o=s.n(i);s(125),n.a.config.productionTip=!1,n.a.prototype.$http=l.a,s(2),n.a.use(s(127),{moment:o.a}),new n.a({el:"#app",render:function(t){return t(r.a)}})},147:function(t,e,s){"use strict";var n=s(151),a=s.n(n);e.a={fetch:function(){return JSON.parse(localStorage.getItem("readhub.tab/v1.1/entries")||"[]")},save:function(t){localStorage.setItem("readhub.tab/v1.1/entries",a()(t))},channel:{fetch:function(){return localStorage.getItem("readhub.tab/v1.1/channel")||"topics"},save:function(t){localStorage.setItem("readhub.tab/v1.1/channel",t)}}}},148:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(147),a=s(161),r=s.n(a),c=s(162),l=s.n(c);e.default={name:"app",components:{Entry:r.a,Setting:l.a},data:function(){return{entries:n.a.fetch(),channel:n.a.channel.fetch()}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.$http.get("http://api.rss2json.com/v1/api.json",{params:{rss_url:"http://readhub.bayes.cafe/rss?channel="+t.channel,api_key:"havl9vqc7nmdjlmbofbltgeej3q0gqweh0ftpd3k",count:15}}).then(function(e){t.entries=e.data.items,n.a.save(e.data.items)})},updateChannel:function(t){this.channel=t,this.fetchData(),n.a.channel.save(t)}}}},149:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(159),a=s.n(n);e.default={name:"entry",props:{entry:{type:Object}},data:function(){return{isActive:!1}},created:function(){var t=this;setTimeout(function(){t.isActive=!0},500)},filters:{pangu:function(t){if(!t)return"";var e=document.createElement("div");return e.innerHTML=t,a.a.spacing(e.innerHTML)}}}},150:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"setting",props:{channel:{type:String}},methods:{updateChannel:function(t){this.$emit("update",t.target.value)}}}},154:function(t,e){},155:function(t,e){},156:function(t,e){},158:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":10,"./af.js":10,"./ar":17,"./ar-dz":11,"./ar-dz.js":11,"./ar-kw":12,"./ar-kw.js":12,"./ar-ly":13,"./ar-ly.js":13,"./ar-ma":14,"./ar-ma.js":14,"./ar-sa":15,"./ar-sa.js":15,"./ar-tn":16,"./ar-tn.js":16,"./ar.js":17,"./az":18,"./az.js":18,"./be":19,"./be.js":19,"./bg":20,"./bg.js":20,"./bn":21,"./bn.js":21,"./bo":22,"./bo.js":22,"./br":23,"./br.js":23,"./bs":24,"./bs.js":24,"./ca":25,"./ca.js":25,"./cs":26,"./cs.js":26,"./cv":27,"./cv.js":27,"./cy":28,"./cy.js":28,"./da":29,"./da.js":29,"./de":32,"./de-at":30,"./de-at.js":30,"./de-ch":31,"./de-ch.js":31,"./de.js":32,"./dv":33,"./dv.js":33,"./el":34,"./el.js":34,"./en-au":35,"./en-au.js":35,"./en-ca":36,"./en-ca.js":36,"./en-gb":37,"./en-gb.js":37,"./en-ie":38,"./en-ie.js":38,"./en-nz":39,"./en-nz.js":39,"./eo":40,"./eo.js":40,"./es":42,"./es-do":41,"./es-do.js":41,"./es.js":42,"./et":43,"./et.js":43,"./eu":44,"./eu.js":44,"./fa":45,"./fa.js":45,"./fi":46,"./fi.js":46,"./fo":47,"./fo.js":47,"./fr":50,"./fr-ca":48,"./fr-ca.js":48,"./fr-ch":49,"./fr-ch.js":49,"./fr.js":50,"./fy":51,"./fy.js":51,"./gd":52,"./gd.js":52,"./gl":53,"./gl.js":53,"./gom-latn":54,"./gom-latn.js":54,"./he":55,"./he.js":55,"./hi":56,"./hi.js":56,"./hr":57,"./hr.js":57,"./hu":58,"./hu.js":58,"./hy-am":59,"./hy-am.js":59,"./id":60,"./id.js":60,"./is":61,"./is.js":61,"./it":62,"./it.js":62,"./ja":63,"./ja.js":63,"./jv":64,"./jv.js":64,"./ka":65,"./ka.js":65,"./kk":66,"./kk.js":66,"./km":67,"./km.js":67,"./kn":68,"./kn.js":68,"./ko":69,"./ko.js":69,"./ky":70,"./ky.js":70,"./lb":71,"./lb.js":71,"./lo":72,"./lo.js":72,"./lt":73,"./lt.js":73,"./lv":74,"./lv.js":74,"./me":75,"./me.js":75,"./mi":76,"./mi.js":76,"./mk":77,"./mk.js":77,"./ml":78,"./ml.js":78,"./mr":79,"./mr.js":79,"./ms":81,"./ms-my":80,"./ms-my.js":80,"./ms.js":81,"./my":82,"./my.js":82,"./nb":83,"./nb.js":83,"./ne":84,"./ne.js":84,"./nl":86,"./nl-be":85,"./nl-be.js":85,"./nl.js":86,"./nn":87,"./nn.js":87,"./pa-in":88,"./pa-in.js":88,"./pl":89,"./pl.js":89,"./pt":91,"./pt-br":90,"./pt-br.js":90,"./pt.js":91,"./ro":92,"./ro.js":92,"./ru":93,"./ru.js":93,"./sd":94,"./sd.js":94,"./se":95,"./se.js":95,"./si":96,"./si.js":96,"./sk":97,"./sk.js":97,"./sl":98,"./sl.js":98,"./sq":99,"./sq.js":99,"./sr":101,"./sr-cyrl":100,"./sr-cyrl.js":100,"./sr.js":101,"./ss":102,"./ss.js":102,"./sv":103,"./sv.js":103,"./sw":104,"./sw.js":104,"./ta":105,"./ta.js":105,"./te":106,"./te.js":106,"./tet":107,"./tet.js":107,"./th":108,"./th.js":108,"./tl-ph":109,"./tl-ph.js":109,"./tlh":110,"./tlh.js":110,"./tr":111,"./tr.js":111,"./tzl":112,"./tzl.js":112,"./tzm":114,"./tzm-latn":113,"./tzm-latn.js":113,"./tzm.js":114,"./uk":115,"./uk.js":115,"./ur":116,"./ur.js":116,"./uz":118,"./uz-latn":117,"./uz-latn.js":117,"./uz.js":118,"./vi":119,"./vi.js":119,"./x-pseudo":120,"./x-pseudo.js":120,"./yo":121,"./yo.js":121,"./zh-cn":2,"./zh-cn.js":2,"./zh-hk":122,"./zh-hk.js":122,"./zh-tw":123,"./zh-tw.js":123};n.keys=function(){return Object.keys(r)},n.resolve=a,t.exports=n,n.id=158},161:function(t,e,s){function n(t){s(155)}var a=s(4)(s(149),s(164),n,"data-v-980ed84a",null);t.exports=a.exports},162:function(t,e,s){function n(t){s(154)}var a=s(4)(s(150),s(163),n,"data-v-13b14a79",null);t.exports=a.exports},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"setting"},[s("a",{staticClass:"source",attrs:{href:"https://readhub.me"}},[t._v("Readhub")]),t._v(" "),s("select",{attrs:{id:"channel"},domProps:{value:t.channel},on:{change:t.updateChannel}},[s("option",{attrs:{value:"topics"}},[t._v("热门话题")]),t._v(" "),s("option",{attrs:{value:"news"}},[t._v("科技动态")]),t._v(" "),s("option",{attrs:{value:"technews"}},[t._v("开发者资讯")]),t._v(" "),s("option",{attrs:{value:"all"}},[t._v("全部内容")])]),t._v(" "),s("label",{staticClass:"label-channel",attrs:{for:"channel"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 478.7 478.7"}},[s("path",{attrs:{d:"M454.2 189.1l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7 -6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5 -7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6c-14.3 2.4-24.7 14.7-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6c2.4 14.3 14.7 24.7 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5l0 0c7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6c14.3-2.4 24.7-14.7 24.7-29.2v-42.1C478.9 203.8 468.5 191.5 454.2 189.1zM451.9 260.4c0 1.3-0.9 2.4-2.2 2.6l-42 7c-5.3 0.9-9.5 4.8-10.8 9.9 -3.8 14.7-9.6 28.8-17.4 41.9 -2.7 4.6-2.5 10.3 0.6 14.7l24.7 34.8c0.7 1 0.6 2.5-0.3 3.4l-29.8 29.8c-0.7 0.7-1.4 0.8-1.9 0.8 -0.6 0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6 -13.1 7.8-27.2 13.6-41.9 17.4 -5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-0.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8 -14.3-3.7-28.1-9.4-41-16.8 -2.1-1.2-4.5-1.8-6.8-1.8 -2.7 0-5.5 0.8-7.8 2.5l-35 24.9c-0.5 0.3-1 0.5-1.5 0.5 -0.4 0-1.2-0.1-1.9-0.8l-29.8-29.8c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2 0.6-14.8 -7.8-13-13.8-27.1-17.6-41.8 -1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3 0.9-2.4 2.2-2.6l41.7-7c5.3-0.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5 0.3-3.4l29.8-29.8c0.7-0.7 1.4-0.8 1.9-0.8 0.6 0 1.1 0.2 1.5 0.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8 0.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c0.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4 0.9 2.6 2.2l7 41.7c0.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-0.6l34.5-24.8c0.5-0.3 1-0.5 1.5-0.5 0.4 0 1.2 0.1 1.9 0.8l29.8 29.8c0.9 0.9 1 2.3 0.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-0.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3 0.2 2.2 1.3 2.2 2.6v42.1H451.9z"}}),s("path",{attrs:{d:"M239.4 136c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3S296.4 136 239.4 136zM239.4 315.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3S281.5 315.6 239.4 315.6z"}})])])])},staticRenderFns:[]}},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"entry",class:{active:t.isActive}},[s("h3",{staticClass:"title"},[s("a",{attrs:{href:t.entry.link}},[t._v(t._s(t._f("pangu")(t.entry.title)))])]),t._v(" "),s("div",{staticClass:"meta"},[s("time",[t._v(t._s(t._f("moment")(t.entry.pubDate+"+00:00","from")))]),t._v(" "),s("span",[t._v(t._s(t.entry.author))])])])},staticRenderFns:[]}},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._l(t.entries,function(t){return s("entry",{key:t.guid,attrs:{entry:t}})}),t._v(" "),s("setting",{attrs:{channel:t.channel},on:{update:t.updateChannel}})],2)},staticRenderFns:[]}}},[146]);
//# sourceMappingURL=app.18983ca290704c2a07f5.js.map