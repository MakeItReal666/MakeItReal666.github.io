import{_ as p,a as r,o as n,c,e as s,w as l,A as u,d as v,u as B,i as k,b as d,j as i,f as _}from"./index-bfaa776e.js";const y={},C={class:"background full-screen-background"};function N(e,t){const o=r("v-container");return n(),c("div",C,[s(o,null,{default:l(()=>[u(e.$slots,"default")]),_:3})])}const E=p(y,[["render",N]]),b=v({props:{reverseBtn:{type:[String,Number,Boolean],default:null},proceedBtn:{type:[String,Number,Boolean],default:null},closeBtn:{type:[String,Number,Boolean],default:null},routeName:{type:[String],default:null}},setup(){const e=B();return{nextBtnClick:o=>{e.push(o)}}},computed:{bothPropsNotNull(){return this.reverseBtn!==null&&this.proceedBtn!==null},closeBtnNotNull(){return this.closeBtn!==null&&this.closeBtn!==void 0}},methods:{handleCloseButtonClick(){window.history.back()}}});const h={class:"d-flex flex-column mb-6"},$={key:0,class:"d-flex justify-end"},x={id:"title",style:{color:"black"}},g={key:1,class:"d-flex justify-space-between"};function w(e,t,o,S,L,V){const a=r("v-btn"),f=r("v-card");return n(),k(f,{class:"mx-auto","max-width":"50vw"},{default:l(()=>[d("div",h,[e.closeBtnNotNull?(n(),c("div",$,[s(a,{icon:"mdi-close",round:"true",onClick:e.handleCloseButtonClick,flat:""},null,8,["onClick"])])):i("",!0),d("div",x,[u(e.$slots,"title",{},void 0,!0)]),u(e.$slots,"cardBody",{},void 0,!0),e.bothPropsNotNull?(n(),c("div",g,[s(a,{class:"ml-4 px-15",onClick:t[0]||(t[0]=m=>e.nextBtnClick(e.routeName)),flat:""},{default:l(()=>[_("Skip")]),_:1}),s(a,{class:"mr-4 px-15",color:"#9250FE",onClick:t[1]||(t[1]=m=>e.nextBtnClick(e.routeName))},{default:l(()=>[_("Next")]),_:1})])):i("",!0)])]),_:3})}const P=p(b,[["render",w],["__scopeId","data-v-c6e5aed5"]]);export{P as C,E as b};
