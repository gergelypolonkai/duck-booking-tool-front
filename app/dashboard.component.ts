import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DuckService } from "./duck.service";
import { Duck } from "./models";

@Component({
    selector: "dashboard",
    templateUrl: "/app/dashboard.component.html"
})
export class DashboardComponent implements OnInit {
    ducks: Duck[] = [];

    constructor(private router: Router,
                private duckService: DuckService)
    {}

    ngOnInit(): void {
        this.duckService.getDucks()
            .then(ducks => this.ducks = ducks.slice(1, 5));
    }

    gotoDetail(duck: Duck): void {
        let link = ['/detail', duck.id];
        this.router.navigate(link);
    }
}
