import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    { path: '', redirectTo: '/clients', pathMatch: 'full' },
    {
        path: 'clients', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
    //   { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
