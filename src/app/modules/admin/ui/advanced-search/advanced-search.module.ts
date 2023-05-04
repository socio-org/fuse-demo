import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';

import { AdvancedSearchComponent } from 'app/modules/admin/ui/advanced-search/advanced-search.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AdvancedSearchComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        AdvancedSearchComponent,
    ],
})
export class AdvancedSearchModule
{
}
