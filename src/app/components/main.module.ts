import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NewClientComponent } from './new-client/new-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserAnimationsModule
  ]
})
export class MainModule { }
