import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {

  @Input() public stocks: Array<Stock>;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {

  }

  onToggleFavorite(event, stock: Stock) {
    this.toggleFavorite.emit(stock);
  }

}
