import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators'
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth: AngularFireAuth){

    }
    canActivate(){
        return this.auth.user.pipe(map(user => user !== null ? false : true))
    }
}