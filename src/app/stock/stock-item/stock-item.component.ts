import { Component, Input, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {

  @Input() public stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {

  }

  toggleFavorite(e, stock: Stock) {
    console.log('We are toggling the favorite state for this stock', e);
    stock.favorite = !stock.favorite;
  }

}
