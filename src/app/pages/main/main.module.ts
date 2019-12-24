import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {NzButtonModule, NzLayoutModule} from 'ng-zorro-antd';
import { LeftControlComponent } from './left-control/left-control.component';


@NgModule({
  declarations: [MainComponent, LeftControlComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzButtonModule,
  ]
})
export class MainModule {
}
