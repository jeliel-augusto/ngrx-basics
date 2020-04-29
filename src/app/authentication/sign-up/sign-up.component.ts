import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {

  }
  async submit(event){
    event.preventDefault();
    let email = this.email;
    let password = this.password;
    console.log(email, password)
    // this.auth.signInWithPopup()
    try{ 
      const { user } = await this.auth.createUserWithEmailAndPassword(email, password)
      this.router.navigate(['/'],{replaceUrl: true});
    }catch(e){
      console.log(e);
    }
  }

}
