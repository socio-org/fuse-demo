import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
/**
 * Components
 */
import { FamilyListComponent } from './pages/family-list/family-list.component';
import { FamilyComponent } from './family.component';
import { DetailsComponent } from './pages/details/details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { GroupByPipe } from '@fuse/pipes/group-by';

const routes: Route[] = [
    {
        path: '',
        component: FamilyComponent,
        children: [
            {
                path: '',
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
        DetailsComponent,
        GroupByPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule
    ],
    providers: []
})
export class FamilyModule { }
