import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared";



const routes: Routes = [

]

@NgModule({
  declarations: [


  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class BlogModule { }