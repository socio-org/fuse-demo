"use strict";(self.webpackChunksocio=self.webpackChunksocio||[]).push([[542],{2542:(D,f,i)=>{i.d(f,{Yi:()=>m,A9:()=>b,vV:()=>O});var r=i(9490),T=i(8345),o=i(7716),v=i(3679),u=i(2458),M=i(4564);const k=["button"],y=["*"],d=new o.OlP("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),h=new o.OlP("MatButtonToggleGroup"),B={provide:v.JU,useExisting:(0,o.Gpc)(()=>b),multi:!0};let _=0;class p{constructor(l,t){this.source=l,this.value=t}}let b=(()=>{class a{constructor(t,e){this._changeDetector=t,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name="mat-button-toggle-group-"+_++,this.valueChange=new o.vpe,this.change=new o.vpe,this.appearance=e&&e.appearance?e.appearance:"standard"}get name(){return this._name}set name(t){this._name=t,this._buttonToggles&&this._buttonToggles.forEach(e=>{e.name=this._name,e._markForCheck()})}get vertical(){return this._vertical}set vertical(t){this._vertical=(0,r.Ig)(t)}get value(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}get selected(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=(0,r.Ig)(t)}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,r.Ig)(t),this._buttonToggles&&this._buttonToggles.forEach(e=>e._markForCheck())}ngOnInit(){this._selectionModel=new T.Ov(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked))}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_emitChangeEvent(){const t=this.selected,e=Array.isArray(t)?t[t.length-1]:t,n=new p(e,this.value);this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(t,e,n=!1,s=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):s=!0,s?Promise.resolve().then(()=>this._updateModelValue(n)):this._updateModelValue(n)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>null!=t.value&&e===t.value):t.value===this._rawValue)}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(e=>this._selectValue(e))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>t.checked=!1)}_selectValue(t){const e=this._buttonToggles.find(n=>null!=n.value&&n.value===t);e&&(e.checked=!0,this._selectionModel.select(e))}_updateModelValue(t){t&&this._emitChangeEvent(),this.valueChange.emit(this.value)}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(o.sBO),o.Y36(d,8))},a.\u0275dir=o.lG2({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,m,5),2&t){let s;o.iGM(s=o.CRH())&&(e._buttonToggles=s)}},hostAttrs:["role","group",1,"mat-button-toggle-group"],hostVars:5,hostBindings:function(t,e){2&t&&(o.uIk("aria-disabled",e.disabled),o.ekj("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard","standard"===e.appearance))},inputs:{appearance:"appearance",name:"name",vertical:"vertical",value:"value",multiple:"multiple",disabled:"disabled"},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[o._Bn([B,{provide:h,useExisting:a}])]}),a})();const E=(0,u.Kr)(class{});let m=(()=>{class a extends E{constructor(t,e,n,s,C,c){super(),this._changeDetectorRef=e,this._elementRef=n,this._focusMonitor=s,this._isSingleSelector=!1,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new o.vpe;const g=Number(C);this.tabIndex=g||0===g?g:null,this.buttonToggleGroup=t,this.appearance=c&&c.appearance?c.appearance:"standard"}get buttonId(){return`${this.id}-button`}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){const e=(0,r.Ig)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=(0,r.Ig)(t)}ngOnInit(){const t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this.id=this.id||"mat-button-toggle-"+_++,this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){const t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){const t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new p(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(h,8),o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(M.tE),o.$8M("tabindex"),o.Y36(d,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){if(1&t&&o.Gf(k,5),2&t){let n;o.iGM(n=o.CRH())&&(e._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,e){1&t&&o.NdJ("focus",function(){return e.focus()}),2&t&&(o.uIk("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),o.ekj("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[o.qOj],ngContentSelectors:y,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"button",0,1),o.NdJ("click",function(){return e._onButtonClick()}),o.TgZ(2,"span",2),o.Hsn(3),o.qZA(),o.qZA(),o._UZ(4,"span",3),o._UZ(5,"span",4)),2&t){const n=o.MAs(1);o.Q6J("id",e.buttonId)("disabled",e.disabled||null),o.uIk("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),o.xp6(5),o.Q6J("matRippleTrigger",n)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[u.wG],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),a})(),O=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[u.BQ,u.si],u.BQ]}),a})()}}]);