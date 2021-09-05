import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { MemberService } from '../../member.service';
import { Contact } from '../../member.type';

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberDetailsComponent implements OnInit {
    public contacts: Contact[];
    relation = ['Spouse', "Daughter", 'Son', 'Daughter'];
    public contactsCount: number = 0;
    /**
     * @todo need to change the contact
     */
    public members$: Observable<Contact[]>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    // activeIds: string[]
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
    }

}
