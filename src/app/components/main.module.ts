import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NewClientComponent } from './new-client/new-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainService } from './main.service';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
