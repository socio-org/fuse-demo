import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ChatComponent } from 'app/modules/admin/apps/chat/chat.component';

import { chatRoutes } from 'app/modules/admin/apps/chat/chat.routing';
import { ChatsComponent } from 'app/modules/admin/apps/chat/chats/chats.component';
import { ContactInfoComponent } from 'app/modules/admin/apps/chat/contact-info/contact-info.component';
import { ConversationComponent } from 'app/modules/admin/apps/chat/conversation/conversation.component';
import { EmptyConversationComponent } from 'app/modules/admin/apps/chat/empty-conversation/empty-conversation.component';
import { NewChatComponent } from 'app/modules/admin/apps/chat/new-chat/new-chat.component';
import { ProfileComponent } from 'app/modules/admin/apps/chat/profile/profile.component';

@NgModule({
    imports: [
        RouterModule.forChild(chatRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule,
        ChatComponent,
        ChatsComponent,
        ContactInfoComponent,
        ConversationComponent,
        EmptyConversationComponent,
        NewChatComponent,
        ProfileComponent,
    ],
})
export class ChatModule
{
}
