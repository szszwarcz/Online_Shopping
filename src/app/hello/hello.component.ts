import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  num:number = 2;
  addNumber(){
    this.num++;
  }
  subNumber(){
    this.num--;
  }
}
