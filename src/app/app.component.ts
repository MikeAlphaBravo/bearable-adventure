import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit {
  title = 'A BEARable Evening!';
  user: User[];

  constructor(private userService: UserService){}
  ngOnInit() {
    this.user = this.userService.getUser()

  }

}
