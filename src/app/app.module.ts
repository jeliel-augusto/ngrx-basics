import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { CounterFeatureModule } from './counter-feature/counter-feature.module';
import { CounterRoutingModule } from './counter-feature/counter-routing.module';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationRoutingModule,
    AuthenticationModule,
    CounterRoutingModule,
    RouterModule.forRoot([]),
    CounterFeatureModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
