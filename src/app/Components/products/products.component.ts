import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];
  currentRoute!: string;
  isProductAvailable: boolean = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products['products'];
    });
  }

  getProductsByCategory(categoryInput: string) {
    this.productService
      .getProductsByCategory(categoryInput)
      .subscribe((products) => {
        this.products = products['products'];
        this.isProductAvailable = true;
        if (this.products.length == 0) {
          this.isProductAvailable = false;
        }
      });
  }

  ngOnInit() {
    if (this.router.url == '/') {
      this.getProducts();
    } else {
      const category = this.router.url.split('/');
      this.getProductsByCategory(category[category.length - 1]);
    }
  }
}
