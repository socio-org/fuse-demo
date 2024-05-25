import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { appConfig } from 'app/app.config';

bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));

export const isNonNull = <T>(value: T): value is NonNullable<T> => value != null;
