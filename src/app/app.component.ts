import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  methodName: string = "";
  sourceEspressoMachine = '../../assets/Vids/Espresso.mp4';
  espressoMachine = 'Espresso Machine';

  sourceV60 = '../../assets/Vids/V60.mp4';
  v60 = 'V60 Brewer';

  sourceFrenchPress = '../../assets/Vids/FrenchPress.mp4'
  frenchPress = 'French Press'

  sourceAeroPress = '../../assets/Vids/AeroPress.mp4';
  aeroPress = 'Aero Press';

  sourceMochaPot = '../../assets/Vids/MochaPot.mp4';
  mochaPot = 'Mocha Pot';

  sourceTurkishCoffee = '../../assets/Vids/TurkishCoffee.mp4';
  turkishCoffee = 'Turkish Coffee';

  restCollapse: boolean = false;

  nameChange($event: string) {
    this.methodName = $event;
  }

  colappseRest($event: boolean) {
    this.restCollapse = $event;
  }
  fetchData() {
    this.finished = false;
    this.data = new Observable(observer => {
      setTimeout(() => { observer.next(11); }, 1000),
        setTimeout(() => { observer.next(12); }, 2000),
        setTimeout(() => { observer.complete(); }, 3000)
    });

    let sub = this.data.subscribe((value) => this.myArray.push(value), error => this.errors = true, () => this.finished = true);
  }

  myObservable: Observable<number> = of(1, 2, 3);
  myObservable2: Observable<number[]> = of([1, 2, 3], [4, 5, 6], [7, 8, 9]);

  display() {
    this.myObservable.subscribe(data => console.log(data));
    this.myObservable2.subscribe(data => console.log(data));
  }

   productArr : Product[]=[
    new Product(100,"Mobile",10000,1),
    new Product(101,"Bag",500,1),
    new Product(102,"Shoe",400,1),
    new Product(103,"Groceries",2000,1),
    new Product(104,"Laptop",35000,1),
  ]

  calculateSum(prodArr:Product[]):number{
    let sum=0;
    prodArr.forEach(element => sum+=element.price*element.quantity)
    return sum;
  } 

}

class Product{
  id:number;
  category:string;
  price:number;
  quantity:number;
  constructor(id:number,categorty:string,price:number,quantity:number){
    this.id=id;
    this.category=categorty;
    this.price=price;
    this.quantity=quantity;
  }

}
