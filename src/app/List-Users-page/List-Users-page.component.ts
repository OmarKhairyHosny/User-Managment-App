import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart, NavigationEnd, Event} from '@angular/router';
import {User} from '../classes/user.model';
import {MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AddUserComponent } from '../Add-User/Add-User.component';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { RemoveMessageComponent } from '../remove-message/remove-message.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-List-Users-page',
  templateUrl: './List-Users-page.component.html',
  styleUrls: ['./List-Users-page.component.css']
})
export class ListUsersPageComponent implements OnInit {


users: User[];
isEdit: boolean =false;
constructor(private router: Router, private http:HttpClient, private dialog?: MatDialog ) {
}
private userUrl = 'https://ikigai-interview-app.herokuapp.com/api/user/';

Add(){
  const dialogConfigAdd= new MatDialogConfig();
  dialogConfigAdd.width="300px";
  dialogConfigAdd.height="300px"
    const AddDialog = this.dialog.open(AddUserComponent,dialogConfigAdd)


}

OpenEditForm(user : User){
  const dialogConfigEdit = new MatDialogConfig();
  dialogConfigEdit.disableClose = true;
 dialogConfigEdit.autoFocus = false;
 dialogConfigEdit.width="300px";
 dialogConfigEdit.height="300px";
 dialogConfigEdit.data = user;
  const EditDialog = this.dialog.open(EditPageComponent, dialogConfigEdit);

}


removemessage(user : User){
  const dialogConfigRemove = new MatDialogConfig();
  dialogConfigRemove.width="400px";
  dialogConfigRemove.position=({  });
  dialogConfigRemove.data = user;

  const removeDialog = this.dialog.open(RemoveMessageComponent,dialogConfigRemove);
}




ngOnInit() {
  this.http.get<User[]>(this.userUrl).subscribe( data => {
      this.users = data;
    });
};


}
