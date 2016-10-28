import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { User } from "./models";

@Injectable()
export class UserService {
    private headers = new Headers({"Content-Type": "application/json"});
    private usersUrl = 'app/users';

    currentUser: User = null;

    constructor(private http: Http) {}

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    create(username: string, password: string): Promise<User> {
        return this.http.post(this.usersUrl,
                              JSON.stringify(
                                  {
                                      username: name,
                                      password: password
                                  }),
                              {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occured", error);

        return Promise.reject(error.message || error);
    }
}
