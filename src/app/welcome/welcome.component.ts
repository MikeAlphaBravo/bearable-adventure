import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './../user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // @Output() newUser = new EventEmitter();
  // submitForm(name: string, role: string){
  //   let newUserToAdd: User = new User(name,role);
  //   this.newUserSender.emit(newUserToAdd);
  // }

  constructor() { }

  ngOnInit() {
  }

}
