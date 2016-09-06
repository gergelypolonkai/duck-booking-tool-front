import { InMemoryDbService } from "angular2-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let ducks = [
            { id: 1, color: 'yellow' },
            { id: 2, color: 'blue' },
            { id: 3, color: 'pink' }
        ];

        return {ducks};
    }
}
