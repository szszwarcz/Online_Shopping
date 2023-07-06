import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data!: Observable<number>;
  myArray : number[] = [];
  errors!: boolean;
  finished!: boolean;

  fetchData(){
    this.finished=false;
    this.data = new Observable(observer =>{
      setTimeout(() => {observer.next(11);},1000),
      setTimeout(() => {observer.next(12);},2000),
      setTimeout(() => {observer.complete();},3000)
      });

    let sub = this.data.subscribe((value) => this.myArray.push(value),error => this.errors =true, ()=> this.finished = true);
  }

  myObservable:Observable<number> = of(1,2,3);
  myObservable2:Observable<number[]> = of([1,2,3],[4,5,6],[7,8,9]);

  display(){
    this.myObservable.subscribe(data=>console.log(data));
    this.myObservable2.subscribe(data=>console.log(data));
  }
}
