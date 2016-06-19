import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './userService'
import { User } from './user'

@Component({
    templateUrl: './app/users/users.html',
    styleUrls: ['./app/users/users.css'],
    providers: [UserService]
})
export class UsersList {
    constructor(private _userService: UserService) { }

    users: Observable<User[]>;
    ngOnInit() {
        this.users = this._userService.getUsers(0);
    }   
}