import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MenuComponent} from "./menu/menu.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {FranchiseComponent} from "./franchise/franchise.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contacts', component: ContactsComponent},
  {path:'franchise', component: FranchiseComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: '/'}
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
