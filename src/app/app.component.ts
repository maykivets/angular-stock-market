import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stock-market';
  public stocks: Array<Stock>;
  private counter = 1;

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
    this.stocks.push(new Stock('Test Stock Company', 'TSC', 80.1, 80));
  }

  onToggleFavoriteParent(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    stock.favorite = !stock.favorite;
  }

  changeStockObject(i: number) {
    // This won't chan the view when ChangeDetectionStrategy.OnPush set
    this.stocks[i] = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80);
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stocks input
    this.stocks = JSON.parse(JSON.stringify(this.stocks));
  }
  changeStockPriceParent(stock: Stock) {
    // This will not update the value in the stock item component
    // because it is changing the same reference and angular will
    // not check for it in the OnPush change detection strategy.
    stock.price += 10;
  }
}
