import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { Activity } from 'app/modules/admin/pages/activities/activities.types';
import { ActivitiesService } from 'app/modules/admin/pages/activities/activities.service';

@Component({
    selector       : 'activity',
    templateUrl    : './activities.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent implements OnInit
{
    activities$: Observable<Activity[]>;

    /**
     * Constructor
     */
    constructor(public _activityService: ActivitiesService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the activities
        this.activities$ = this._activityService.activities;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean
    {
        return DateTime.fromISO(current).hasSame(DateTime.fromISO(compare), 'day');
        // return moment(current, moment.ISO_8601).isSame(moment(compare, moment.ISO_8601), 'day');
    }

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string
    {
        const comp = DateTime.fromISO(date);
        const day = comp.toRelativeCalendar();
        // uppercase first letter
        return day[0].toUpperCase() + day.substring(1);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
