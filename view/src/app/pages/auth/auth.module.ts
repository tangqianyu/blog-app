import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared";
import { LoginComponent } from "./login/login.component";
import {AdminComponent} from "../admin/admin.component";
import {PostListComponent} from "../admin/post/post-list/post-list.component";
import { CallbackComponent } from './callback/callback.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class AuthModule { }
