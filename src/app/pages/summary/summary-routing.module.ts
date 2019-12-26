import {RouterModule, Routes} from '@angular/router';
import {InitGuardService} from '../../services/init-guard/init-guard.service';
import {NgModule} from '@angular/core';
import {SummaryComponent} from './summary.component';

const routes: Routes = [
  {path: 'summary', component: SummaryComponent, canActivate: [InitGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule {
}
