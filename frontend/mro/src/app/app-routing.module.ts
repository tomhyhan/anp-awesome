import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { EditSparePartComponent } from './components/master/edit-spare-part/edit-spare-part.component';
import { SparePartComponent } from './components/master/spare-part/spare-part.component';

const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
