import { Injectable } from '@angular/core';
import { CATEGORIES } from '../mock-categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<string[]> {
    const categories = of(CATEGORIES);
    return categories;
  }
}
