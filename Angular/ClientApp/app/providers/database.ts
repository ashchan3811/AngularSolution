import { Injectable } from '@angular/core';
import { DataService } from "./data.service";
import { IItem } from "../models/item";


@Injectable()
export class Database {

    public items: Array<IItem>;

    constructor(private ds: DataService) {
        this.ds.getData().subscribe(items => {
            this.items = items;
        });
    }

}
