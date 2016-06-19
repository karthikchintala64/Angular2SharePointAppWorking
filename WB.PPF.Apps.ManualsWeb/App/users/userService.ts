import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {User} from './user'
import 'rxjs/add/operator/map';

@Injectable()
export /**
 * UserService
 */
    class UserService {
    constructor(private _http: Http) { }

    getUsers(sinceValue: number): Observable<User[]> {
        return this._http.get('https://api.github.com/users?per_page=10&since=' + sinceValue)
            .map(res => <User[]>res.json());
    }
    getUserDetail(login: string): Observable<User> {
        return this._http.get('https://api.github.com/users/' + login)
            .map(res => <User>res.json());
    }

    getUserRepos(login: string): Observable<User> {
        return this._http.get('https://api.github.com/users/' + login + '/repos')
            .map(res => <User>res.json());
    }
    getUserFollowers(login: string, perPage: number, pageNumber: number): Observable<User> {
        return this._http.get('https://api.github.com/users/' + login + '/followers?per_page=' + perPage + '&page=' + pageNumber)
            .map(res => <User>res.json());
    }
    getUserFollowing(login: string, perPage: number, pageNumber: number): Observable<User> {
        return this._http.get('https://api.github.com/users/' + login + '/following?per_page=' + perPage + '&page=' + pageNumber)
            .map(res => <User>res.json());
    }
}