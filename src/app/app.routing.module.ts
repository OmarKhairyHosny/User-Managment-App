import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './Add-User/Add-User.component';
import { GeneralComponent } from './General/General.component';
import { LoginPageComponent } from './Login-Page/Login-Page.component';
import { ListUsersPageComponent } from './List-Users-page/List-Users-page.component';

const routes: Routes = [
  {path: "", component: GeneralComponent},
  {path: "signOut", component: GeneralComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'users', component: ListUsersPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
