import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
/**
 * Components
 */
import {FamilyListComponent} from './pages/family-list/family-list.component';
import {FamilyComponent} from './family.component';
import {FamilyDetailsComponent} from './pages/details/family-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FuseCardModule} from '@fuse/components/card';
import {SharedModule} from 'app/shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {GroupByPipe} from '@fuse/pipes/group-by';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FamilyItemResolver, FamilyItemsResolver} from './family.resolvers';
import {CanDeactivateFamilyDetails} from './family.guards';

const routes: Route[] = [
    {
        path: '',
        component: FamilyComponent,
        children: [
            {
                path: '',
                component: FamilyListComponent, resolve: {
                    items: FamilyItemsResolver
                },
                children: [
                    {
                        path: ':id',
                        component: FamilyDetailsComponent, resolve: {
                            item: FamilyItemResolver
                        },
                        canDeactivate: [CanDeactivateFamilyDetails]
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
        FamilyDetailsComponent,
        GroupByPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule
    ],
    providers: []
})
export class FamilyModule {
}
