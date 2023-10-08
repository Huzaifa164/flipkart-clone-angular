import { Component, ElementRef, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { CATEGORIES } from 'src/app/mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: string[] = [];
  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  constructor(private categoryService: CategoryService){}

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }
}
