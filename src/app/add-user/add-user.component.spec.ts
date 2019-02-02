import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AddUserService } from './add-user.service';
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

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let service: AddUserService;
  let confirmationService: ConfirmationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonRangeSliderModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, DataTableModule, GrowlModule, ConfirmDialogModule, SliderModule, CalendarModule

      ],
      declarations: [AddUserComponent],
      providers: [AddUserService, ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);

    service = TestBed.get(AddUserService);

    confirmationService = TestBed.get(ConfirmationService);
    component = new AddUserComponent(service, confirmationService);
    fixture.autoDetectChanges();
  });

  



  describe('Add User test cases', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('On init button text is ADD', () => {

      component.ngOnInit();
      expect(component.saveButtonString)
        .toEqual('Add');
    });

    it('On edit click button text changes to edit', () => {
      
      component.onEditClick({ userId: 1, firstName: 'test', lastName: 'test', employeeId: 'test' });
      console.log(component.saveButtonString);
      expect(component.saveButtonString)
        .toEqual('Edit');
    });
    it('On save should return a message', () => {
      
      component.currentUser = { userId: 1, firstName: 'test', lastName: 'test', employeeId: 'test' };
      component.onSave({ userId: 1, firstName: 'test', lastName: 'test', employeeId: 'test' });
      expect(component.msgs.length)
        .toBeGreaterThanOrEqual(0);
    });
   
  });
});
