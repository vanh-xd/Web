import { Component } from '@angular/core';
import { Ex14Catalogservice } from '../ex14-catalogservice';

@Component({
  selector: 'app-ex14-catalog',
  standalone: false,
  templateUrl: './ex14-catalog.html',
  styleUrl: './ex14-catalog.css',
})
export class Ex14Catalog {
  categories: any

  constructor(private cs: Ex14Catalogservice)
  {
    this.categories = cs.getCategories()
  }
}
