(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{9405:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buy/[slug]",function(){return n(415)}])},7291:function(e,t,n){"use strict";var r=n(9792),i=n(812),a=n(2370),s=n(5634),o=n(3803),l=n.n(o),c=n(5697),d=n.n(c),u=n(7294),f=n(6250);let p=e=>{let{children:t,title:n,...i}=e;return(0,r.jsxs)(s.default,{as:"h3",variant:"small",...i,css:{width:["48%",,"auto"]},children:[(0,r.jsx)("span",{css:{display:"block",marginBottom:2},children:n}),(0,r.jsx)("span",{css:{display:"flex",flexWrap:"wrap",gap:1},children:t})]})};p.propTypes={children:d().node.isRequired,title:d().string.isRequired};let h=e=>{let{globalRank:t,lastPrice:n,marketCap:o,price24h:c,pricePercent24h:d,quoteAssetName:h,volumeQuote24h:m,chart:g,fromDate:x,toDate:y,marketPair:j,...b}=e;return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)("div",{...b,css:{maxWidth:"70rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",columnGap:2,rowGap:4,marginBottom:3},children:[(0,r.jsx)("div",{css:{width:"100%",display:"flex",gap:2,alignItems:"center"},children:(0,r.jsxs)(s.default,{as:"h2",variant:"small",css:{span:{display:"inline-flex"}},children:[(0,r.jsx)("span",{css:{width:"100%",marginBottom:1},children:"Price"}),(0,r.jsx)(a.default,{as:"span",variant:"h1",css:{marginRight:2,marginBottom:0},children:n}),(0,r.jsx)(s.default,{as:"span",variant:"large",id:"this",children:h})]})}),(0,r.jsxs)(p,{title:"24 Hour Change",children:[c,d]}),(0,r.jsx)(p,{title:"Market Cap",children:(0,r.jsx)(s.default,{as:"span",variant:"large",children:o||"–"})}),(0,r.jsx)(p,{title:"24 Hour Volume",children:(0,r.jsx)(s.default,{as:"span",variant:"large",children:m})}),(0,r.jsx)(p,{title:"Global Rank",children:(0,r.jsx)(s.default,{as:"span",variant:"large",children:t||"–"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{css:{width:"100%",minHeight:"450px",display:"flex",flexDirection:"column",marginBottom:4,backgroundColor:"white",[l()]:{backgroundColor:"zinc.800"},borderRadius:3,position:"relative"},children:[(0,r.jsxs)("div",{css:{display:"flex",flexWrap:"wrap",gap:3,padding:[3,,4],paddingBottom:[2,,3]},children:[(0,r.jsx)("div",{css:{display:"flex",flexGrow:1,flexDirection:"column"},children:(0,r.jsxs)(s.default,{variant:"large",children:[x," – ",y]})}),(0,r.jsxs)("div",{css:{display:"flex",flexWrap:"wrap",gap:3,marginBottom:"auto"},children:[(0,r.jsx)(i.default,{as:f.Z,href:"".concat("https://app.btcmarkets.net","/buy-sell?market=").concat(j),variant:"primary",size:"small",children:"View market"}),(0,r.jsx)(i.default,{as:f.Z,href:"".concat("https://app.btcmarkets.net","/login"),variant:"brand",size:"small",children:"Start trading"})]})]}),(0,r.jsx)("div",{css:{display:"flex",flexGrow:1},children:g})]})})]})};h.propTypes={globalRank:d().node,lastPrice:d().node.isRequired,marketCap:d().node,price24h:d().node.isRequired,pricePercent24h:d().node.isRequired,quoteAssetName:d().node.isRequired,volumeQuote24h:d().node.isRequired,chart:d().node.isRequired,marketPair:d().string.isRequired},t.Z=h},9259:function(e,t,n){"use strict";var r=n(9792),i=n(2370),a=n(3803),s=n.n(a),o=n(5697),l=n.n(o);let c=e=>{let{children:t,title:n,...a}=e;return(0,r.jsxs)("details",{...a,css:{display:"flex",flexFlow:"column",borderColor:"zinc.200",borderBottomStyle:"solid",borderBottomWidth:1,":first-of-type":{borderTopStyle:"solid",borderTopWidth:1},"&[open]":{paddingBottom:5,summary:{":after":{content:'"⊖"'}}},[s()]:{borderColor:"zinc.600"}},children:[(0,r.jsx)("summary",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",listStyle:"none",paddingTop:4,paddingBottom:4,cursor:"pointer",fontSize:6,"::-webkit-details-marker":{display:"none"},":after":{content:'"⊕"',display:"inline-block",marginLeft:3,fontSize:"3.2rem",[s()]:{color:"zinc.50"}}},children:(0,r.jsx)(i.default,{as:"h3",children:n})}),t]})};c.propTypes={children:l().node.isRequired,title:l().string.isRequired},t.Z=c},8173:function(e,t,n){"use strict";var r=n(9792),i=n(9818),a=n(5634),s=n(5697),o=n.n(s),l=n(7294);let c=e=>{let{children:t,titleOpen:n="Show less",titleClosed:s="Show more",center:o=!1,height:c="16em",innerStyle:d,...u}=e,[f,p]=(0,l.useState)(!1);return(0,r.jsxs)("div",{...u,children:[(0,r.jsx)("div",{css:[{overflow:"hidden",marginBottom:3},!f&&{maxHeight:c,maskImage:"linear-gradient(black 70%, transparent)",maskSize:"cover",maskRepeat:"no-repeat"},d],children:t}),(0,r.jsxs)(a.default,{variant:"large","aria-expanded":f,onClick:()=>p(!f),css:[{display:"flex",alignItems:"center",gap:2,cursor:"pointer"},o&&{justifyContent:"center"}],children:[f?n:s,(0,r.jsx)(i.Z,{"aria-label":f?"collapse":"expand",css:[{fontSize:"0.7em",display:"inline-block"},f&&{transform:"rotate(-180deg)"}]})]})]})};c.propTypes={children:o().node.isRequired,titleOpen:o().string,titleClosed:o().string,center:o().bool},t.Z=c},6241:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(9792),i=n(2370),a=n(1491),s=n(5657),o=n(8863),l=n.n(o),c=n(5697),d=n.n(c),u=n(7103),f=n(4931),p=n(6250);let{dataset:h,projectId:m}=u.config,g="https://www.btcmarkets.net",x=e=>{let[,,t]=e.node.asset._ref.split("-"),[n,i]=t.split("x");return(0,r.jsx)(f.Z,{alt:e.node.alt||"Supplementary article image",src:l().getImageUrl(e),width:n,height:i})},y=e=>{let{children:t,mark:{href:n}}=e;return n.startsWith(g)?(0,r.jsx)(p.Z,{href:n.replace(g,""),children:t}):(0,r.jsx)(p.Z,{href:n,target:"_blank",rel:"noopener noreferrer",children:t})};function j(e){let{size:t="large",blog:n=!1,...o}=e;return(0,r.jsx)(l(),{...o,imageOptions:{fit:"min"},projectId:m,dataset:h,serializers:{marks:{link:y},types:{block:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){let{style:s="normal"}=n.node,o=t?{maxWidth:"none"}:{};return/^h\d/u.test(s)?(0,r.jsx)(i.default,{as:s,css:[{marginTop:5},o],children:n.children}):"blockquote"===s?(0,r.jsx)(a.Z,{as:"blockquote",variant:e,css:[{marginLeft:0,paddingLeft:3,borderLeftWidth:"6px",borderLeftColor:"zinc.200",borderLeftStyle:"solid"},o],children:n.children}):"normal"===s?(0,r.jsx)(a.Z,{variant:e,css:[o],children:n.children}):l().defaultSerializers.types.block(n)}}(t,n),image:x},list:e=>(0,r.jsx)(s.Z,{children:e.children}),listItem:e=>(0,r.jsx)(a.Z,{as:"li",variant:t,children:e.children})}})}j.propTypes={...l().propTypes,size:d().oneOf(["medium","large","small"]),blog:d().bool}},8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return a}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let i=globalThis.AsyncLocalStorage;function a(){return i?new i:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return h},usePathname:function(){return m},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return x},useSelectedLayoutSegments:function(){return y},useSelectedLayoutSegment:function(){return j},redirect:function(){return c.redirect},notFound:function(){return d.notFound}});let r=n(7294),i=n(4224),a=n(8463),s=n(5182),o=n(2526),l=n(3014),c=n(8781),d=n(8147),u=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[u][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[u]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function h(){(0,s.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(a.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function m(){return(0,s.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(a.PathnameContext)}function g(){(0,s.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(i.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function x(){(0,s.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(i.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],i=Array.isArray(r),a=i?r[1]:r;if(!a||a.startsWith("__PAGE__"))continue;let s=i&&("c"===r[2]||"oc"===r[2]);s?n[r[0]]=r[1].split("/"):i&&(n[r[0]]=r[1]),n=e(t,n)}return n}(e.tree):null}function y(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(i.LayoutRouterContext);return function e(t,n,r,i){let a;if(void 0===r&&(r=!0),void 0===i&&(i=[]),r)a=t[1][n];else{var s;let e=t[1];a=null!=(s=e.children)?s:Object.values(e)[0]}if(!a)return i;let l=a[0],c=(0,o.getSegmentValue)(l);return!c||c.startsWith("__PAGE__")?i:(i.push(c),e(a,n,!1,i))}(t,e)}function j(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=y(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return i}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function i(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return o},redirect:function(){return l},isRedirectError:function(){return c},getURLFromRedirectError:function(){return d},getRedirectTypeFromError:function(){return u}});let a=n(4505),s="NEXT_REDIRECT";function o(e,t){let n=Error(s);n.digest=s+";"+t+";"+e;let r=a.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function l(e,t){throw void 0===t&&(t="replace"),o(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===s&&("replace"===n||"push"===n)&&"string"==typeof r}function d(e){return c(e)?e.digest.split(";",3)[2]:null}function u(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(i=r||(r={})).push="push",i.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return i}});let r=n(8530),i=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return a},useServerInsertedHTML:function(){return s}});let r=n(1757),i=r._(n(7294)),a=i.default.createContext(null);function s(e){let t=(0,i.useContext)(a);t&&t(e)}},415:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return F},default:function(){return G}});var r=n(9792),i=n(9332),a=n(2962),s=n(7294),o=n(7837),l=n(494),c=n(5152),d=n.n(c),u=n(5697),f=n.n(u),p=n(5634),h=n(7777),m=n(7291),g=n(9712);let x=e=>(0,r.jsx)(g.Z,{...e,css:{width:"5em",height:"1.25em"}});var y=e=>{let{marketPair:t,...n}=e;return(0,r.jsx)(m.Z,{...n,globalRank:(0,r.jsx)(x,{}),lastPrice:(0,r.jsx)(x,{}),marketCap:(0,r.jsx)(x,{}),price24h:(0,r.jsx)(x,{css:{height:"2em"}}),pricePercent24h:(0,r.jsx)(x,{css:{height:"2em"}}),quoteAssetName:(0,r.jsx)(x,{css:{width:"2.15em"}}),volumeQuote24h:(0,r.jsx)(x,{}),chart:(0,r.jsxs)(g.Z,{css:{width:"100%",display:"flex",flexDirection:"column",gap:3,alignItems:"center",justifyContent:"center",position:"relative"},children:[(0,r.jsx)(h.default,{css:{position:"relative",top:"unset",left:"unset"}}),(0,r.jsx)(p.default,{as:"div",variant:"large",children:"Loading..."})]}),fromDate:(0,r.jsx)(x,{css:{display:"inline-block"}}),toDate:(0,r.jsx)(x,{css:{display:"inline-block"}}),marketPair:t})};let j=d()(()=>Promise.all([n.e(982),n.e(25)]).then(n.bind(n,7025)),{loadableGenerated:{webpack:()=>[7025]},ssr:!1}),b=e=>{let{loading:t,marketPair:n,...i}=e;return t?(0,r.jsx)(y,{marketPair:n}):(0,r.jsx)(j,{marketPair:n,...i})};b.propTypes={loading:f().bool.isRequired};var v=e=>{let{marketId:t,...n}=e,{isLoading:i,data:a={chartData:[]}}=(0,o.a)(["buyAssetChart",t],async()=>{var e;let n=new Date,r=new Date(n.setMonth(n.getMonth()-3)),i=await (0,l.Z)("https://graphql.btcmarkets.net",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:"\n            query MarketingBuyPageOverview(\n              $nodeId: ID!\n              $timeWindow: MarketCandleTimeWindow\n              $fiatSymbol: Boolean\n              $from: DateTime\n            ) {\n              node(id: $nodeId) {\n                ... on Market {\n                  baseAsset {\n                    ... on AssetCrypto {\n                      marketCap {\n                        format\n                      }\n                      marketCapRank\n                    }\n                  }\n                  ticker {\n                    volumeQuote24h {\n                      format(fiatSymbol: $fiatSymbol)\n                    }\n                    changeDirection\n                    pricePercent24h {\n                      format\n                    }\n                    price24h {\n                      format(fiatSymbol: $fiatSymbol)\n                    }\n                    lastPrice {\n                      format(fiatSymbol: $fiatSymbol)\n                    }\n                  }\n                  candles(timeWindow: $timeWindow, from: $from) {\n                    edges {\n                      node {\n                        close {\n                          value\n                        }\n                        time\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          ",variables:{nodeId:t,timeWindow:"ONE_DAY",fiatSymbol:!0,from:r.toISOString()},operationName:"MarketingBuyPageOverview"})});if(i.errors)throw Error(JSON.stringify(i.errors));return{volumeQuote24h:i.data.node.ticker.volumeQuote24h.format,changeDirection:i.data.node.ticker.changeDirection,pricePercent24h:i.data.node.ticker.pricePercent24h.format,price24h:i.data.node.ticker.price24h.format,lastPrice:i.data.node.ticker.lastPrice.format,chartData:i.data.node.candles.edges.map(e=>{let{node:t}=e,n={value:Number(t.close.value),time:new Date(t.time).getTime()/1e3};return Object.keys(n).forEach(e=>{if(!n[e])throw Error("".concat(n[e]," is null"))}),n}).sort((e,t)=>e.time-t.time),globalRank:i.data.node.baseAsset.marketCapRank,marketCap:null===(e=i.data.node.baseAsset.marketCap)||void 0===e?void 0:e.format,fromDate:r,toDate:new Date}},{refetchOnWindowFocus:!1,refetchOnReconnect:!1});return(0,r.jsx)(b,{...n,loading:i,volumeQuote24h:a.volumeQuote24h,changeDirection:a.changeDirection,pricePercent24h:a.pricePercent24h,price24h:a.price24h,lastPrice:a.lastPrice,chartData:a.chartData,globalRank:a.globalRank,marketCap:a.marketCap,fromDate:a.fromDate,toDate:a.toDate})},k=n(3001),w=n(2370),C=n(1491),S=n(3803),_=n.n(S),P=n(6011),R=n(7579),O=n(448),Z=n(9259),T=n(8173),M=n(2958),q=n(4931),D=n(6592),I=n(6250),A=e=>{let{children:t,...n}=e;return(0,r.jsx)("div",{...n,css:{marginTop:3,display:"flex",justifyContent:"center",gap:4,height:"6.4rem",backgroundColor:"white",alignItems:"center",[_()]:{backgroundColor:"zinc.800"}},children:t})};let E=e=>(0,r.jsx)(I.Z,{unstyled:!0,...e}),L=e=>{let{active:t,...n}=e;return(0,r.jsx)(p.default,{...n,as:E,variant:"medium",bold:t,css:[{padding:2,borderWidth:0,lineHeight:1},t&&{textDecorationLine:"underline",textDecorationColor:"zinc.300",textDecorationThickness:2,textUnderlineOffset:6,[_()]:{textDecorationColor:"zinc.600"}}]})};L.propTypes={active:f().bool.isRequired};var B=n(6241),N=n(7060),W=n(2973),z=e=>(0,r.jsxs)("svg",{...e,css:{width:"24px",height:"24px",verticalAlign:"middle"},viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"})]});let H=e=>{let{marketId:t,articles:n,quoteAssetName:i,assetName:a,assetFullName:s,icon:o,faq:l,info:c,AssetMarketSection:d,marketPair:u,slug:f,pathname:h,allAssets:m,buyWhyBuyDescription:g,buyWhyBuyInfo:x}=e;return(0,r.jsxs)(D.Z,{header:(0,r.jsxs)(M.Z,{children:[n.length&&(0,r.jsxs)(A,{children:[(0,r.jsxs)(L,{href:"/buy/".concat(f),active:"/buy/".concat(f)===h,children:["Buy ",s]}),(0,r.jsxs)(L,{href:"/blog/".concat(f),active:"/blog/".concat(f)===h,children:[s," News"]})]}),(0,r.jsx)(N.Z,{align:"left",css:{paddingTop:5,paddingBottom:4},children:(0,r.jsxs)(w.default,{as:"h1",variant:"h3",css:{display:"flex",alignItems:"center",gap:2},children:[(0,r.jsx)(q.Z,{width:"26",height:"26",src:o,alt:s}),"Buy ",s]})})]}),children:[(0,r.jsx)(N.Z,{align:"left",children:(0,r.jsx)(O.Z,{fallback:(0,r.jsx)(k.Z,{css:{padding:7}}),children:(0,r.jsx)(d,{marketId:t,marketPair:u,quoteAssetName:i})})}),(0,r.jsx)(W.Z,{assetFullName:s}),g&&x.length&&(0,r.jsxs)(N.Z,{css:{padding:"5 3",textAlign:"center",color:"zinc.900",[_()]:{color:"zinc.100"}},children:[(0,r.jsxs)(w.default,{as:"h2",children:["Why buy ",s," (",a,")?"]}),(0,r.jsx)(C.Z,{variant:"medium",css:{color:"zinc.500",[_()]:{color:"zinc.400"}},children:g}),(0,r.jsx)("ul",{css:{maxWidth:"1024px",padding:0,margin:"4 0 0 0",textAlign:"left",display:"grid",gridTemplateColumns:["none","repeat(2, 1fr)"],gridColumnGap:5,gridRowGap:4,"> li":{display:"flex",listStyle:"none"}},children:x.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(z,{})}),(0,r.jsx)(C.Z,{variant:"medium",css:{marginLeft:2,flex:1},children:e.description})]},e.description))})]}),c&&(0,r.jsx)(N.Z,{align:"left",backgroundStyle:"gradient",css:{paddingTop:5,paddingBottom:4},children:(0,r.jsx)("div",{css:{display:"flex",flexWrap:"wrap"},children:c.map(e=>{let{description:t,title:n}=e;return(0,r.jsx)(T.Z,{titleClosed:"Keep reading",titleOpen:"Read less",css:{width:["100%",,,"50%"],marginBottom:5,paddingRight:4},children:(0,r.jsxs)("article",{children:[(0,r.jsx)(w.default,{as:"h4",children:n}),(0,r.jsx)(B.Z,{blocks:t,size:"medium"})]})},n)})})}),l&&(0,r.jsxs)(N.Z,{align:"left",backgroundStyle:"solid",css:{paddingTop:5,paddingBottom:4},children:[(0,r.jsx)(w.default,{as:"h2",children:"Frequently asked questions"}),l.map(e=>{let{answer:t,question:n}=e;return(0,r.jsx)(Z.Z,{title:n,children:(0,r.jsx)(B.Z,{blocks:t,size:"medium"})},n)})]}),n.length&&(0,r.jsx)(R.Z,{heading:"Find out the latest ".concat(s," news"),articles:n,linkHref:3===n.length?"/blog/".concat(s.toLowerCase()):null,linkTitle:3===n.length?"Check out more ".concat(s," blog posts."):null}),(0,r.jsxs)(N.Z,{css:{marginTop:6},children:[(0,r.jsx)(w.default,{as:"h2",children:"Quick Buy"}),(0,r.jsx)("ul",{css:{margin:0,padding:0,display:"flex",flexDirection:"row",flexWrap:"wrap","> li":{listStyle:"none",display:"flex",alignItems:"center",width:["50%","50%","25%"],padding:"3 0"}},children:null==m?void 0:m.filter(e=>e.slug).map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(q.Z,{width:"32",height:"32",src:e.icon.svg,alt:"".concat(e.assetFullName," (").concat(e.assetName,")")}),(0,r.jsxs)("div",{css:{padding:"0 3"},children:[(0,r.jsx)(w.default,{as:"h5",css:{marginBottom:1},children:e.assetFullName}),(0,r.jsx)(p.default,{variant:"small",children:(0,r.jsxs)(I.Z,{href:"/buy/".concat(e.slug),children:["Buy ",e.assetName]})})]})]},e.slug))})]}),(0,r.jsx)(P.Z,{})]})};H.propTypes={articles:f().array.isRequired,assetName:f().string.isRequired,assetFullName:f().string.isRequired,faq:f().array,icon:f().string.isRequired,info:f().array,marketId:f().string.isRequired,marketPair:f().string.isRequired,slug:f().string.isRequired,pathname:f().string.isRequired,allAssets:f().array,buyWhyBuyDescription:f().string,buyWhyBuyInfo:f().array};var F=!0;function G(e){let{marketId:t,metaDescription:n,articles:o,assetFullName:l,assetName:c,quoteAssetName:d,icon:u,faq:f,info:p,marketPair:h,slug:m,allAssets:g,buyWhyBuyDescription:x,buyWhyBuyInfo:y}=e,j=(0,i.usePathname)(),b="Buy ".concat(l," (").concat(c,") in Australia - Trade with Confidence"),k=n&&n.length?n:"Buy ".concat(l," (").concat(c,") on BTC Markets, Australia's fastest & most secure cryptocurrency exchange. Low fees, fast transactions & 100% Australian owned.");return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(a.PB,{title:b,description:k,canonical:"https://www.btcmarkets.net/buy/".concat(m),openGraph:{title:b,description:k}}),(0,r.jsx)(H,{marketId:t,marketPair:h,articles:o,assetName:c,assetFullName:l,quoteAssetName:d,icon:u,faq:f,info:p,AssetMarketSection:v,slug:m,pathname:j,allAssets:g,buyWhyBuyDescription:x,buyWhyBuyInfo:y})]})}},9332:function(e,t,n){e.exports=n(1414)}},function(e){e.O(0,[772,193,416,863,135,647,207,774,888,179],function(){return e(e.s=9405)}),_N_E=e.O()}]);
//# sourceMappingURL=[slug]-69d810d19965fe6c.js.map