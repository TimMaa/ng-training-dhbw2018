import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';

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
import {NotecardComponent} from '../notecard/notecard.component';
import {HeaderComponent} from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, NotesComponent,
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
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
