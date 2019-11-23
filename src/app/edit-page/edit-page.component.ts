import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';
import {User} from '../classes/user.model';
import { $ } from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})




export class EditPageComponent implements OnInit {
  users : User[];
  user : User = new User();
  editUser : User = new User();


  constructor(private _formBuilder : FormBuilder, private _dialogRef2 : MatDialogRef<EditPageComponent>,
    private router: Router, private http:HttpClient, @Inject(MAT_DIALOG_DATA) public data : any  ) {

    }

    private userUrl = 'https://ikigai-interview-app.herokuapp.com/api/user/';
    OnClick(): void{
      this._dialogRef2.close();


    }
      Update(){


      this.editUser.firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
      this.editUser.lastName = (<HTMLInputElement>document.getElementById("LastName")).value;
      this.editUser.email = (<HTMLInputElement>document.getElementById("email")).value;
     this._dialogRef2.close();
     this.http.put<User>(this.userUrl + this.editUser.id, this.editUser).subscribe(data =>
     { this.editUser = data;});
   }

  ngOnInit() {
  this.editUser = this.data
  }

}
