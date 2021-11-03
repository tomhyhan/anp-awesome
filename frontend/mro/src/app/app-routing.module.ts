import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SparePartsComponent } from './components/master/sparePart/spare-parts/spare-parts.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { EmployeesComponent } from './components/master/employees/employees/employees.component';
import { UomPartsComponent } from './components/master/uom/uom-parts/uom-parts.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';
import { aircraftsComponent } from './components/master/aircraft/aircrafts/aircrafts.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/purchase/detail/detail.component';

import { AuthGuard } from './helpers/auth.guard';
const routes: Routes = [
  {
    path: 'master/spare_part',
    component: SparePartsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'master/project', component: ProjectsComponent,canActivate: [AuthGuard],},
  { path: 'Purchase_order', component: PurchaseOrderComponent },
  { path: 'Purchase_order/create', component: PurchaseOrderCreateComponent },
  { path: 'master/employees', component: EmployeesComponent },
  { path: 'master/uom', component: UomPartsComponent },
  { path: 'master/vendor', component: VendorsComponent, canActivate: [AuthGuard], },
  { path: 'master/aircraft', component: aircraftsComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'purchase/detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
