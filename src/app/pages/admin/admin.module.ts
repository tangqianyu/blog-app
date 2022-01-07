import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared";
import { AdminComponent } from "./admin.component";
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { UserSettingComponent } from "./containers/user/user-setting/user-setting.component";
import { UserCenterComponent } from "./containers/user/user-center/user-center.component";
import { PostListComponent } from "./containers/post/post-list/post-list.component";
import { PostWriteComponent } from "./containers/post/post-write/post-write.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'post-list',
        component: PostListComponent,
        data: {
          title: '文章列表'
        }
      },
      {
        path: 'post-write',
        component: PostWriteComponent,
        data: {
          title: '写文章'
        }
      },
      {
        path: 'user-setting',
        component: UserSettingComponent,
        data: {
          title: '个人设置'
        }
      },

      {
        path: 'user-center',
        component: UserCenterComponent,
        data: {
          title: '个人中心'
        }
      },
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderUserComponent,
    PageHeaderComponent,
    PostListComponent,
    PostWriteComponent,
    UserCenterComponent,
    UserSettingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class AdminModule { }
