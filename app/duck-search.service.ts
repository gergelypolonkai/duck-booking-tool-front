import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

import { Duck } from "./models";

@Injectable()
export class DuckSearchService {
    constructor (private http: Http) {}

    search(term: string): Observable<Duck[]> {
        return this.http.get(`app/ducks/?color=${term}`)
                   .map((r: Response) => r.json().data as Duck[]);
    }
}
