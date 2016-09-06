import { Injectable } from "@angular/core";

import { Duck } from "./models";
import { DUCKS } from "./mocked-data";

@Injectable()
export class DuckService {
    getDucks(): Promise<Duck[]> {
        return Promise.resolve(DUCKS);
    }

    getDuck(id: number): Promise<Duck> {
        return this.getDucks().then(ducks => ducks.find(duck => duck.id === id));
    }
}
