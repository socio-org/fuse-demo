import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TailwindCSSComponent } from 'app/modules/admin/ui/tailwindcss/tailwindcss.component';

export const routes: Route[] = [
    {
        path     : '',
        component: TailwindCSSComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TailwindCSSComponent,
    ],
})
export class TailwindCSSModule
{
}
