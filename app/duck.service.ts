import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Duck } from "./models";

@Injectable()
export class DuckService {
    private ducksUrl = 'app/ducks';
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error("An error occured", error);

        return Promise.reject(error.message || error);
    }

    update(duck: Duck): Promise<Duck> {
        const url = `${this.ducksUrl}/${duck.id}`;

        return this.http.put(url, JSON.stringify(duck), {headers: this.headers})
                   .toPromise()
                   .then(() => duck)
                   .catch(this.handleError);
    }

    getDucks(): Promise<Duck[]> {
        return this.http.get(this.ducksUrl)
                   .toPromise()
                   .then(response => response.json().data as Duck[])
                   .catch(this.handleError);
    }

    getDuck(id: number): Promise<Duck> {
        return this.getDucks().then(ducks => ducks.find(duck => duck.id === id));
    }
}
