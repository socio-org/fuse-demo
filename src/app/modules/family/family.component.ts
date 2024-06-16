import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';

@Component({
    selector: 'app-family',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone:true,
    imports: [
        RouterModule
    ]
})
export class FamilyComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
