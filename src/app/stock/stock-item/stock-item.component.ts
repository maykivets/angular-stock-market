import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public stockClasses;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
    this.stocks.push(new Stock('Test Stock Company', 'TSC', 80.1, 80));

  }

  toggleFavorite(e, i) {
    console.log('We are toggling the favorite state for this stock', e);
    this.stocks[i].favorite = !this.stocks[i].favorite;
  }

}
