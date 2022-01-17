import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared";
import { LoginComponent } from "./login/login.component";
import {AdminComponent} from "../admin/admin.component";
import {PostListComponent} from "../admin/post/post-list/post-list.component";



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class AuthModule { }
