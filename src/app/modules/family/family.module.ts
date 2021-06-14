import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
/**
 * Components
 */
import { FamilyListComponent } from './pages/family-list/family-list.component';
import { FamilyComponent } from './family.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Route[] = [
    {
        path: '',
        component: FamilyComponent,
        children: [
            {
                path: 'list',
                component: FamilyListComponent,
                children: [
                    {
                        path: ':id',
                        component: DetailsComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    declarations: [
        FamilyComponent,
        FamilyListComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: []
})
export class FamilyModule { }
