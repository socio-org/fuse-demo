import { Route } from '@angular/router';
import { TasksDetailsComponent } from 'app/modules/admin/apps/tasks/details/details.component';
import { TasksListComponent } from 'app/modules/admin/apps/tasks/list/list.component';
import { TasksComponent } from 'app/modules/admin/apps/tasks/tasks.component';
import { CanDeactivateTasksDetails } from 'app/modules/admin/apps/tasks/tasks.guards';
import { TasksResolver, TasksTagsResolver, TasksTaskResolver } from 'app/modules/admin/apps/tasks/tasks.resolvers';

export const tasksRoutes: Route[] = [
    {
        path     : '',
        component: TasksComponent,
        resolve  : {
            tags: TasksTagsResolver,
        },
        children : [
            {
                path     : '',
                component: TasksListComponent,
                resolve  : {
                    tasks: TasksResolver,
                },
                children : [
                    {
                        path         : ':id',
                        component    : TasksDetailsComponent,
                        resolve      : {
                            task: TasksTaskResolver,
                        },
                        canDeactivate: [CanDeactivateTasksDetails],
                    },
                ],
            },
        ],
    },
];
