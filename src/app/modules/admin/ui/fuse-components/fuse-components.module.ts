import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { AlertComponent } from 'app/modules/admin/ui/fuse-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/fuse-components/components/card/card.component';
import { DrawerComponent } from 'app/modules/admin/ui/fuse-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/fuse-components/components/highlight/highlight.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component';
import { MasonryComponent } from 'app/modules/admin/ui/fuse-components/components/masonry/masonry.component';
import { NavigationComponent } from 'app/modules/admin/ui/fuse-components/components/navigation/navigation.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component';

import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';
import { fuseComponentsRoutes } from 'app/modules/admin/ui/fuse-components/fuse-components.routing';
import { MockApiComponent } from 'app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component';
import { ConfigComponent } from 'app/modules/admin/ui/fuse-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component';
import { MustMatchComponent } from 'app/modules/admin/ui/fuse-components/validators/must-match/must-match.component';

@NgModule({
    imports: [
        RouterModule.forChild(fuseComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        FuseComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        LoadingBarComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent,
    ],
})
export class FuseComponentsModule
{
}
