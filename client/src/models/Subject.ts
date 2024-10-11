export class Subject {
    subjectID: string;
    name: string;
    
    constructor( name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }
}

export const subjects: Subject[] = [
    new Subject("Calculus"),
    new Subject("Arithmetics"),
    new Subject("2nd Grade Math"),
]
