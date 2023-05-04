import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { FinanceComponent } from 'app/modules/admin/dashboards/finance/finance.component';
import { financeRoutes } from 'app/modules/admin/dashboards/finance/finance.routing';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
    imports: [
        RouterModule.forChild(financeRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        FinanceComponent,
    ],
})
export class FinanceModule
{
}
