import{s as qe,p as Be,C as Ne,u as Te,v as De,G as ze,f,a as T,g as d,h as S,w as $,c as D,d as h,j as c,H as ye,I as Je,i as E,y as r,J as Oe,x as ge,K as Ye,r as Ee,l as _e,m as he,n as ve,e as Ke,o as st,L as rt}from"../chunks/scheduler.fd84be43.js";import{S as Ue,i as He,f as Re,b as Ce,d as ke,m as we,a as Z,t as oe,e as Me,c as Le,g as Ie}from"../chunks/index.681d7507.js";import{G as Ve,e as $e,u as it,g as ut,o as ft}from"../chunks/globalModal.36f546f4.js";import{c as Pe,d as Ae,e as Se,I as Fe,g as dt,a as ct}from"../chunks/navigation.bb76d6ea.js";import{P as je}from"../chunks/public.7ee89064.js";function _t(s){let e,t,l;return{c(){e=f("input"),l=f("br"),this.h()},l(a){e=d(a,"INPUT",{class:!0,type:!0,id:!0,name:!0}),l=d(a,"BR",{}),this.h()},h(){var a;c(e,"class","form-input"),c(e,"type","text"),c(e,"id","full_name"),c(e,"name","fullname"),e.value=t=(a=s[1])==null?void 0:a.full_name,e.disabled=!1},m(a,o){E(a,e,o),E(a,l,o)},p(a,o){var n;o&2&&t!==(t=(n=a[1])==null?void 0:n.full_name)&&e.value!==t&&(e.value=t)},d(a){a&&(h(e),h(l))}}}function ht(s){let e,t,l;return{c(){e=f("input"),l=f("br"),this.h()},l(a){e=d(a,"INPUT",{class:!0,type:!0,id:!0,name:!0}),l=d(a,"BR",{}),this.h()},h(){var a;c(e,"class","form-input"),c(e,"type","text"),c(e,"id","full_name"),c(e,"name","fullname"),e.value=t=(a=s[1])==null?void 0:a.full_name,e.disabled=!0},m(a,o){E(a,e,o),E(a,l,o)},p(a,o){var n;o&2&&t!==(t=(n=a[1])==null?void 0:n.full_name)&&e.value!==t&&(e.value=t)},d(a){a&&(h(e),h(l))}}}function Qe(s){let e,t,l,a;return{c(){e=f("br"),t=T(),l=f("p"),a=_e(s[2]),this.h()},l(o){e=d(o,"BR",{}),t=D(o),l=d(o,"P",{class:!0});var n=S(l);a=he(n,s[2]),n.forEach(h),this.h()},h(){c(l,"class","text-red-500 font-bold")},m(o,n){E(o,e,n),E(o,t,n),E(o,l,n),r(l,a)},p(o,n){n&4&&ve(a,o[2])},d(o){o&&(h(e),h(t),h(l))}}}function pt(s){let e,t,l="Description:",a,o,n,i,u,v,R="*Start Date:",g,m,x,O,_,p,y="*End Date:",k,w,F,C,V,q,se="TimeOfDay:",ee,A,j,U="N/A",B,N="Morning",b,I="Afternoon",J,G,K="*Fullname:",ne,ue,fe,me,ce,te,de,re,ie="Create",be,pe;function H(z,M){var W;return((W=z[1])==null?void 0:W.role_name)==="User"?ht:_t}let L=H(s),ae=L(s),Q=s[2]&&Qe(s);return{c(){e=f("form"),t=f("label"),t.textContent=l,a=f("br"),o=T(),n=f("input"),i=f("br"),u=T(),v=f("label"),v.textContent=R,g=f("br"),m=T(),x=f("input"),O=f("br"),_=T(),p=f("label"),p.textContent=y,k=f("br"),w=T(),F=f("input"),C=f("br"),V=T(),q=f("label"),q.textContent=se,ee=T(),A=f("select"),j=f("option"),j.textContent=U,B=f("option"),B.textContent=N,b=f("option"),b.textContent=I,J=T(),G=f("label"),G.textContent=K,ne=f("br"),ue=T(),ae.c(),fe=T(),Q&&Q.c(),me=T(),ce=f("br"),te=T(),de=f("div"),re=f("button"),re.textContent=ie,this.h()},l(z){e=d(z,"FORM",{class:!0});var M=S(e);t=d(M,"LABEL",{for:!0,"data-svelte-h":!0}),$(t)!=="svelte-10pq9m4"&&(t.textContent=l),a=d(M,"BR",{}),o=D(M),n=d(M,"INPUT",{class:!0,type:!0,id:!0,name:!0}),i=d(M,"BR",{}),u=D(M),v=d(M,"LABEL",{for:!0,"data-svelte-h":!0}),$(v)!=="svelte-1f2kpm3"&&(v.textContent=R),g=d(M,"BR",{}),m=D(M),x=d(M,"INPUT",{class:!0,type:!0,id:!0,name:!0,min:!0}),O=d(M,"BR",{}),_=D(M),p=d(M,"LABEL",{for:!0,"data-svelte-h":!0}),$(p)!=="svelte-urgbfl"&&(p.textContent=y),k=d(M,"BR",{}),w=D(M),F=d(M,"INPUT",{class:!0,type:!0,id:!0,name:!0,min:!0}),C=d(M,"BR",{}),V=D(M),q=d(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),$(q)!=="svelte-hfsuet"&&(q.textContent=se),ee=D(M),A=d(M,"SELECT",{class:!0});var W=S(A);j=d(W,"OPTION",{"data-svelte-h":!0}),$(j)!=="svelte-1vm96zp"&&(j.textContent=U),B=d(W,"OPTION",{"data-svelte-h":!0}),$(B)!=="svelte-o243pu"&&(B.textContent=N),b=d(W,"OPTION",{"data-svelte-h":!0}),$(b)!=="svelte-1mey1rx"&&(b.textContent=I),W.forEach(h),J=D(M),G=d(M,"LABEL",{for:!0,"data-svelte-h":!0}),$(G)!=="svelte-v5eqky"&&(G.textContent=K),ne=d(M,"BR",{}),ue=D(M),ae.l(M),fe=D(M),Q&&Q.l(M),M.forEach(h),me=D(z),ce=d(z,"BR",{}),te=D(z),de=d(z,"DIV",{class:!0});var Y=S(de);re=d(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),$(re)!=="svelte-kms3zp"&&(re.textContent=ie),Y.forEach(h),this.h()},h(){c(t,"for","Description"),c(n,"class","form-input"),c(n,"type","text"),c(n,"id","description"),c(n,"name","Description"),c(v,"for","start_date"),c(x,"class","form-input"),c(x,"type","date"),c(x,"id","start_date"),c(x,"name","start_date"),c(x,"min","2000-01-02"),c(p,"for","end_date"),c(F,"class","form-input"),c(F,"type","date"),c(F,"id","end_date"),c(F,"name","end_date"),c(F,"min","2000-01-02"),c(q,"for","timeOfDay"),c(q,"class","block text-sm font-medium text-gray-900 dark:text-white"),j.__value=null,ye(j,j.__value),B.__value="AM",ye(B,B.__value),b.__value="PM",ye(b,b.__value),c(A,"class","selectorDropdown"),s[3]===void 0&&Je(()=>s[5].call(A)),c(G,"for","fullname"),c(e,"class","text-black dark:text-white"),c(re,"class","createOrUpdateSubmitButton"),c(de,"class","flex flex-col")},m(z,M){E(z,e,M),r(e,t),r(e,a),r(e,o),r(e,n),r(e,i),r(e,u),r(e,v),r(e,g),r(e,m),r(e,x),r(e,O),r(e,_),r(e,p),r(e,k),r(e,w),r(e,F),r(e,C),r(e,V),r(e,q),r(e,ee),r(e,A),r(A,j),r(A,B),r(A,b),Oe(A,s[3],!0),r(e,J),r(e,G),r(e,ne),r(e,ue),ae.m(e,null),r(e,fe),Q&&Q.m(e,null),E(z,me,M),E(z,ce,M),E(z,te,M),E(z,de,M),r(de,re),be||(pe=[ge(A,"change",s[5]),ge(re,"click",s[6])],be=!0)},p(z,M){M&8&&Oe(A,z[3]),L===(L=H(z))&&ae?ae.p(z,M):(ae.d(1),ae=L(z),ae&&(ae.c(),ae.m(e,fe))),z[2]?Q?Q.p(z,M):(Q=Qe(z),Q.c(),Q.m(e,null)):Q&&(Q.d(1),Q=null)},d(z){z&&(h(e),h(me),h(ce),h(te),h(de)),ae.d(),Q&&Q.d(),be=!1,Ye(pe)}}}function mt(s){let e,t="Creating Holiday Request";return{c(){e=f("h1"),e.textContent=t,this.h()},l(l){e=d(l,"H1",{class:!0,slot:!0,"data-svelte-h":!0}),$(e)!=="svelte-o5b83"&&(e.textContent=t),this.h()},h(){c(e,"class","text-black dark:text-white"),c(e,"slot","header")},m(l,a){E(l,e,a)},p:Ee,d(l){l&&h(e)}}}function bt(s){let e,t,l;function a(n){s[7](n)}let o={$$slots:{header:[mt],default:[pt]},$$scope:{ctx:s}};return s[0]!==void 0&&(o.showModal=s[0]),e=new Ve({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,[i]){const u={};i&526&&(u.$$scope={dirty:i,ctx:n}),!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function vt(s,e,t){let l;Te(s,Pe,m=>t(8,l=m));const a={};if(typeof sessionStorage<"u"){const m=sessionStorage.getItem("userLoggedIn");if(m!==null)for(const[x,O]of Object.entries(JSON.parse(m)))a[x]=O}let{showModal:o=!1}=e,n="",i=null;async function u(){try{let m=document.querySelectorAll(".form-input"),x={};x.id=null,m.forEach(_=>{x[_.id]=_.value}),delete x.full_name,x.user_id=a==null?void 0:a.id,x.team_name=a==null?void 0:a.team_name,x.approved=null;const O=await fetch(`${je}/holiday-request`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(x)});if(O.ok)t(0,o=!1),De(Pe,l=!1,l),t(2,n="");else throw O.status===422?t(2,n="Please fill in all fields correctly!"):t(2,n=`Status: ${O.status} `),new Error(n)}catch(m){throw console.error(m),m}}function v(){i=ze(this),t(3,i)}const R=()=>u();function g(m){o=m,t(0,o)}return s.$$set=m=>{"showModal"in m&&t(0,o=m.showModal)},[o,a,n,i,u,v,R,g]}class yt extends Ue{constructor(e){super(),He(this,e,vt,bt,qe,{showModal:0})}}function We(s){let e,t;return{c(){e=f("p"),t=_e(s[1]),this.h()},l(l){e=d(l,"P",{class:!0});var a=S(e);t=he(a,s[1]),a.forEach(h),this.h()},h(){c(e,"class","font-bold text-red-600 dark:text-red-400 text-center")},m(l,a){E(l,e,a),r(e,t)},p(l,a){a&2&&ve(t,l[1])},d(l){l&&h(e)}}}function gt(s){let e,t,l,a="Delete User",o,n,i=s[1]&&We(s);return{c(){i&&i.c(),e=T(),t=f("div"),l=f("button"),l.textContent=a,this.h()},l(u){i&&i.l(u),e=D(u),t=d(u,"DIV",{class:!0});var v=S(t);l=d(v,"BUTTON",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-s4kb8e"&&(l.textContent=a),v.forEach(h),this.h()},h(){c(l,"class","text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"),c(t,"class","flex flex-col mt-2")},m(u,v){i&&i.m(u,v),E(u,e,v),E(u,t,v),r(t,l),o||(n=ge(l,"click",s[4]),o=!0)},p(u,v){u[1]?i?i.p(u,v):(i=We(u),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},d(u){u&&(h(e),h(t)),i&&i.d(u),o=!1,n()}}}function Ct(s){let e,t="Please confirm you wish to delete this Holiday from the system.";return{c(){e=f("h2"),e.textContent=t,this.h()},l(l){e=d(l,"H2",{class:!0,slot:!0,"data-svelte-h":!0}),$(e)!=="svelte-67zrq3"&&(e.textContent=t),this.h()},h(){c(e,"class","text-black dark:text-white"),c(e,"slot","header")},m(l,a){E(l,e,a)},p:Ee,d(l){l&&h(e)}}}function kt(s){let e,t,l;function a(n){s[5](n)}let o={$$slots:{header:[Ct],default:[gt]},$$scope:{ctx:s}};return s[0]!==void 0&&(o.showModal=s[0]),e=new Ve({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,[i]){const u={};i&258&&(u.$$scope={dirty:i,ctx:n}),!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function wt(s,e,t){let l;Te(s,Ae,g=>t(7,l=g));let{showModal:a=!1}=e,{holidayData:o}=e,n="";const i={};if(typeof sessionStorage<"u"){const g=sessionStorage.getItem("userLoggedIn");if(g!==null)for(const[m,x]of Object.entries(JSON.parse(g)))i[m]=x}async function u(){if(i.role_name==="User"&&o.approved===!0){t(1,n="You cannot delete an approved holiday request.");return}if(i.role_name==="Admin"&&o.approved===!0&&i.id===o.user_id){t(1,n="You cannot delete an approved holiday request.");return}try{const g=await fetch(`${je}/holiday-request?holiday_id=`+o.id,{method:"DELETE"});if(g.ok)t(0,a=!1),De(Ae,l=!1,l);else throw t(1,n=`Status: ${g.status} Detail: ${g.statusText}`),new Error(`Failed to send data. Status: ${g.status}`)}catch(g){throw console.error(g),g}}const v=()=>u();function R(g){a=g,t(0,a)}return s.$$set=g=>{"showModal"in g&&t(0,a=g.showModal),"holidayData"in g&&t(3,o=g.holidayData)},[a,n,u,o,v,R]}class Mt extends Ue{constructor(e){super(),He(this,e,wt,kt,qe,{showModal:0,holidayData:3})}}function xt(s){let e,t,l,a,o,n="Status:",i,u,v,R,g="N/A",m,x="Approve",O,_="Reject",p,y;return{c(){e=f("input"),l=f("br"),a=T(),o=f("label"),o.textContent=n,i=f("br"),u=T(),v=f("select"),R=f("option"),R.textContent=g,m=f("option"),m.textContent=x,O=f("option"),O.textContent=_,this.h()},l(k){e=d(k,"INPUT",{class:!0,type:!0,id:!0,name:!0}),l=d(k,"BR",{}),a=D(k),o=d(k,"LABEL",{for:!0,"data-svelte-h":!0}),$(o)!=="svelte-1br9qbl"&&(o.textContent=n),i=d(k,"BR",{}),u=D(k),v=d(k,"SELECT",{class:!0});var w=S(v);R=d(w,"OPTION",{"data-svelte-h":!0}),$(R)!=="svelte-1vm96zp"&&(R.textContent=g),m=d(w,"OPTION",{"data-svelte-h":!0}),$(m)!=="svelte-zlcfgp"&&(m.textContent=x),O=d(w,"OPTION",{"data-svelte-h":!0}),$(O)!=="svelte-3opq0a"&&(O.textContent=_),w.forEach(h),this.h()},h(){c(e,"class","form-input"),c(e,"type","text"),c(e,"id","full_name"),c(e,"name","fullname"),e.value=t=s[1].full_name,e.disabled=!1,c(o,"for","approved"),R.__value=null,ye(R,R.__value),m.__value=!0,ye(m,m.__value),O.__value=!1,ye(O,O.__value),c(v,"class","selectorDropdown"),s[3]===void 0&&Je(()=>s[8].call(v))},m(k,w){E(k,e,w),E(k,l,w),E(k,a,w),E(k,o,w),E(k,i,w),E(k,u,w),E(k,v,w),r(v,R),r(v,m),r(v,O),Oe(v,s[3],!0),p||(y=ge(v,"change",s[8]),p=!0)},p(k,w){w&2&&t!==(t=k[1].full_name)&&e.value!==t&&(e.value=t),w&8&&Oe(v,k[3])},d(k){k&&(h(e),h(l),h(a),h(o),h(i),h(u),h(v)),p=!1,y()}}}function Et(s){let e,t,l;return{c(){e=f("input"),l=f("br"),this.h()},l(a){e=d(a,"INPUT",{class:!0,type:!0,id:!0,name:!0}),l=d(a,"BR",{}),this.h()},h(){c(e,"class","form-input"),c(e,"type","text"),c(e,"id","full_name"),c(e,"name","fullname"),e.value=t=s[1].full_name,e.disabled=!0},m(a,o){E(a,e,o),E(a,l,o)},p(a,o){o&2&&t!==(t=a[1].full_name)&&e.value!==t&&(e.value=t)},d(a){a&&(h(e),h(l))}}}function Xe(s){let e,t,l,a;return{c(){e=f("br"),t=T(),l=f("p"),a=_e(s[4]),this.h()},l(o){e=d(o,"BR",{}),t=D(o),l=d(o,"P",{class:!0});var n=S(l);a=he(n,s[4]),n.forEach(h),this.h()},h(){c(l,"class","text-red-500 font-bold")},m(o,n){E(o,e,n),E(o,t,n),E(o,l,n),r(l,a)},p(o,n){n&16&&ve(a,o[4])},d(o){o&&(h(e),h(t),h(l))}}}function Tt(s){let e,t,l,a="Description:",o,n,i,u,v,R,g,m="*Start Date:",x,O,_,p,y,k,w,F="*End Date:",C,V,q,se,ee,A,j,U="TimeOfDay:",B,N,b,I="N/A",J,G="AM",K,ne="PM",ue,fe,me="*Fullname:",ce,te,de,re,ie,be,pe,H,L="Update",ae,Q;function z(X,le){var P;return((P=X[5])==null?void 0:P.role_name)==="User"?Et:xt}let M=z(s),W=M(s),Y=s[4]&&Xe(s);return{c(){e=f("form"),t=f("form"),l=f("label"),l.textContent=a,o=f("br"),n=T(),i=f("input"),v=f("br"),R=T(),g=f("label"),g.textContent=m,x=f("br"),O=T(),_=f("input"),y=f("br"),k=T(),w=f("label"),w.textContent=F,C=f("br"),V=T(),q=f("input"),ee=f("br"),A=T(),j=f("label"),j.textContent=U,B=T(),N=f("select"),b=f("option"),b.textContent=I,J=f("option"),J.textContent=G,K=f("option"),K.textContent=ne,ue=T(),fe=f("label"),fe.textContent=me,ce=f("br"),te=T(),W.c(),de=T(),Y&&Y.c(),re=T(),ie=f("br"),be=T(),pe=f("div"),H=f("button"),H.textContent=L,this.h()},l(X){e=d(X,"FORM",{class:!0});var le=S(e);t=d(le,"FORM",{class:!0});var P=S(t);l=d(P,"LABEL",{for:!0,"data-svelte-h":!0}),$(l)!=="svelte-10pq9m4"&&(l.textContent=a),o=d(P,"BR",{}),n=D(P),i=d(P,"INPUT",{class:!0,type:!0,id:!0,name:!0}),v=d(P,"BR",{}),R=D(P),g=d(P,"LABEL",{for:!0,"data-svelte-h":!0}),$(g)!=="svelte-1f2kpm3"&&(g.textContent=m),x=d(P,"BR",{}),O=D(P),_=d(P,"INPUT",{class:!0,type:!0,id:!0,name:!0,min:!0}),y=d(P,"BR",{}),k=D(P),w=d(P,"LABEL",{for:!0,"data-svelte-h":!0}),$(w)!=="svelte-urgbfl"&&(w.textContent=F),C=d(P,"BR",{}),V=D(P),q=d(P,"INPUT",{class:!0,type:!0,id:!0,name:!0,min:!0}),ee=d(P,"BR",{}),A=D(P),j=d(P,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),$(j)!=="svelte-1j9gh9x"&&(j.textContent=U),B=D(P),N=d(P,"SELECT",{class:!0});var xe=S(N);b=d(xe,"OPTION",{"data-svelte-h":!0}),$(b)!=="svelte-1vm96zp"&&(b.textContent=I),J=d(xe,"OPTION",{"data-svelte-h":!0}),$(J)!=="svelte-lr5jey"&&(J.textContent=G),K=d(xe,"OPTION",{"data-svelte-h":!0}),$(K)!=="svelte-1mp3qoy"&&(K.textContent=ne),xe.forEach(h),ue=D(P),fe=d(P,"LABEL",{for:!0,"data-svelte-h":!0}),$(fe)!=="svelte-v5eqky"&&(fe.textContent=me),ce=d(P,"BR",{}),te=D(P),W.l(P),de=D(P),Y&&Y.l(P),P.forEach(h),re=D(le),ie=d(le,"BR",{}),be=D(le),pe=d(le,"DIV",{class:!0});var Ge=S(pe);H=d(Ge,"BUTTON",{class:!0,"data-svelte-h":!0}),$(H)!=="svelte-18b0vqe"&&(H.textContent=L),Ge.forEach(h),le.forEach(h),this.h()},h(){c(l,"for","Description"),c(i,"class","form-input"),c(i,"type","text"),c(i,"id","description"),c(i,"name","Description"),i.value=u=s[1].description,c(g,"for","start_date"),c(_,"class","form-input"),c(_,"type","date"),c(_,"id","start_date"),c(_,"name","start_date"),c(_,"min","2000-01-02"),_.value=p=s[1].start_date,c(w,"for","end_date"),c(q,"class","form-input"),c(q,"type","date"),c(q,"id","end_date"),c(q,"name","end_date"),c(q,"min","2000-01-02"),q.value=se=s[1].end_date,c(j,"for","timeOfDay"),c(j,"class","block text-sm font-medium text-gray-900 dark:text-white"),b.__value=null,ye(b,b.__value),J.__value="AM",ye(J,J.__value),K.__value="PM",ye(K,K.__value),c(N,"class","selectorDropdown"),s[2]===void 0&&Je(()=>s[7].call(N)),c(fe,"for","fullname"),c(t,"class","text-black dark:text-white"),c(H,"class","createOrUpdateSubmitButton"),c(pe,"class","flex flex-col"),c(e,"class","text-black dark:text-white")},m(X,le){E(X,e,le),r(e,t),r(t,l),r(t,o),r(t,n),r(t,i),r(t,v),r(t,R),r(t,g),r(t,x),r(t,O),r(t,_),r(t,y),r(t,k),r(t,w),r(t,C),r(t,V),r(t,q),r(t,ee),r(t,A),r(t,j),r(t,B),r(t,N),r(N,b),r(N,J),r(N,K),Oe(N,s[2],!0),r(t,ue),r(t,fe),r(t,ce),r(t,te),W.m(t,null),r(t,de),Y&&Y.m(t,null),r(e,re),r(e,ie),r(e,be),r(e,pe),r(pe,H),ae||(Q=[ge(N,"change",s[7]),ge(H,"click",s[9])],ae=!0)},p(X,le){le&2&&u!==(u=X[1].description)&&i.value!==u&&(i.value=u),le&2&&p!==(p=X[1].start_date)&&(_.value=p),le&2&&se!==(se=X[1].end_date)&&(q.value=se),le&4&&Oe(N,X[2]),M===(M=z(X))&&W?W.p(X,le):(W.d(1),W=M(X),W&&(W.c(),W.m(t,de))),X[4]?Y?Y.p(X,le):(Y=Xe(X),Y.c(),Y.m(t,null)):Y&&(Y.d(1),Y=null)},d(X){X&&h(e),W.d(),Y&&Y.d(),ae=!1,Ye(Q)}}}function Dt(s){let e,t="Editing Holiday Request";return{c(){e=f("h2"),e.textContent=t,this.h()},l(l){e=d(l,"H2",{class:!0,slot:!0,"data-svelte-h":!0}),$(e)!=="svelte-wn9que"&&(e.textContent=t),this.h()},h(){c(e,"class","text-black dark:text-white"),c(e,"slot","header")},m(l,a){E(l,e,a)},p:Ee,d(l){l&&h(e)}}}function Ot(s){let e,t,l;function a(n){s[10](n)}let o={$$slots:{header:[Dt],default:[Tt]},$$scope:{ctx:s}};return s[0]!==void 0&&(o.showModal=s[0]),e=new Ve({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,[i]){const u={};i&4158&&(u.$$scope={dirty:i,ctx:n}),!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function Bt(s,e,t){let l;Te(s,Se,_=>t(11,l=_));let{showModal:a=!1}=e,{holidayData:o}=e,n=o.time_of_day,i=o.approved,u="";const v={};if(typeof sessionStorage<"u"){const _=sessionStorage.getItem("userLoggedIn");if(_!==null)for(const[p,y]of Object.entries(JSON.parse(_)))v[p]=y}async function R(){if(v.role_name==="User"&&o.approved){t(4,u="You cannot edit and approved holiday");return}if(v.role_name==="Admin"&&v.id===o.user_id&&i!==o.approved){t(4,u="You do cannot edit the approved field of your own holiday request.");return}try{let _=document.querySelectorAll(".form-input"),p={};if(p.id=o.id,_.forEach(k=>{p[k.id]=k.value}),p.time_of_day=n,delete p.full_name,p.user_id=o.user_id,p.team_name=o.team_name,v.role_name==="User"&&i!==o.approved){t(4,u="You do not have permission to edit the approved field.");return}(v==null?void 0:v.role_name)!=="User"&&(p.approved=i);const y=await fetch(`${je}/holiday-request`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)});if(y.ok)t(0,a=!1),De(Se,l=!1,l),t(4,u="");else throw y.status===422?t(4,u="Please fill in all fields correctly!"):t(4,u=`Status: ${y.status} `),new Error(u);console.log(u)}catch(_){throw console.error(_),_}}function g(){n=ze(this),t(2,n)}function m(){i=ze(this),t(3,i)}const x=()=>R();function O(_){a=_,t(0,a)}return s.$$set=_=>{"showModal"in _&&t(0,a=_.showModal),"holidayData"in _&&t(1,o=_.holidayData)},[a,o,n,i,u,v,R,g,m,x,O]}class Nt extends Ue{constructor(e){super(),He(this,e,Bt,Ot,qe,{showModal:0,holidayData:1})}}const{Map:Rt}=ut;function Ze(s,e,t){const l=s.slice();return l[18]=e[t],l}function et(s,e,t){const l=s.slice();return l[21]=e[t],l}function Lt(s){let e,t,l,a,o="Actions",n,i,u=[],v=new Rt,R,g=$e(s[6]),m=[];for(let _=0;_<g.length;_+=1)m[_]=tt(et(s,g,_));let x=$e(s[2]);const O=_=>_[18][0];for(let _=0;_<x.length;_+=1){let p=Ze(s,x,_),y=O(p);v.set(y,u[_]=lt(y,p))}return{c(){e=f("thead"),t=f("tr");for(let _=0;_<m.length;_+=1)m[_].c();l=T(),a=f("th"),a.textContent=o,n=T(),i=f("tbody");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){e=d(_,"THEAD",{class:!0});var p=S(e);t=d(p,"TR",{});var y=S(t);for(let w=0;w<m.length;w+=1)m[w].l(y);l=D(y),a=d(y,"TH",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-55cih7"&&(a.textContent=o),y.forEach(h),p.forEach(h),n=D(_),i=d(_,"TBODY",{class:!0});var k=S(i);for(let w=0;w<u.length;w+=1)u[w].l(k);k.forEach(h),this.h()},h(){c(a,"class","text-base w-1/6"),c(e,"class","text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white"),c(i,"class","text-center")},m(_,p){E(_,e,p),r(e,t);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(t,null);r(t,l),r(t,a),E(_,n,p),E(_,i,p);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(i,null);R=!0},p(_,p){if(p&64){g=$e(_[6]);let y;for(y=0;y<g.length;y+=1){const k=et(_,g,y);m[y]?m[y].p(k,p):(m[y]=tt(k),m[y].c(),m[y].m(t,l))}for(;y<m.length;y+=1)m[y].d(1);m.length=g.length}p&644&&(x=$e(_[2]),Ie(),u=it(u,p,O,1,_,x,v,i,ft,lt,null,Ze),Le())},i(_){if(!R){for(let p=0;p<x.length;p+=1)Z(u[p]);R=!0}},o(_){for(let p=0;p<u.length;p+=1)oe(u[p]);R=!1},d(_){_&&(h(e),h(n),h(i)),rt(m,_);for(let p=0;p<u.length;p+=1)u[p].d()}}}function It(s){let e,t='<h1 class="text-3xl font-semibold text-gray-900 dark:text-white">No Holiday Requests found</h1> <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are no Holiday Requests in the database.</p>';return{c(){e=f("div"),e.innerHTML=t,this.h()},l(l){e=d(l,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1wtpzku"&&(e.innerHTML=t),this.h()},h(){c(e,"class","flex flex-col items-center justify-center h-full")},m(l,a){E(l,e,a)},p:Ee,i:Ee,o:Ee,d(l){l&&h(e)}}}function tt(s){let e,t=s[21]+"",l;return{c(){e=f("th"),l=_e(t),this.h()},l(a){e=d(a,"TH",{scope:!0,class:!0});var o=S(e);l=he(o,t),o.forEach(h),this.h()},h(){c(e,"scope","col"),c(e,"class","text-base")},m(a,o){E(a,e,o),r(e,l)},p:Ee,d(a){a&&h(e)}}}function Pt(s){let e,t=s[18][1].time_of_day+"",l;return{c(){e=f("td"),l=_e(t)},l(a){e=d(a,"TD",{});var o=S(e);l=he(o,t),o.forEach(h)},m(a,o){E(a,e,o),r(e,l)},p(a,o){o&4&&t!==(t=a[18][1].time_of_day+"")&&ve(l,t)},d(a){a&&h(e)}}}function At(s){let e,t="N/A";return{c(){e=f("td"),e.textContent=t},l(l){e=d(l,"TD",{"data-svelte-h":!0}),$(e)!=="svelte-qmff1s"&&(e.textContent=t)},m(l,a){E(l,e,a)},p:Ee,d(l){l&&h(e)}}}function St(s){let e,t="Not Reviewed Yet";return{c(){e=f("td"),e.textContent=t},l(l){e=d(l,"TD",{"data-svelte-h":!0}),$(e)!=="svelte-zwpb3a"&&(e.textContent=t)},m(l,a){E(l,e,a)},d(l){l&&h(e)}}}function $t(s){let e,t="Approved";return{c(){e=f("td"),e.textContent=t},l(l){e=d(l,"TD",{"data-svelte-h":!0}),$(e)!=="svelte-53e471"&&(e.textContent=t)},m(l,a){E(l,e,a)},d(l){l&&h(e)}}}function qt(s){let e,t="Rejected";return{c(){e=f("td"),e.textContent=t},l(l){e=d(l,"TD",{"data-svelte-h":!0}),$(e)!=="svelte-1bsqnwc"&&(e.textContent=t)},m(l,a){E(l,e,a)},d(l){l&&h(e)}}}function lt(s,e){let t,l,a=e[18][1].description+"",o,n,i,u=e[18][1].start_date+"",v,R,g,m=e[18][1].end_date+"",x,O,_,p,y=e[18][1].team_name+"",k,w,F,C=e[18][1].full_name+"",V,q,se,ee,A,j,U,B,N,b,I,J,G,K,ne,ue,fe;function me(H,L){return H[18][1].time_of_day===null?At:Pt}let ce=me(e),te=ce(e);function de(H,L){return H[18][1].approved===!1?qt:H[18][1].approved===!0?$t:St}let re=de(e),ie=re(e);B=new Fe({props:{icon:"mdi:calendar-edit-outline",inline:!0}});function be(){return e[11](e[18])}G=new Fe({props:{icon:"mdi:calendar-remove-outline",inline:!0}});function pe(){return e[12](e[18])}return{key:s,first:null,c(){t=f("tr"),l=f("td"),o=_e(a),n=T(),i=f("td"),v=_e(u),R=T(),g=f("td"),x=_e(m),O=T(),te.c(),_=T(),p=f("td"),k=_e(y),w=T(),F=f("td"),V=_e(C),q=T(),ie.c(),se=T(),ee=f("td"),A=f("button"),j=f("p"),U=_e(`Edit\r
                    `),Ce(B.$$.fragment),N=T(),b=f("button"),I=f("p"),J=_e(`Delete\r
                    `),Ce(G.$$.fragment),K=T(),this.h()},l(H){t=d(H,"TR",{class:!0});var L=S(t);l=d(L,"TD",{});var ae=S(l);o=he(ae,a),ae.forEach(h),n=D(L),i=d(L,"TD",{});var Q=S(i);v=he(Q,u),Q.forEach(h),R=D(L),g=d(L,"TD",{});var z=S(g);x=he(z,m),z.forEach(h),O=D(L),te.l(L),_=D(L),p=d(L,"TD",{});var M=S(p);k=he(M,y),M.forEach(h),w=D(L),F=d(L,"TD",{});var W=S(F);V=he(W,C),W.forEach(h),q=D(L),ie.l(L),se=D(L),ee=d(L,"TD",{});var Y=S(ee);A=d(Y,"BUTTON",{type:!0,class:!0});var X=S(A);j=d(X,"P",{class:!0});var le=S(j);U=he(le,`Edit\r
                    `),ke(B.$$.fragment,le),le.forEach(h),X.forEach(h),N=D(Y),b=d(Y,"BUTTON",{type:!0,class:!0});var P=S(b);I=d(P,"P",{class:!0});var xe=S(I);J=he(xe,`Delete\r
                    `),ke(G.$$.fragment,xe),xe.forEach(h),P.forEach(h),Y.forEach(h),K=D(L),L.forEach(h),this.h()},h(){c(j,"class","icons"),c(A,"type","button"),c(A,"class","editButton"),c(I,"class","icons"),c(b,"type","button"),c(b,"class","deleteButton"),c(t,"class","text-lg text-black dark:text-gray-200"),this.first=t},m(H,L){E(H,t,L),r(t,l),r(l,o),r(t,n),r(t,i),r(i,v),r(t,R),r(t,g),r(g,x),r(t,O),te.m(t,null),r(t,_),r(t,p),r(p,k),r(t,w),r(t,F),r(F,V),r(t,q),ie.m(t,null),r(t,se),r(t,ee),r(ee,A),r(A,j),r(j,U),we(B,j,null),r(ee,N),r(ee,b),r(b,I),r(I,J),we(G,I,null),r(t,K),ne=!0,ue||(fe=[ge(A,"click",be),ge(b,"click",pe)],ue=!0)},p(H,L){e=H,(!ne||L&4)&&a!==(a=e[18][1].description+"")&&ve(o,a),(!ne||L&4)&&u!==(u=e[18][1].start_date+"")&&ve(v,u),(!ne||L&4)&&m!==(m=e[18][1].end_date+"")&&ve(x,m),ce===(ce=me(e))&&te?te.p(e,L):(te.d(1),te=ce(e),te&&(te.c(),te.m(t,_))),(!ne||L&4)&&y!==(y=e[18][1].team_name+"")&&ve(k,y),(!ne||L&4)&&C!==(C=e[18][1].full_name+"")&&ve(V,C),re!==(re=de(e))&&(ie.d(1),ie=re(e),ie&&(ie.c(),ie.m(t,se)))},i(H){ne||(Z(B.$$.fragment,H),Z(G.$$.fragment,H),ne=!0)},o(H){oe(B.$$.fragment,H),oe(G.$$.fragment,H),ne=!1},d(H){H&&h(t),te.d(),ie.d(),Me(B),Me(G),ue=!1,Ye(fe)}}}function nt(s){let e,t,l;function a(n){s[13](n)}let o={};return s[0]!==void 0&&(o.showModal=s[0]),e=new yt({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,i){const u={};!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function at(s){let e,t,l;function a(n){s[14](n)}let o={holidayData:s[1]};return s[0]!==void 0&&(o.showModal=s[0]),e=new Nt({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,i){const u={};i&2&&(u.holidayData=n[1]),!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function ot(s){let e,t,l;function a(n){s[15](n)}let o={holidayData:s[1]};return s[0]!==void 0&&(o.showModal=s[0]),e=new Mt({props:o}),Be.push(()=>Re(e,"showModal",a)),{c(){Ce(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,i){we(e,n,i),l=!0},p(n,i){const u={};i&2&&(u.holidayData=n[1]),!t&&i&1&&(t=!0,u.showModal=n[0],Ne(()=>t=!1)),e.$set(u)},i(n){l||(Z(e.$$.fragment,n),l=!0)},o(n){oe(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function Ut(s){let e,t,l,a,o,n="Holiday Requests",i,u,v=`Here you can create, edit or delete holdiay requests (Only admins can\r
          approve).`,R,g,m,x,O,_,p,y,k,w,F,C,V,q,se;O=new Fe({props:{icon:"mdi:calendar-plus-outline",inline:!0}});const ee=[It,Lt],A=[];function j(b,I){return b[2].size===0?0:1}p=j(s),y=A[p]=ee[p](s);let U=s[4]&&nt(s),B=s[5]&&at(s),N=s[3]&&ot(s);return{c(){e=f("main"),t=f("div"),l=f("table"),a=f("caption"),o=f("h1"),o.textContent=n,i=T(),u=f("p"),u.textContent=v,R=T(),g=f("button"),m=f("p"),x=_e(`Create Request\r
            `),Ce(O.$$.fragment),_=T(),y.c(),k=T(),U&&U.c(),w=T(),B&&B.c(),F=T(),N&&N.c(),C=Ke(),this.h()},l(b){e=d(b,"MAIN",{class:!0});var I=S(e);t=d(I,"DIV",{class:!0});var J=S(t);l=d(J,"TABLE",{class:!0});var G=S(l);a=d(G,"CAPTION",{class:!0});var K=S(a);o=d(K,"H1",{class:!0,"data-svelte-h":!0}),$(o)!=="svelte-12ynv2n"&&(o.textContent=n),i=D(K),u=d(K,"P",{class:!0,"data-svelte-h":!0}),$(u)!=="svelte-1bcdb64"&&(u.textContent=v),R=D(K),g=d(K,"BUTTON",{type:!0,class:!0});var ne=S(g);m=d(ne,"P",{class:!0});var ue=S(m);x=he(ue,`Create Request\r
            `),ke(O.$$.fragment,ue),ue.forEach(h),ne.forEach(h),K.forEach(h),_=D(G),y.l(G),G.forEach(h),J.forEach(h),I.forEach(h),k=D(b),U&&U.l(b),w=D(b),B&&B.l(b),F=D(b),N&&N.l(b),C=Ke(),this.h()},h(){c(o,"class","text-2xl"),c(u,"class","mt-1 text-lg font-normal text-gray-500 dark:text-gray-400"),c(m,"class","icons"),c(g,"type","button"),c(g,"class","createButton absolute bottom-2 right-20"),c(a,"class","p-5 font-semibold text-left text-gray-900 dark:text-white relative"),c(l,"class","w-full text-sm text-left text-gray-500 dark:text-gray-400"),c(t,"class","tablePage relative overflow-x-auto shadow-md sm:rounded-lg"),c(e,"class","page")},m(b,I){E(b,e,I),r(e,t),r(t,l),r(l,a),r(a,o),r(a,i),r(a,u),r(a,R),r(a,g),r(g,m),r(m,x),we(O,m,null),r(l,_),A[p].m(l,null),E(b,k,I),U&&U.m(b,I),E(b,w,I),B&&B.m(b,I),E(b,F,I),N&&N.m(b,I),E(b,C,I),V=!0,q||(se=ge(g,"click",s[10]),q=!0)},p(b,[I]){let J=p;p=j(b),p===J?A[p].p(b,I):(Ie(),oe(A[J],1,1,()=>{A[J]=null}),Le(),y=A[p],y?y.p(b,I):(y=A[p]=ee[p](b),y.c()),Z(y,1),y.m(l,null)),b[4]?U?(U.p(b,I),I&16&&Z(U,1)):(U=nt(b),U.c(),Z(U,1),U.m(w.parentNode,w)):U&&(Ie(),oe(U,1,1,()=>{U=null}),Le()),b[5]?B?(B.p(b,I),I&32&&Z(B,1)):(B=at(b),B.c(),Z(B,1),B.m(F.parentNode,F)):B&&(Ie(),oe(B,1,1,()=>{B=null}),Le()),b[3]?N?(N.p(b,I),I&8&&Z(N,1)):(N=ot(b),N.c(),Z(N,1),N.m(C.parentNode,C)):N&&(Ie(),oe(N,1,1,()=>{N=null}),Le())},i(b){V||(Z(O.$$.fragment,b),Z(y),Z(U),Z(B),Z(N),V=!0)},o(b){oe(O.$$.fragment,b),oe(y),oe(U),oe(B),oe(N),V=!1},d(b){b&&(h(e),h(k),h(w),h(F),h(C)),Me(O),A[p].d(),U&&U.d(b),B&&B.d(b),N&&N.d(b),q=!1,se()}}}function Ht(s,e,t){let l,a,o;Te(s,Ae,C=>t(3,l=C)),Te(s,Pe,C=>t(4,a=C)),Te(s,Se,C=>t(5,o=C)),st(async()=>{g().then(C=>{t(2,u=C)})});let n=!1,i,u=new Map;const v={};if(typeof sessionStorage<"u"){const C=sessionStorage.getItem("userLoggedIn");if(C!==null)for(const[V,q]of Object.entries(JSON.parse(C)))v[V]=q}let R=["Description","Start Date","End Date","Time Of Day","Team","Name","Status"];async function g(){try{let C=`${je}/holiday-request`;if((v==null?void 0:v.role_name)==="User")C+=`?user_id=${v.id}`;else if(v.role_name==="Admin")C+=`?team_name=${v.team_name}`;else if(v.role_name!=="SuperAdmin")throw dt("/login"),new Error("Failed to fetch data. User not logged in.");const V=await fetch(C);if(!V.ok)throw new Error(`Failed to fetch data. Status: ${V.status}`);const q=await V.json();return Array.isArray(q)?q.forEach((se,ee)=>u.set(ee,se)):u.set(0,q),u}catch(C){throw console.error(C),C}}function m(C){t(0,n=!0),De(Se,o=!0,o),t(1,i=C)}function x(){t(0,n=!0),De(Pe,a=!0,a)}function O(C){t(0,n=!0),De(Ae,l=!0,l),t(1,i=C)}const _=()=>x(),p=C=>m(C[1]),y=C=>O(C[1]);function k(C){n=C,t(0,n)}function w(C){n=C,t(0,n)}function F(C){n=C,t(0,n)}return s.$$.update=()=>{s.$$.dirty&1&&(n||(Pe.set(!1),Se.set(!1),Ae.set(!1),typeof window<"u"&&ct().then(()=>{g().then(C=>{t(2,u=C)})})))},[n,i,u,l,a,o,R,m,x,O,_,p,y,k,w,F]}class Vt extends Ue{constructor(e){super(),He(this,e,Ht,Ut,qe,{})}}export{Vt as component};
