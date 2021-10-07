import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';
import { EditSparePartComponent } from './components/master/edit-spare-part/edit-spare-part.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';

const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
  { path: 'master/project', component: ProjectsComponent },
  { path: 'Purchase_order', component:PurchaseOrderComponent},
  { path: 'Purchase_order/create', component:PurchaseOrderCreateComponent},
  { path: 'master/vendor', component:VendorsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
