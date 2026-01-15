import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex13Productservice } from '../ex13-productservice';

@Component({
  selector: 'app-ex13-productevent',
  standalone: false,
  templateUrl: './ex13-productevent.html',
  styleUrl: './ex13-productevent.css',
})
export class Ex13Productevent {
  public products: any

  constructor(private router:Router, private ps: Ex13Productservice)
  {
    this.products = ps.getProductsWithImages()
  }
  view_detail(f:any)
  {
    this.router.navigate(['ex13-productevent', f.ProductId])
  }
}
