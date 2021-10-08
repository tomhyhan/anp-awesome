import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { AddSparePartComponent } from './components/master/add-spare-part/add-spare-part.component';
import { EditSparePartComponent } from './components/master/edit-spare-part/edit-spare-part.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayErrComponent } from './components/display-err/display-err.component';
import { AddVendorComponent } from './components/master/vendor/add-vendor/add-vendor.component';
import { EditVendorComponent } from './components/master/vendor/edit-vendor/edit-vendor.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SparePartsComponent,
    AddSparePartComponent,
    EditSparePartComponent,
    HeaderComponent,
    FooterComponent,
    DisplayErrComponent,
    AddVendorComponent,
    EditVendorComponent,
    VendorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatNativeDateModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
