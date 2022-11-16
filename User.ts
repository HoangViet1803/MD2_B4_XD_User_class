enum ROLE {
    ADMIN = 1,
    USER
}
class User {
    private name: string;
    protected email: string;
    role: ROLE = ROLE.USER;
    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setROLE(role: ROLE): void {
        this.role = role;
    }

    constructor(name:string, email:string, role: ROLE) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfor() {
        return `Name: ${this.name}, Email: ${this.email}`
    }
    isAdmin(): string {
        if(this.role == ROLE.ADMIN) {
            return "là admin"
        } else if(this.role == ROLE.USER) {
            return "là người dùng bình thường"
        }
    }
}

let user1 = new User('viet', 'viet123@gmail.com', ROLE.ADMIN);
let user2 = new User('thuy', 'thuy123@gmail.com', ROLE.USER);
console.log(user1.isAdmin());
