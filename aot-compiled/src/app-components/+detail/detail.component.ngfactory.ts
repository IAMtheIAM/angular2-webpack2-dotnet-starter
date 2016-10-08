/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../src/app-components/+detail/detail.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_outlet';
import * as import12 from '@angular/router/src/router_outlet_map';
import * as import13 from '@angular/core/src/linker/component_factory_resolver';
const nodeDebugInfos_DetailComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.DetailComponent],import1.DetailComponent,{})];
var renderType_DetailComponent_Host:import2.RenderComponentType = (null as any);
class _View_DetailComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _DetailComponent_0_4:import1.DetailComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DetailComponent_Host0,renderType_DetailComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DetailComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('detail',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DetailComponent_0_4 = new import1.DetailComponent();
    this._appEl_0.initComponent(this._DetailComponent_0_4,[],compView_0);
    compView_0.create(this._DetailComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.DetailComponent) && (0 === requestNodeIndex))) { return this._DetailComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._DetailComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DetailComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_DetailComponent_Host === (null as any))) { (renderType_DetailComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_DetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DetailComponentNgFactory:import10.ComponentFactory<import1.DetailComponent> = new import10.ComponentFactory<import1.DetailComponent>('detail',viewFactory_DetailComponent_Host0,import1.DetailComponent);
const styles_DetailComponent:any[] = [];
const nodeDebugInfos_DetailComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import11.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_DetailComponent:import2.RenderComponentType = (null as any);
class _View_DetailComponent0 extends import3.DebugAppView<import1.DetailComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import4.AppElement;
  _RouterOutlet_15_5:import11.RouterOutlet;
  _text_16:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DetailComponent0,renderType_DetailComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DetailComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello from Detail (sub module)',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,39));
    this._el_3 = this.renderer.createElement(parentRenderNode,'div',this.debug(3,1,0));
    this.renderer.setElementAttribute(this._el_3,'class','row');
    this._text_4 = this.renderer.createText(this._el_3,'\n   ',this.debug(4,1,17));
    this._el_5 = this.renderer.createElement(this._el_3,'div',this.debug(5,2,3));
    this.renderer.setElementAttribute(this._el_5,'class','col s4');
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',this.debug(6,2,23));
    this._el_7 = this.renderer.createElement(this._el_5,'div',this.debug(7,3,6));
    this.renderer.setElementAttribute(this._el_7,'class','card-panel');
    this._text_8 = this.renderer.createText(this._el_7,'\n          ',this.debug(8,3,30));
    this._el_9 = this.renderer.createElement(this._el_7,'span',this.debug(9,4,10));
    this._text_10 = this.renderer.createText(this._el_9,'I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          ',this.debug(10,4,16));
    this._text_11 = this.renderer.createText(this._el_7,'\n      ',this.debug(11,6,17));
    this._text_12 = this.renderer.createText(this._el_5,'\n   ',this.debug(12,7,12));
    this._text_13 = this.renderer.createText(this._el_3,'\n',this.debug(13,8,9));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',this.debug(14,9,6));
    this._el_15 = this.renderer.createElement(parentRenderNode,'router-outlet',this.debug(15,10,0));
    this._appEl_15 = new import4.AppElement(15,(null as any),this,this._el_15);
    this._RouterOutlet_15_5 = new import11.RouterOutlet(this.parentInjector.get(import12.RouterOutletMap),this._appEl_15.vcRef,this.parentInjector.get(import13.ComponentFactoryResolver),(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',this.debug(16,10,31));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterOutlet) && (15 === requestNodeIndex))) { return this._RouterOutlet_15_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this.debug(15,10,0);
    this._RouterOutlet_15_5.ngOnDestroy();
  }
}
export function viewFactory_DetailComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.DetailComponent> {
  if ((renderType_DetailComponent === (null as any))) { (renderType_DetailComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-aot-webpack2-typescript-dotnet/master/src/app-components/+detail/detail.template.html',0,import9.ViewEncapsulation.None,styles_DetailComponent,{})); }
  return new _View_DetailComponent0(viewUtils,parentInjector,declarationEl);
}