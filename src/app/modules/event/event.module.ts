import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventComponent } from './event.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
    {
        path: '',
        component: EventComponent,
        children: [
            {
                path: 'list',
                component: EventListComponent,
                children: [
                    {
                        path: ':id',
                        component: EventDetailsComponent
                    }
                ]
            }
        ]
    }
];


@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EventModule { }
