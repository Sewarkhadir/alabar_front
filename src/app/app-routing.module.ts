import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RouteConstants } from './constants/route-constants';
import { TopicListComponent } from './topics/topic-list/topic-list.component';
import { CreatTopicComponent } from './topics/creat-topic/creat-topic.component';

const routes: Routes = [
  { path: '', component: TopicListComponent},
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: RouteConstants.LOGIN_PAGE.path, component: LoginComponent },
  { path: 'create', component: CreatTopicComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
