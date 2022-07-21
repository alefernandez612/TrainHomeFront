import {Injectable} from '@angular/core';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[];
  private apiUrl: string;

  constructor () {
    this.users = [];
    this.apiUrl = 'https://home-training.herokuapp.com/api/users/';
  }


}
