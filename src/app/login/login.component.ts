import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isBordered : boolean = true;
  numero : number = 0;
  users : Login[] = [];
  userName = "";
  userPassword = "";
  loginSuccess = false;
  loginFailed = false;
  coursers:string[] = ["Angular", "React","JavaScript"]
  increment(){
    if(this.numero != 6){
      this.numero++;
    }
    else{
      this.numero = 1;
    }
    
  }
  Login2(){
    this.loginFailed = false;
    this.loginSuccess=false;
    if(this.userName=="admin" && this.userPassword=="admin"){
      this.loginSuccess = true;
    }
    else{
      this.loginFailed=true;
    }
  }

  clickme(user:string,password:string){
    let loginTemp = new Login(user,password);
    this.users.push(loginTemp);
  }
}

class Login{
  userName:string;
  userPassword:string;
  constructor(user:string,password:string) {
    this.userName=user;
    this.userPassword=password;
  }
}
