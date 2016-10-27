import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let ducks = [
            {
                id: 1,
                name: "Fastfingers",
                color: "#ee6aa7"
            },
            {
                id: 2,
                name: "Lady Pickett",
                color: "#8b8b00"
            }
        ];

        return {ducks};
    }
}
