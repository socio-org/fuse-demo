(self.webpackChunksocio=self.webpackChunksocio||[]).push([[426],{4426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AuthSignInModule:()=>k});var i=r(3464),n=r(4369),o=r(994),s=r(3070),a=r(7307),g=r(9550),m=r(7672),l=r(1925),c=r(6477),d=r(5425),u=r(1041),f=r(8441),p=r(5366),Z=r(3675),h=r(1116),x=r(1811);const w=["signInNgForm"];function v(e,t){if(1&e&&(p.TgZ(0,"fuse-alert",47),p._uU(1),p.qZA()),2&e){const e=p.oxw();p.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),p.xp6(1),p.hij(" ",e.alert.message," ")}}function y(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Email address is required "),p.qZA())}function b(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Please enter a valid email address "),p.qZA())}function A(e,t){1&e&&p._UZ(0,"mat-icon",28),2&e&&p.Q6J("svgIcon","heroicons_solid:eye")}function q(e,t){1&e&&p._UZ(0,"mat-icon",28),2&e&&p.Q6J("svgIcon","heroicons_solid:eye-off")}function _(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1," Sign in "),p.qZA())}function I(e,t){1&e&&p._UZ(0,"mat-progress-spinner",48),2&e&&p.Q6J("diameter",24)("mode","indeterminate")}const T=function(){return["/sign-up"]},U=function(){return["/forgot-password"]},J=[{path:"",component:(()=>{class e{constructor(e,t,r,i){this._activatedRoute=e,this._authService=t,this._formBuilder=r,this._router=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[u.kI.required,u.kI.email]],password:["admin",u.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const e=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(e)},e=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(i.gz),p.Y36(Z.e),p.Y36(u.qu),p.Y36(i.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(e,t){if(1&e&&p.Gf(w,5),2&e){let e;p.iGM(e=p.CRH())&&(t.signInNgForm=e.first)}},decls:77,vars:21,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p._UZ(4,"img",4),p.qZA(),p.TgZ(5,"div",5),p._uU(6,"Sign in"),p.qZA(),p.TgZ(7,"div",6),p.TgZ(8,"div"),p._uU(9,"Don't have an account?"),p.qZA(),p.TgZ(10,"a",7),p._uU(11,"Sign up "),p.qZA(),p.qZA(),p.YNc(12,v,2,5,"fuse-alert",8),p.TgZ(13,"form",9,10),p.TgZ(15,"mat-form-field",11),p.TgZ(16,"mat-label"),p._uU(17,"Email address"),p.qZA(),p._UZ(18,"input",12),p.YNc(19,y,2,0,"mat-error",13),p.YNc(20,b,2,0,"mat-error",13),p.qZA(),p.TgZ(21,"mat-form-field",11),p.TgZ(22,"mat-label"),p._uU(23,"Password"),p.qZA(),p._UZ(24,"input",14,15),p.TgZ(26,"button",16),p.NdJ("click",function(){p.CHM(e);const t=p.MAs(25);return t.type="password"===t.type?"text":"password"}),p.YNc(27,A,1,1,"mat-icon",17),p.YNc(28,q,1,1,"mat-icon",17),p.qZA(),p.TgZ(29,"mat-error"),p._uU(30," Password is required "),p.qZA(),p.qZA(),p.TgZ(31,"div",18),p.TgZ(32,"mat-checkbox",19),p._uU(33," Remember me "),p.qZA(),p.TgZ(34,"a",20),p._uU(35,"Forgot password? "),p.qZA(),p.qZA(),p.TgZ(36,"button",21),p.NdJ("click",function(){return t.signIn()}),p.YNc(37,_,2,0,"span",13),p.YNc(38,I,1,2,"mat-progress-spinner",22),p.qZA(),p.TgZ(39,"div",23),p._UZ(40,"div",24),p.TgZ(41,"div",25),p._uU(42,"Or continue with"),p.qZA(),p._UZ(43,"div",24),p.qZA(),p.TgZ(44,"div",26),p.TgZ(45,"button",27),p._UZ(46,"mat-icon",28),p.qZA(),p.TgZ(47,"button",27),p._UZ(48,"mat-icon",28),p.qZA(),p.TgZ(49,"button",27),p._UZ(50,"mat-icon",28),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(51,"div",29),p.O4$(),p.TgZ(52,"svg",30),p.TgZ(53,"g",31),p._UZ(54,"circle",32),p._UZ(55,"circle",33),p.qZA(),p.qZA(),p.TgZ(56,"svg",34),p.TgZ(57,"defs"),p.TgZ(58,"pattern",35),p._UZ(59,"rect",36),p.qZA(),p.qZA(),p._UZ(60,"rect",37),p.qZA(),p.kcU(),p.TgZ(61,"div",38),p.TgZ(62,"div",39),p.TgZ(63,"div"),p._uU(64,"Welcome to"),p.qZA(),p.TgZ(65,"div"),p._uU(66,"our community"),p.qZA(),p.qZA(),p.TgZ(67,"div",40),p._uU(68," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),p.qZA(),p.TgZ(69,"div",23),p.TgZ(70,"div",41),p._UZ(71,"img",42),p._UZ(72,"img",43),p._UZ(73,"img",44),p._UZ(74,"img",45),p.qZA(),p.TgZ(75,"div",46),p._uU(76,"More than 17k people joined us, it's your turn"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=p.MAs(25);p.xp6(10),p.Q6J("routerLink",p.DdM(19,T)),p.xp6(2),p.Q6J("ngIf",t.showAlert),p.xp6(1),p.Q6J("formGroup",t.signInForm),p.xp6(5),p.Q6J("formControlName","email"),p.xp6(1),p.Q6J("ngIf",t.signInForm.get("email").hasError("required")),p.xp6(1),p.Q6J("ngIf",t.signInForm.get("email").hasError("email")),p.xp6(4),p.Q6J("formControlName","password"),p.xp6(3),p.Q6J("ngIf","password"===e.type),p.xp6(1),p.Q6J("ngIf","text"===e.type),p.xp6(4),p.Q6J("color","primary")("formControlName","rememberMe"),p.xp6(2),p.Q6J("routerLink",p.DdM(20,U)),p.xp6(2),p.Q6J("color","primary")("disabled",t.signInForm.disabled),p.xp6(1),p.Q6J("ngIf",!t.signInForm.disabled),p.xp6(1),p.Q6J("ngIf",t.signInForm.disabled),p.xp6(8),p.Q6J("svgIcon","feather:facebook"),p.xp6(2),p.Q6J("svgIcon","feather:twitter"),p.xp6(2),p.Q6J("svgIcon","feather:github")}},directives:[i.yS,h.O5,u._Y,u.JL,u.sg,s.KE,s.hX,g.Nt,u.Fj,u.JJ,u.u,n.lW,s.R9,s.TO,o.oG,a.Hw,x.W,m.Ou],encapsulation:2,data:{animation:f.L}}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[i.Bz.forChild(J),n.ot,o.p9,s.lN,a.Ps,g.c,m.Cq,l.J,c.fC,d.m]]}),e})()}}]);