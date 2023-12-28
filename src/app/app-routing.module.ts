import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Core/home/home.component';
import { ProductsComponent } from './components/Core/products/products.component';
import { ContactusComponent } from './components/Core/contactus/contactus.component';
import { NotfoundComponent } from './components/Core/notfound/notfound.component';
import { OrdersComponent } from './components/Core/orders/orders.component';
import { ProdctdetailsComponent } from './components/Core/prodctdetails/prodctdetails.component';
import { ProductFormComponent } from './components/Core/product-form/product-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',redirectTo:''},
  {path:'home',redirectTo:''},
  {path:'product',component:ProductsComponent},
  {path:'product/details/:id',component:ProdctdetailsComponent},
  {path:'product/edit/:id',component:ProductFormComponent},
  {path:'product/new',component:ProductFormComponent},
  {path:'contact',component:ContactusComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
