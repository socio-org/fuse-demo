import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Contact} from './member.type';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    private _members: BehaviorSubject<Contact[] | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Getter for contact
     */
    get members$(): Observable<Contact[]> {
        return this._members.asObservable();
    }

    /**
     * Get Members
     */
    getMembers(): Observable<Contact[]> {
        return this._httpClient.get<Contact[]>('api/apps/contacts/all').pipe(
            tap((contacts) => {
                this._members.next(contacts);
            })
        );
    }

    /**
     * Search contacts with given query
     *
     * @param query
     */
    searchContacts(query: string): Observable<Contact[]> {
        return this._httpClient.get<Contact[]>('api/apps/contacts/search', {
            params: {query}
        }).pipe(
            tap((contacts) => {
                this._members.next(contacts);
            })
        );
    }
}
