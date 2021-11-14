import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MainService } from './main.service';

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
    exports: [RouterModule],
    providers: [
        MainService
    ]
})
export class MainRoutingModule { }
