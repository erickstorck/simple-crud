import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
