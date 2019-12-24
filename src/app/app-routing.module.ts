import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './pages/setup/setup.component';

const routes: Routes = [
  {path: 'setup', component: SetupComponent},
  {path: 'main', redirectTo: '/main', pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: '/main'},
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
