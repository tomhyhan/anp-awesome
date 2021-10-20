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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Main
import { AppComponent } from './app.component';

//Sparepart
import { SparePartsComponent } from './components/master/sparePart/spare-parts/spare-parts.component';
import { AddSparePartComponent } from './components/master/sparePart/add-spare-part/add-spare-part.component';
import { EditSparePartComponent } from './components/master/sparePart/edit-spare-part/edit-spare-part.component';
import { SearchSparePartComponent } from './components/master/sparePart/search-spare-part/search-spare-part.component';

//HomePage
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayErrorComponent } from './components/display-error/display-error.component';

//PurchaseOrderPart
import { BackgroundComponent } from './components/background/background.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';

//ProjectPart
import { AddProjectComponent } from './components/master/project/add-project/add-project.component';
import { EditProjectComponent } from './components/master/project/edit-project/edit-project.component';
import { ProjectsComponent } from './components/master/project/projects/projects.component';
import { SearchProjectComponent } from './components/master/project/search-project/search-project.component';

//EmployeesPart
import { EmployeesComponent } from './components/master/employees/employees/employees.component';
import { AddEmployeeComponent } from './components/master/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/master/employees/edit-employee/edit-employee.component';
import { SearchEmployeeComponent } from './components/master/employees/search-employee/search-employee.component';

//UomPart
import { UomPartsComponent } from './components/master/uom/uom-parts/uom-parts.component';
import { AddUomComponent } from './components/master/uom/add-uom/add-uom-part.component';
import { EditUomPartComponent } from './components/master/uom/edit-uom/edit-uom.component';
import { SearchUomComponent } from './components/master/uom/search-uom/search-uom.component';

//VendorPart
import { AddVendorComponent } from './components/master/vendor/add-vendor/add-vendor.component';
import { EditVendorComponent } from './components/master/vendor/edit-vendor/edit-vendor.component';
import { VendorsComponent } from './components/master/vendor/vendors/vendors.component';
import { SearchVendorComponent } from './components/master/vendor/search-vendor/search-vendor.component';

//AircraftPart
import { AddaircraftComponent } from './components/master/aircraft/add-aircraft/add-aircraft.component';
import { EditaircraftComponent } from './components/master/aircraft/edit-aircraft/edit-aircraft.component';
import { aircraftsComponent } from './components/master/aircraft/aircrafts/aircrafts.component';
import { SearchaircraftComponent } from './components/master/aircraft/search-aircraft/search-aircraft.component';

import { DisplayErrorComponent } from './components/display-error/display-error.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    PurchaseOrderComponent,
    PurchaseOrderCreateComponent,

    SparePartsComponent,
    AddSparePartComponent,
    EditSparePartComponent,
    SearchSparePartComponent,

    AddProjectComponent,
    EditProjectComponent,
    ProjectsComponent,
    SearchProjectComponent,

    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SearchEmployeeComponent,

    UomPartsComponent,
    AddUomComponent,
    EditUomPartComponent,
    SearchUomComponent,

    AddVendorComponent,
    EditVendorComponent,
    VendorsComponent,
    SearchVendorComponent,

    aircraftsComponent,
    EditaircraftComponent,
    AddaircraftComponent,
    SearchaircraftComponent,
    DisplayErrorComponent,
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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
