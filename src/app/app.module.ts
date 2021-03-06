import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppService } from './app.service';
import { ClientCrudComponent } from './components/client-crud/client-crud.component';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatListModule
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClientCrudComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MATERIAL_MODULES,
    NgxMaskModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService
  ]
})
export class AppModule { }
