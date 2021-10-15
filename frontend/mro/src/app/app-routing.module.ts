import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SparePartsComponent } from './components/master/sparePart/spare-parts/spare-parts.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { EmployeesComponent } from './components/master/employees-main/employees/employees.component';
import { UomPartsComponent } from './components/master/uom/uom-parts/uom-parts.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';
<<<<<<< HEAD
=======
import { aircraftsComponent } from './components/master/aircraft/aircrafts/aircrafts.component'
>>>>>>> Benny


const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
  { path: 'master/project', component: ProjectsComponent },
<<<<<<< HEAD
  { path: 'Purchase_order', component:PurchaseOrderComponent},
  { path: 'Purchase_order/create', component:PurchaseOrderCreateComponent},
  { path: 'master/employees', component: EmployeesComponent },
  { path: 'master/uom', component: UomPartsComponent },
  { path: 'master/vendor', component:VendorsComponent},
=======
  { path: 'Purchase_order', component: PurchaseOrderComponent },
  { path: 'Purchase_order/create', component: PurchaseOrderCreateComponent },
  { path: 'master/employees', component: EmployeesComponent },
  { path: 'master/uom', component: UomPartsComponent },
  { path: 'master/vendor', component:VendorsComponent},
  { path: 'master/aircraft', component:aircraftsComponent},
>>>>>>> Benny
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
