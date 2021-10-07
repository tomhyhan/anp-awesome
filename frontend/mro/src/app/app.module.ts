import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SparePartComponent } from './components/master/spare-part/spare-part.component';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { AddSparePartComponent } from './components/master/add-spare-part/add-spare-part.component';
import { EditSparePartComponent } from './components/master/edit-spare-part/edit-spare-part.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { AddProjectComponent } from './components/master/project/add-project/add-project.component';
import { EditProjectComponent } from './components/master/project/edit-project/edit-project.component';
import { ProjectComponent } from './components/master/project/project/project.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';

import { AddVendorComponent } from './components/master/vendor/add-vendor/add-vendor.component';
import { EditVendorComponent } from './components/master/vendor/edit-vendor/edit-vendor.component';
import { VendorComponent } from './components/master/vendor/vendor/vendor.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    SparePartComponent,
    SparePartsComponent,
    AddSparePartComponent,
    EditSparePartComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    PurchaseOrderComponent,
    PurchaseOrderCreateComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectComponent,
    ProjectsComponent,
    AddVendorComponent,
    EditVendorComponent,
    VendorComponent,
    VendorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
