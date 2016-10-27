import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Duck } from "./models";
import { DuckService } from "./duck.service";

@Component({
    moduleId: module.id,
    selector: "duck-detail",
    templateUrl: "duck-detail.component.html"
})
export class DuckDetailComponent {
    duck: Duck;

    constructor(
        private duckService: DuckService,
        private route: ActivatedRoute,
        private location: Location)
    {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.duckService.getDuck(id)
                .then(duck => this.duck = duck);
        })
    }
}
