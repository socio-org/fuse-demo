import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { LayoutOverviewComponent } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component';

@NgModule({
    imports: [
        RouterModule.forChild([]),
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule,
        LayoutOverviewComponent,
    ],
    exports: [
        LayoutOverviewComponent,
    ],
})
export class LayoutOverviewModule
{
}
