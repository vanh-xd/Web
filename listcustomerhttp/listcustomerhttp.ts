import { Component } from '@angular/core';
import { Customerhttpservice } from '../myservices/customerhttpservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcustomerhttp',
  standalone: false,
  templateUrl: './listcustomerhttp.html',
  styleUrl: './listcustomerhttp.css',
})
export class Listcustomerhttp {
customers: any;
  
  constructor(private service: Customerhttpservice, private router: Router) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  view_detail(id: any) {
    this.router.navigate(['/list-customer-service', id]);
  }
}
