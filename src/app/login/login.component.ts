import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users : Login[] = [];
  userName = "";
  userPassword = "";
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