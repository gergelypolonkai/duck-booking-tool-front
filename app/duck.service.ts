import { Injectable } from "@angular/core";

import { Duck } from "./models";
import { DUCKS } from "./mocked-data";

@Injectable()
export class DuckService {
    getDucks(): Promise<Duck[]> {
        return Promise.resolve(DUCKS);
    }
}
