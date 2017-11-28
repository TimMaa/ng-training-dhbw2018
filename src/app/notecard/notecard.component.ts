import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {

  @Input() notetitle: string;
  @Input() notecontent: string;

  ngOnInit() {
  }

  constructor() {
  }
}
