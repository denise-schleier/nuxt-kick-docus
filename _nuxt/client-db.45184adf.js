import{a9 as P,aF as F,aG as j,aH as $,aI as q,aJ as z,aK as R,aL as S,aM as E,ah as J,l as x,aN as H,aa as W,ar as Q,j as U}from"./entry.1099917c.js";import{b as V}from"./path-meta.dd5cc16b.js";const G="memory",X=()=>{const r=new Map;return{name:G,options:{},hasItem(e){return r.has(e)},getItem(e){return r.get(e)||null},getItemRaw(e){return r.get(e)||null},setItem(e,n){r.set(e,n)},setItemRaw(e,n){r.set(e,n)},removeItem(e){r.delete(e)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function Y(r){return!r||typeof r.then!="function"?Promise.resolve(r):r}function h(r,...e){try{return Y(r(...e))}catch(n){return Promise.reject(n)}}function Z(r){const e=typeof r;return r===null||e!=="object"&&e!=="function"}function b(r){const e=Object.getPrototypeOf(r);return!e||e.isPrototypeOf(Object)}function M(r){if(Z(r))return String(r);if(b(r)||Array.isArray(r))return JSON.stringify(r);if(typeof r.toJSON=="function")return M(r.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function N(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const O="base64:";function k(r){if(typeof r=="string")return r;N();const e=Buffer.from(r).toString("base64");return O+e}function tt(r){return typeof r!="string"||!r.startsWith(O)?r:(N(),Buffer.from(r.slice(O.length),"base64"))}const et=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function rt(r,e){if(e=_(e),!e)return r;const n={...r};for(const s of et)n[s]=(l="",...u)=>r[s](e+l,...u);return n.getKeys=(s="",...l)=>r.getKeys(e+s,...l).then(u=>u.map(c=>c.slice(e.length))),n}function y(r){return r?r.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function nt(...r){return y(r.join(":"))}function _(r){return r=y(r),r?r+":":""}const it="memory",st=()=>{const r=new Map;return{name:it,options:{},hasItem(e){return r.has(e)},getItem(e){return r.get(e)||null},getItemRaw(e){return r.get(e)||null},setItem(e,n){r.set(e,n)},setItemRaw(e,n){r.set(e,n)},removeItem(e){r.delete(e)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function at(r={}){const e={mounts:{"":r.driver||st()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=t=>{for(const i of e.mountpoints)if(t.startsWith(i))return{base:i,relativeKey:t.slice(i.length),driver:e.mounts[i]};return{base:"",relativeKey:t,driver:e.mounts[""]}},s=(t,i)=>e.mountpoints.filter(a=>a.startsWith(t)||i&&t.startsWith(a)).map(a=>({relativeBase:t.length>a.length?t.slice(a.length):void 0,mountpoint:a,driver:e.mounts[a]})),l=(t,i)=>{if(e.watching){i=y(i);for(const a of e.watchListeners)a(t,i)}},u=async()=>{if(!e.watching){e.watching=!0;for(const t in e.mounts)e.unwatch[t]=await L(e.mounts[t],l,t)}},c=async()=>{if(e.watching){for(const t in e.unwatch)await e.unwatch[t]();e.unwatch={},e.watching=!1}},g=(t,i,a)=>{const o=new Map,f=m=>{let d=o.get(m.base);return d||(d={driver:m.driver,base:m.base,items:[]},o.set(m.base,d)),d};for(const m of t){const d=typeof m=="string",v=y(d?m:m.key),w=d?void 0:m.value,I=d||!m.options?i:{...i,...m.options},K=n(v);f(K).items.push({key:v,value:w,relativeKey:K.relativeKey,options:I})}return Promise.all([...o.values()].map(m=>a(m))).then(m=>m.flat())},p={hasItem(t,i={}){t=y(t);const{relativeKey:a,driver:o}=n(t);return h(o.hasItem,a,i)},getItem(t,i={}){t=y(t);const{relativeKey:a,driver:o}=n(t);return h(o.getItem,a,i).then(f=>P(f))},getItems(t,i){return g(t,i,a=>a.driver.getItems?h(a.driver.getItems,a.items.map(o=>({key:o.relativeKey,options:o.options})),i).then(o=>o.map(f=>({key:nt(a.base,f.key),value:P(f.value)}))):Promise.all(a.items.map(o=>h(a.driver.getItem,o.relativeKey,o.options).then(f=>({key:o.key,value:P(f)})))))},getItemRaw(t,i={}){t=y(t);const{relativeKey:a,driver:o}=n(t);return o.getItemRaw?h(o.getItemRaw,a,i):h(o.getItem,a,i).then(f=>tt(f))},async setItem(t,i,a={}){if(i===void 0)return p.removeItem(t);t=y(t);const{relativeKey:o,driver:f}=n(t);f.setItem&&(await h(f.setItem,o,M(i),a),f.watch||l("update",t))},async setItems(t,i){await g(t,i,async a=>{a.driver.setItems&&await h(a.driver.setItems,a.items.map(o=>({key:o.relativeKey,value:M(o.value),options:o.options})),i),a.driver.setItem&&await Promise.all(a.items.map(o=>h(a.driver.setItem,o.relativeKey,M(o.value),o.options)))})},async setItemRaw(t,i,a={}){if(i===void 0)return p.removeItem(t,a);t=y(t);const{relativeKey:o,driver:f}=n(t);if(f.setItemRaw)await h(f.setItemRaw,o,i,a);else if(f.setItem)await h(f.setItem,o,k(i),a);else return;f.watch||l("update",t)},async removeItem(t,i={}){typeof i=="boolean"&&(i={removeMeta:i}),t=y(t);const{relativeKey:a,driver:o}=n(t);o.removeItem&&(await h(o.removeItem,a,i),(i.removeMeta||i.removeMata)&&await h(o.removeItem,a+"$",i),o.watch||l("remove",t))},async getMeta(t,i={}){typeof i=="boolean"&&(i={nativeOnly:i}),t=y(t);const{relativeKey:a,driver:o}=n(t),f=Object.create(null);if(o.getMeta&&Object.assign(f,await h(o.getMeta,a,i)),!i.nativeOnly){const m=await h(o.getItem,a+"$",i).then(d=>P(d));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(f,m))}return f},setMeta(t,i,a={}){return this.setItem(t+"$",i,a)},removeMeta(t,i={}){return this.removeItem(t+"$",i)},async getKeys(t,i={}){t=_(t);const a=s(t,!0);let o=[];const f=[];for(const m of a){const v=(await h(m.driver.getKeys,m.relativeBase,i)).map(w=>m.mountpoint+y(w)).filter(w=>!o.some(I=>w.startsWith(I)));f.push(...v),o=[m.mountpoint,...o.filter(w=>!w.startsWith(m.mountpoint))]}return t?f.filter(m=>m.startsWith(t)&&!m.endsWith("$")):f.filter(m=>!m.endsWith("$"))},async clear(t,i={}){t=_(t),await Promise.all(s(t,!1).map(async a=>{if(a.driver.clear)return h(a.driver.clear,a.relativeBase,i);if(a.driver.removeItem){const o=await a.driver.getKeys(a.relativeBase||"",i);return Promise.all(o.map(f=>a.driver.removeItem(f,i)))}}))},async dispose(){await Promise.all(Object.values(e.mounts).map(t=>B(t)))},async watch(t){return await u(),e.watchListeners.push(t),async()=>{e.watchListeners=e.watchListeners.filter(i=>i!==t),e.watchListeners.length===0&&await c()}},async unwatch(){e.watchListeners=[],await c()},mount(t,i){if(t=_(t),t&&e.mounts[t])throw new Error(`already mounted at ${t}`);return t&&(e.mountpoints.push(t),e.mountpoints.sort((a,o)=>o.length-a.length)),e.mounts[t]=i,e.watching&&Promise.resolve(L(i,l,t)).then(a=>{e.unwatch[t]=a}).catch(console.error),p},async unmount(t,i=!0){t=_(t),!(!t||!e.mounts[t])&&(e.watching&&t in e.unwatch&&(e.unwatch[t](),delete e.unwatch[t]),i&&await B(e.mounts[t]),e.mountpoints=e.mountpoints.filter(a=>a!==t),delete e.mounts[t])},getMount(t=""){t=y(t)+":";const i=n(t);return{driver:i.driver,base:i.base}},getMounts(t="",i={}){return t=y(t),s(t,i.parents).map(o=>({driver:o.driver,base:o.mountpoint}))}};return p}function L(r,e,n){return r.watch?r.watch((s,l)=>e(s,n+l)):()=>{}}async function B(r){typeof r.dispose=="function"&&await h(r.dispose)}function ot(r={}){const e=ut(n,r.operators);function n(s,l){return typeof l!="object"||l instanceof RegExp?e.$eq(s,l):Object.keys(l||{}).every(u=>{const c=l[u];if(u.startsWith("$")&&e[u]){const g=e[u];return typeof g=="function"?g(s,c):!1}return n(F(s,u),c)})}return n}function ut(r,e={}){return{$match:(n,s)=>r(n,s),$eq:(n,s)=>s instanceof RegExp?s.test(n):n===s,$ne:(n,s)=>s instanceof RegExp?!s.test(n):n!==s,$not:(n,s)=>!r(n,s),$and:(n,s)=>(j(s,"$and requires an array as condition"),s.every(l=>r(n,l))),$or:(n,s)=>(j(s,"$or requires an array as condition"),s.some(l=>r(n,l))),$in:(n,s)=>$(s).some(l=>Array.isArray(n)?r(n,{$contains:l}):r(n,l)),$contains:(n,s)=>(n=Array.isArray(n)?n:String(n),$(s).every(l=>n.includes(l))),$icontains:(n,s)=>{if(typeof s!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),$(s).every(l=>n.includes(l.toLocaleLowerCase()))},$containsAny:(n,s)=>(j(s,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),s.some(l=>n.includes(l))),$exists:(n,s)=>s?typeof n<"u":typeof n>"u",$type:(n,s)=>typeof n===String(s),$regex:(n,s)=>{if(!(s instanceof RegExp)){const l=String(s).match(/\/(.*)\/([dgimsuy]*)$/);s=l?new RegExp(l[1],l[2]||""):new RegExp(s)}return s.test(String(n||""))},$lt:(n,s)=>n<s,$lte:(n,s)=>n<=s,$gt:(n,s)=>n>s,$gte:(n,s)=>n>=s,...e||{}}}function ct(r){const e=ot(),n=(u,{query:c,before:g,after:p})=>{const t=typeof c=="string"?{_path:c}:c,i=u.findIndex(o=>e(o,t));g=g??1,p=p??1;const a=new Array(g+p).fill(null,0);return i===-1?a:a.map((o,f)=>u[i-g+f+ +(f>=g)]||null)},s=[(u,c)=>{const g=u.result.filter(p=>$(c.where).every(t=>e(p,t)));return{...u,result:g,total:g.length}},(u,c)=>$(c.sort).forEach(g=>z(u.result,g)),function(c,g,p){var t;if(g.surround){let i=n(((t=c.result)==null?void 0:t.length)===1?p:c.result,g.surround);i=R(S(g.without))(i),i=R(E(g.only))(i),c.surround=i}return c}],l=[(u,c)=>{if(c.skip)return{...u,result:u.result.slice(c.skip),skip:c.skip}},(u,c)=>{if(c.limit)return{...u,result:u.result.slice(0,c.limit),limit:c.limit}},function(c,g,p){var t,i,a;if(g.dirConfig){const o=((t=c.result[0])==null?void 0:t._path)||((a=(i=g.where)==null?void 0:i.find(f=>f._path))==null?void 0:a._path);if(typeof o=="string"){const f=p.find(m=>m._path===J(o,"_dir"));f&&(c.dirConfig={_path:f._path,...S(["_"])(f)})}}return c},(u,c)=>({...u,result:R(S(c.without))(u.result)}),(u,c)=>({...u,result:R(E(c.only))(u.result)})];return async u=>{const c=await r(),g=u.params(),p={result:c,limit:0,skip:0,total:c.length},t=s.reduce((a,o)=>o(a,g,c)||a,p);if(g.count)return{result:t.result.length};const i=l.reduce((a,o)=>o(a,g,c)||a,t);return g.first?{...q(["skip","limit","total"])(i),result:i.result[0]}:i}}function D(r){const e=ct(r);return async n=>{var u;const s=n.params(),l=await e(n);return s.surround?l==null?void 0:l.surround:(l!=null&&l.dirConfig&&(l.result={_path:(u=l.dirConfig)==null?void 0:u._path,...l.result,_dir:l.dirConfig}),l==null?void 0:l.result)}}function lt(r,e){const{navigation:n}=x().public.content,s=u=>({...mt(["title",...n.fields])(u),...gt(u==null?void 0:u.navigation)?u.navigation:{}}),l=r.sort((u,c)=>u._path.localeCompare(c._path)).reduce((u,c)=>{const g=c._path.substring(1).split("/"),p=c._id.split(":").slice(1),t=!!p[p.length-1].match(/([1-9][0-9]*\.)?index.md/g),i=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...s(f),...f._draft?{_draft:!0}:{}}),a=i(c);if(t){const f=e[a._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return u;if(c._path!=="/"){const m=i(c);a.children.push(m)}Object.assign(a,s(f))}return g.length===1?(u.push(a),u):(g.slice(0,-1).reduce((f,m,d)=>{const v="/"+g.slice(0,d+1).join("/"),w=e[v];if(typeof(w==null?void 0:w.navigation)<"u"&&!w.navigation)return[];let I=f.find(K=>K._path===v);return I||(I={title:V(m),_path:v,_file:c._file,children:[],...s(w)},f.push(I)),I.children},u).push(a),u)},[]);return T(l)}const ft=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function T(r){var n;const e=r.sort((s,l)=>ft.compare(s._file,l._file));for(const s of e)(n=s.children)!=null&&n.length?T(s.children):delete s.children,delete s._file;return r}function mt(r){return e=>(e=e||{},r&&r.length?r.filter(n=>typeof e[n]<"u").reduce((n,s)=>Object.assign(n,{[s]:e[s]}),{}):e)}function gt(r){return Object.prototype.toString.call(r)==="[object Object]"}const pt=r=>Q(r,x().public.content.api.baseURL),ht=rt(at({driver:X()}),"@content");function yt(r){async function e(){const n=new Set(await r.getKeys("cache:")),s=W().getPreviewToken();if(s){const u=await r.getItem(`${s}$`).then(p=>p||{});if(Array.isArray(u.ignoreSources)){const p=u.ignoreSources.map(t=>`cache:${t.trim()}:`);for(const t of n)p.some(i=>t.startsWith(i))&&n.delete(t)}const c=await r.getKeys(`${s}:`),g=await Promise.all(c.map(p=>r.getItem(p)));for(const p of g)n.delete(`cache:${p._id}`),p.__deleted||n.add(`${s}:${p._id}`)}return await Promise.all(Array.from(n).map(u=>r.getItem(u)))}return{storage:r,fetch:D(e),query:n=>H(D(e),{initialParams:n,legacy:!0})}}let C=null,A=null;async function dt(){return A?await A:C||(A=wt(),C=await A),C}async function wt(){const r=U(),{content:e}=x().public,n=yt(ht),s=await n.storage.getItem("integrity");if(e.integrity!==+(s||0)){const{contents:l,navigation:u}=await $fetch(pt(e.integrity?`cache.${e.integrity}.json`:"cache.json"));await Promise.all(l.map(c=>n.storage.setItem(`cache:${c._id}`,c))),await n.storage.setItem("navigation",u),await n.storage.setItem("integrity",e.integrity)}return await r.callHook("content:storage",n.storage),n}async function _t(r){const e=await dt();if(!W().getPreviewToken()&&Object.keys(r||{}).length===0)return e.storage.getItem("navigation");const n=await e.query(r).where({_partial:!1,navigation:{$ne:!1}}).find(),l=(await e.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,c)=>{var p;((p=c.title)==null?void 0:p.toLowerCase())==="dir"&&(c.title=void 0);const g=c._path.split("/").slice(0,-1).join("/")||"/";return u[g]={...c,...c.body},u},{});return lt(n,l)}export{ht as contentStorage,yt as createDB,_t as generateNavigation,dt as useContentDatabase};
