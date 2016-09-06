import { Component, OnInit } from "@angular/core";

import { Duck } from "./models";
import { DuckService } from "./duck.service";

@Component({
    selector: "duckbook-front",
    templateUrl: "/app/app.component.html",
    providers: [ DuckService ]
})
export class AppComponent implements OnInit {
    ducks = [];
    selectedDuck: Duck;

    constructor(private duckService: DuckService) {}

    ngOnInit(): void {
        this.getDucks();
    }

    getDucks(): void {
        this.duckService.getDucks().then(ducks => this.ducks = ducks);
    }

    onSelect(duck: Duck): void {
        console.log(duck);
        this.selectedDuck = duck;
    }

    duck: Duck = {
        id: 1,
        color: 'yellow'
    };
}
