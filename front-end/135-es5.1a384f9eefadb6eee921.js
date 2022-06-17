!function(){"use strict";function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=o(t);if(e){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}function i(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(self.webpackChunkmaterial_dashboard_pro_angular=self.webpackChunkmaterial_dashboard_pro_angular||[]).push([[135],{34958:function(t,e,n){n.d(e,{K:function(){return c}});var i,o=n(22238),r=n(37716),s=n(51095),c=((i=function(){function t(e,n){a(this,t),this.dialogRef=e,this.data=n}return u(t,[{key:"ngOnInit",value:function(){}},{key:"onNoClick",value:function(){this.dialogRef.close(0)}},{key:"onYesClick",value:function(){this.dialogRef.close(1)}}]),t}()).\u0275fac=function(t){return new(t||i)(r.Y36(o.so),r.Y36(o.WI))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-ask-for-confirmation-dialog"]],decls:10,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","",2,"display","flex","justify-content","center","align-items","center"],["mat-button","",3,"click"],["mat-stroked-button","","cdkFocusInitial","",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"h1",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1),r.TgZ(3,"p"),r._uU(4),r.qZA(),r.qZA(),r.TgZ(5,"div",2),r.TgZ(6,"button",3),r.NdJ("click",function(){return e.onNoClick()}),r._uU(7,"NO"),r.qZA(),r.TgZ(8,"button",4),r.NdJ("click",function(){return e.onYesClick()}),r._uU(9,"YES"),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Oqu(e.data.title),r.xp6(3),r.Oqu(e.data.message))},directives:[o.uh,o.xY,o.H8,s.lW],styles:[""]}),i)},61176:function(t,e,n){n.d(e,{H:function(){return o}});var i=n(927),o=function(){function t(e){a(this,t),this.router=e,this.session=new i.E,this.isModify=!1,this.date_format_dd_mm_yy="dd-MM-yy",this.validateCache()}return u(t,[{key:"checkModifyPermission",value:function(){null!=this.permission&&(1==this.permission.isAdd||this.permission.isUpdate)&&(this.isModify=!0)}},{key:"validateCache",value:function(){}},{key:"numberOnly",value:function(t){var e=t.which?t.which:t.keyCode;return!(e>31&&(e<46||e>57))}}]),t}()},135:function(e,i,o){o.r(i),o.d(i,{GroupModule:function(){return St}});var r=o(32789),s=o(40355),c=o(84934),l=o(23235),d=o(927),g=o(61176),p=o(37716),m=o(39895),f=o(10037),h=o(51095),Z=o(33935),v=o(76627),y=o(98295),b=o(83166),_=o(3679),w=o(38583),A=o(99692),D=o(72458),q=["tblGroup"];function x(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"button",31),p.NdJ("click",function(){p.CHM(n);var t=p.oxw();return t.refreshData(t.refresh)})("click",function(){return p.CHM(n),p.oxw().criterial=""}),p.TgZ(1,"mat-icon"),p._uU(2,"close"),p.qZA(),p.qZA()}}function T(t,e){1&t&&(p.TgZ(0,"th",32),p._uU(1," ID "),p.qZA())}function k(t,e){if(1&t&&(p.TgZ(0,"td",33),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ",n.ID," ")}}function C(t,e){1&t&&(p.TgZ(0,"th",32),p._uU(1," Group "),p.qZA())}function N(t,e){if(1&t&&(p.TgZ(0,"td",33),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ",n.group," ")}}function P(t,e){1&t&&(p.TgZ(0,"th",32),p._uU(1," status "),p.qZA())}function S(t,e){if(1&t&&(p.TgZ(0,"td",33),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ",n.status," ")}}function M(t,e){1&t&&p._UZ(0,"th",32)}function I(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",34),p.TgZ(1,"div",35),p.TgZ(2,"button",36),p.NdJ("click",function(){var t=p.CHM(n).$implicit;return p.oxw().onClick_edit(t)}),p.TgZ(3,"i",37),p._uU(4,"edit"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}}function O(t,e){1&t&&p._UZ(0,"tr",38)}function J(t,e){1&t&&p._UZ(0,"tr",39)}var U,F=((U=function(e){t(o,e);var i=n(o);function o(t,e){var n;return a(this,o),(n=i.call(this,t)).route=t,n.groupService=e,n.displayedColumns=["ID","Group","Status","action"],n.dataSourceGroup=new r.by,n.pageLength=0,n.pageSizeOptions=[50,100,300],n.criterial="",n.session=new d.E,n}return u(o,[{key:"ngOnInit",value:function(){var t=this.session.getLoginSession();this.permission=t.group.groupPermission.filter(function(t){return t.pageID==c.o.groupsPageID})[0],this.permission&&1==this.permission.isView?(this.getCountGroup(),this.getListGroups(0,50)):l.C.showNotification("Permission Denied",c.o.warningNotify)}},{key:"getCountGroup",value:function(){var t=this;this.groupService.getCountGroups().subscribe(function(e){e.status==s.G.success&&(t.pageLength=e.body[0])})}},{key:"getListGroups",value:function(t,e){var n=this;this.groupService.getListGroup(t,e).subscribe(function(t){t.status==s.G.success&&t.body.length>0&&(n.dataSourceGroup.data=t.body)})}},{key:"paginatorEvent",value:function(t){this.getListGroups(t.pageIndex*t.pageSize,t.pageSize)}},{key:"applyFilter",value:function(t){this.dataSourceGroup.filter=t}},{key:"refreshData",value:function(t){this.applyFilter(t)}},{key:"onClick_New",value:function(){var t={queryParams:{element:JSON.stringify({isEdit:0})}};this.route.navigate(["/group-form"],t)}},{key:"onClick_edit",value:function(t){var e={queryParams:{element:JSON.stringify({isEdit:1,data:t})}};this.route.navigate(["/group-form"],e)}},{key:"openAddGroupDialog",value:function(t){}}]),o}(g.H)).\u0275fac=function(t){return new(t||U)(p.Y36(m.F0),p.Y36(f.l))},U.\u0275cmp=p.Xpm({type:U,selectors:[["app-group"]],viewQuery:function(t,e){var n;1&t&&p.Gf(q,5),2&t&&p.iGM(n=p.CRH())&&(e.tblUser=n.first)},features:[p.qOj],decls:46,vars:12,consts:[[1,"main-content","p-0","m-0",3,"hidden"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card","m-0"],[1,"card-body"],[1,"d-flex","justify-content-start"],[1,"subHeaderTitle"],[2,"margin-top","-8px"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"disabled","click"],[1,"col-md-2","mrtb-0","pltb-0"],[1,"fullWidth"],["matPrefix",""],["matInput","","type","text","placeholder","search","name","criterial",3,"ngModel","keyup","ngModelChange"],["class","ml-3","mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-md-10"],[3,"length","pageSize","pageSizeOptions","page"],[1,"tbl-container","table-responsive"],["mat-table","",3,"dataSource","dataSourceChange"],["tblGroup",""],["matColumnDef","ID"],["mat-header-cell","","class","text-primary",4,"matHeaderCellDef"],["mat-cell","","matRipple","",4,"matCellDef"],["matColumnDef","Group"],["matColumnDef","Status"],["matColumnDef","action"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","mat-row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",1,"ml-3",3,"click"],["mat-header-cell","",1,"text-primary"],["mat-cell","","matRipple",""],["mat-cell",""],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button",1,"btn","btn-success","btn-link","p-1","m-0",3,"click"],[1,"material-icons"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(t,e){if(1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div",5),p.TgZ(6,"div",6),p.TgZ(7,"h4",7),p._uU(8,"Group"),p.qZA(),p.TgZ(9,"div",8),p.TgZ(10,"button",9),p.TgZ(11,"mat-icon"),p._uU(12,"more_vert"),p.qZA(),p.qZA(),p.TgZ(13,"mat-menu",null,10),p.TgZ(15,"button",11),p.NdJ("click",function(){return e.onClick_New()}),p.TgZ(16,"mat-icon"),p._uU(17,"dialpad"),p.qZA(),p.TgZ(18,"span"),p._uU(19,"New"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(20,"div",2),p.TgZ(21,"div",12),p.TgZ(22,"mat-form-field",13),p.TgZ(23,"mat-icon",14),p._uU(24,"search"),p.qZA(),p.TgZ(25,"input",15),p.NdJ("keyup",function(t){return e.applyFilter(t.target.value)})("ngModelChange",function(t){return e.criterial=t}),p.qZA(),p.YNc(26,x,3,0,"button",16),p.qZA(),p.qZA(),p.TgZ(27,"div",17),p.TgZ(28,"mat-paginator",18),p.NdJ("page",function(t){return e.paginatorEvent(t)}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(29,"div",19),p.TgZ(30,"table",20,21),p.NdJ("dataSourceChange",function(t){return e.dataSourceGroup=t}),p.ynx(32,22),p.YNc(33,T,2,0,"th",23),p.YNc(34,k,2,1,"td",24),p.BQk(),p.ynx(35,25),p.YNc(36,C,2,0,"th",23),p.YNc(37,N,2,1,"td",24),p.BQk(),p.ynx(38,26),p.YNc(39,P,2,0,"th",23),p.YNc(40,S,2,1,"td",24),p.BQk(),p.ynx(41,27),p.YNc(42,M,1,0,"th",23),p.YNc(43,I,5,0,"td",28),p.BQk(),p.YNc(44,O,1,0,"tr",29),p.YNc(45,J,1,0,"tr",30),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){var n=p.MAs(14);p.Q6J("hidden",!e.permission.isView),p.xp6(10),p.Q6J("matMenuTriggerFor",n),p.xp6(5),p.Q6J("disabled",!e.permission.isAdd),p.xp6(10),p.Q6J("ngModel",e.criterial),p.xp6(1),p.Q6J("ngIf",e.criterial),p.xp6(2),p.Q6J("length",e.pageLength)("pageSize",e.pageSize)("pageSizeOptions",e.pageSizeOptions),p.xp6(2),p.Q6J("dataSource",e.dataSourceGroup),p.xp6(14),p.Q6J("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),p.xp6(1),p.Q6J("matRowDefColumns",e.displayedColumns)}},directives:[h.lW,Z.p6,v.Hw,Z.VK,Z.OP,y.KE,y.qo,b.Nt,_.Fj,_.JJ,_.On,w.O5,A.NW,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,y.R9,r.ge,r.ev,D.wG,r.XQ,r.Gk],styles:[".customerName[_ngcontent-%COMP%]{margin-bottom:0}.place[_ngcontent-%COMP%], phone[_ngcontent-%COMP%]{margin-bottom:0;color:gray;font-size:12px}.placeIconSize[_ngcontent-%COMP%]{font-size:14px!important}.phoneIconSize[_ngcontent-%COMP%]{font-size:14px!important}table[_ngcontent-%COMP%]{width:100%}@media screen and (max-height: 1000px){.tbl-container[_ngcontent-%COMP%]{height:700px;overflow:auto}}@media screen and (max-height: 900px){.tbl-container[_ngcontent-%COMP%]{height:425px;overflow:auto}}mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}.mat-row[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),U),Q=function t(){a(this,t)},Y=function t(){a(this,t),this.isView=!1,this.isViewAll=!1,this.isAdd=!1,this.isDelete=!1,this.isUpdate=!1},G=o(34958),R=o(49206),E=o(77001),H=o(22238),j=o(67441),L=o(7539),z=["tblPagePermion"];function V(t,e){if(1&t&&(p.TgZ(0,"mat-option",33),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.Q6J("value",n.ID),p.xp6(1),p.Oqu(n.name)}}function B(t,e){1&t&&(p.TgZ(0,"div"),p._uU(1," department is required. "),p.qZA())}function K(t,e){if(1&t&&(p.TgZ(0,"div",34),p.YNc(1,B,2,0,"div",35),p.qZA()),2&t){p.oxw();var n=p.MAs(20);p.xp6(1),p.Q6J("ngIf",n.errors.required)}}function X(t,e){1&t&&(p.TgZ(0,"div"),p._uU(1," group is required. "),p.qZA())}function W(t,e){if(1&t&&(p.TgZ(0,"div",34),p.YNc(1,X,2,0,"div",35),p.qZA()),2&t){p.oxw();var n=p.MAs(25);p.xp6(1),p.Q6J("ngIf",n.errors.required)}}function tt(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," Page "),p.qZA())}function et(t,e){if(1&t&&(p.TgZ(0,"td",37),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ",n.page?n.page.titleEN:n.groupPermission.value," ")}}function nt(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," View "),p.qZA())}function it(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",37),p.TgZ(1,"mat-checkbox",38),p.NdJ("ngModelChange",function(t){return p.CHM(n).$implicit.isView=t}),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit;p.xp6(1),p.s9C("name",i.ID+"isView"),p.Q6J("ngModel",i.isView)}}function ot(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," Add "),p.qZA())}function at(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",37),p.TgZ(1,"mat-checkbox",38),p.NdJ("ngModelChange",function(t){return p.CHM(n).$implicit.isAdd=t}),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit;p.xp6(1),p.s9C("name",i.ID+"isAdd"),p.Q6J("ngModel",i.isAdd)}}function rt(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," Edit "),p.qZA())}function ut(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",37),p.TgZ(1,"mat-checkbox",38),p.NdJ("ngModelChange",function(t){return p.CHM(n).$implicit.isUpdate=t}),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit;p.xp6(1),p.s9C("name",i.ID+"isUpdate"),p.Q6J("ngModel",i.isUpdate)}}function st(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," Delete "),p.qZA())}function ct(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",39),p.TgZ(1,"mat-checkbox",38),p.NdJ("ngModelChange",function(t){return p.CHM(n).$implicit.isDelete=t}),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit;p.xp6(1),p.s9C("name",i.ID+"isDelete"),p.Q6J("ngModel",i.isDelete)}}function lt(t,e){1&t&&(p.TgZ(0,"th",36),p._uU(1," View All "),p.qZA())}function dt(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",37),p.TgZ(1,"mat-checkbox",38),p.NdJ("ngModelChange",function(t){return p.CHM(n).$implicit.isViewAll=t}),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit;p.xp6(1),p.s9C("name",i.ID+"isViewAll"),p.Q6J("ngModel",i.isViewAll)}}function gt(t,e){1&t&&p._UZ(0,"tr",40)}function pt(t,e){1&t&&p._UZ(0,"tr",41)}var mt=function(){return{standalone:!0}},ft=function(){var e=function(e){t(o,e);var i=n(o);function o(t,e,n,u,s,c){var l;return a(this,o),(l=i.call(this,c)).activateRoute=t,l.groupService=e,l.departmentService=n,l.matSnackbar=u,l.dialog=s,l.route=c,l.groupController=new _.NI,l.onAddGroup=new p.vpe,l.group=new Q,l.isEdit="0",l.displayedColumns=["Page","View","Add","Edit","Remove","ViewAll"],l.dataSourcePermission=new r.by,l.pageForm=new _.cw({ID:new _.NI,titleEN:new _.NI,titleKH:new _.NI,pageUrl:new _.NI,code:new _.NI,description:new _.NI,isActive:new _.NI,created:new _.NI}),l}return u(o,[{key:"ngOnInit",value:function(){var t=this.session.getLoginSession();this.permission=t.group.groupPermission.filter(function(t){return t.pageID==c.o.groupFormPageID})[0],this.permission&&1==this.permission.isView?(this.getListDepartments(),this.onLoadData()):l.C.showNotification("Permission Denied",c.o.warningNotify),this.getPageList()}},{key:"onLoadData",value:function(){var t=this;this.activateRoute.queryParams.subscribe(function(e){if(e.element){var n=JSON.parse(e.element?e.element:null);n&&"1"==n.isEdit?(t.group=n.data,t.groupService.getPermissionByGroupID(t.group.ID).subscribe(function(e){console.log(e),e.status==s.G.success&&e.body.length>0&&(t.dataSourcePermission.data=e.body[0].groupPermission),t.tblPagePermion.renderRows(),t.getPageList()})):(t.getListDepartments(),t.getPageList())}})}},{key:"onClick_Save",value:function(){var t=this;this.dialog.open(G.K,{width:"270px",data:{message:"Are you sure ?",title:"Save"}}).afterClosed().subscribe(function(e){1==e&&(t.group.groupPermission=t.dataSourcePermission.data,t.groupService.addGroup(t.group).subscribe(function(e){e.status==s.G.success?(t.matSnackbar.open(e.body[0].toString(),e.status,{duration:2e3}),t.onAddGroup.emit(e),t.route.navigate(["/groups"])):t.matSnackbar.open(e.body[0].toString(),e.status,{duration:2e3})}))})}},{key:"getListDepartments",value:function(){var t=this;this.departmentService.getListDepartments().subscribe(function(e){e.status==s.G.success&&e.status.length>0&&(t.departmentList=e.body)})}},{key:"getPageList",value:function(){var t=this;this.groupService.getAllPages().subscribe(function(e){console.log(e.body),e.status==s.G.success&&e.body.length>0&&(e.body.forEach(function(e){var n=new Y;n.pageID=e.ID,n.page=e,0==t.dataSourcePermission.data.filter(function(t){return t.pageID==n.pageID}).length&&t.dataSourcePermission.data.push(n)}),t.tblPagePermion.renderRows())})}},{key:"AddnewPage",value:function(){var t;t=this.pageForm.getRawValue(),console.log(t),this.groupService.savePage(t).subscribe(function(t){console.log(t.body)})}},{key:"onDepartmentSelectChanged",value:function(){}}]),o}(g.H);return e.\u0275fac=function(t){return new(t||e)(p.Y36(m.gz),p.Y36(f.l),p.Y36(R.n),p.Y36(E.ux),p.Y36(H.uw),p.Y36(m.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-group-form"]],viewQuery:function(t,e){var n;(1&t&&p.Gf(z,5),2&t)&&(p.iGM(n=p.CRH())&&(e.tblPagePermion=n.first))},features:[p.qOj],decls:50,vars:13,consts:[[1,"main-content","p-0","m-0",3,"hidden"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","mr-auto","ml-auto"],[1,"wizard-container"],["data-color","rose","id","wizardProfile",1,"card","mlr-2"],[1,"card-body"],[1,"tab-content"],["groupForm","ngForm"],[1,"d-flex","justify-content-end"],["mat-button","","routerLink","/groups"],["mat-button","","color","primary",3,"disabled","click"],[1,"w-100"],["name","departmentID","required","",3,"ngModel","ngModelOptions","ngModelChange"],["department","ngModel"],[3,"value",4,"ngFor","ngForOf"],["class","alert alert-danger",4,"ngIf"],["matInput","","required","","name","groupName","placeholder","group ",3,"ngModel","ngModelChange"],["groupName","ngModel"],[1,"table-responsive"],["mat-table","",1,"mt-4","mb-4",2,"width","100%","height","100%",3,"dataSource"],["tblPagePermion",""],["matColumnDef","Page"],["mat-header-cell","","class","text-primary",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","View"],["matColumnDef","Add"],["matColumnDef","Edit"],["matColumnDef","Remove"],["mat-cell","","style","width: 60px;",4,"matCellDef"],["matColumnDef","ViewAll"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],[1,"alert","alert-danger"],[4,"ngIf"],["mat-header-cell","",1,"text-primary"],["mat-cell",""],[3,"name","ngModel","ngModelChange"],["mat-cell","",2,"width","60px"],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div",5),p.TgZ(6,"div",6),p.TgZ(7,"div",7),p.TgZ(8,"form",null,8),p.TgZ(10,"div",9),p.TgZ(11,"button",10),p._uU(12,"Cancel"),p.qZA(),p.TgZ(13,"button",11),p.NdJ("click",function(){return e.onClick_Save()}),p._uU(14,"Save"),p.qZA(),p.qZA(),p.TgZ(15,"div"),p.TgZ(16,"mat-form-field",12),p.TgZ(17,"mat-label"),p._uU(18,"Department"),p.qZA(),p.TgZ(19,"mat-select",13,14),p.NdJ("ngModelChange",function(t){return e.group.departmentID=t})("ngModelChange",function(){return e.onDepartmentSelectChanged()}),p.YNc(21,V,2,2,"mat-option",15),p.qZA(),p.YNc(22,K,2,1,"div",16),p.qZA(),p.TgZ(23,"mat-form-field",12),p.TgZ(24,"input",17,18),p.NdJ("ngModelChange",function(t){return e.group.group=t}),p.qZA(),p.YNc(26,W,2,1,"div",16),p.qZA(),p.qZA(),p.TgZ(27,"div",19),p.TgZ(28,"table",20,21),p.ynx(30,22),p.YNc(31,tt,2,0,"th",23),p.YNc(32,et,2,1,"td",24),p.BQk(),p.ynx(33,25),p.YNc(34,nt,2,0,"th",23),p.YNc(35,it,2,2,"td",24),p.BQk(),p.ynx(36,26),p.YNc(37,ot,2,0,"th",23),p.YNc(38,at,2,2,"td",24),p.BQk(),p.ynx(39,27),p.YNc(40,rt,2,0,"th",23),p.YNc(41,ut,2,2,"td",24),p.BQk(),p.ynx(42,28),p.YNc(43,st,2,0,"th",23),p.YNc(44,ct,2,2,"td",29),p.BQk(),p.ynx(45,30),p.YNc(46,lt,2,0,"th",23),p.YNc(47,dt,2,2,"td",24),p.BQk(),p.YNc(48,gt,1,0,"tr",31),p.YNc(49,pt,1,0,"tr",32),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){var n=p.MAs(9),i=p.MAs(20),o=p.MAs(25);p.Q6J("hidden",!e.permission.isView),p.xp6(13),p.Q6J("disabled",!e.permission.isAdd)("disabled",n.invalid),p.xp6(6),p.Q6J("ngModel",e.group.departmentID)("ngModelOptions",p.DdM(12,mt)),p.xp6(2),p.Q6J("ngForOf",e.departmentList),p.xp6(1),p.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),p.xp6(2),p.Q6J("ngModel",e.group.group),p.xp6(2),p.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),p.xp6(2),p.Q6J("dataSource",e.dataSourcePermission),p.xp6(20),p.Q6J("matHeaderRowDef",e.displayedColumns),p.xp6(1),p.Q6J("matRowDefColumns",e.displayedColumns)}},directives:[_._Y,_.JL,_.F,h.lW,m.rH,y.KE,y.hX,j.gD,_.Q7,_.JJ,_.On,w.sg,w.O5,b.Nt,_.Fj,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,D.ey,r.ge,r.ev,L.oG,r.XQ,r.Gk],styles:[""]}),e}(),ht=function t(){a(this,t)},Zt=o(45396),vt=["tblDepartment"];function yt(t,e){1&t&&(p.TgZ(0,"th",38),p._uU(1," Name "),p.qZA())}function bt(t,e){if(1&t&&(p.TgZ(0,"td",39),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ",n.name," ")}}function _t(t,e){1&t&&(p.TgZ(0,"th",38),p._uU(1," status "),p.qZA())}function wt(t,e){if(1&t&&(p.TgZ(0,"td",39),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.xp6(1),p.hij(" ","1"==n.status?"active":"inactive"," ")}}function At(t,e){1&t&&p._UZ(0,"th",38)}function Dt(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"td",40),p.TgZ(1,"div",41),p.TgZ(2,"button",42),p.NdJ("click",function(){var t=p.CHM(n).$implicit;return p.oxw().onClick_edit(t)}),p.TgZ(3,"i",28),p._uU(4,"edit"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}}function qt(t,e){1&t&&p._UZ(0,"tr",43)}function xt(t,e){1&t&&p._UZ(0,"tr",44)}var Tt=function(){return{standalone:!0}},kt=[{path:"",children:[{path:"groups",component:F},{path:"group-form",component:ft},{path:"department",component:function(){var e=function(e){t(o,e);var i=n(o);function o(t,e){var n;return a(this,o),(n=i.call(this,t)).route=t,n.depService=e,n.displayedColumns=["Name","Status","action"],n.dataSourceDepartment=new r.by,n.pageLength=0,n.pageSizeOptions=[50,100,300],n.criterial="",n.session=new d.E,n.newDepartment=new ht,n}return u(o,[{key:"ngOnInit",value:function(){var t=this.session.getLoginSession();this.permission=t.group.groupPermission.filter(function(t){return t.pageID==c.o.groupsPageID})[0],this.permission&&1==this.permission.isView?(this.getCountDepartment(),this.getListDepartment(0,50)):l.C.showNotification("Permission Denied",c.o.warningNotify)}},{key:"getCountDepartment",value:function(){}},{key:"getListDepartment",value:function(t,e){var n=this;this.depService.getListDepartmentsPagin(t,e).subscribe(function(t){console.log(t),t.status==s.G.success&&t.body.length>0&&(n.dataSourceDepartment.data=t.body)})}},{key:"paginatorEvent",value:function(t){this.getListDepartment(t.pageIndex*t.pageSize,t.pageSize)}},{key:"applyFilter",value:function(t){this.dataSourceDepartment.filter=t.trim().toLowerCase()}},{key:"addDepartment",value:function(){var t=this;this.newDepartment.name=this.departmentField,this.departmentField=void 0,this.depService.addDepartment(this.newDepartment).subscribe(function(e){e.status==s.G.success&&($("#modalAdding").modal("toggle"),t.newDepartment=new ht,t.getListDepartment(0,50))})}},{key:"onClick_edit",value:function(t){this.newDepartment=JSON.parse(JSON.stringify(t)),this.departmentField=t.name,$("#modalAdding").modal("toggle")}},{key:"change",value:function(t){this.newDepartment.status=1==t.checked?1:0}}]),o}(g.H);return e.\u0275fac=function(t){return new(t||e)(p.Y36(m.F0),p.Y36(R.n))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-department"]],viewQuery:function(t,e){var n;(1&t&&p.Gf(vt,5),2&t)&&(p.iGM(n=p.CRH())&&(e.tblUser=n.first))},features:[p.qOj],decls:57,vars:12,consts:[[1,"main-content","p-0","m-0",3,"hidden"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card","m-0"],[1,"card-body"],[1,"d-flex","justify-content-start"],[1,"subHeaderTitle"],[2,"margin-top","-8px"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","data-toggle","modal","data-target","#modalAdding",3,"disabled"],[1,"tbl-department","table-responsive"],["mat-table","",3,"dataSource","dataSourceChange"],["tblDepartment",""],["matColumnDef","Name"],["mat-header-cell","","class","text-primary",4,"matHeaderCellDef"],["mat-cell","","matRipple","",4,"matCellDef"],["matColumnDef","Status"],["matColumnDef","action"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","mat-row","mat-row","",4,"matRowDef","matRowDefColumns"],["id","modalAdding","tabindex","-1","role","dialog","aria-labelledby","modalAdding","aria-hidden","true",1,"modal","fade","modal-mini","modal-primary"],[1,"modal-dialog","modal-small"],[1,"modal-content"],[1,"modal-header"],["mat-button","","type","button","data-dismiss","modal","aria-hidden","true",1,"close"],[1,"material-icons"],[1,"modal-body"],[1,"col"],["matInput","","type","text","placeholder","Department",3,"ngModelOptions","ngModel","ngModelChange"],[1,"example-section"],[3,"checked","change"],[1,"modal-footer","justify-content-center"],["mat-raised-button","","type","button","data-dismiss","modal",1,"btn","btn-link"],["mat-raised-button","","type","button",1,"btn","btn-success","btn-link",3,"click"],[1,"ripple-container"],["mat-header-cell","",1,"text-primary"],["mat-cell","","matRipple",""],["mat-cell",""],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button",1,"btn","btn-success","btn-link","p-1","m-0",3,"click"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(t,e){if(1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div",5),p.TgZ(6,"div",6),p.TgZ(7,"h4",7),p._uU(8,"Department"),p.qZA(),p.TgZ(9,"div",8),p.TgZ(10,"button",9),p.TgZ(11,"mat-icon"),p._uU(12,"more_vert"),p.qZA(),p.qZA(),p.TgZ(13,"mat-menu",null,10),p.TgZ(15,"button",11),p.TgZ(16,"mat-icon"),p._uU(17,"dialpad"),p.qZA(),p.TgZ(18,"span"),p._uU(19,"New"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(20,"div",12),p.TgZ(21,"table",13,14),p.NdJ("dataSourceChange",function(t){return e.dataSourceDepartment=t}),p.ynx(23,15),p.YNc(24,yt,2,0,"th",16),p.YNc(25,bt,2,1,"td",17),p.BQk(),p.ynx(26,18),p.YNc(27,_t,2,0,"th",16),p.YNc(28,wt,2,1,"td",17),p.BQk(),p.ynx(29,19),p.YNc(30,At,1,0,"th",16),p.YNc(31,Dt,5,0,"td",20),p.BQk(),p.YNc(32,qt,1,0,"tr",21),p.YNc(33,xt,1,0,"tr",22),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(34,"div",23),p.TgZ(35,"div",24),p.TgZ(36,"div",25),p.TgZ(37,"div",26),p.TgZ(38,"button",27),p.TgZ(39,"i",28),p._uU(40,"clear"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(41,"div",29),p.TgZ(42,"div",2),p.TgZ(43,"div",30),p.TgZ(44,"mat-form-field"),p.TgZ(45,"input",31),p.NdJ("ngModelChange",function(t){return e.departmentField=t}),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(46,"div",2),p.TgZ(47,"div",30),p.TgZ(48,"section",32),p._uU(49),p.TgZ(50,"mat-slide-toggle",33),p.NdJ("change",function(t){return e.change(t)}),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(51,"div",34),p.TgZ(52,"button",35),p._uU(53,"Cancel"),p.qZA(),p.TgZ(54,"button",36),p.NdJ("click",function(){return e.addDepartment()}),p._uU(55,"Save "),p._UZ(56,"div",37),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){var n=p.MAs(14);p.Q6J("hidden",!e.permission.isView),p.xp6(10),p.Q6J("matMenuTriggerFor",n),p.xp6(5),p.Q6J("disabled",!e.permission.isAdd),p.xp6(6),p.Q6J("dataSource",e.dataSourceDepartment),p.xp6(11),p.Q6J("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),p.xp6(1),p.Q6J("matRowDefColumns",e.displayedColumns),p.xp6(12),p.Q6J("ngModelOptions",p.DdM(11,Tt))("ngModel",e.departmentField),p.xp6(4),p.hij(" ",""+e.newDepartment.status=="1"?"active":"inactive"," "),p.xp6(1),p.Q6J("checked",1==e.newDepartment.status)}},directives:[h.lW,Z.p6,v.Hw,Z.VK,Z.OP,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,y.KE,b.Nt,_.Fj,_.JJ,_.On,Zt.Rr,r.ge,r.ev,D.wG,r.XQ,r.Gk],styles:[".customerName[_ngcontent-%COMP%]{margin-bottom:0}.place[_ngcontent-%COMP%], phone[_ngcontent-%COMP%]{margin-bottom:0;color:gray;font-size:12px}.placeIconSize[_ngcontent-%COMP%]{font-size:14px!important}.phoneIconSize[_ngcontent-%COMP%]{font-size:14px!important}table[_ngcontent-%COMP%]{width:100%}.tbl-container[_ngcontent-%COMP%]{height:500px;overflow:auto}mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}.mat-row[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),e}()}]}],Ct=o(90670),Nt=o(47361),Pt=o(41335),St=function(){var t=function t(){a(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[w.ez,m.Bz.forChild(kt),_.u5,_.UX,Ct.TW,Nt.vO,Pt.q]]}),t}()},84934:function(t,e,n){n.d(e,{o:function(){return o}});var i,o=((i=o||(o={})).CKSNFILE="CKSNFILE",i.staff_position="staff_position",i.group_list="group_list",i.limit_file_upload="limit_file_upload",i.permission_page="permission_page",i.container_size="container_size",i.gw_unit_type="gw_unit_type",i.quantity_unit_type="quantity_unit_type",i.cbm_unit_type="cbm_unit_type",i.record_status="record_status",i.booking_mode="booking_mode",i.incoterm="incoterm",i.carrier="carrier",i.pod="pod",i.pol="pol",i.lcl="load_container_less",i.clientType="Client Type",i.border="border",i.operationgroup="1",i.tansportationgroup="2",i.brokergroup="3",i.seaPortType="1",i.driver="21",i.dem_due_warning="dem_due_warning",i.det_due_warning="det_due_warning",i[i.bookingsPageID=1]="bookingsPageID",i[i.bookingFormPageID=2]="bookingFormPageID",i[i.customersPageID=3]="customersPageID",i[i.customerFormPageID=4]="customerFormPageID",i[i.businessPageID=5]="businessPageID",i[i.businessFormPageID=6]="businessFormPageID",i[i.usersPageID=7]="usersPageID",i[i.userFormPageID=8]="userFormPageID",i[i.groupsPageID=9]="groupsPageID",i[i.groupFormPageID=10]="groupFormPageID",i[i.predataPageID=11]="predataPageID",i[i.predataFormPageID=12]="predataFormPageID",i[i.containerPageID=13]="containerPageID",i[i.department=14]="department",i[i.portSummary=15]="portSummary",i[i.portForm=16]="portForm",i[i.truckSummary=17]="truckSummary",i[i.truckForm=18]="truckForm",i[i.report=19]="report",i[i.dashboardID=20]="dashboardID",i[i.carrierID=21]="carrierID",i.billType="billType",i.warningNotify="warning",i.infoNotify="info",i.successNotify="success",i.dangerNotify="danger",i.roseNotify="rose",i.primaryNotify="primary",i[i.type_of_shipper_exporter_seller=84]="type_of_shipper_exporter_seller",i[i.type_of_consignee=85]="type_of_consignee",i[i.type_of_notify_party=86]="type_of_notify_party",i[i.type_of_customer=87]="type_of_customer",i[i.group_operation=1]="group_operation",i[i.group_transportation=2]="group_transportation",i[i.group_admin=5]="group_admin",i.containerStatus="containerStatus",i[i.containerStatus_DONE=93]="containerStatus_DONE",i.booking_status="booking_status",i[i.booking_status_new=36]="booking_status_new",i[i.booking_status_reject=39]="booking_status_reject",i[i.booking_status_done=37]="booking_status_done",i[i.booking_status_pending=38]="booking_status_pending",i[i.allValue=0]="allValue",i.all="All",i.multiDropStatus="MultiDropStatus",o)},40355:function(t,e,n){n.d(e,{G:function(){return o}});var i,o=((i=o||(o={})).success="success",i.server_error="server_error",i.logic_error="logic_error",o)},23235:function(t,e,n){n.d(e,{C:function(){return i}});var i=function(){function t(){a(this,t)}return u(t,null,[{key:"showNotification",value:function(t,e){Math.floor(1*Math.random()+1),$.notify({icon:"notifications",message:t},{type:e,timer:5e3,placement:{from:"bottom",align:"right"},template:'<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert"><button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button><i class="material-icons" data-notify="icon">notifications</i> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'})}},{key:"UUID",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),t}()}}])}();