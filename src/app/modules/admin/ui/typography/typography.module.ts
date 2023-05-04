import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';

import { TypographyComponent } from 'app/modules/admin/ui/typography/typography.component';

export const routes: Route[] = [
    {
        path     : '',
        component: TypographyComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatTabsModule,
        TypographyComponent,
    ],
})
export class TypographyModule
{
}
