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

    add(color: string): void {
        // Make sure the color is not empty
        color = color.trim();
        if (!color) { return; }

        this.duckService.create(color)
            .then(duck => {
                this.ducks.push(duck);
                this.selectedDuck = null;
            });
    }

    delete(duck: Duck): void {
        this.duckService.delete(duck.id)
            .then(() => {
                this.ducks = this.ducks.filter(d => d !== duck);

                if (this.selectedDuck === duck) {
                    this.selectedDuck = null;
                }
            });
    }
}
