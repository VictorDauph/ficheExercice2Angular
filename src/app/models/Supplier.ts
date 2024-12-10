export class Supplier {
    public id: number;
    public name: string;
    public company: string;
    public phone: string;
    private isVerified: boolean = false // Statut de vérification (par défaut : non vérifié)

    constructor(id: number, name: string, company: string, phone: string) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    toggleIsVerfied(): void {
        this.isVerified = !this.isVerified;
    }

    getIsVerfied(): Boolean {
        return this.isVerified;
    }

}