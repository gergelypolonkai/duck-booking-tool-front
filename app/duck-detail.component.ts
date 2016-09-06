import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { DuckService } from "./duck.service";

import { Duck } from "./models";

@Component({
    selector: "duck-detail",
    templateUrl: "/app/duck-detail.component.html"
})
export class DuckDetailComponent implements OnInit {
    constructor(private duckService: DuckService,
                private route: ActivatedRoute)
    {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.duckService.getDuck(id)
                .then(duck => this.duck = duck);
        });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.duckService.update(this.duck)
            .then(this.goBack);
    }

    @Input()
    duck: Duck;
}
