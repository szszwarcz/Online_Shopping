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
  userName = "";
  userPassword = "";
  loginSuccess = false;
  loginFailed = false;
  coursers:string[] = ["Angular", "React","JavaScript"]

  passwordStrength = {
    isLengthy: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false
  };

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

  checkPasswordStrength(){
    const userPassword = this.userPassword;

    this.passwordStrength.hasLowercase = /[a-z]+/.test(userPassword);
    this.passwordStrength.hasNumber = /\d/.test(userPassword);
    this.passwordStrength.hasUppercase = /[A-Z]+/.test(userPassword);
    this.passwordStrength.isLengthy = userPassword.length>=8;

  }
}

