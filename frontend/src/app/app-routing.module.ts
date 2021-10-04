import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Purchase_order } from './Purchase_order/Purchase_order.component';
import { Purchase_order_create } from './Purchase_order_create/Purchase_order_create.component';

const routes: Routes = [
  { path: 'Purchase_order', component: Purchase_order },
  { path: 'Purchase_order_create', component: Purchase_order_create },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
