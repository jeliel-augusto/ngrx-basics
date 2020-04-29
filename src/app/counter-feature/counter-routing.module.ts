import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
const routes: Route[] = [
    {
        component: CounterComponent, path: ''
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRoutingModule{

}