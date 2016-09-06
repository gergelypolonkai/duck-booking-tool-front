import { Component, Input } from "@angular/core";

import { Duck } from "./models";

@Component({
    selector: "duck-detail",
    templateUrl: "/app/duck-detail.component.html"
})
export class DuckDetailComponent {
    @Input()
    duck: Duck;
}
