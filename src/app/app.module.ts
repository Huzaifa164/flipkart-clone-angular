import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { CheckoutPageComponent } from './Pages/checkout-page/checkout-page.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CarouselComponent,
    ProductsComponent,
    FooterComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    CheckoutPageComponent,
    CategoryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
