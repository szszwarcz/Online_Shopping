import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName = "Jajc";
    userPassword = "ek";
    clickme(user:string,password:string){
      this.userName=user;
      this.userPassword=password;
    }

}