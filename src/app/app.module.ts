import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTableModule } from 'primeng/datatable';
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { TaskService } from './utilities/common-service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonRangeSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, DataTableModule, GrowlModule, ConfirmDialogModule, SliderModule, CalendarModule
  ],
  providers: [TaskService, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true],
  bootstrap: [AppComponent]
})
export class AppModule { }
