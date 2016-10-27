/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../src/app-components/+detail/detail.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/common/src/localization';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from './detail.component.ngfactory';
import * as import7 from '../../../../src/app-components/+detail/detail.component';
import * as import8 from '@angular/core/src/i18n/tokens';
import * as import9 from '@angular/router/src/router_config_loader';
class DetailModuleInjector extends import0.NgModuleInjector<import1.DetailModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _DetailModule_2:import1.DetailModule;
  __LOCALE_ID_3:any;
  __NgLocalization_4:import4.NgLocaleLocalization;
  __ROUTES_5:any[];
  __TRANSLATIONS_FORMAT_6:any;
  constructor(parent:import5.Injector) {
    super(parent,[import6.DetailComponentNgFactory],[]);
  }
  get _LOCALE_ID_3():any {
    if ((this.__LOCALE_ID_3 == (null as any))) { (this.__LOCALE_ID_3 = (null as any)); }
    return this.__LOCALE_ID_3;
  }
  get _NgLocalization_4():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == (null as any))) { (this.__NgLocalization_4 = new import4.NgLocaleLocalization(this._LOCALE_ID_3)); }
    return this.__NgLocalization_4;
  }
  get _ROUTES_5():any[] {
        if ((this.__ROUTES_5 == (null as any))) { (this.__ROUTES_5 = [[{
          path: '',
          component: import7.DetailComponent
        }
    ]]); }
    return this.__ROUTES_5;
  }
  get _TRANSLATIONS_FORMAT_6():any {
    if ((this.__TRANSLATIONS_FORMAT_6 == (null as any))) { (this.__TRANSLATIONS_FORMAT_6 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_6;
  }
  createInternal():import1.DetailModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._DetailModule_2 = new import1.DetailModule();
    return this._DetailModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.DetailModule)) { return this._DetailModule_2; }
    if ((token === import8.LOCALE_ID)) { return this._LOCALE_ID_3; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import9.ROUTES)) { return this._ROUTES_5; }
    if ((token === import8.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const DetailModuleNgFactory:import0.NgModuleFactory<import1.DetailModule> = new import0.NgModuleFactory(DetailModuleInjector,import1.DetailModule);