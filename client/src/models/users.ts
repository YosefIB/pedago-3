export class User {
    fullName: string;
    id : string;
    email: string;
    password: string;
    phone?: string;

    constructor (fullName: string, email: string, password: string, phone: string) {
    {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email;
        this.password = password;
        this.phone = phone


    }
}
}

export const users: User[] = [];

users.push(new User('John Doe', '122323', 'john@example.com', 'password123', '0545875245'));
users.push(new User('yosef', '1323223', 'yosef@example.com', '2323ss@@@@@@@@', '05024584545'));


