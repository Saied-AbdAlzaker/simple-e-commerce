"use strict";(self.webpackChunksimple_e_commerce_task=self.webpackChunksimple_e_commerce_task||[]).push([[963],{7963:(g,e,c)=>{c.r(e),c.d(e,{ProductModule:()=>m});var i=c(177),n=c(462),t=c(540),a=c(1626);let u=(()=>{class o{constructor(s){this._HttpClient=s,this.baseUrl="https://fakestoreapi.com"}allProduct(){return this._HttpClient.get(`${this.baseUrl}/products`)}static{this.\u0275fac=function(r){return new(r||o)(t.KVO(a.Qq))}}static{this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var d=c(5794);function l(o,f){if(1&o&&(t.j41(0,"div",3)(1,"div",4)(2,"span",5),t.nrm(3,"img",6),t.k0s(),t.j41(4,"h6",7),t.EFF(5),t.k0s(),t.j41(6,"p",8),t.EFF(7),t.k0s(),t.j41(8,"span",9),t.EFF(9),t.k0s()()()),2&o){const s=f.$implicit;t.R7$(3),t.Y8G("src",s.image,t.B4B)("alt",s.title),t.R7$(2),t.JRh(s.title),t.R7$(2),t.JRh(s.price),t.R7$(2),t.JRh(null==s.rating?null:s.rating.rate)}}const p=[{path:"",redirectTo:"product",pathMatch:"full"},{path:"product",component:(()=>{class o{constructor(s,r){this._ProductService=s,this._toastr=r}ngOnInit(){this.getAllProducts()}getAllProducts(){this._ProductService.allProduct().subscribe({next:s=>{console.log(s),this.productList=s},error:s=>{this._toastr.error("data fetch fails.","Error!")},complete:()=>{this._toastr.success("data fetch success.","Success")}})}static{this.\u0275fac=function(r){return new(r||o)(t.rXU(u),t.rXU(d.tw))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-product"]],decls:4,vars:1,consts:[[1,"container"],[1,"row","gy-3","mt-2"],["class","col-md-3 rounded-3",4,"ngFor","ngForOf"],[1,"col-md-3","rounded-3"],[1,"card","position-relative","p-3"],[1,"w-75","h-75"],[1,"img-fluid","w-100",3,"src","alt"],[1,"text-muted"],[1,"text-price"],[1,"position-absolute","top-0","end-0","card-color","rounded-2","px-2"]],template:function(r,v){1&r&&(t.j41(0,"section")(1,"div",0)(2,"div",1),t.DNE(3,l,10,5,"div",2),t.k0s()()()),2&r&&(t.R7$(3),t.Y8G("ngForOf",v.productList))},dependencies:[i.Sq]})}}return o})(),title:"Product"}];let h=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[n.iI.forChild(p),n.iI]})}}return o})(),m=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[i.MD,h]})}}return o})()}}]);