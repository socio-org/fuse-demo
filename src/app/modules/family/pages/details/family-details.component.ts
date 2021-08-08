import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {MatDrawerToggleResult} from "@angular/material/sidenav";
import {Subject} from "rxjs";
import {FamilyListComponent} from "../family-list/family-list.component";

@Component({
    selector: 'app-details',
    templateUrl: './family-details.component.html',
    styleUrls: ['./family-details.component.scss']
})
export class FamilyDetailsComponent implements OnInit {
    family: any = {};
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fileManagerListComponent: FamilyListComponent
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

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
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
