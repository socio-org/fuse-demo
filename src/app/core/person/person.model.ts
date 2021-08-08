export interface Person {

    id: string;

    name: string;
    address?: string;
    phone?: string;
    about?: string;

    familyId?: string;
    divisionId?: string;
    subDivisionId?: string;
    addedOn?: Date;
    status: number;
}

