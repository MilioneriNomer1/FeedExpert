import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Batch} from "./common/Batch";
import {City} from "./common/City";
import {Sample} from "./common/Sample";
import {State} from "./common/State";
import {Substance} from "./common/Substance";
import {User} from "./common/User";
import {Product} from "./common/Product";
import {Customer} from "./common/Customer";
import {County} from "./common/County";

const routes: Routes = [
  { path: 'batch', component: Batch },
  { path: 'city', component: City },
  { path: 'county', component: County },
  { path: 'customer', component: Customer },
  { path: 'product', component: Product },
  { path: 'sample', component: Sample },
  { path: 'state', component: State },
  { path: 'substance', component: Substance },
  { path: 'user', component: User },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
