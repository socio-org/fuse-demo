import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChangelogComponent } from 'app/modules/admin/docs/changelog/changelog';
import { changelogRoutes } from 'app/modules/admin/docs/changelog/changelog.routing';

@NgModule({
    imports: [
        RouterModule.forChild(changelogRoutes),
        ChangelogComponent,
    ],
})
export class ChangelogModule
{
}
