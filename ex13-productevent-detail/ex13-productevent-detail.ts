import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex13Productservice } from '../ex13-productservice';

@Component({
  selector: 'app-ex13-productevent-detail',
  standalone: false,
  templateUrl: './ex13-productevent-detail.html',
  styleUrl: './ex13-productevent-detail.css',
})
export class Ex13ProducteventDetail {
  selected_product: any
  constructor(private activateRoute:ActivatedRoute,private _fs:Ex13Productservice, private router:Router)
  {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id')

        if (id != null)
        {
          this.selected_product = _fs.getProductDetail(id)
        }
      }
    )
  }
  go_back()
    {
      this.router.navigate(['ex13-productevent'])
    }
}
