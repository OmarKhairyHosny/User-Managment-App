import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';
import {User} from '../classes/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-Add-User',
  templateUrl: './Add-User.component.html',
  styleUrls: ['./Add-User.component.css'],
})




export class AddUserComponent implements OnInit {
  user : User = new User();
public _contactForm : FormGroup
  constructor(private _formBuilder : FormBuilder, private _dialogRef : MatDialogRef<AddUserComponent>,
    private router: Router, private http:HttpClient ) { }
    private userUrl = 'https://ikigai-interview-app.herokuapp.com/api/user/';
    OnClick(): void{
      this._dialogRef.close();

    }
    createUser(): void {
      this._dialogRef.close();
      this.http.post<User>(this.userUrl, this.user).subscribe(data => {
      this.user = data;
      
      window.location.reload();
      
        });
  
    };
  ngOnInit() {
 
  }

}

