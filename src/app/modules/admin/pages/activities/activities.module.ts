import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ActivitiesComponent } from 'app/modules/admin/pages/activities/activities.component';
import { activitiesRoutes } from 'app/modules/admin/pages/activities/activities.routing';

@NgModule({
    imports: [
        RouterModule.forChild(activitiesRoutes),
        MatIconModule,
        ActivitiesComponent,
    ],
})
export class ActivitiesModule
{
}
