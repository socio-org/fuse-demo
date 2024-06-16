import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    QueryList,
    Renderer2,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import {FuseCardComponent} from '@fuse/components/card';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styles: [
            `
            posts fuse-card {
                margin: 16px;
            }
        `
    ],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        SharedModule,
        MaterialModule,
        FuseCardComponent
    ]
})
export class PostsComponent implements AfterViewInit {
    numberOfPosts: any = {};
    selectedFilter: string = 'post';
    @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fusePosts: QueryList<ElementRef>;

    /**
     * Constructor
     */
    constructor(private _renderer2: Renderer2) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void {

        // Filter the posts for the first time
        this._filterPosts();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Filter the posts based on the selected filter
     *
     * @private
     */
    private _filterPosts(): void {
        // Go through all fuse-posts
        this._fusePosts.forEach((fuseCard) => {

            // If the 'all' filter is selected...
            if (this.selectedFilter === 'all') {
                // Remove hidden class from all posts
                fuseCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else {
                // If the card has the class name that matches the selected filter...
                if (fuseCard.nativeElement.classList.contains('filter-' + this.selectedFilter)) {
                    // Remove the hidden class
                    fuseCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else {
                    // Add the hidden class
                    fuseCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }
}
