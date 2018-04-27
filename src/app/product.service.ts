import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';
 
@Injectable()
 
// Service for products data.
export class ProductService {
 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ }
 
    // Get list of products from remote server.
    readProducts(): Observable<Product[]>{
        return this._http
            .get("http://localhost/api/product/api.php?action=read")
            .map(res => res.json());
    }
    
    // Send product data to remote server to create it.
createProduct(product): Observable<Product>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(product);
    return this._http.post(
        "http://localhost/api/product/api.php?action=add",
        product,
        options
    ).map(res => res.json());
}

// Send product data to remote server to update it.
updateProduct(product): Observable<Product>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/api/product/update.php",
        product,
        options
    ).map(res => res.json());
}
// Get a product details from remote server.
readOneProduct(product_id): Observable<Product>{
    return this._http
        .get("http://localhost/api/product/api.php?action=read_one&id="+product_id)
        .map(res => res.json());
}
}