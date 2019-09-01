import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked,
  AfterViewInit, AfterContentChecked, AfterContentInit,
} from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements OnInit, OnChanges,
  OnDestroy, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit {

  @Input() public stocks: Array<Stock>;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event, stock: Stock) {
    this.toggleFavorite.emit(stock);
  }

  changeStockPrice(stock: Stock) {
    stock.price += 5;
  }

  ngOnInit(): void {
    // console.log('Stock Item Component - On Init');
  }
  ngAfterViewInit(): void {
    // console.log('Stock Item Component - After View Init');
  }
  ngAfterViewChecked(): void {
    // console.log('Stock Item Component - After View Checked');
  }
  ngAfterContentInit(): void {
    // console.log('Stock Item Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    // console.log('Stock Item Component - After Content Checked');
  }
  ngDoCheck(): void {
    // console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    // console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Stock Item Component - On Changes - ', changes);
  }
}
