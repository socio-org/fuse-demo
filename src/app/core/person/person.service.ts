import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Person} from './person.model';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    // Private
    private _person: BehaviorSubject<Person | null> = new BehaviorSubject(null);
    private _persons: BehaviorSubject<Person[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for persons
     */
    get persons$(): Observable<Person[]> {
        return this._persons.asObservable();
    }

    /**
     * Getter for person
     */
    get person$(): Observable<Person> {
        return this._person.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get persons
     */
    getPersons(): Observable<Person[]> {
        return this._httpClient.get<Person[]>('api/apps/person').pipe(
            tap((response: any) => {
                this._persons.next(response);
            })
        );
    }

    /**
     * Get person by id
     */
    getPersonById(id: string): Observable<Person> {
        return this._persons.pipe(
            take(1),
            map((persons) => {

                // Find within the folders and files
                const person = persons.find(value => value.id === id) || null;

                // Update the person
                this._person.next(person);

                // Return the person
                return person;
            }),
            switchMap((person) => {

                if (!person) {
                    return throwError('Could not found the person with id of ' + id + '!');
                }

                return of(person);
            })
        );
    }
}
