import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from "@angular/common/http";
import { GeneralComponent } from './General/General.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule, MatIconModule, MatDialogModule,MatCardModule} from '@angular/material';
import { LoginPageComponent } from './Login-Page/Login-Page.component';
import { AddUserComponent } from './Add-User/Add-User.component';
import { ListUsersPageComponent } from './List-Users-page/List-Users-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RemoveMessageComponent } from './remove-message/remove-message.component';




@NgModule({
   declarations: [
      AppComponent,
      GeneralComponent,
      LoginPageComponent,
      AddUserComponent,
      ListUsersPageComponent,
      EditPageComponent,
      RemoveMessageComponent
      
   ],
   entryComponents: [
    EditPageComponent,
    RemoveMessageComponent
],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatToolbarModule,
      MatIconModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatCardModule,
      FormsModule
   ],
  
   providers: [

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
