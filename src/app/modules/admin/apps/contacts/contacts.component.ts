import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { RouterOutlet } from '@angular/router';

@Component({
    selector       : 'contacts',
    templateUrl    : './contacts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [RouterOutlet],
})
export class ContactsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
