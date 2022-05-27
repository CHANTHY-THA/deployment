"use strict";(self.webpackChunkmaterial_dashboard_pro_angular=self.webpackChunkmaterial_dashboard_pro_angular||[]).push([[767],{9767:function(e,t,n){n.r(t),n.d(t,{UserModule:function(){return Ne}});var i=n(38583),o=n(39895),r=n(3679),a=n(90670),s=n(47361),d=n(41335),u=n(32789),g=n(40355),l=n(927),c=n(23235),p=n(84934),m=n(61176),h=n(34958),f=n(37716),Z=n(9709),M=n(77001),v=n(22238),A=n(51095),b=n(33935),q=n(76627),T=n(98295),_=n(83166),x=n(99692),C=n(72458);const y=["tblUser"];function D(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"button",33),f.NdJ("click",function(){f.CHM(e);const t=f.oxw();return t.refreshData(t.refresh)})("click",function(){return f.CHM(e),f.oxw().criterial=""}),f.TgZ(1,"mat-icon"),f._uU(2,"close"),f.qZA(),f.qZA()}}function N(e,t){1&e&&(f.TgZ(0,"th",34),f._uU(1," ID "),f.qZA())}function I(e,t){if(1&e&&(f.TgZ(0,"td",35),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.hij(" ",e.ID," ")}}function w(e,t){1&e&&(f.TgZ(0,"th",34),f._uU(1," Name "),f.qZA())}function J(e,t){if(1&e&&(f.TgZ(0,"td",35),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.hij(" ",e.lastName+" "+e.firstName," ")}}function S(e,t){1&e&&(f.TgZ(0,"th",34),f._uU(1," Username "),f.qZA())}function k(e,t){if(1&e&&(f.TgZ(0,"td",35),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.hij(" ",e.userName," ")}}function U(e,t){1&e&&(f.TgZ(0,"th",34),f._uU(1," Telephone1 "),f.qZA())}function Q(e,t){if(1&e&&(f.TgZ(0,"td",35),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.hij(" ",e.telephone1," ")}}function P(e,t){1&e&&(f.TgZ(0,"th",34),f._uU(1," telephone2 "),f.qZA())}function Y(e,t){if(1&e&&(f.TgZ(0,"td",35),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.hij(" ",e.telephone2," ")}}function F(e,t){1&e&&f._UZ(0,"th",34)}function O(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"button",40),f.NdJ("click",function(){f.CHM(e);const t=f.oxw().$implicit;return f.oxw().onClick_edit(t)}),f.TgZ(1,"i",41),f._uU(2,"edit"),f.qZA(),f.qZA()}if(2&e){const e=f.oxw(2);f.Q6J("hidden",!e.permission.isUpdate)}}function H(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"button",42),f.NdJ("click",function(){f.CHM(e);const t=f.oxw().$implicit;return f.oxw().onClick_remove(t)}),f.TgZ(1,"i",41),f._uU(2,"delete"),f.qZA(),f.qZA()}if(2&e){const e=f.oxw(2);f.Q6J("hidden",!e.permission.isDelete)}}function L(e,t){if(1&e&&(f.TgZ(0,"td",36),f.TgZ(1,"div",37),f.YNc(2,O,3,1,"button",38),f.YNc(3,H,3,1,"button",39),f.qZA(),f.qZA()),2&e){const e=f.oxw();f.xp6(2),f.Q6J("ngIf",null!=e.permission),f.xp6(1),f.Q6J("ngIf",null!=e.permission)}}function E(e,t){1&e&&f._UZ(0,"tr",43)}function z(e,t){1&e&&f._UZ(0,"tr",44)}let G=(()=>{class e extends m.H{constructor(e,t,n,i){super(e),this.router=e,this.userService=t,this.matSnackbar=n,this.dialog=i,this.displayedColumns=["ID","Name","Username","Telephone1","Telephone2","action"],this.userList=[],this.dataSourceUser=new u.by,this.pageLength=0,this.pageSizeOptions=[50,100,300],this.criterial="",this.session=new l.E}ngOnInit(){this.dataSourceUser.data=[];let e=this.session.getLoginSession();this.permission=e.group.groupPermission.filter(e=>e.pageID==p.o.usersPageID)[0],this.permission&&1==this.permission.isView?(this.userService.getCountUsers().subscribe(e=>{e.status==g.G.success&&(this.pageLength=e.body[0])}),this.userService.getListUsers(0,50).subscribe(e=>{e.status==g.G.success&&(this.dataSourceUser.data=e.body)})):c.C.showNotification("Permission Denied",p.o.warningNotify)}paginatorEvent(e){let t=e.pageIndex*e.pageSize;console.log(t+" page index and page size "+e.pageSize),this.userService.getListUsers(t,e.pageSize).subscribe(e=>{e.status==g.G.success&&(this.dataSourceUser.data=e.body,console.log(e.body))})}onClick_New(){let e={queryParams:{element:JSON.stringify({isEdit:0})}};this.router.navigate(["./user-form"],e)}onClick_edit(e){let t={queryParams:{element:JSON.stringify({ID:e.ID,isEdit:"1"})}};this.router.navigate(["./user-form"],t)}onClick_remove(e){this.dialog.open(h.K,{width:"270px",data:{message:"Are you sure ?",title:"Remove"}}).afterClosed().subscribe(t=>{1==t&&this.userService.removeUserByID(e.ID).subscribe(t=>{t.status==g.G.success?(this.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3}),this.dataSourceUser.data.splice(this.dataSourceUser.data.indexOf(e),1),this.tblUser.renderRows()):this.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3})})})}applyFilter(e){this.dataSourceUser.filter=e}refreshData(e){this.applyFilter(e)}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(o.F0),f.Y36(Z.K),f.Y36(M.ux),f.Y36(v.uw))},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-user"]],viewQuery:function(e,t){if(1&e&&f.Gf(y,5),2&e){let e;f.iGM(e=f.CRH())&&(t.tblUser=e.first)}},features:[f.qOj],decls:52,vars:12,consts:[[1,"main-content","p-0","m-0",3,"hidden"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card","m-0"],[1,"card-body"],[1,"d-flex","justify-content-start"],[1,"subHeaderTitle"],[2,"margin-top","-8px"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"disabled","click"],[1,"col-md-2","mrtb-0","pltb-0"],[1,"fullWidth"],["matPrefix",""],["matInput","","type","text","placeholder","search","name","criterial",3,"ngModel","keyup","ngModelChange"],["class","ml-3","mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-md-10"],[3,"length","pageSize","pageSizeOptions","page"],[1,"tbl-container","table-responsive"],["mat-table","",3,"dataSource","dataSourceChange"],["tblUser",""],["matColumnDef","ID"],["mat-header-cell","","class","text-primary",4,"matHeaderCellDef"],["mat-cell","","matRipple","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Username"],["matColumnDef","Telephone1"],["matColumnDef","Telephone2"],["matColumnDef","action"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","mat-row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",1,"ml-3",3,"click"],["mat-header-cell","",1,"text-primary"],["mat-cell","","matRipple",""],["mat-cell",""],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button","class","btn btn-success btn-link p-1 m-0",3,"hidden","click",4,"ngIf"],["mat-raised-button","","type","button","class","btn btn-danger btn-link p-0 m-0",3,"hidden","click",4,"ngIf"],["mat-raised-button","","type","button",1,"btn","btn-success","btn-link","p-1","m-0",3,"hidden","click"],[1,"material-icons"],["mat-raised-button","","type","button",1,"btn","btn-danger","btn-link","p-0","m-0",3,"hidden","click"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(e,t){if(1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f.TgZ(5,"div",5),f.TgZ(6,"div",6),f.TgZ(7,"h4",7),f._uU(8,"User"),f.qZA(),f.TgZ(9,"div",8),f.TgZ(10,"button",9),f.TgZ(11,"mat-icon"),f._uU(12,"more_vert"),f.qZA(),f.qZA(),f.TgZ(13,"mat-menu",null,10),f.TgZ(15,"button",11),f.NdJ("click",function(){return t.onClick_New()}),f.TgZ(16,"mat-icon"),f._uU(17,"dialpad"),f.qZA(),f.TgZ(18,"span"),f._uU(19,"New"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(20,"div",2),f.TgZ(21,"div",12),f.TgZ(22,"mat-form-field",13),f.TgZ(23,"mat-icon",14),f._uU(24,"search"),f.qZA(),f.TgZ(25,"input",15),f.NdJ("keyup",function(e){return t.applyFilter(e.target.value)})("ngModelChange",function(e){return t.criterial=e}),f.qZA(),f.YNc(26,D,3,0,"button",16),f.qZA(),f.qZA(),f.TgZ(27,"div",17),f.TgZ(28,"mat-paginator",18),f.NdJ("page",function(e){return t.paginatorEvent(e)}),f.qZA(),f.qZA(),f.qZA(),f.TgZ(29,"div",19),f.TgZ(30,"table",20,21),f.NdJ("dataSourceChange",function(e){return t.dataSourceUser=e}),f.ynx(32,22),f.YNc(33,N,2,0,"th",23),f.YNc(34,I,2,1,"td",24),f.BQk(),f.ynx(35,25),f.YNc(36,w,2,0,"th",23),f.YNc(37,J,2,1,"td",24),f.BQk(),f.ynx(38,26),f.YNc(39,S,2,0,"th",23),f.YNc(40,k,2,1,"td",24),f.BQk(),f.ynx(41,27),f.YNc(42,U,2,0,"th",23),f.YNc(43,Q,2,1,"td",24),f.BQk(),f.ynx(44,28),f.YNc(45,P,2,0,"th",23),f.YNc(46,Y,2,1,"td",24),f.BQk(),f.ynx(47,29),f.YNc(48,F,1,0,"th",23),f.YNc(49,L,4,2,"td",30),f.BQk(),f.YNc(50,E,1,0,"tr",31),f.YNc(51,z,1,0,"tr",32),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&e){const e=f.MAs(14);f.Q6J("hidden",!t.permission.isView),f.xp6(10),f.Q6J("matMenuTriggerFor",e),f.xp6(5),f.Q6J("disabled",!t.permission.isAdd),f.xp6(10),f.Q6J("ngModel",t.criterial),f.xp6(1),f.Q6J("ngIf",t.criterial),f.xp6(2),f.Q6J("length",t.pageLength)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions),f.xp6(2),f.Q6J("dataSource",t.dataSourceUser),f.xp6(20),f.Q6J("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),f.xp6(1),f.Q6J("matRowDefColumns",t.displayedColumns)}},directives:[A.lW,b.p6,q.Hw,b.VK,b.OP,T.KE,T.qo,_.Nt,r.Fj,r.JJ,r.On,i.O5,x.NW,u.BZ,u.w1,u.fO,u.Dz,u.as,u.nj,T.R9,u.ge,u.ev,C.wG,u.XQ,u.Gk],styles:[".customerName[_ngcontent-%COMP%]{margin-bottom:0}.place[_ngcontent-%COMP%], phone[_ngcontent-%COMP%]{margin-bottom:0;color:gray;font-size:12px}.placeIconSize[_ngcontent-%COMP%]{font-size:14px!important}.phoneIconSize[_ngcontent-%COMP%]{font-size:14px!important}table[_ngcontent-%COMP%]{width:100%}@media screen and (max-height: 1000px){.tbl-container[_ngcontent-%COMP%]{height:700px;overflow:auto}}@media screen and (max-height: 900px){.tbl-container[_ngcontent-%COMP%]{height:425px;overflow:auto}}mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}.mat-row[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),e})();var B=n(37453),j=n(89711),V=n(51440),R=n(37320),$=n(10037),K=n(49206),W=n(65939),X=n(82613),ee=n(43220),te=n(67441);function ne(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," last name is required. "),f.qZA())}function ie(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,ne,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(4);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function oe(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," first Name is required. "),f.qZA())}function re(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,oe,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(8);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function ae(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," date of Birth is required. "),f.qZA())}function se(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,ae,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(19);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function de(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"mat-option",63),f.NdJ("valueChange",function(t){return f.CHM(e).$implicit.ID=t}),f._uU(1),f.qZA()}if(2&e){const e=t.$implicit;f.Q6J("value",e.ID),f.xp6(1),f.hij("",e.value," ")}}function ue(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," position is required. "),f.qZA())}function ge(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,ue,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(37);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function le(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," date of join is required. "),f.qZA())}function ce(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,le,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(42);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function pe(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," length of service is required. "),f.qZA())}function me(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,pe,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(49);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function he(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"div",4),f.TgZ(1,"div",18),f.TgZ(2,"mat-form-field",19),f.TgZ(3,"input",20,21),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.lastName=t}),f.qZA(),f.YNc(5,ie,2,1,"div",22),f.qZA(),f.TgZ(6,"mat-form-field"),f.TgZ(7,"input",23,24),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.firstName=t}),f.qZA(),f.YNc(9,re,2,1,"div",22),f.qZA(),f.TgZ(10,"label",25),f._uU(11,"Gender"),f.qZA(),f.TgZ(12,"mat-radio-group",26),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.gender=t}),f.TgZ(13,"mat-radio-button",27),f._uU(14,"Female"),f.qZA(),f.TgZ(15,"mat-radio-button",28),f._uU(16,"Male"),f.qZA(),f.qZA(),f.TgZ(17,"mat-form-field"),f.TgZ(18,"input",29,30),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.dob=t})("focus",function(){return f.CHM(e),f.MAs(22).open()}),f.qZA(),f._UZ(20,"mat-datepicker-toggle",31),f._UZ(21,"mat-datepicker",32,33),f.YNc(23,se,2,1,"div",22),f.qZA(),f.TgZ(24,"mat-form-field"),f.TgZ(25,"input",34,35),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.telephone1=t}),f.qZA(),f.qZA(),f.TgZ(27,"mat-form-field"),f.TgZ(28,"input",36,37),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.telephone2=t}),f.qZA(),f.qZA(),f.TgZ(30,"mat-form-field"),f.TgZ(31,"input",38,39),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.email=t}),f.qZA(),f.qZA(),f.TgZ(33,"mat-form-field"),f.TgZ(34,"mat-label"),f._uU(35,"Position"),f.qZA(),f.TgZ(36,"mat-select",40,41),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.positionID=t}),f.YNc(38,de,2,2,"mat-option",42),f.qZA(),f.YNc(39,ge,2,1,"div",22),f.qZA(),f.TgZ(40,"mat-form-field"),f.TgZ(41,"input",43,44),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.dateJoined=t})("focus",function(){return f.CHM(e),f.MAs(45).open()})("dateChange",function(){return f.CHM(e),f.oxw().onDateJoinChange()}),f.qZA(),f._UZ(43,"mat-datepicker-toggle",31),f._UZ(44,"mat-datepicker",null,45),f.YNc(46,ce,2,1,"div",22),f.qZA(),f.TgZ(47,"mat-form-field"),f.TgZ(48,"input",46,47),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.lengthOfService=t}),f.qZA(),f.YNc(50,me,2,1,"div",22),f.qZA(),f.qZA(),f.TgZ(51,"div",48),f.TgZ(52,"mat-form-field"),f.TgZ(53,"input",49,50),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.streetNo=t}),f.qZA(),f.qZA(),f.TgZ(55,"mat-form-field"),f.TgZ(56,"input",51,52),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.homeNo=t}),f.qZA(),f.qZA(),f.TgZ(58,"mat-form-field"),f.TgZ(59,"input",53,54),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.province=t}),f.qZA(),f.qZA(),f.TgZ(61,"mat-form-field"),f.TgZ(62,"input",55,56),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.district=t}),f.qZA(),f.qZA(),f.TgZ(64,"mat-form-field"),f.TgZ(65,"input",57,58),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.commune=t}),f.qZA(),f.qZA(),f.TgZ(67,"mat-form-field"),f.TgZ(68,"input",59,60),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.village=t}),f.qZA(),f.qZA(),f.qZA(),f.qZA()}if(2&e){const e=f.MAs(4),t=f.MAs(8),n=f.MAs(19),i=f.MAs(22),o=f.MAs(37),r=f.MAs(42),a=f.MAs(45),s=f.MAs(49),d=f.oxw();f.xp6(3),f.Q6J("ngModel",d.user.lastName),f.xp6(2),f.Q6J("ngIf",e.invalid&&(e.dirty||e.touched)),f.xp6(2),f.Q6J("ngModel",d.user.firstName),f.xp6(2),f.Q6J("ngIf",t.invalid&&(t.dirty||t.touched)),f.xp6(3),f.Q6J("ngModel",d.user.gender),f.xp6(1),f.Q6J("checked",!0),f.xp6(5),f.Q6J("ngModel",d.user.dob)("matDatepicker",i),f.xp6(2),f.Q6J("for",i),f.xp6(1),f.Q6J("startAt",d.startDate),f.xp6(2),f.Q6J("ngIf",n.invalid&&(n.dirty||n.touched)),f.xp6(2),f.Q6J("ngModel",d.user.telephone1),f.xp6(3),f.Q6J("ngModel",d.user.telephone2),f.xp6(3),f.Q6J("ngModel",d.user.email),f.xp6(5),f.Q6J("ngModel",d.user.positionID),f.xp6(2),f.Q6J("ngForOf",d.positionTypeList),f.xp6(1),f.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),f.xp6(2),f.Q6J("ngModel",d.user.dateJoined)("matDatepicker",a),f.xp6(2),f.Q6J("for",a),f.xp6(3),f.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),f.xp6(2),f.Q6J("ngModel",d.user.lengthOfService),f.xp6(2),f.Q6J("ngIf",s.invalid&&(s.dirty||s.touched)),f.xp6(3),f.Q6J("ngModel",d.user.streetNo),f.xp6(3),f.Q6J("ngModel",d.user.homeNo),f.xp6(3),f.Q6J("ngModel",d.user.province),f.xp6(3),f.Q6J("ngModel",d.user.district),f.xp6(3),f.Q6J("ngModel",d.user.commune),f.xp6(3),f.Q6J("ngModel",d.user.village)}}function fe(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," user name is required. "),f.qZA())}function Ze(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,fe,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(4);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function Me(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," user password is required. "),f.qZA())}function ve(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,Me,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(10);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function Ae(e,t){if(1&e&&(f.TgZ(0,"mat-option",77),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.Q6J("value",e.ID),f.xp6(1),f.Oqu(e.name)}}function be(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," department is required. "),f.qZA())}function qe(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,be,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(21);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function Te(e,t){if(1&e&&(f.TgZ(0,"mat-option",77),f._uU(1),f.qZA()),2&e){const e=t.$implicit;f.Q6J("value",e.ID),f.xp6(1),f.Oqu(e.group)}}function _e(e,t){1&e&&(f.TgZ(0,"div"),f._uU(1," group is required. "),f.qZA())}function xe(e,t){if(1&e&&(f.TgZ(0,"div",61),f.YNc(1,_e,2,0,"div",62),f.qZA()),2&e){f.oxw();const e=f.MAs(30);f.xp6(1),f.Q6J("ngIf",e.errors.required)}}function Ce(e,t){if(1&e){const e=f.EpF();f.TgZ(0,"div",4),f.TgZ(1,"div",64),f.TgZ(2,"mat-form-field",19),f.TgZ(3,"input",65,66),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.userName=t}),f.qZA(),f.YNc(5,Ze,2,1,"div",22),f.qZA(),f.qZA(),f.qZA(),f.TgZ(6,"div",4),f.TgZ(7,"div",64),f.TgZ(8,"mat-form-field"),f.TgZ(9,"input",67,68),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.password=t}),f.qZA(),f.TgZ(11,"button",69),f.NdJ("click",function(){f.CHM(e);const t=f.oxw();return t.hide=!t.hide}),f.TgZ(12,"mat-icon"),f._uU(13),f.qZA(),f.qZA(),f.YNc(14,ve,2,1,"div",22),f.qZA(),f.qZA(),f.qZA(),f.TgZ(15,"div",4),f.TgZ(16,"div",64),f.TgZ(17,"mat-form-field"),f.TgZ(18,"mat-label"),f._uU(19,"Department"),f.qZA(),f.TgZ(20,"mat-select",70,71),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().departmentID=t})("ngModelChange",function(){return f.CHM(e),f.oxw().onDepartmentSelectChanged()}),f.YNc(22,Ae,2,2,"mat-option",72),f.qZA(),f.YNc(23,qe,2,1,"div",22),f.qZA(),f.qZA(),f.qZA(),f.TgZ(24,"div",4),f.TgZ(25,"div",73),f.TgZ(26,"mat-form-field",74),f.TgZ(27,"mat-label"),f._uU(28,"group"),f.qZA(),f.TgZ(29,"mat-select",75,76),f.NdJ("ngModelChange",function(t){return f.CHM(e),f.oxw().user.groupID=t}),f.YNc(31,Te,2,2,"mat-option",72),f.qZA(),f.YNc(32,xe,2,1,"div",22),f.qZA(),f.qZA(),f.qZA()}if(2&e){const e=f.MAs(4),t=f.MAs(10),n=f.MAs(21),i=f.MAs(30),o=f.oxw();f.xp6(3),f.Q6J("ngModel",o.user.userName),f.xp6(2),f.Q6J("ngIf",e.invalid&&(e.dirty||e.touched)),f.xp6(4),f.Q6J("type",o.hide?"password":"text")("ngModel",o.user.password),f.xp6(2),f.uIk("aria-label","Hide password")("aria-pressed",o.hide),f.xp6(2),f.Oqu(o.hide?"visibility_off":"visibility"),f.xp6(1),f.Q6J("ngIf",t.invalid&&(t.dirty||t.touched)),f.xp6(6),f.Q6J("ngModel",o.departmentID),f.xp6(2),f.Q6J("ngForOf",o.departmentList),f.xp6(1),f.Q6J("ngIf",n.invalid&&(n.dirty||n.touched)),f.xp6(6),f.Q6J("ngModel",o.user.groupID),f.xp6(2),f.Q6J("ngForOf",o.groupList),f.xp6(1),f.Q6J("ngIf",i.invalid&&(i.dirty||i.touched))}}const ye=[{path:"",children:[{path:"users",component:G},{path:"user-form",component:(()=>{class e extends m.H{constructor(e,t,n,i,o,r,a,s,d){super(a),this.datePip=e,this.userService=t,this.predataService=n,this.groupService=i,this.departmentService=o,this.activateRoute=r,this.router=a,this.matSnackbar=s,this.dialog=d,this.hide=!0,this.user=new B.T,this.session=new l.E}ngOnInit(){let e=this.session.getLoginSession();this.permission=e.group.groupPermission.filter(e=>e.pageID==p.o.userFormPageID)[0],this.permission&&1==this.permission.isView?(this.isEdit="0",this.userEditor=null,this.getStaffPosition(),this.getListDepartments(),this.onLoadData()):c.C.showNotification("Permission Denied",p.o.warningNotify)}onClick_Save(){this.dialog.open(h.K,{width:"270px",data:{message:"Are you sure ?",title:"Save"}}).afterClosed().subscribe(e=>{if(1==e){try{this.user.group=this.groupList.filter(e=>e.ID.toString().includes(this.user.groupID.toString()))[0]}catch(t){return void this.matSnackbar.open("Invalid group","Error",{duration:3e3})}this.user.dob=this.datePip.transform(this.user.dob),this.user.dateJoined=this.datePip.transform(this.user.dateJoined);let e=JSON.stringify(this.user.password);this.user.password=j.j.encrypt_req(this.user.password),this.userService.addUsers(this.user).subscribe(t=>{this.user.password=e,t.status==g.G.success?(this.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3}),this.router.navigate(["/users"])):(null!=this.user.dob&&(this.user.dob=new Date(this.user.dob)),null!=this.user.dateJoined&&(this.user.dateJoined=new Date(this.user.dateJoined)),this.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3}))})}else console.log("Data is cancel")})}onLoadData(){this.activateRoute.queryParams.subscribe(e=>{if(e.element){let t=JSON.parse(e.element);"1"==t.isEdit&&(this.isEdit="1",this.userService.findUserByID(t.ID).subscribe(e=>{e.status==g.G.success&&e.body.length>0&&(this.user=e.body[0],this.onDateJoinChange(),this.departmentID=this.user.group.departmentID,this.getGroupByDeparmentID(this.departmentID))}))}})}userTypeSelectionChanged(e){console.log(e)}onDepartmentSelectChanged(){this.getGroupByDeparmentID(this.departmentID)}getStaffPosition(){this.predataService.getPreDefinedsByCriterial(p.o.staff_position).subscribe(e=>{e.status==g.G.success&&e.body.length>0&&(this.positionTypeList=e.body)})}getListDepartments(){this.departmentService.getListDepartments().subscribe(e=>{e.status==g.G.success&&e.status.length>0&&(this.departmentList=e.body,console.log(this.departmentList))})}getGroupByDeparmentID(e){this.groupService.getGroupByDepartmentID(e).subscribe(e=>{e.status==g.G.success&&e.status.length>0&&(this.groupList=e.body,this.user.group?(this.user.group=this.groupList.filter(e=>e.ID.toString().includes(this.user.groupID.toString()))[0],this.user.groupID=this.user.group.ID):this.user.groupID=this.groupList[0].ID)})}onDateJoinChange(){try{if((new Date).getTime()>new Date(this.user.dateJoined).getTime()){let e=this.datePip.dateDiff(new Date(this.user.dateJoined),new Date);if(e>=365){let t=Math.floor(e/365),n=(new Date).getMonth()-this.user.dateJoined.getMonth();this.user.lengthOfService=t+"years "+Math.floor(n)+" months "}else e/=30,this.user.lengthOfService=e<1?30*e+" days":Math.round(e)+" months"}}catch(e){console.log(e),this.user.lengthOfService="invalid length of service"}}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(V.E),f.Y36(Z.K),f.Y36(R.y),f.Y36($.l),f.Y36(K.n),f.Y36(o.gz),f.Y36(o.F0),f.Y36(M.ux),f.Y36(v.uw))},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-user-form"]],features:[f.qOj],decls:34,vars:6,consts:[[1,"m-2",2,"overflow-x","hidden",3,"hidden"],["userForm","ngForm"],[1,"main-content","p-0","m-0"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"d-flex","justify-content-start"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"hidden","disabled","click"],["mat-menu-item",""],["label","User info"],["matTabContent",""],["label","User Grant"],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button",1,"btn","btn-primary","btn-sm",3,"hidden","disabled","click"],[1,"col-md-6","col-sm-6"],[1,"mt-4"],["matInput","","name","lastName","id","lastName","placeholder","last Name (En)",3,"ngModel","ngModelChange"],["lastName","ngModel"],["class","alert alert-danger",4,"ngIf"],["matInput","","name","firstName","id","firstName","placeholder","first Name (En)",3,"ngModel","ngModelChange"],["firstName","ngModel"],["id","example-radio-group-label",1,"ml-2","mr-2"],["name","gender","aria-label","Select Gender",3,"ngModel","ngModelChange"],["value","1",1,"mr-2",3,"checked"],["value","2"],["id","dob","name","dob","placeholder","Date of Birth","matInput","",3,"ngModel","matDatepicker","ngModelChange","focus"],["dob","ngModel"],["matSuffix","",3,"for"],[3,"startAt"],["picker",""],["matInput","","name","telephone1","id","telephone1","placeholder","Telephone 1",3,"ngModel","ngModelChange"],["telephone1","ngModel"],["matInput","","name","telephone2","id","telephone2","placeholder","Telephone 2",3,"ngModel","ngModelChange"],["telephone2","ngModel"],["matInput","","name","email","id","email","placeholder","Email",3,"ngModel","ngModelChange"],["email","ngModel"],["name","positionID","id","positionID",3,"ngModel","ngModelChange"],["positionID","ngModel"],[3,"value","valueChange",4,"ngFor","ngForOf"],["id","dateofjoin","name","dateJoined","placeholder","Date of Join","matInput","",3,"ngModel","matDatepicker","ngModelChange","focus","dateChange"],["dateJoined","ngModel"],["pickerDateJoin",""],["matInput","","name","user.lengthOfService","id","lengthOfService","placeholder","Length of service",3,"ngModel","ngModelChange"],["lengthOfService","ngModel"],[1,"col-md-6","col-sm-6","mt-4"],["matInput","","name","streetNo","id","streetNo","placeholder","Street No",3,"ngModel","ngModelChange"],["streetNo","ngModel"],["matInput","","name","homeNo","id","homeNo","placeholder","homeNo",3,"ngModel","ngModelChange"],["homeNo","ngModel"],["matInput","","id","province","name","province","id","province","placeholder","province",3,"ngModel","ngModelChange"],["province","ngModel"],["matInput","","name","district","id","district","placeholder","district",3,"ngModel","ngModelChange"],["district","ngModel"],["matInput","","name","commune","id","commune","placeholder","commune",3,"ngModel","ngModelChange"],["commune","ngModel"],["matInput","","name","village","id","village","placeholder","Village",3,"ngModel","ngModelChange"],["village","ngModel"],[1,"alert","alert-danger"],[4,"ngIf"],[3,"value","valueChange"],[1,"col-md-6","col-sm-12"],["matInput","","id","userName","name","userName","placeholder","user name",3,"ngModel","ngModelChange"],["userName","ngModel"],["matInput","","id","password","name","password","placeholder","password",3,"type","ngModel","ngModelChange"],["password","ngModel"],["mat-icon-button","","matSuffix","",3,"click"],["name","departmentID",3,"ngModel","ngModelChange"],["department","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"w-100"],["name","groupID",3,"ngModel","ngModelChange"],["group","ngModel"],[3,"value"]],template:function(e,t){if(1&e&&(f.TgZ(0,"form",0,1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f.TgZ(5,"div",5),f.TgZ(6,"div",6),f.TgZ(7,"div",7),f.TgZ(8,"div",8),f._UZ(9,"div"),f.TgZ(10,"div"),f.TgZ(11,"button",9),f.TgZ(12,"mat-icon"),f._uU(13,"more_vert"),f.qZA(),f.qZA(),f.TgZ(14,"mat-menu",null,10),f.TgZ(16,"button",11),f.NdJ("click",function(){return t.onClick_Save()}),f.TgZ(17,"mat-icon"),f._uU(18,"add"),f.qZA(),f.TgZ(19,"span"),f._uU(20,"Save"),f.qZA(),f.qZA(),f.TgZ(21,"button",12),f.TgZ(22,"mat-icon"),f._uU(23,"cancel"),f.qZA(),f.TgZ(24,"span"),f._uU(25,"cancel"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(26,"mat-tab-group"),f.TgZ(27,"mat-tab",13),f.YNc(28,he,70,29,"ng-template",14),f.qZA(),f.TgZ(29,"mat-tab",15),f.YNc(30,Ce,33,14,"ng-template",14),f.qZA(),f.qZA(),f.TgZ(31,"div",16),f.TgZ(32,"button",17),f.NdJ("click",function(){return t.onClick_Save()}),f._uU(33," Save "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&e){const e=f.MAs(1),n=f.MAs(15);f.Q6J("hidden",!t.permission.isView),f.xp6(11),f.Q6J("matMenuTriggerFor",n),f.xp6(5),f.Q6J("hidden",!t.permission.isAdd)("disabled",e.invalid),f.xp6(16),f.Q6J("hidden",!t.permission.isAdd)("disabled",e.invalid)}},directives:[r._Y,r.JL,r.F,A.lW,b.p6,q.Hw,b.VK,b.OP,W.SP,W.uX,W.Vc,T.KE,_.Nt,r.Fj,r.JJ,r.On,i.O5,X.VQ,X.U0,ee.hl,ee.nW,T.R9,ee.Mq,T.hX,te.gD,i.sg,C.ey],styles:["mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}"]}),e})()}]}];var De=n(79019);let Ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({providers:[{provide:C._A,useClass:De.B},{provide:C.sG,useValue:De.F}],imports:[[i.ez,o.Bz.forChild(ye),r.u5,r.UX,a.TW,s.vO,d.q]]}),e})()},84934:function(e,t,n){n.d(t,{o:function(){return i}});var i=(()=>{return(e=i||(i={})).CKSNFILE="CKSNFILE",e.staff_position="staff_position",e.group_list="group_list",e.limit_file_upload="limit_file_upload",e.permission_page="permission_page",e.container_size="container_size",e.gw_unit_type="gw_unit_type",e.quantity_unit_type="quantity_unit_type",e.cbm_unit_type="cbm_unit_type",e.record_status="record_status",e.booking_mode="booking_mode",e.incoterm="incoterm",e.carrier="carrier",e.pod="pod",e.pol="pol",e.lcl="load_container_less",e.clientType="Client Type",e.border="border",e.operationgroup="1",e.tansportationgroup="2",e.brokergroup="3",e.seaPortType="1",e.driver="21",e.dem_due_warning="dem_due_warning",e.det_due_warning="det_due_warning",e[e.bookingsPageID=1]="bookingsPageID",e[e.bookingFormPageID=2]="bookingFormPageID",e[e.customersPageID=3]="customersPageID",e[e.customerFormPageID=4]="customerFormPageID",e[e.businessPageID=5]="businessPageID",e[e.businessFormPageID=6]="businessFormPageID",e[e.usersPageID=7]="usersPageID",e[e.userFormPageID=8]="userFormPageID",e[e.groupsPageID=9]="groupsPageID",e[e.groupFormPageID=10]="groupFormPageID",e[e.predataPageID=11]="predataPageID",e[e.predataFormPageID=12]="predataFormPageID",e[e.containerPageID=13]="containerPageID",e[e.department=14]="department",e[e.portSummary=15]="portSummary",e[e.portForm=16]="portForm",e[e.truckSummary=17]="truckSummary",e[e.truckForm=18]="truckForm",e[e.report=19]="report",e[e.dashboardID=20]="dashboardID",e[e.carrierID=21]="carrierID",e.billType="billType",e.warningNotify="warning",e.infoNotify="info",e.successNotify="success",e.dangerNotify="danger",e.roseNotify="rose",e.primaryNotify="primary",e[e.type_of_shipper_exporter_seller=84]="type_of_shipper_exporter_seller",e[e.type_of_consignee=85]="type_of_consignee",e[e.type_of_notify_party=86]="type_of_notify_party",e[e.type_of_customer=87]="type_of_customer",e[e.group_operation=1]="group_operation",e[e.group_transportation=2]="group_transportation",e[e.group_admin=5]="group_admin",e.containerStatus="containerStatus",e[e.containerStatus_DONE=93]="containerStatus_DONE",e.booking_status="booking_status",e[e.booking_status_new=36]="booking_status_new",e[e.booking_status_done=37]="booking_status_done",e[e.allValue=0]="allValue",e.all="All",e.multiDropStatus="MultiDropStatus",i;var e})()},37320:function(e,t,n){n.d(t,{y:function(){return d}});var i=n(65136),o=n(82327),r=n(37716),a=n(91841),s=n(39895);let d=(()=>{class e extends i.b{constructor(e,t){super(t),this.http=e}getPreDefinedsByCriterial(e){return this.http.post(o.V.getPredataByCriterial,{criterial:e})}addPreData(e){return this.http.post(o.V.addPreData,{predata:e})}getListPredatas(e,t,n){return e||(e="all"),this.http.post(o.V.getListPredatas,{criterial:e,pageIndex:t,pageSize:n})}getListCriterial(){return this.http.post(o.V.getListCriterial,{})}getCountPredatas(e){return this.http.post(o.V.getCountPredatas,{criterial:e})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.eN),r.LFG(s.F0))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},79019:function(e,t,n){n.d(t,{B:function(){return o},F:function(){return r}});var i=n(72458);class o extends i.LF{format(e,t){if("input"===t){let t=e.getDate().toString();t=+t<10?"0"+t:t;let n=(e.getMonth()+1).toString();return n=+n<10?"0"+n:n,`${t}-${n}-${e.getFullYear()}`}return e.toDateString()}}const r={parse:{dateInput:{month:"short",year:"numeric",day:"numeric"}},display:{dateInput:"input",monthYearLabel:{year:"numeric",month:"numeric"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}}}}]);