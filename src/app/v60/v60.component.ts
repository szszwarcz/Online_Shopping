import { Component } from '@angular/core';

@Component({
  selector: 'app-v60',
  templateUrl: './v60.component.html',
  styleUrls: ['./v60.component.css'],
})
export class V60Component {
     V60Methods: string[] = [
    "Tetsu Kasuya's 4:6 Method",
    "James Hoffman's V60 Method",
    "Classic V60 Pour-Over",
    "Rao Spin Method",
    "Ice V60"
  ];
  
  selectedMethod: string = "Siema";
  
}
