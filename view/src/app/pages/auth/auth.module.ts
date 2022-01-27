import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, CallbackComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class AuthModule {}
