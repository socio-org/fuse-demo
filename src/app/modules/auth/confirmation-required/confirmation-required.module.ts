import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { AuthConfirmationRequiredComponent } from 'app/modules/auth/confirmation-required/confirmation-required.component';
import { authConfirmationRequiredRoutes } from 'app/modules/auth/confirmation-required/confirmation-required.routing';

@NgModule({
    imports: [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        AuthConfirmationRequiredComponent,
    ],
})
export class AuthConfirmationRequiredModule
{
}
