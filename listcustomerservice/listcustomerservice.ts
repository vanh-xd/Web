import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomerservice',
  standalone: false,
  templateUrl: './listcustomerservice.html',
  styleUrl: './listcustomerservice.css',
})
export class Listcustomerservice {
  customers:any
  constructor(private cs:Customerservice, private router:Router, private activatedRouter:ActivatedRoute)
  {
    this.customers = cs.getAllCustomers()
  }
  view_detail(id:any)
  {
    this.router.navigate(['list-customer-service', id])
  }
}
