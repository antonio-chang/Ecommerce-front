import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserComponent } from './component/user/user.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SigninComponent }]
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [{ 
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    },{
      path: 'chat',
      component: ChatRoomComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
