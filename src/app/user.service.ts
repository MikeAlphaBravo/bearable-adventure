import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USER } from './mock-user';

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    return USER;
  }

  // getUserById(userId: number){
  //   for (var i = 0; i <= USER.length - 1; i++) {
  //     if (USER[i].id === userId) {
  //       return USER[i];
  //     }
  //   }
  // }

}
