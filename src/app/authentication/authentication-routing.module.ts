import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Route[] = [
    {
        component: SignUpComponent, path: 'sign-up'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule{

}