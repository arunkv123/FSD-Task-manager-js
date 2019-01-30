import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT', redirectTo: 'FSD-Project-manager-0.0.1-SNAPSHOT/adduser', pathMatch: 'full' },
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT/adduser', component: AddUserComponent },
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT/addproject', component: AddProjectComponent },
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT/addtask', component: AddTaskComponent },
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT/viewtask', component: ViewTaskComponent },
  { path: 'FSD-Project-manager-0.0.1-SNAPSHOT/edittask', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
