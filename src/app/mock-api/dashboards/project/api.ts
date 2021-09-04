import {Injectable} from '@angular/core';
import {FuseMockApiService} from '@fuse/lib/mock-api';
import {project as projectData} from 'app/mock-api/dashboards/project/data';
import {cloneDeep} from 'lodash-es';

@Injectable({
    providedIn: 'root'
})
export class ProjectMockApi {
    private _project: any = projectData;

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
        console.log('77777777777777777777777777777')
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/dashboards/project')
            .reply(() => {
                console.log('------------------')
                return [200, cloneDeep(this._project)];
            });
    }
}
