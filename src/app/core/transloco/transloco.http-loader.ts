import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

import {APP_BASE_HREF} from '@angular/common';
@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader
{
    private _httpClient = inject(HttpClient);
    private baseHref = inject(APP_BASE_HREF);

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get translation
     *
     * @param lang
     */
    getTranslation(lang: string): Observable<Translation>
    {
        return this._httpClient.get<Translation>(this.baseHref + `./assets/i18n/${lang}.json`);
    }
}
