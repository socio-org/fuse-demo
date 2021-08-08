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

    displayedColumns: string[] = ['position', 'name', 'date'];

    birthdays: PeriodicElement[] = [
        {
            "position": 1,
            "name": "Mcdowell Horton ",
            "dob": "Aug 31"
        },
        {
            "position": 2,
            "name": "Evans Lyons ",
            "dob": "Apr 19"
        },
        {
            "position": 3,
            "name": "Belinda Castillo ",
            "dob": "Jun 16"
        },
        {
            "position": 4,
            "name": "Cathy Baxter ",
            "dob": "Jan 10"
        },
        {
            "position": 5,
            "name": "Louise Pennington ",
            "dob": "Jul 13"
        }
    ];
    anniversaries: PeriodicElement[] = [
        {
            "position": 1,
            "name": "Montoya Holcomb ",
            "dob": "Mar 07"
        },
        {
            "position": 2,
            "name": "Lizzie Underwood ",
            "dob": "Nov 07"
        },
        {
            "position": 3,
            "name": "Spence Little ",
            "dob": "Jun 22"
        },
        {
            "position": 4,
            "name": "Norton Sharpe ",
            "dob": "Mar 09"
        },
        {
            "position": 5,
            "name": "Stanton Hickman ",
            "dob": "Sep 15"
        }
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
