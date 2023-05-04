import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';

import { ColorsComponent } from 'app/modules/admin/ui/colors/colors.component';

export const routes: Route[] = [
    {
        path     : '',
        component: ColorsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatIconModule,
        MatRippleModule,
        MatTabsModule,
        ColorsComponent,
    ],
})
export class ColorsModule
{
}
