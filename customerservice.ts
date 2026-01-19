import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
  constructor(){ }
  customers =
  [{'id':'p1', 'name':'coca', 'quantity':10, 'price':100},
    {'id':'p2', 'name':'pepsi', 'quantity':8, 'price':120},
    {'id':'p3', 'name':'sting', 'quantity':12, 'price':80},
    {'id':'p4', 'name':'sting', 'quantity':12, 'price':80},
    {'id':'p5', 'name':'sting', 'quantity':12, 'price':80},
  ]
  getAllCustomers()
  {
    return this.customers
  }
}
