import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.sass']
})
export class NietoComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
