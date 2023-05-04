import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { PricingSimpleComponent } from 'app/modules/admin/pages/pricing/simple/simple.component';
import { pricingSimpleRoutes } from 'app/modules/admin/pages/pricing/simple/simple.routing';

@NgModule({
    imports: [
        RouterModule.forChild(pricingSimpleRoutes),
        MatButtonModule,
        MatIconModule,
        PricingSimpleComponent,
    ],
})
export class PricingSimpleModule
{
}
