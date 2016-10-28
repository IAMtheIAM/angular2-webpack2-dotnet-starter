/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../../src/app-components/directives/ckeditor/ckeditor.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
const nodeDebugInfos_CKEditor_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.CKEditor],import1.CKEditor,{})];
var renderType_CKEditor_Host:import2.RenderComponentType = (null as any);
class _View_CKEditor_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _CKEditor_0_4:import1.CKEditor;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_CKEditor_Host0,renderType_CKEditor_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CKEditor_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ckeditor',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CKEditor0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CKEditor_0_4 = new import1.CKEditor();
    this._appEl_0.initComponent(this._CKEditor_0_4,[],compView_0);
    compView_0.create(this._CKEditor_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.CKEditor) && (0 === requestNodeIndex))) { return this._CKEditor_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._CKEditor_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._CKEditor_0_4.ngAfterViewInit(); }
    }
  }
}
function viewFactory_CKEditor_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_CKEditor_Host === (null as any))) { (renderType_CKEditor_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_CKEditor_Host0(viewUtils,parentInjector,declarationEl);
}
export const CKEditorNgFactory:import10.ComponentFactory<import1.CKEditor> = new import10.ComponentFactory<import1.CKEditor>('ckeditor',viewFactory_CKEditor_Host0,import1.CKEditor);
const styles_CKEditor:any[] = [];
const nodeDebugInfos_CKEditor0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_CKEditor:import2.RenderComponentType = (null as any);
class _View_CKEditor0 extends import3.DebugAppView<import1.CKEditor> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_CKEditor0,renderType_CKEditor,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CKEditor0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello world! This is some default text for the ',this.debug(1,0,31));
    this._el_2 = this.renderer.createElement(this._el_0,'strong',this.debug(2,0,78));
    this._text_3 = this.renderer.createText(this._el_2,'rich text',this.debug(3,0,86));
    this._text_4 = this.renderer.createText(this._el_0,' editor, CKEditor!',this.debug(4,0,104));
    this._expr_0 = import8.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(0,0,5);
    const currVal_0:any = this.context.ckEditorInstanceID;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'id',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CKEditor0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.CKEditor> {
  if ((renderType_CKEditor === (null as any))) { (renderType_CKEditor = viewUtils.createRenderComponentType('C:/Development/angular2-webpack2-dotnet-starter/src/app-components/directives/ckeditor/ckeditor.component.ts class CKEditor - inline template',0,import9.ViewEncapsulation.None,styles_CKEditor,{})); }
  return new _View_CKEditor0(viewUtils,parentInjector,declarationEl);
}