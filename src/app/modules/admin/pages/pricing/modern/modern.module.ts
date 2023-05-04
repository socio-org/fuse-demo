import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { PricingModernComponent } from 'app/modules/admin/pages/pricing/modern/modern.component';
import { pricingModernRoutes } from 'app/modules/admin/pages/pricing/modern/modern.routing';

@NgModule({
    imports: [
        RouterModule.forChild(pricingModernRoutes),
        MatButtonModule,
        MatIconModule,
        PricingModernComponent,
    ],
})
export class PricingModernModule
{
}
