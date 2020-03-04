import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string;
  counter: number;

  constructor() {
    this.title = 'Contador';
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
