import { Component, OnInit } from "@angular/core";

import { DuckService } from "./duck.service";

import { Duck } from "./models";

@Component({
    selector: "dashboard",
    templateUrl :"app/dashboard.component.html",
    styleUrls: ["app/dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
    ducks: Duck[] = [];

    constructor(private duckService: DuckService) {}

    ngOnInit(): void {
        this.duckService.getDucks()
            .then(ducks => this.ducks = ducks);
    }
}
