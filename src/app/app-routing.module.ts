import { FavouritComponent } from './components/favourit/favourit.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'favourit', component: FavouritComponent},

  
  { path: 'details/:id', component: DetailsComponent },

  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
