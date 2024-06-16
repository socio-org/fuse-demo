import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import {cloneDeep} from 'lodash-es';
import moment from 'moment';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {isNonNull} from '../../../main';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarEvent} from '../calendar/calendar.types';
import {DashboardService} from './dashboard.service';

export interface Post {
    id: string;

    title: string;

    description: string;

    addedBy: string;

    type: string;

    addedOn: string;

    addedByAvatar: string;

    contentUrl: string;

}

export interface PeriodicElement {
    name: string;

    position: number;

    dob: string;
}

export interface Data {
    posts: Post[];

    birthdays: PeriodicElement[];

    anniversaries: PeriodicElement[];
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone:true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    // imports: [RouterLink]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

    data: Data;

    events: CalendarEvent[] = [];

    event: CalendarEvent;

    eventDisplayedColumns: string[] = ['title', 'start'];

    displayedColumns: string[] = ['position', 'name', 'date'];

    anniversaries: PeriodicElement[] = [];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _dashboardService: DashboardService,
        private _router: Router,
        private _calendarService: CalendarService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {

        this._dashboardService.getData();
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
            });
        // Get the data
        this._dashboardService.data$
            .pipe(takeUntil(this._unsubscribeAll) && filter(isNonNull))
            .subscribe((data) => {
                // Store the data
                this.data = data;
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
