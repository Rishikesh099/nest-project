import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  getrecipes() {
    return this.http.get("https://dummyjson.com/recipes");
  }
}
