import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';

import { AnimationsComponent } from 'app/modules/admin/ui/animations/animations.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AnimationsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        AnimationsComponent,
    ],
})
export class AnimationsModule
{
}
