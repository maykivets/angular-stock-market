import {
  Component,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
  DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit {
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
    // console.log('App Component - On Init');
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
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

  ngAfterViewInit(): void {
    // console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    // console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    // console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    // console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    // console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    // console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('App Component - On Changes - ', changes);
  }
}
