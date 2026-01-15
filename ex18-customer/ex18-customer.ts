import { Component, OnInit } from '@angular/core';
import { Ex18CustomerService } from '../ex18-customer-service';


@Component({
  selector: 'app-ex18-customer',
  standalone: false,
  templateUrl: './ex18-customer.html',
  styleUrl: './ex18-customer.css',
})
export class Ex18Customer implements OnInit{
  customerTypes:any = []

  constructor(private http:Ex18CustomerService) { }
  
  ngOnInit(): void 
  {
    this.http.get_all_customers().subscribe(
      data => {
        this.customerTypes = data;
      }
    );
  }
}