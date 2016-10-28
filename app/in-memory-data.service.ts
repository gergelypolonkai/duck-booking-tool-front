import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDuckService implements InMemoryDbService {
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

export class InMemoryUserService implements InMemoryDbService {
    createDb() {
        let users = [
            {
                id: 1,
                username: 'epolger',
                password: 'epolger'
            }
        ];

        return {users};
    }
}
