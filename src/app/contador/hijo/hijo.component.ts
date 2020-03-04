import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.sass']
})
export class HijoComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.counter *= 2;
    this.counterChange.emit(this.counter);
  }

  divide() {
    this.counter = this.counter >= 0 ? Math.floor(this.counter /= 2) : Math.ceil(this.counter /= 2);
    this.counterChange.emit(this.counter);
  }


}
