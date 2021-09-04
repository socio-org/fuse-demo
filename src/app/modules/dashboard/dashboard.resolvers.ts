import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Calendar} from 'app/modules/calendar/calendar.types';
import {Observable} from 'rxjs';
import {DashboardService} from './dashboard.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _dashboardService: DashboardService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Calendar[]> {
        return this._dashboardService.getData();
    }
}
