export class Item implements IItem {
    id: string;
    label: string;
    type: string;

    constructor(id: string, label: string, type: string) {
        this.id = id;
        this.label = label;
        this.type = type;
    }
}

export interface IItem {
    id: string;
    label: string;
    type: string;
}