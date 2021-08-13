import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AboutModule {
}
