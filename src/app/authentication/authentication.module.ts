import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { SignInComponent } from './sign-in/sign-in.component';
import {EffectsModule} from "@ngrx/effects";
import {AuthenticationEffects} from "./store/effects/authentication.effects";

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    EffectsModule.forFeature([AuthenticationEffects])
  ],
  exports: [
  ]
})
export class AuthenticationModule { }
