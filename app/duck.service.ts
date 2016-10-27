import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Duck } from "./models";

@Injectable()
export class DuckService {
    private headers = new Headers({"Content-Type": "application/json"});
    private ducksUrl = 'app/ducks';

    constructor(private http: Http) {}

    getDucks(): Promise<Duck[]> {
        return this.http.get(this.ducksUrl)
            .toPromise()
            .then(response => response.json().data as Duck[])
            .catch(this.handleError);
    }

    getDuck(id: number): Promise<Duck> {
        return this.getDucks()
            .then(ducks => ducks.find(duck => duck.id === id));
    }

    create(name: string): Promise<Duck> {
        return this.http.post(this.ducksUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occured", error);

        return Promise.reject(error.message || error);
    }
}
