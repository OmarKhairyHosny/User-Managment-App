import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-General',
  templateUrl: './General.component.html',
  styleUrls: ['./General.component.css']
})
export class GeneralComponent implements OnInit {
users : User[];
  constructor(private router: Router, private http:HttpClient) { }
  private userUrl = 'https://ikigai-interview-app.herokuapp.com/api/user/';


  ngOnInit() {
    this.http.get<User[]>(this.userUrl)
    .subscribe( data => {
      this.users = data;
    });
  }

}
