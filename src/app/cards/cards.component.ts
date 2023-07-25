import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  v60ExpandTrue = false;
  v60ExpandFalse = true;
  @Input() brewingMethod = '';
  @Input() vidSource = '';
}
