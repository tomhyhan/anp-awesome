import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Purchase_order } from './Purchase_order/Purchase_order.component';
import { Purchase_order_create } from './Purchase_order_create/Purchase_order_create.component';

@NgModule({
  declarations: [
    AppComponent,
    Purchase_order,
    Purchase_order_create
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
