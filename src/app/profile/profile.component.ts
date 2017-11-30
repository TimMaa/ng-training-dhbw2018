import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  factdata: any;
  _api: any;
  name: string;

  constructor(_api: ApiService) {
    this._api = _api;
  }

  ngOnInit() {

  }

  newFact() {
    this._api.getFact().subscribe(
      data => {
        this.factdata = data;
      },
        error => {
        console.log('There was an error');
      });
  }

}
