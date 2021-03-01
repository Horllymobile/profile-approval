import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

const url = 'https://profile-approval-default-rtdb.firebaseio.com/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList!:AngularFireList<User>;
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getUsers():AngularFireList<User>{
    this.userList = this.db.list('users');
    console.log(this.userList);
    //return this.http.get<User[]>(`${url}users`);
    return this.userList;
  }

  addUser(user:User){
    this.userList.push(user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    });
  }
}
