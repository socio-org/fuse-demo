import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompactComponent } from 'app/modules/admin/pages/invoice/printable/compact/compact.component';
import { compactRoutes } from 'app/modules/admin/pages/invoice/printable/compact/compact.routing';

@NgModule({
    imports: [
        RouterModule.forChild(compactRoutes),
        CdkScrollableModule,
        CompactComponent,
    ],
})
export class CompactModule
{
}
