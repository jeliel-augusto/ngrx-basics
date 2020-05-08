import {Component, OnDestroy, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {ActionsSubject, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {loginAction, loginSuccess, signUpAction, signUpFailure, signUpSuccess} from "../store/auth.actions";
import {AuthenticationEffects} from "../store/effects/authentication.effects";
import {filter} from "rxjs/operators";
import {ofType} from "@ngrx/effects";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  email = '';
  password = '';
  signUpFailure$;
  subscriptions = new Subscription();
  constructor(private router: Router, private store: Store<AppState>,
              public authenticationEffects: AuthenticationEffects, private actionsSubject: ActionsSubject) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    const subscription1 = this.actionsSubject.pipe(ofType(signUpSuccess)).subscribe(() => {
      this.router.navigate(['/'])
    })
    this.subscriptions.add(subscription1)
    this.signUpFailure$ = this.actionsSubject.pipe(ofType(signUpFailure))
  }
  async submit(event){
    event.preventDefault();
    let email = this.email;
    let password = this.password;
    console.log(email, password)
    this.store.dispatch(signUpAction({email, password}));
  }

}
