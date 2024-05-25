import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {Route, RouterModule} from '@angular/router';
import {FuseCardComponent} from '@fuse/components/card';
import {SafePipe} from '../../../@fuse/pipes/safe.pipe';
import {DashboardComponent} from './dashboard.component';
import {DashboardResolver} from './dashboard.resolvers';

const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            dashboard: DashboardResolver
        }
    }
];

@NgModule({
    declarations: [
        DashboardComponent,
        SafePipe
    ],
    imports: [
        MatTableModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FuseCardComponent,
        CommonModule,
        MatDividerModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
