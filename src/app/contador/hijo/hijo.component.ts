import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import CounterState from 'src/app/interfaces/counter.interface';
import { multiply, divide } from 'src/app/actions/counter.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.sass']
})
export class HijoComponent implements OnInit {

  counter$: Observable<number>;

  constructor(
    private store: Store<CounterState>
  ) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select('counter'));
  }

  multiply() {
    this.store.dispatch(multiply());
  }

  divide() {
    this.store.dispatch(divide());
  }


}
