(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6jYb":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),a=n.n(r),o=n("Wu7z"),c=n("EKT6");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.searchQuery,n=e.layoutMode,r=e.onSetLayoutMode,i=e.linkButton,l=e.setSearchQuery,s=e.target,f={href:i.href};return s&&(f.target=s),a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"gf-form gf-form--grow"},a.a.createElement(c.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:l,placeholder:"Filter by name or type"}),a.a.createElement(o.b,{mode:n,onLayoutModeChanged:function(e){return r(e)}})),a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement("a",u({className:"btn btn-primary"},f),i.title))}}])&&s(n.prototype,r),i&&s(n,i),t}(r.PureComponent)},EKT6:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("Obii"),c=Object(r.forwardRef)((function(e,t){return a.a.createElement("label",{className:e.labelClassName},a.a.createElement("input",{ref:t,type:"text",className:e.inputClassName,value:Object(o.unEscapeStringFromRegex)(e.value),onChange:function(t){return e.onChange(Object(o.escapeStringForRegex)(t.target.value))},placeholder:e.placeholder?e.placeholder:null}),a.a.createElement("i",{className:"gf-form-input-icon fa fa-search"}))}))},KFLF:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),c=n.n(o),i=function(e){var t=e.plugin;return a.a.createElement("li",{className:"card-item-wrapper"},a.a.createElement("a",{className:"card-item",href:"plugins/".concat(t.id,"/")},a.a.createElement("div",{className:"card-item-header"},a.a.createElement("div",{className:"card-item-type"},t.type),t.hasUpdate&&a.a.createElement("div",{className:"card-item-notice"},a.a.createElement("span",{"bs-tooltip":"plugin.latestVersion"},"Update available!"))),a.a.createElement("div",{className:"card-item-body"},a.a.createElement("figure",{className:"card-item-figure"},a.a.createElement("img",{src:t.info.logos.small})),a.a.createElement("div",{className:"card-item-details"},a.a.createElement("div",{className:"card-item-name"},t.name),a.a.createElement("div",{className:"card-item-sub-name"},"By ".concat(t.info.author.name))))))},u=n("Wu7z");t.a=function(e){var t=e.plugins,n=e.layoutMode,r=c()({"card-section":!0,"card-list-layout-grid":n===u.a.Grid,"card-list-layout-list":n===u.a.List});return a.a.createElement("section",{className:r},a.a.createElement("ol",{className:"card-list"},t.map((function(e,t){return a.a.createElement(i,{plugin:e,key:"".concat(e.name,"-").concat(t)})}))))}},mGjS:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"PluginListPage",(function(){return O}));var r=n("q1tI"),a=n.n(r),o=n("0cfB"),c=n("/MKj"),i=n("ZGyg"),u=n("6jYb"),l=n("KFLF"),s=n("jGYO"),f=n("lzJ5"),p=n("y6t6"),m=n("y6L2");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return b(this,t),g(this,v(t).apply(this,arguments))}var n,r,o,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetchPlugins()}},{key:"fetchPlugins",value:(c=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadPlugins();case 2:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=c.apply(e,t);function o(e){d(a,n,r,o,i,"next",e)}function i(e){d(a,n,r,o,i,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.hasFetched,n=e.navModel,r=e.plugins,o=e.layoutMode,c=e.setPluginsLayoutMode,s=e.setPluginsSearchQuery,f=e.searchQuery;return a.a.createElement(i.a,{navModel:n},a.a.createElement(i.a.Contents,{isLoading:!t},a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{searchQuery:f,layoutMode:o,onSetLayoutMode:function(e){return c(e)},setSearchQuery:function(e){return s(e)},linkButton:{href:"https://grafana.com/plugins?utm_source=grafana_plugin_list",title:"到Grafana.com查找更多插件"}}),t&&r&&r&&a.a.createElement(l.a,{plugins:r,layoutMode:o}))))}}])&&h(n.prototype,r),o&&h(n,o),t}(r.PureComponent);var w={loadPlugins:s.c,setPluginsLayoutMode:m.f,setPluginsSearchQuery:m.g};t.default=Object(o.hot)(e)(Object(c.connect)((function(e){return{navModel:Object(f.a)(e.navIndex,"plugins"),plugins:Object(p.b)(e.plugins),layoutMode:Object(p.a)(e.plugins),searchQuery:Object(p.c)(e.plugins),hasFetched:e.plugins.hasFetched}}),w)(O))}.call(this,n("3UD+")(e))},y6t6:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)||t.test(e.info.author.name)||t.test(e.info.description)}))},a=function(e){return e.searchQuery},o=function(e){return e.layoutMode}}}]);
//# sourceMappingURL=PluginListPage.5c3edd1990e1c7cf41f1.js.map