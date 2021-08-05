import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

export interface PeriodicElement {
    name: string;
    position: number;
    dob: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {

    displayedColumns: string[] = ['position', 'name', 'date' ];

    dataSource: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', dob: 'June 15'},
        {position: 2, name: 'Helium', dob: 'June 15'},
        {position: 3, name: 'Lithium', dob: 'June 15'},
        {position: 4, name: 'Beryllium', dob: 'June 15'},
        {position: 5, name: 'Boron', dob: 'June 15'}
    ];

    constructor(private _router: Router) {
    }

    ngOnInit(): void {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
