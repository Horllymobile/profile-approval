import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
const url = 'https://profile-approval-default-rtdb.firebaseio.com/';
declare let toastr:any;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList!:AngularFireList<User>;
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private toastr: ToastrService
  ) { }

  getUsers():AngularFireList<User>{
    this.userList = this.db.list('users');
    return this.userList;
  }

  addUser(user:User){
    this.userList.push(user)
    .then((res:any) => {
      this.toastr.success('Registration successful, awaiting approval');
    })
    .catch(err => {
      this.toastr.error('Error occurs while registering user try again later');
      console.log(err);
    });

  }
}
