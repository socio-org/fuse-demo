import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {Route, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

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
        MatTableModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
