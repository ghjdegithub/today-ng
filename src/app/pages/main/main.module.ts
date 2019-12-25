import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {
  NzButtonModule, NzCheckboxModule, NzFormModule,
  NzIconModule, NzInputModule,
  NzLayoutModule, NzListModule,
  NzMenuModule,
  NzModalModule
} from 'ng-zorro-antd';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListComponent } from './left-control/list/list.component';
import { RightControlComponent } from './right-control/right-control.component';
import { HeaderComponent } from './right-control/header/header.component';
import { QuickAddComponent } from './right-control/quick-add/quick-add.component';
import { TodoComponent } from './right-control/todo/todo.component';


@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent, RightControlComponent, HeaderComponent, QuickAddComponent, TodoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzListModule,
    NzCheckboxModule,
  ]
})
export class MainModule {
}
