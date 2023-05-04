import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { PricingSingleComponent } from 'app/modules/admin/pages/pricing/single/single.component';
import { pricingSingleRoutes } from 'app/modules/admin/pages/pricing/single/single.routing';

@NgModule({
    imports: [
        RouterModule.forChild(pricingSingleRoutes),
        MatButtonModule,
        MatIconModule,
        PricingSingleComponent,
    ],
})
export class PricingSingleModule
{
}
