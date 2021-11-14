import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainService } from './components/main.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MainService
  ]
})
export class AppRoutingModule { }
