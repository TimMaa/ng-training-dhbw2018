import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardComponent } from './notecard.component';

import {APP_BASE_HREF} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from '../app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {NotesComponent} from '../notes/notes.component';
import {HeaderComponent} from '../header/header.component';
import {ApiService} from '../services/api.service';
import {ProfileComponent} from '../profile/profile.component';

describe('NotecardComponent', () => {
  let component: NotecardComponent;
  let fixture: ComponentFixture<NotecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent,
        HeaderComponent,
        ProfileComponent,
        NotesComponent,
        NotecardComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        HttpClientModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        ApiService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
