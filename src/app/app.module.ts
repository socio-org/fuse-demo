import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {FuseModule} from '@fuse';
import {FuseMockApiModule} from '@fuse/lib/mock-api';
import {FuseConfigModule} from '@fuse/services/config';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';
import {appConfig} from 'app/core/config/app.config';
import {CoreModule} from 'app/core/core.module';
import {LayoutModule} from 'app/layout/layout.module';
import {mockApiServices} from 'app/mock-api';
import {MarkdownModule} from 'ngx-markdown';
import {LoggingInterceptor} from './interceptors/HttpInterceptor';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    preloadingStrategy: PreloadAllModules
};

/**
 * This function is used internal to get a string instance of the `<base href="" />` value from `index.html`.
 * This is an exported function, instead of a private function or inline lambda, to prevent this error:
 *
 * `Error encountered resolving symbol values statically.`
 * `Function calls are not supported.`
 * `Consider replacing the function or lambda with a reference to an exported function.`
 *
 * @param platformLocation an Angular service used to interact with a browser's URL
 * @return a string instance of the `<base href="" />` value from `index.html`
 */
export const getBaseHref = (platformLocation: PlatformLocation): string => platformLocation.getBaseHrefFromDOM() || '/';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: getBaseHref,
            deps: [PlatformLocation]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
