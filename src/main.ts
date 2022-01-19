import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
import { AppModule } from 'app/app.module';

if ( environment.production )
{
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));

export const isNonNull = <T>(value: T): value is NonNullable<T> => value != null;
