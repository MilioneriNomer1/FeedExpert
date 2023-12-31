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
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService, PrimeIcons} from "primeng/api";
import { TableComponent } from './utils/table/table.component';
import {DropdownModule} from "primeng/dropdown";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {DatePipe} from "@angular/common";
import {CalendarModule} from "primeng/calendar";
import {OverlayPanelModule} from "primeng/overlaypanel";



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
    SampleComponent,
    TableComponent,
    HomeComponent,
    LoginComponent
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
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    RippleModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule,
    OverlayPanelModule
  ],
  providers: [MessageService, ConfirmationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
