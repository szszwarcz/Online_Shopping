import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  num = 2;
  courseName = "Angular";
  addNumber(){
    this.num++;
  }
  subNumber(){
    this.num--;
  }

  changeNumber(course:string){
    this.courseName = course;
  }
}
