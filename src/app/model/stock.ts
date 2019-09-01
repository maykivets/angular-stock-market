export class Stock {
  favorite: boolean = false;
  constructor(public name: string,
              public code: string,
              public price: number,
              public previousPrice: number) {

  }

  private diff = (this.price / this.previousPrice) - 1;
  private largeChange = Math.abs(this.diff) > 0.1;
  public stockClasses = {
    positive: this.isPositiveChange(),
    negative: !this.isPositiveChange(),
    'large-change': this.largeChange,
    'small-change': !this.largeChange,
  };

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
