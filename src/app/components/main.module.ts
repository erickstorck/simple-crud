import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatIconModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MainRoutingModule,
        MATERIAL_MODULES
    ]
})
export class MainModule { }
