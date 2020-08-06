import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';

import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product/product-filter.pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import { AlertifyService } from './services/alertify.service';
import{HttpClientModule} from '@angular/common/http';
import { BasketComponent } from './basket/basket.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductFilterPipe,
    BasketComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxNumberSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
