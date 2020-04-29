import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  constructor() { }

  ngOnInit() {

  }
  submit(event){
    event.preventDefault();
    let email = this.email;
    let password = this.password;
    
  }

}
