import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './components/main.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppService } from './app.service';
import { MainService } from './components/main.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    MATERIAL_MODULES,
  ],
  bootstrap: [AppComponent],
  providers: [
    MainService
  ]
})
export class AppModule { }
