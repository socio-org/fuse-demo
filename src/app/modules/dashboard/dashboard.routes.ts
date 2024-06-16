import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard.resolvers';

export default [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            dashboard: DashboardResolver
        }
    }
] as Routes;