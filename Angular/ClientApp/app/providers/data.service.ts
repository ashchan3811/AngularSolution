import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { IItem } from "../models/item";


@Injectable()
export class DataService {

    private _url = "E:\\Projects\\Visual Studio\\AngularSolution\\Angular\\item.json";

    constructor(@Inject('BASE_URL') baseUrl: string,private http: Http) {

    }

    getData(): Observable<IItem[]> {
        return this.http.get(this._url)
            .map(res => res.json() as Array<IItem>);
    }
}
