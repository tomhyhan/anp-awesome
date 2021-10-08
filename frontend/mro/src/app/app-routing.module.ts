import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';


const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
  { path: 'master/vendor', component:VendorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
