import { Component } from '@angular/core';
import { Database } from "../../providers/database";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private db: Database) {
        console.log(this.db.items);
    }
}
