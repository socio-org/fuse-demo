import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [

        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
