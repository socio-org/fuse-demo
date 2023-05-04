import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MailboxComposeComponent } from 'app/modules/admin/apps/mailbox/compose/compose.component';
import { MailboxDetailsComponent } from 'app/modules/admin/apps/mailbox/details/details.component';
import { MailboxEmptyDetailsComponent } from 'app/modules/admin/apps/mailbox/empty-details/empty-details.component';
import { MailboxListComponent } from 'app/modules/admin/apps/mailbox/list/list.component';

import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { mailboxRoutes } from 'app/modules/admin/apps/mailbox/mailbox.routing';
import { MailboxSettingsComponent } from 'app/modules/admin/apps/mailbox/settings/settings.component';
import { MailboxSidebarComponent } from 'app/modules/admin/apps/mailbox/sidebar/sidebar.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
    imports: [
        RouterModule.forChild(mailboxRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        QuillModule.forRoot(),
        MailboxComponent,
        MailboxComposeComponent,
        MailboxDetailsComponent,
        MailboxEmptyDetailsComponent,
        MailboxListComponent,
        MailboxSettingsComponent,
        MailboxSidebarComponent,
    ],
})
export class MailboxModule
{
}
