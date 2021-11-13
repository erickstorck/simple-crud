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


const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDialogModule
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
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
