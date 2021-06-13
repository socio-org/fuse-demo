import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { MemberService } from '../../member.service';
import { Contact } from '../../member.type';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberListComponent implements OnInit, OnDestroy {

    public contactsCount: number = 0;
    public members$: Observable<Contact[]>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public searchInputControl: FormControl = new FormControl();

    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this._memberService.getMembers().subscribe();
        this.members$ = this._memberService.members$;

        this._memberService.members$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contacts: Contact[]) => {

                // Update the counts
                this.contactsCount = contacts?.length ?? 0;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                tap((query) => console.log(query))
                // switchMap(query =>

                //     // Search
                //     this._contactsService.searchContacts(query)
                // )
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

    /**
     * createContact
     */
    public createContact() {

    }

}
