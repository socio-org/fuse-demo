import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LanguagesComponent } from 'app/modules/admin/ui/other-components/common/languages/languages.component';
import { MessagesComponent } from 'app/modules/admin/ui/other-components/common/messages/messages.component';
import { NotificationsComponent } from 'app/modules/admin/ui/other-components/common/notifications/notifications.component';
import { OverviewComponent } from 'app/modules/admin/ui/other-components/common/overview/overview.component';
import { QuickChatComponent } from 'app/modules/admin/ui/other-components/common/quick-chat/quick-chat.component';
import { SearchComponent } from 'app/modules/admin/ui/other-components/common/search/search.component';
import { ShortcutsComponent } from 'app/modules/admin/ui/other-components/common/shortcuts/shortcuts.component';
import { UserComponent } from 'app/modules/admin/ui/other-components/common/user/user.component';

import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';
import { otherComponentsRoutes } from 'app/modules/admin/ui/other-components/other-components.routing';
import { ApexChartsComponent } from 'app/modules/admin/ui/other-components/third-party/apex-charts/apex-charts.component';
import { QuillEditorComponent } from 'app/modules/admin/ui/other-components/third-party/quill-editor/quill-editor.component';

@NgModule({
    imports: [
        RouterModule.forChild(otherComponentsRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        OtherComponentsComponent,
        OverviewComponent,
        LanguagesComponent,
        MessagesComponent,
        NotificationsComponent,
        QuickChatComponent,
        SearchComponent,
        ShortcutsComponent,
        UserComponent,
        ApexChartsComponent,
        QuillEditorComponent,
    ],
})
export class OtherComponentsModule
{
}
