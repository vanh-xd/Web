import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit{
  cart: any[] = [];
  apiUrl = 'http://localhost:3002';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.http.get(`${this.apiUrl}/cart`, { withCredentials: true })
      .subscribe((data: any) => this.cart = data);
  }

  updateCart() {
    const newCart = this.cart.filter(item => !item.selected);
    this.http.post(`${this.apiUrl}/update-cart`, newCart, { withCredentials: true })
      .subscribe((data: any) => {
        this.cart = data;
        alert("Cart updated successfully!");
      });
  }

  checkQty(item: any) {
    if (item.qty < 1) item.qty = 1;
  }

  continueShopping() {
    this.router.navigate(['/ex53']); 
  }
}
