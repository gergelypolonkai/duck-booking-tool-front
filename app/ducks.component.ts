import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Duck } from "./models";
import { DuckService } from "./duck.service";

@Component({
    moduleId: module.id,
    selector: "ducks",
    templateUrl: "ducks.component.html"
})
export class DucksComponent {
    ducks: Duck[];
    selectedDuck: Duck;

    constructor(private duckService: DuckService,
                private router: Router)
    {}

    getDucks(): void
    {
        this.duckService
            .getDucks()
            .then(ducks => this.ducks = ducks);
    }

    add(name: string): void {
        name = name.trim();

        if (!name) { return; }

        this.duckService.create(name)
            .then(duck => {
                this.ducks.push(duck);
                this.selectedDuck = null;
            });
    }

    ngOnInit(): void {
        this.getDucks();
    }

    onSelect(duck: Duck): void {
        this.selectedDuck = duck;
    }
}
