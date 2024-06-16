import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { FamilyListComponent } from '../family-list/family-list.component';
import { FamilyService } from '../../family.service';
import { Family } from '../../family.model';
import { takeUntil } from "rxjs/operators";
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

@Component({
    selector: 'app-details',
    templateUrl: './family-details.component.html',
    styleUrls: ['./family-details.component.scss'],
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule
    ]
})
export class FamilyDetailsComponent implements OnInit {
    family: Family;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fileManagerListComponent: FamilyListComponent,
        private _familyService: FamilyService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Open the drawer
        this._fileManagerListComponent.matDrawer.open();
        // Get the item
        this._familyService.family$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((family: Family) => {

                // Open the drawer in case it is closed
                // noinspection JSIgnoredPromiseFromCall
                this._fileManagerListComponent.matDrawer.open();

                // Get the item
                this.family = family;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this._fileManagerListComponent.matDrawer.close();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
