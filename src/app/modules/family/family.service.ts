import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Family} from './family.model';

@Injectable({
    providedIn: 'root'
})
export class FamilyService {
    // Private
    private _family: BehaviorSubject<Family | null> = new BehaviorSubject(null);
    private _families: BehaviorSubject<Family[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for families
     */
    get families$(): Observable<Family[]> {
        return this._families.asObservable();
    }

    /**
     * Getter for family
     */
    get family$(): Observable<Family> {
        return this._family.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get families
     */
    getFamilies(query?): Observable<Family[]> {
        return this._httpClient.get<Family[]>('api/apps/family').pipe(
            tap((response: any) => {
                this._families.next(response);
            })
        );
    }

    /**
     * Get family by id
     */
    getFamilyById(id: string): Observable<Family> {
        return this._families.pipe(
            take(1),
            map((families) => {

                // Find within the folders and files
                const family = families.find(value => value.id === id) || null;

                // Update the family
                this._family.next(family);

                // Return the family
                return family;
            }),
            switchMap((family) => {

                if (!family) {
                    return throwError('Could not found the family with id of ' + id + '!');
                }

                return of(family);
            })
        );
    }
}
