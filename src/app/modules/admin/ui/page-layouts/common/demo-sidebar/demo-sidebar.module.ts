import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { DemoSidebarComponent } from 'app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component';

@NgModule({
    imports: [
        RouterModule.forChild([]),
        MatIconModule,
        MatProgressBarModule,
        DemoSidebarComponent,
    ],
    exports: [
        DemoSidebarComponent,
    ],
})
export class DemoSidebarModule
{
}
