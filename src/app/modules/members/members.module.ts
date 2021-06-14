import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { FuseCardModule } from '@fuse/components/card';

const routes: Route[] = [
    {
        path: '',
        component: MembersComponent,
        children: [
            {
                path: 'list',
                component: MemberListComponent,
                // children: [
                //     {
                //         path: ':id',
                //         component: MemberDetailsComponent
                //     }
                // ]
            },
            {
                path: ':id',
                component: MemberDetailsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        MembersComponent,
        MemberListComponent,
        MemberDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FuseCardModule,
        SharedModule
    ]
})
export class MembersModule { }
