export interface Family {

    id: string;

    name: string;
    address?: string;
    phone?: string;
    about?: string;


    divisionId?: string;
    subDivisionId?: string;
    addedOn?: Date;
    memberSince?: Date;
    status: number;
}

