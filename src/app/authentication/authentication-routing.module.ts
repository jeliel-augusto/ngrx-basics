import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth-guard.guard';
const routes: Route[] = [
    {
        component: SignUpComponent, path: 'sign-up',  canActivate: [AuthGuard]
    },
    {
        component: SignInComponent, path: 'sign-in', canActivate: [AuthGuard]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule{

}