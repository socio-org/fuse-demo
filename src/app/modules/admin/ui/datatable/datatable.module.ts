import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DatatableComponent } from 'app/modules/admin/ui/datatable/datatable.component';

export const routes: Route[] = [
    {
        path     : '',
        component: DatatableComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DatatableComponent,
    ],
})
export class DatatableModule
{
}
