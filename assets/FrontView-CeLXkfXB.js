import{_ as c,o as l,c as i,a as t,b as e,w as o,d as n,r as s,e as b,F as u}from"./index-DHZueHkI.js";const f={},p={class:"navbar navbar-expand-md navbar-light bg-light p-3"},v={class:"container-fluid"},g=t("i",{class:"bi bi-bar-chart-fill d-flex align-items-center me-3"},null,-1),x=t("h1",{class:"m-0"},"LIU MIN YAO",-1),w=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),$={class:"collapse navbar-collapse",id:"navbarSupportedContent"},k={class:"navbar-nav me-auto mb-0 mt-3 mt-md-0 w-100 justify-content-end text-center"},N={class:"nav-item"},y={class:"nav-item"},E={class:"nav-item"};function F(r,d){const a=s("router-link");return l(),i("nav",p,[t("div",v,[e(a,{to:"/home",class:"nav-link fw-bold fs-3 d-flex h1-hover"},{default:o(()=>[g,x]),_:1}),w,t("div",$,[t("ul",k,[t("li",N,[e(a,{to:"/home",class:"nav-link border-bottom",href:"#"},{default:o(()=>[n("HOME")]),_:1})]),t("li",y,[e(a,{to:"/resume",class:"nav-link border-bottom",href:"#"},{default:o(()=>[n("RESUME")]),_:1})]),t("li",E,[e(a,{to:"/application",class:"nav-link","aria-current":"page",href:"#"},{default:o(()=>[n("APPLICATION")]),_:1})])])])])])}const C=c(f,[["render",F]]),L={},O={class:"container-fluid py-3"},I=b('<ul class="row list-unstyled justify-content-end mb-0 text-center"><li class="col-6 col-md-4 col-lg-2"><h3 class="fs-6">TELEPHONE</h3><a href="tel:+886-9-84309550">0984309550</a></li><li class="col-6 col-md-4 col-lg-2"><h3 class="fs-6">EMAIL</h3><a href="mailto:x6xxvx@gmail.com">x6xxvx@gmail.com</a></li><li class="d-none d-md-block col-4 col-lg-2"><h3 class="fs-6">FOLLOW</h3><ul class="d-flex justify-content-around list-unstyled"><li><a href="https://www.facebook.com/te.b.gan/"><i class="bi bi-facebook"></i></a></li><li><a href="https://www.instagram.com/x6xxvx/"><i class="bi bi-instagram"></i></a></li><li><a href="https://github.com/Jmimiding4104/wewe"><i class="bi bi-github"></i></a></li></ul></li></ul>',1),S=[I];function V(r,d){return l(),i("footer",O,S)}const A=c(L,[["render",V]]),M={data(){return{}},components:{Navbar:C,Footer:A},mounted(){this.$http.get("https://myblogapi-v3b7.onrender.com")}};function T(r,d,a,j,B,P){const _=s("Navbar"),m=s("router-view"),h=s("Footer");return l(),i(u,null,[e(_),e(m),e(h)],64)}const U=c(M,[["render",T]]);export{U as default};
