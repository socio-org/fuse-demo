import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {ActivatedRoute, Router} from '@angular/router';
import {FuseMediaWatcherService} from '@fuse/services/media-watcher';
import {Subject} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Family} from '../../family.model';
import {FamilyService} from '../../family.service';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-family-list',
    templateUrl: './family-list.component.html',
    styleUrls: ['./family-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamilyListComponent implements OnInit, OnDestroy {


    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    selectedFamily: Family;
    families: Family[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    public searchInputControl: FormControl = new FormControl();
    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _fileManagerService: FamilyService,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the items
        this._fileManagerService.families$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((families: Family[]) => {
                this.families = families;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the item
        this._fileManagerService.family$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((family: Family) => {
                this.selectedFamily = family;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to media query change
        this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((state) => {

                // Calculate the drawer mode
                this.drawerMode = state.matches ? 'side' : 'over';

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                // tap((query) => console.log(query))
                switchMap(query =>

                    // Search
                    this._fileManagerService.getFamilies(query)
                )
            )
            .subscribe();
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
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        // Go back to the list
        // noinspection JSIgnoredPromiseFromCall
        this._router.navigate(['./'], {relativeTo: this._activatedRoute});

        // Mark for check
        this._changeDetectorRef.markForCheck();
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

    /**
     * addFamily
     */
    addFamily() {
        alert('Add new family')
    }
}
