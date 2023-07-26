import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  thisExpand = false;
  restCollapse = false;
  @Output() colappseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() nameEvent : EventEmitter<string> = new EventEmitter<string>();

  @Input() brewingMethod = '';
  @Input() vidSource = '';

  emitEvent(output:boolean){
    this.colappseEvent.emit(output);
  }
  emitEvent2(){
    this.nameEvent.emit(this.brewingMethod);
  }
}
