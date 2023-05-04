import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordClassicComponent } from 'app/modules/admin/pages/authentication/forgot-password/classic/forgot-password.component';
import { ForgotPasswordFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/fullscreen-reversed/forgot-password.component';
import { ForgotPasswordFullscreenComponent } from 'app/modules/admin/pages/authentication/forgot-password/fullscreen/forgot-password.component';
import { ForgotPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern-reversed/forgot-password.component';
import { ForgotPasswordModernComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern/forgot-password.component';
import { ForgotPasswordSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/split-screen-reversed/forgot-password.component';
import { ForgotPasswordSplitScreenComponent } from 'app/modules/admin/pages/authentication/forgot-password/split-screen/forgot-password.component';

const routes: Routes = [
    {
        path    : 'forgot-password',
        children: [
            {
                path     : 'classic',
                component: ForgotPasswordClassicComponent,
            },
            {
                path     : 'modern',
                component: ForgotPasswordModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: ForgotPasswordModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: ForgotPasswordSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: ForgotPasswordSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: ForgotPasswordFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: ForgotPasswordFullscreenReversedComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        ForgotPasswordClassicComponent,
        ForgotPasswordModernComponent,
        ForgotPasswordModernReversedComponent,
        ForgotPasswordFullscreenComponent,
        ForgotPasswordFullscreenReversedComponent,
        ForgotPasswordSplitScreenComponent,
        ForgotPasswordSplitScreenReversedComponent,
    ],
})
export class ForgotPasswordModule
{
}
