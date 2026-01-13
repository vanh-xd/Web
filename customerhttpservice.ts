import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Customerhttpservice {
  customers =[]
  private url: string = 'src/assets/dataset/customerHttpService.json';

  constructor(private http: HttpClient) { }

  public getCustomers(){
    return this.http.get(this.url)
  }
  }

