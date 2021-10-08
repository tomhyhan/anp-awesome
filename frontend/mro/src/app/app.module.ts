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

import { AppComponent } from './app.component';


import { SparePartsComponent } from './components/master/sparePart/spare-parts/spare-parts.component';
import { AddSparePartComponent } from './components/master/sparePart/add-spare-part/add-spare-part.component';
import { EditSparePartComponent } from './components/master/sparePart/edit-spare-part/edit-spare-part.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BackgroundComponent } from './components/background/background.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';

import { AddProjectComponent } from './components/master/project/add-project/add-project.component';
import { EditProjectComponent } from './components/master/project/edit-project/edit-project.component';

import { ProjectsComponent } from './components/master/project/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ProjectsComponent,
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
