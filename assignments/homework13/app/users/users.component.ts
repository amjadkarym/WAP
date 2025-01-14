import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    <p>  users   </p>
    <ul>
    <li *ngFor="let user of data"><a [routerLink]="['users', user.login.uuid]">{{user.name.first}} {{user.name.last}}</a></li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  data: Object;

  constructor(private userService: DataService) { 
    let Data: string = userService.getCacheData();   
    if(Data != null)
    {
      console.log(Data);
      this.data = JSON.parse(Data);
    } 
    else{
      console.log('error in users components');
    }
  }

  onGet() {
  }

  ngOnInit() {
  }

}
