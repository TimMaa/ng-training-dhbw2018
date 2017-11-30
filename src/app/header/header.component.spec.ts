import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from '../app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from '../profile/profile.component';
import {NotesComponent} from '../notes/notes.component';
import {NotecardComponent} from '../notecard/notecard.component';
import {APP_BASE_HREF} from '@angular/common';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ProfileComponent,
        NotesComponent,
        NotecardComponent
      ],
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('true equals true', () => {
    expect(true).toBe(true);
  });
});
