import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';

const routes: Routes = [
  { path: 'master/spare_part', component: SparePartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//
