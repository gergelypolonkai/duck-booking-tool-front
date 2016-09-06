import { Component } from "@angular/core";

import { Duck } from "./models";

@Component({
    selector: "duckbook-front",
    templateUrl: "/app/app.component.html"
})
export class AppComponent {
    duck: Duck = {
        id: 1,
        color: 'yellow'
    };
}
