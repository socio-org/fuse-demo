import { NgModule } from '@angular/core';
import { ConfirmationRequiredModule } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.module';
import { ForgotPasswordModule } from 'app/modules/admin/pages/authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from 'app/modules/admin/pages/authentication/reset-password/reset-password.module';
import { SignInModule } from 'app/modules/admin/pages/authentication/sign-in/sign-in.module';
import { SignOutModule } from 'app/modules/admin/pages/authentication/sign-out/sign-out.module';
import { SignUpModule } from 'app/modules/admin/pages/authentication/sign-up/sign-up.module';
import { UnlockSessionModule } from 'app/modules/admin/pages/authentication/unlock-session/unlock-session.module';

@NgModule({
    imports: [
        SignInModule,
        SignUpModule,
        SignOutModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        UnlockSessionModule,
        ConfirmationRequiredModule,
    ],
    exports: [
        SignInModule,
        SignUpModule,
        SignOutModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        UnlockSessionModule,
        ConfirmationRequiredModule,
    ],
})
export class AuthenticationModule
{
}
