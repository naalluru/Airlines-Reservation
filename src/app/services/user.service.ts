import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

  s
    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        console.log(user)
        return this.http.post<User>('http://localhost:8080/user/adduser', user);
    }

    // update(user: User):Observable<any> {
    //     return this.http.put('/api/users/' + user.id, user);
    // }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}