/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../src/app-components/services/authentication.service';
import * as import2 from '../../../../src/app-components/home/home.component';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '../../../../src/app-components/services/appstate.service';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/http/src/http';
import * as import13 from '../../../../src/app-components/services/utility.service';
import * as import14 from '@angular/core/src/zone/ng_zone';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '@angular/core/src/linker/component_factory';
  const nodeDebugInfos_HomeComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([
    import1.Authentication,
    import2.HomeComponent
  ]
,import2.HomeComponent,{})];
var renderType_HomeComponent_Host:import3.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import4.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _Authentication_0_4:import1.Authentication;
  _HomeComponent_0_5:import2.HomeComponent;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent_Host0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.selectOrCreateHostElement('home',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Authentication_0_4 = new import1.Authentication(this.parentInjector.get(import10.AppState),this.parentInjector.get(import11.Router),this.parentInjector.get(import12.Http),this.parentInjector.get(import13.UtilityService));
    this._HomeComponent_0_5 = new import2.HomeComponent(this.parentInjector.get(import10.AppState),this.parentInjector.get(import11.Router),this.parentInjector.get(import12.Http),this._Authentication_0_4,this.parentInjector.get(import14.NgZone));
    this._appEl_0.initComponent(this._HomeComponent_0_5,[],compView_0);
    compView_0.create(this._HomeComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Authentication) && (0 === requestNodeIndex))) { return this._Authentication_0_4; }
    if (((token === import2.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HomeComponent_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._HomeComponent_0_5.ngAfterViewInit(); }
    }
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,[],{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import16.ComponentFactory<import2.HomeComponent> = new import16.ComponentFactory<import2.HomeComponent>('home',viewFactory_HomeComponent_Host0,import2.HomeComponent);
const styles_HomeComponent:any[] = [];
const nodeDebugInfos_HomeComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_HomeComponent:import3.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import4.DebugAppView<import2.HomeComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Kendo UI Grids',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,23));
    this._el_3 = this.renderer.createElement(parentRenderNode,'div',this.debug(3,1,0));
    this.renderer.setElementAttribute(this._el_3,'id','kendoUI');
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n\n',this.debug(4,1,24));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',this.debug(5,4,38));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',this.debug(6,5,121));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',this.debug(7,6,113));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',this.debug(8,7,16));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_HomeComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<import2.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Source/Atlas/src/app-components/home/home.template.html',0,import15.ViewEncapsulation.None,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}