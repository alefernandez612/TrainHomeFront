import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string;

  constructor (
    private httpClient: HttpClient
  ) {
    this.apiUrl = 'https://home-training.herokuapp.com/api/users/';
  }

  getAll(): Promise<User[]> {
    return lastValueFrom(this.httpClient.get<User[]>(this.apiUrl));
  }

  getById(id: number): Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(this.apiUrl + id));
  }

  register(form: any): Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(`${this.apiUrl}register`, form));
  }

  login(values: {username: string, password: string;}): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.apiUrl}login`, values)
    );
  }
}
