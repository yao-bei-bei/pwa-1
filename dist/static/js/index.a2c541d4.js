webpackJsonp([1],{"+31+":function(e,t){},0:function(e,t,n){e.exports=n("msSN")},"5e9e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(e,t){e.type=t},setEffect:function(e,t){e.effect=t}}},"7b4Y":function(e,t){},CJsk:function(e,t){},LOWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return u}),n.d(t,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),i=n.n(o),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(e,t){var n=t.pageId,r=t.scrollPosition;e.scrollPostionMap=i()({},e.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(e,t){var n=e.commit,r=t.pageId,a=t.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},Pcz3:function(e,t){},Uz7q:function(e,t){e.exports={buildVersion:1623379155434,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"D:\\test\\lavas-template-vue\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(e,t,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="VfP6"},gHRC:function(e,t){},msSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("Gu7T"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),f=n("/5sW"),p=n("1nuA"),h=function(){var e=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function d(e,t){var n={isClient:!0,app:t,store:e.store,route:e.to,from:e.from},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e){var t=e.status,a=void 0===t?302:t,o=e.path,i=void 0===o?"":o,s=e.query,c=void 0===s?{}:s,u=e.external,l=void 0!==u&&u;n._redirected=!0,r({path:i,query:c,status:a,external:l})},n}var v=function(){var e=l()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}if(!n._redirected){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,m(t[r],n);case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();function m(e,t){var n=void 0;return 2===e.length?n=new a.a(function(n,r){e(t,function(e,a){e?(t.error(e),r(e)):n(a)})}):(n=e(t))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),y=n.n(w),g=n("Dd8w"),b=n.n(g),_=n("p3jY"),x=n.n(_),P=n("/ocq"),k={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},T=n("XyMi"),E=Object(T.a)(k,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,S=n("fZjL"),A=n.n(S),C={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var e=this.$route.query;0!==A()(e).length&&this.$router.replace({name:"error",params:e})}};var O=function(e){n("7b4Y")},I=Object(T.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-error"},[t("p",[this._v(this._s(this.message))])])},[],!1,O,"data-v-19a07bd8",null).exports;var M={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var e=l()(c.a.mark(function e(t){t.store,t.route;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var $=function(e){n("qmXh")},L=[{path:"/appshell",component:E,meta:{},name:"appshell"},{path:"/",component:Object(T.a)(M,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-index"},[t("h2",[this._v("LAVAS")]),this._v(" "),t("h4",[this._v("[ˈlɑ:vəz]")])])}],!1,$,"data-v-33cc9dd4",null).exports,meta:{},name:"index"},{path:"/error",component:I,meta:{},name:"error",alias:"*"}];f.a.use(P.a);var j=function(e,t,n){if(n)return n;var r={};return e.hash&&(r.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(r.x=0,r.y=0),r},W=L.filter(function(e){return e.keepAlive||e.meta.keepAlive}).map(function(e){return e.name});var q=n("woOf"),R=n.n(q),D=n("BO1k"),B=n.n(D),V=n("NYxO");f.a.use(V.a);var U=n("VfP6"),N=U.keys(),X={},Y=!0,z=!1,F=void 0;try{for(var G,H=B()(N);!(Y=(G=H.next()).done);Y=!0){var J=G.value;if("./index.js"===J){X=se(J);break}}}catch(e){z=!0,F=e}finally{try{!Y&&H.return&&H.return()}finally{if(z)throw F}}if("function"!=typeof X){X.modules=X.modules||{};var K=!0,Z=!1,Q=void 0;try{for(var ee,te=B()(N);!(K=(ee=te.next()).done);K=!0){var ne=ee.value;if("./index.js"!==ne){var re=ne.replace(/^\.\//,"").replace(/\.js$/,""),ae=re.split("/"),oe=ce(X,ae);oe[re=ae.pop()]=se(ne),oe[re].namespaced=!0}}}catch(e){Z=!0,Q=e}finally{try{!K&&te.return&&te.return()}finally{if(Z)throw Q}}}var ie=X instanceof Function?X:function(){return new V.a.Store(R()({},X,{state:X.state instanceof Function?X.state():{}}))};function se(e){var t=U(e),n=t.default||t;if(n.commit)throw new Error("[lavas] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+e.replace("./",""));return n}function ce(e,t){if(1===t.length)return e.modules;var n=t.shift(),r=e.modules[n]=e.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},ce(r,t)}var ue=!1,le={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.showUpdate),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",this.handleSWChange)},beforeDestroy:function(){window.removeEventListener("sw.update",this.showUpdate),navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("controllerchange",this.handleSWChange)},methods:{showUpdate:function(e){this.show=!0},handleRefresh:function(){try{navigator.serviceWorker.getRegistration().then(function(e){e.waiting.postMessage("skipWaiting")})}catch(e){window.location.reload()}},handleSWChange:function(){ue||(ue=!0,window.location.reload())}}};var fe=function(e){n("Pcz3")},pe={name:"app",components:{UpdateToast:Object(T.a)(le,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"popup"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[t("span",[this._v(this._s(this.text))]),this._v(" "),t("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[t("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,fe,"data-v-e025e09c",null).exports},computed:b()({},Object(V.c)("pageTransition",{pageTransitionType:function(e){return e.type},pageTransitionEffect:function(e){return e.effect}}),Object(V.c)("scrollBehavior",{scrollPostionMap:function(e){return e.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var e=this.$route,t=e.name,n=e.params,r=A()(n);return r.length?t+r.reduce(function(e,t){return e+n[t]},""):null}}),data:function(){return{keepAlivePages:W}},methods:b()({},Object(V.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(e,t){e.classList.add("app-view-scroll-enabled"),e.scrollTop=t},restoreBodyScrollPosition:function(e,t){e.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=t},handleBeforeEnter:function(e){var t=this,n=e.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;f.a.nextTick(function(){t.restoreContainerScrollPosition(e,a)})},handleAfterEnter:function(e){var t=e.dataset.pageId,n=(this.scrollPostionMap[t]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(e,r)},handleBeforeLeave:function(e){var t=e.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(e,n),this.savePageScrollPosition({pageId:t,scrollPosition:{y:n}})}})};var he=function(e){n("gHRC")},de=Object(T.a)(pe,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.pageTransitionEffect},on:{"before-enter":e.handleBeforeEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(e.keepAlivePages)}},[n("router-view",{key:e.routerViewKey,class:["app-view",e.pageTransitionClass],attrs:{"data-page-id":e.$route.fullPath}})],1)],1),e._v(" "),n("update-toast")],1)},[],!1,he,null,null).exports;f.a.use(x.a),f.a.config.productionTip=!1;var ve={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var me=function(e){n("+31+")},we=Object(T.a)(ve,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,me,"data-v-e0e1a4fc",null).exports,ye=n("p5k0"),ge=n.n(ye),be=n("XGXE"),_e=n.n(be);n("MU8w"),n("CJsk");ge.a.shim(),_e.a.shim();var xe=f.a.prototype.$loading=new f.a(we).$mount(),Pe=function(){var e=function(){var e=new P.a({mode:"history",base:"/",scrollBehavior:j,routes:L});return e.beforeEach(function(t,n,r){e.app.$store&&e.app.$store.state.pageTransition.enable&&(e.app.$store.commit("pageTransition/setType","fade"),e.app.$store.commit("pageTransition/setEffect","fade")),r()}),e}(),t=ie();return{App:f.a.extend(b()({router:e,store:t},de)),router:e,store:t}}(),ke=Pe.App,Te=Pe.router,Ee=Pe.store,Se=y.a.build,Ae=Se.ssr,Ce=Se.cssExtract,Oe=y.a.middleware,Ie=void 0===Oe?{}:Oe,Me=y.a.skeleton,$e=Me.enable,Le=Me.asyncCSS,je=void 0;window.__INITIAL_STATE__&&Ee.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(xe.$el),f.a.mixin({beforeRouteUpdate:function(){var e=l()(c.a.mark(function e(t,n,r){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.$options.asyncData)?(xe.start(),a.call(this,{store:this.$store,route:t}).then(function(){xe.finish(),r()}).catch(r)):r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()});var We=!0;if(function(){var e=this;Te.beforeEach(function(){var t=l()(c.a.mark(function t(n,r,a){var o,s,u,l,f,m,w;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(We||n.path!==r.path){e.next=2;break}return e.abrupt("return",a());case 2:return We=!1,o=Te.getMatchedComponents(n),s=[].concat(i()(Ie.all||[]),i()(Ie.client||[]),i()(o.filter(function(e){var t=e.middleware;return!!t}).reduce(function(e,t){var n=t.middleware;return e.concat(n)},[]))),e.next=7,h(s);case 7:if(u=e.sent,!(l=s.find(function(e){return"function"!=typeof u[e]}))){e.next=11;break}throw new Error("Unknown middleware "+l);case 11:return f=!1,m=d({to:n,from:r,store:Ee,next:function(e){if(xe.finish&&xe.finish(),!f){if(f=!0,e.external)return e.query=Object(p.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:""),window.location.replace(e.path),a();a(e)}}},je),w=s.map(function(e){return u[e]}),e.next=17,v(w,m);case 17:f||a();case 18:case"end":return e.stop()}},t,e)}));return function(e,n,r){return t.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&Ae)je=new ke,Te.onReady(function(){Re(),je.$mount("#app")});else{var qe=$e&&Le&&Ce;window.mountLavas=function(){setTimeout(function(){var e=document.querySelector("#app");e&&(e.innerHTML=""),je.$mount("#app")},0)},Re(),je=new ke,(Ae||!qe||qe&&window.STYLE_READY)&&window.mountLavas()}function Re(){var e=this;Te.beforeResolve(function(t,n,r){var o=Te.getMatchedComponents(t),i=Te.getMatchedComponents(n),s=!1,u=o.filter(function(e,t){return s||(s=i[t]!==e)});if(!u.length)return r();xe.start(),a.a.all(u.filter(function(e){return e.asyncData&&(!e.asyncDataFetched||!t.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.asyncData({store:Ee,route:t});case 2:r.asyncDataFetched=!0;case 3:case"end":return e.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())).then(function(){xe.finish(),r()}).catch(r)})}},qmXh:function(e,t){}},[0]);
//# sourceMappingURL=index.a2c541d4.js.map