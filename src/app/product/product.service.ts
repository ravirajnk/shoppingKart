import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient) { }
  GetProductData() {
    return this.httpClient.get('https://my-json-server.typicode.com/ravirajnk/shoppingKart/db');
  }
}