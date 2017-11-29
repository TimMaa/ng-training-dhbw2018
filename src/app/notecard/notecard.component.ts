import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {

  @Input() noteid: number;
  @Input() notetitle: string;
  @Input() notecontent: string;

  @Output() cardDeleted = new EventEmitter();

  ngOnInit() {
  }

  constructor() {
  }
}
