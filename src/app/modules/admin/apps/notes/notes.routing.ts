import { Route } from '@angular/router';
import { NotesListComponent } from 'app/modules/admin/apps/notes/list/list.component';
import { NotesComponent } from 'app/modules/admin/apps/notes/notes.component';

export const notesRoutes: Route[] = [
    {
        path     : '',
        component: NotesComponent,
        children : [
            {
                path     : '',
                component: NotesListComponent,
            },
        ],
    },
];
