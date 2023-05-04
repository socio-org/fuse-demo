import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';

import { MaterialComponentsComponent } from 'app/modules/admin/ui/material-components/material-components.component';

export const routes: Route[] = [
    {
        path     : '',
        component: MaterialComponentsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MaterialComponentsComponent,
    ],
})
export class MaterialComponentsModule
{
}
