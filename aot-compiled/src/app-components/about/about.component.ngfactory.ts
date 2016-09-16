/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../src/app-components/about/about.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
const nodeDebugInfos_AboutComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.AboutComponent],import1.AboutComponent,{})];
var renderType_AboutComponent_Host:import2.RenderComponentType = (null as any);
class _View_AboutComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _AboutComponent_0_4:import1.AboutComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AboutComponent_Host0,renderType_AboutComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AboutComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('about',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutComponent_0_4 = new import1.AboutComponent(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication),this.parentInjector.get(import11.ActivatedRoute));
    this._appEl_0.initComponent(this._AboutComponent_0_4,[],compView_0);
    compView_0.create(this._AboutComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.AboutComponent) && (0 === requestNodeIndex))) { return this._AboutComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._AboutComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._AboutComponent_0_4.ngAfterViewInit(); }
    }
  }
}
function viewFactory_AboutComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_AboutComponent_Host === (null as any))) { (renderType_AboutComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_AboutComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutComponentNgFactory:import13.ComponentFactory<import1.AboutComponent> = new import13.ComponentFactory<import1.AboutComponent>('about',viewFactory_AboutComponent_Host0,import1.AboutComponent);
const styles_AboutComponent:any[] = [];
const nodeDebugInfos_AboutComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_AboutComponent:import2.RenderComponentType = (null as any);
class _View_AboutComponent0 extends import3.DebugAppView<import1.AboutComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AboutComponent0,renderType_AboutComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AboutComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello about page!',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,26));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_AboutComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.AboutComponent> {
  if ((renderType_AboutComponent === (null as any))) { (renderType_AboutComponent = viewUtils.createRenderComponentType('C:/Source/Atlas/src/app-components/about/about.template.html',0,import12.ViewEncapsulation.None,styles_AboutComponent,{})); }
  return new _View_AboutComponent0(viewUtils,parentInjector,declarationEl);
}