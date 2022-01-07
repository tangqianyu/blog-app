import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared";
import { LoginComponent } from "./login/login.component";



const routes: Routes = [

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