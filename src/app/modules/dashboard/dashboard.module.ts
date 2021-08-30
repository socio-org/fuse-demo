import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

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
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
