import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './pages/setup/setup.component';
import {InitGuardService} from './services/init-guard/init-guard.service';

const routes: Routes = [
  {path: 'setup', component: SetupComponent, canActivate: [InitGuardService]},
  {path: 'main', redirectTo: '/main', pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: '/setup'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
