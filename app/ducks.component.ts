import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Duck } from "./models";
import { DuckService } from "./duck.service";

@Component({
    selector: "ducks",
    templateUrl: "/app/ducks.component.html",
    providers: [ DuckService ]
})
export class DucksComponent implements OnInit {
    ducks = [];
    selectedDuck: Duck;

    constructor(private router: Router,
                private duckService: DuckService)
    {}

    ngOnInit(): void {
        this.getDucks();
    }

    getDucks(): void {
        this.duckService.getDucks().then(ducks => this.ducks = ducks);
    }

    onSelect(duck: Duck): void {
        this.selectedDuck = duck;
    }

    gotoDetail(duck: Duck): void {
        this.router.navigate(['/detail', duck.id]);
    }
}
