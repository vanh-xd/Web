import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ex18CustomerService {
  constructor(private http: HttpClient) { }

  get_all_customers(): Observable<any>
  {
    return this.http.get('assets/dataset/customers.json');
  }
}
