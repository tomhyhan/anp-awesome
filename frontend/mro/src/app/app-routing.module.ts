import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SparePartsComponent } from './components/master/sparePart/spare-parts/spare-parts.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { EmployeesComponent } from './components/master/employees-main/employees/employees.component';
import { UomPartsComponent } from './components/master/uom/uom-parts/uom-parts.component';

const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
  { path: 'master/project', component: ProjectsComponent },
  { path: 'Purchase_order', component:PurchaseOrderComponent},
  { path: 'Purchase_order/create', component:PurchaseOrderCreateComponent},
  { path: 'master/employees', component: EmployeesComponent },
  { path: 'master/uom', component: UomPartsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
