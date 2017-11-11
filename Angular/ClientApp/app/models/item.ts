export class Item {
    id: string;
    label: string;
    type: string;

    constructor(id: string, label: string, type: string) {
        this.id = id;
        this.label = label;
        this.type = type;
    }
}