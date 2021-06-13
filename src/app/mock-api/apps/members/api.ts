import {Injectable} from '@angular/core';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {assign, cloneDeep} from 'lodash-es';
import {FuseMockApiService, FuseMockApiUtils} from '@fuse/lib/mock-api';
import {countries as countriesData, members as membersData, tags as tagsData} from 'app/mock-api/apps/members/data';

@Injectable({
    providedIn: 'root'
})
export class MembersMockApi {
    private _members: any[] = membersData;
    private _countries: any[] = countriesData;
    private _tags: any[] = tagsData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Members - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/members/all')
            .reply(() => {

                // Clone the members
                const members = cloneDeep(this._members);

                // Sort the members by the name field by default
                members.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, members];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Members Search - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/members/search')
            .reply(({request}) => {

                // Get the search query
                const query = request.params.get('query');

                // Clone the members
                let members = cloneDeep(this._members);

                // If the query exists...
                if (query) {
                    // Filter the members
                    members = members.filter(member => member.name && member.name.toLowerCase().includes(query.toLowerCase()));
                }

                // Sort the members by the name field by default
                members.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, members];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/members/member')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the members
                const members = cloneDeep(this._members);

                // Find the member
                const member = members.find(item => item.id === id);

                // Return the response
                return [200, member];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/members/member')
            .reply(() => {

                // Generate a new member
                const newContact = {
                    id: FuseMockApiUtils.guid(),
                    avatar: null,
                    name: 'New Contact',
                    emails: [],
                    phoneNumbers: [],
                    job: {
                        title: '',
                        company: ''
                    },
                    birthday: null,
                    address: null,
                    notes: null,
                    tags: []
                };

                // Unshift the new member
                this._members.unshift(newContact);

                // Return the response
                return [200, newContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/members/member')
            .reply(({request}) => {

                // Get the id and member
                const id = request.body.id;
                const member = cloneDeep(request.body.member);

                // Prepare the updated member
                let updatedContact = null;

                // Find the member and update it
                this._members.forEach((item, index, members) => {

                    if (item.id === id) {
                        // Update the member
                        members[index] = assign({}, members[index], member);

                        // Store the updated member
                        updatedContact = members[index];
                    }
                });

                // Return the response
                return [200, updatedContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/members/member')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the member and delete it
                this._members.forEach((item, index) => {

                    if (item.id === id) {
                        this._members.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Countries - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/members/countries')
            .reply(() => [200, cloneDeep(this._countries)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/members/tags')
            .reply(() => [200, cloneDeep(this._tags)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/members/tag')
            .reply(({request}) => {

                // Get the tag
                const newTag = cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = FuseMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                // Return the response
                return [200, newTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/members/tag')
            .reply(({request}) => {

                // Get the id and tag
                const id = request.body.id;
                const tag = cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {

                    if (item.id === id) {
                        // Update the tag
                        tags[index] = assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                // Return the response
                return [200, updatedTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/members/tag')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the tag and delete it
                this._tags.forEach((item, index) => {

                    if (item.id === id) {
                        this._tags.splice(index, 1);
                    }
                });

                // Get the members that have the tag
                const membersWithTag = this._members.filter(member => member.tags.indexOf(id) > -1);

                // Iterate through them and delete the tag
                membersWithTag.forEach((member) => {
                    member.tags.splice(member.tags.indexOf(id), 1);
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /**
         * Read the given file as mock-api url
         *
         * @param file
         */
        const readAsDataURL = (file: File): Promise<any> =>

            // Return a new promise
            new Promise((resolve, reject) => {

                // Create a new reader
                const reader = new FileReader();

                // Resolve the promise on success
                reader.onload = (): void => {
                    resolve(reader.result);
                };

                // Reject the promise on error
                reader.onerror = (e): void => {
                    reject(e);
                };

                // Read the file as the
                reader.readAsDataURL(file);
            })
        ;

        this._fuseMockApiService
            .onPost('api/apps/members/avatar')
            .reply(({request}) => {

                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated member
                let updatedContact: any = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {

                        // Find the member and update it
                        this._members.forEach((item, index, members) => {

                            if (item.id === id) {
                                // Update the avatar
                                members[index].avatar = path;

                                // Store the updated member
                                updatedContact = members[index];
                            }
                        });

                        // Return the response
                        return [200, updatedContact];
                    })
                );
            });
    }
}
