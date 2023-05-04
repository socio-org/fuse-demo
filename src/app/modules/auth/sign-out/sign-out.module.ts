import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { AuthSignOutComponent } from 'app/modules/auth/sign-out/sign-out.component';
import { authSignOutRoutes } from 'app/modules/auth/sign-out/sign-out.routing';

@NgModule({
    imports: [
        RouterModule.forChild(authSignOutRoutes),
        MatButtonModule,
        AuthSignOutComponent,
    ],
})
export class AuthSignOutModule
{
}
