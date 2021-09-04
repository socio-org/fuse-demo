import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {cloneDeep} from 'lodash-es';
import moment from 'moment';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {isNonNull} from '../../../main';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarEvent} from '../calendar/calendar.types';

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
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

    events: CalendarEvent[] = [];

    event: CalendarEvent;

    eventDisplayedColumns: string[] = ['title', 'start'];

    displayedColumns: string[] = ['position', 'name', 'date'];

    birthdays: PeriodicElement[] = [
        {
            'position': 1,
            'name': 'Mcdowell Horton ',
            'dob': 'Aug 31'
        },
        {
            'position': 2,
            'name': 'Evans Lyons ',
            'dob': 'Apr 19'
        },
        {
            'position': 3,
            'name': 'Belinda Castillo ',
            'dob': 'Jun 16'
        },
        {
            'position': 4,
            'name': 'Cathy Baxter ',
            'dob': 'Jan 10'
        },
        {
            'position': 5,
            'name': 'Louise Pennington ',
            'dob': 'Jul 13'
        }
    ];

    anniversaries: PeriodicElement[] = [
        {
            'position': 1,
            'name': 'Montoya Holcomb ',
            'dob': 'Mar 07'
        },
        {
            'position': 2,
            'name': 'Lizzie Underwood ',
            'dob': 'Nov 07'
        },
        {
            'position': 3,
            'name': 'Spence Little ',
            'dob': 'Jun 22'
        },
        {
            'position': 4,
            'name': 'Norton Sharpe ',
            'dob': 'Mar 09'
        },
        {
            'position': 5,
            'name': 'Stanton Hickman ',
            'dob': 'Sep 15'
        }
    ];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _router: Router, private _calendarService: CalendarService,
                private _changeDetectorRef: ChangeDetectorRef
    ) {
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {

        // Get events
        this._calendarService.getEvents(moment(), moment().add(1, 'month'), true).subscribe();
    }

    ngOnInit(): void {

        // Get events
        this._calendarService.events$
            .pipe(takeUntil(this._unsubscribeAll) && filter(isNonNull))
            .subscribe((events) => {

                // Clone the events to change the object reference so
                // that the FullCalendar can trigger a re-render.
                this.events = cloneDeep(events);
                this.event = this.events[0];
                // Mark for check
                this._changeDetectorRef.markForCheck();
                console.log(JSON.stringify(this.events));
            });

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
