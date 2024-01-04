import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http=inject(HttpClient);


  constructor() { }

  getAll()
  {
    return this.http.get<category[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
