import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { PricingTableComponent } from 'app/modules/admin/pages/pricing/table/table.component';
import { pricingTableRoutes } from 'app/modules/admin/pages/pricing/table/table.routing';

@NgModule({
    imports: [
        RouterModule.forChild(pricingTableRoutes),
        MatButtonModule,
        MatIconModule,
        PricingTableComponent,
    ],
})
export class PricingTableModule
{
}
