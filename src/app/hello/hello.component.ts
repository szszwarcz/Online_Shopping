import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  userData = {
    userName: "John Doe",
    emailId: "john.doe@gmail.com",
    contactNo: 9876543210,
    address: "424 McVaney Road, Franklin, North Carolina, 28734",
    height: "5'6",
    weight: 82,
    education: "High school diploma",
  }
}
