import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatchComponent} from "./components/batch/batch.component";
import {CityComponent} from "./components/city/city.component";
import {CountyComponent} from "./components/county/county.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {ProductComponent} from "./components/product/product.component";
import {SampleComponent} from "./components/sample/sample.component";
import {StateComponent} from "./components/state/state.component";
import {SubstanceComponent} from "./components/substance/substance.component";
import {UserComponent} from "./components/user/user.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  { path: 'batch', component: BatchComponent },
  { path: 'city', component: CityComponent },
  { path: 'county', component: CountyComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'state', component: StateComponent },
  { path: 'substance', component: SubstanceComponent },
  { path: 'user', component: UserComponent },
  { path: 'logIn', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
