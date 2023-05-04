import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FileManagerDetailsComponent } from 'app/modules/admin/apps/file-manager/details/details.component';
import { FileManagerComponent } from 'app/modules/admin/apps/file-manager/file-manager.component';

import { fileManagerRoutes } from 'app/modules/admin/apps/file-manager/file-manager.routing';
import { FileManagerListComponent } from 'app/modules/admin/apps/file-manager/list/list.component';

@NgModule({
    imports: [
        RouterModule.forChild(fileManagerRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule,
        FileManagerComponent,
        FileManagerDetailsComponent,
        FileManagerListComponent,
    ],
})
export class FileManagerModule
{
}
