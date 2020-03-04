import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import CounterState from 'src/app/interfaces/counter.interface';
import { reset } from 'src/app/actions/counter.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.sass']
})
export class NietoComponent implements OnInit {

  counter$: Observable<number>;

  constructor(
    private store: Store<CounterState>
  ) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select('counter'));
  }

  reset() {
    this.store.dispatch(reset())
  }

}
