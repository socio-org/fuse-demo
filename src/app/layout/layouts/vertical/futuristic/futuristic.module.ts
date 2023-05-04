import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { SearchModule } from 'app/layout/common/search/search.module';

import { FuturisticLayoutComponent } from 'app/layout/layouts/vertical/futuristic/futuristic.component';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SearchModule,
        FuturisticLayoutComponent,
    ],
    exports: [
        FuturisticLayoutComponent,
    ],
})
export class FuturisticLayoutModule
{
}
