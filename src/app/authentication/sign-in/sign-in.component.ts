import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AuthenticationEffects} from "../store/effects/authentication.effects";
import {filter} from "rxjs/operators";
import {loginAction, loginFailure, loginSuccess} from "../store/auth.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";

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
    loginSuccess$;
    loginFailure$;

    constructor(private auth: AngularFireAuth, private router: Router,
                public authenticationEffects: AuthenticationEffects,
                private store: Store<AppState>) {
        this.loginSuccess$ = authenticationEffects.login$.pipe(
          filter(action => action.type === loginSuccess.type)
        ).subscribe(() => this.router.navigate(['/']) )

        this.loginFailure$ = authenticationEffects.login$.pipe(
          filter(action => action.type === loginFailure.type)
        )
    }

    ngOnInit() { }
    submit(event){
        event.preventDefault();
        let email = this.email;
        let password = this.password;
        this.store.dispatch(loginAction({email, password}));
    }
}
