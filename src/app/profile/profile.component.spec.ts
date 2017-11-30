import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {APP_BASE_HREF} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';
import {BrowserModule, By} from '@angular/platform-browser';
import {RoutingModule} from '../app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {NotesComponent} from '../notes/notes.component';
import {NotecardComponent} from '../notecard/notecard.component';
import {HeaderComponent} from '../header/header.component';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let apiService: ApiService;
  let title: any;
  let quote: any;
  let spy: any;
  let quoteMock: string;

  beforeEach(async(() => {
    const apiServiceStub = {
      chuckNorrisQuote: true,
      user: {name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [ProfileComponent, NotesComponent,
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
        // {provide: ApiService, useValue: apiServiceStub}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    // apiService = TestBed.get(ApiService);
    apiService = fixture.debugElement.injector.get(ApiService);

    quoteMock =
      `{
        'category': null,
        'icon_url': 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        'id': '6FiYzbXdTYS0T-EkesMHDA',
        'url': 'http://api.chucknorris.io/jokes/6FiYzbXdTYS0T-EkesMHDA',
        'value': 'Chuck Norris won American idol using only sign language.'
      }`;

    // Setup spy on the `getQuote` method
    spy = spyOn(apiService, 'getFact')
      .and.returnValue(Observable.of(quoteMock));

    title = fixture.debugElement.query(By.css('h1'));
    quote = fixture.debugElement.query(By.css('chuck'));

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show profile of Peter', () => {
    const name = 'Peter';
    component.name = name;
    fixture.detectChanges();
    expect(title.nativeElement.textContent).toContain(name);
  });

  it('Should be call Click Method and show quote', () => {
    spyOn(component, 'newFact');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      tick();
      expect(component.newFact).toHaveBeenCalled();
      console.log(component.factdata);
      expect(component.factdata).toContain('Chuck');
    });
  });
});
