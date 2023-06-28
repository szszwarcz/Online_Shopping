import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  applyClass= true;
  imgUrl:string = "assets/Landscape_walpaper.jpg";
  userName = "Jajc";
  userPassword = "ek";
  clickme(user:string,password:string){
    this.userName=user;
    this.userPassword=password;
  }
  checkAge(ageChecker:number){
    ageChecker>=21 ? "You are an adult" : ageChecker>=13? "You are a teen ager" : "You are a kid";
  }
  styleObj1 = {
    backgroundColor:'orange',
    color : 'black'
  }
  styleObj2 = {
    backgroundColor:'greenyellow',
    color : 'white'
  }
}