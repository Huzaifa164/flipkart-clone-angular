import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { CheckoutPageComponent } from './Pages/checkout-page/checkout-page.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: 'category/:category-name', component: CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
