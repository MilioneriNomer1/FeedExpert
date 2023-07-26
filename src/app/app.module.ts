import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './components/batch/batch.component';
import { CityComponent } from './components/city/city.component';
import { CountyComponent } from './components/county/county.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { StateComponent } from './components/state/state.component';
import { SubstanceComponent } from './components/substance/substance.component';
import { UserComponent } from './components/user/user.component';
import { SampleComponent } from './components/sample/sample.component';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from "primeng/toast";
import {SplitterModule} from "primeng/splitter";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {CustomerService} from "./services/customerservice";
import {HttpClientModule} from "@angular/common/http";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    CityComponent,
    CountyComponent,
    CustomerComponent,
    ProductComponent,
    StateComponent,
    SubstanceComponent,
    UserComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ToastModule,
    SplitterModule,
    InputTextModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,

    CalendarModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ProgressBarModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
