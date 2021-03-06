import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'basket', component: BasketComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
