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
  selector: 'app-remove-message',
  templateUrl: './remove-message.component.html',
  styleUrls: ['./remove-message.component.css']
})
export class RemoveMessageComponent implements OnInit {
  users : User[] =[];
  user : User = new User();

constructor( private _dialogRef3 : MatDialogRef<RemoveMessageComponent>,private router: Router, private http:HttpClient
,private _formBuilder : FormBuilder,@Inject(MAT_DIALOG_DATA) public data : any) {

  }
    private userUrl = 'https://ikigai-interview-app.herokuapp.com/api/user/';

    Cancel(){

       this._dialogRef3.close();
    }

    confirmDelete(): void{
      debugger;
      this.http.request('delete', this.userUrl,{body : this.user}).subscribe(data=>
            this.users = this.users.filter(u => u !== this.user))
            this._dialogRef3.close();
           window.location.reload();
          }
          ngOnInit() {
            this.user = this.data;
          }
      }








