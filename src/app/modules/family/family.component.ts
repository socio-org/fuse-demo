import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-family',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamilyComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
