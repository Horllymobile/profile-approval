import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users!: User[];
  registerForm!: FormGroup;
  imageUrl!: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        image: ['',[Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required]],
        age: ['', [Validators.required]],
        phone: ['', [Validators.required]]
      }
    )

    this.userService.getUsers()
    .valueChanges()
    .subscribe((data) => {
      this.users = data;
    });
  }

  uploadImage(event:any){
    let file = event.target.files[0];
    const ref = this.storage.ref('/user_images');

    const imageRef = ref.child(file.name).put(file,{
      contentType: file.type
    });

    imageRef
    .then((snapShot:any) => {
      console.log(snapShot)
      snapShot.task.on('next', (e:any) => {
        console.log(e);
      });
      return snapShot.ref.getDownloadURL();
    })
    .then((url:any) => {
      this.imageUrl = url;
      console.log(url);
    })
    .catch((err:any) => {
      console.log(err);
    })
  }

  register(){
    const user: User = {
        image: this.imageUrl,
        firstname: this.registerForm.get('firstname')?.value,
        lastname: this.registerForm.get('lastname')?.value,
        email: this.registerForm.get('email')?.value,
        age: this.registerForm.get('age')?.value,
        phone: this.registerForm.get('phone')?.value,
        approved: false,
    }

    this.userService.addUser(user);
  }

}
