import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/adduser', pathMatch: 'full' },
  { path: '/adduser', component: AddUserComponent },
  { path: '/addproject', component: AddProjectComponent },
  { path: '/addtask', component: AddTaskComponent },
  { path: '/viewtask', component: ViewTaskComponent },
  { path: '/edittask', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
