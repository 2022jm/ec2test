import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public email;
  public username;
  public surname;
  public name;
  public isAdmin = false;
  public password;

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    
  }
}
