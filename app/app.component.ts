import { Component } from "@angular/core";

import { Duck } from "./models";

const DUCKS: Ducks[] = [
    { id: 1, color: 'yellow' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'pink' }
]

@Component({
    selector: "duckbook-front",
    templateUrl: "/app/app.component.html"
})
export class AppComponent {
    ducks = DUCKS;
    selectedDuck: Duck;

    onSelect(duck: Duck): void {
        console.log(duck);
        this.selectedDuck = duck;
    }

    duck: Duck = {
        id: 1,
        color: 'yellow'
    };
}
