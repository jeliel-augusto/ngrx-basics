import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.css']
})

export class SignInComponent implements OnInit {
    email = '';
    password = '';
    showError = false;
    error = '';
    constructor(private auth: AngularFireAuth, private router: Router) { }

    ngOnInit() { }
    async submit(event){
        
        let email = this.email;
        let password = this.password
        event.preventDefault();
        try{ 
            await this.auth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['/'],{replaceUrl: true});
        }catch(e){
            this.showError = true;
            switch(e.code){
                case 'auth/user-not-found':
                    this.error = 'This user was not found, verify your credentials';
                case 'auth/wrong-password':
                    this.error = 'The password is invalid'
                default:
                    this.error = 'An error ocurred. Verify your email and passoword and try again.'
                    break;
            }
        }
    }
}