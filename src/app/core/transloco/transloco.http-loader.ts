import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translation, TranslocoLoader} from '@ngneat/transloco';

import {APP_BASE_HREF} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class TranslocoHttpLoader implements TranslocoLoader {
    /**
     * Constructor
     */
    constructor(@Inject(APP_BASE_HREF) private baseHref: string, private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get translation
     *
     * @param lang
     */
    getTranslation(lang: string): Observable<Translation> {
        return this._httpClient.get<Translation>(this.baseHref + `assets/i18n/${lang}.json`);
    }
}
