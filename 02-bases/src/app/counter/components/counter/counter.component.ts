import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  increase(value: number): void{
    this.counter += value;
  }
  decrease(value: number): void{
    this.counter -= value;
  }

  operate(isSum: boolean){
    if(isSum && this.counter < 20){
      this.counter += 1;
    }
    if(!isSum && this.counter > 0){
      this.counter -= 1;
    }
  }

  reset(): void{
    this.counter = 10;
  }
}
