import {Injectable} from '@angular/core';
import {cloneDeep} from 'lodash-es';
import {FuseMockApiService} from '@fuse/lib/mock-api/mock-api.service';
import {families as familiesData} from 'app/mock-api/apps/family/data';

@Injectable({
    providedIn: 'root'
})
export class FamiliesMockApi {
    private _families: any[] = familiesData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Items - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/family')
            .reply(() => {

                // Clone the families
                const families = cloneDeep(this._families);
                return [
                    200,
                    families
                ];
            });
    }
}
