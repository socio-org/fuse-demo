import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NotesDetailsComponent } from 'app/modules/admin/apps/notes/details/details.component';
import { NotesLabelsComponent } from 'app/modules/admin/apps/notes/labels/labels.component';
import { NotesListComponent } from 'app/modules/admin/apps/notes/list/list.component';

import { NotesComponent } from 'app/modules/admin/apps/notes/notes.component';
import { notesRoutes } from 'app/modules/admin/apps/notes/notes.routing';

@NgModule({
    imports: [
        RouterModule.forChild(notesRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        NotesComponent,
        NotesDetailsComponent,
        NotesListComponent,
        NotesLabelsComponent,
    ],
})
export class NotesModule
{
}
