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

//  [
//    '{{repeat(10, 18)}}',
//    {
//      id: '{{objectId()}}',
//      uid: '{{101 + index()}}',
//      imgUrl: 'assets/images/profile/family-mock.webp',
//      name: '{{firstName()}} {{surname()}}',
//      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
//      phone: '+1 {{phone()}}',
//      members:[
//        '{{repeat(2,5)}}',
//        {
//          id: '{{integer(2000, 4000)}}',
//          name: '{{firstName()}} {{bool()&&bool()?surname()+" ":""}}{{ surname()}}',
//      relation: '{{random("daughter", "son")}}'
//        }
//        ],
//
//
//    location: {
//      latitude: '{{floating(-90.000001, 90)}}',
//      longitude: '{{floating(-180.000001, 180)}}'
//      },
//      about: '{{lorem(5, "words")}}',
//      addedOn: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
//      memberSince: '{{date(new Date(2001, 0, 1), new Date(2014, 0, 1), "YYYY-MM-dd")}}',
//      status: 1
//
//    }
//  ]
