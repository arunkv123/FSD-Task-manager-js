import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        imports: [
          BrowserModule,
          BrowserAnimationsModule,
          IonRangeSliderModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule, DataTableModule, GrowlModule, ConfirmDialogModule, SliderModule, CalendarModule

        ],
        declarations: [AddProjectComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
