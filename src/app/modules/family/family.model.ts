
export interface Family {

    id: string;

    name: string;
    address?: string;
    phone?: string;
    about?: string;
    members?: FamilyMember[];

    divisionId?: string;
    subDivisionId?: string;
    addedOn?: Date;
    memberSince?: Date;
    status: number;
}


export interface FamilyMember {

    id: string;
    familyId: string;
    avatar?: string;

    name: string;
    relation: string;

}

