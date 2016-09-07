import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { DuckSearchService } from "./duck-search.service";
import { Duck } from "./models";

@Component({
    selector: "duck-search",
    templateUrl: "/app/duck-search.component.html",
    providers: [ DuckSearchService ]
})
export class DuckSearchComponent implements OnInit {
    ducks: Observable<Duck[]>;
    private searchTerm = new Subject<string>();

    constructor(private duckSearchService: DuckSearchService,
                private router: Router)
    {}

    search(term: string): void {
        this.searchTerm.next(term);
    }

    ngOnInit(): void {
        this.ducks = this.searchTerm
            .debounceTime(300)       // wait for 300ms pause in events
            .distinctUntilChanged()  // ignore if next search term is same as previous
            .switchMap(term => term  // switch to new observable each time
                ? this.duckSearchService.search(term)
                : Observable.of<Duck[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Duck[]>([]);
            });
    }

    gotoDetail(duck: Duck): void {
        let link = ['/detail', duck.id];
        this.router.navigate(link);
    }
}
