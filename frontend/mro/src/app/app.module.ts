import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SparePartComponent } from './components/master/spare-part/spare-part.component';
import { SparePartsComponent } from './components/master/spare-parts/spare-parts.component';
import { AddSparePartComponent } from './components/master/add-spare-part/add-spare-part.component';
import { EditSparePartComponent } from './components/master/edit-spare-part/edit-spare-part.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SparePartComponent,
    SparePartsComponent,
    AddSparePartComponent,
    EditSparePartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
