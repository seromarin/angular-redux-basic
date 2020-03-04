import { Component, OnInit } from '@angular/core';
import { Store, State, select, Action } from '@ngrx/store';
import CounterState from './interfaces/counter.interface';
import { Observable } from 'rxjs';
import { increment, decrement } from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title: string;
  counter: number;

  counter$: Observable<number>;

  constructor(
    private store: Store<CounterState>
  ) {
    this.title = 'Contador';
    this.counter = 0;
  }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select('counter'));
  }

  increase(number: number) {
    this.store.dispatch(increment());
  }

  decrease(number: number) {
    this.store.dispatch(decrement());
  }
}
