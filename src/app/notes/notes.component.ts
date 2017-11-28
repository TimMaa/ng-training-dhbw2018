import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: object = [{
    title: "Hello world!",
    content: "What a wonderful world!"
  },
  {
    title: "What a test!",
    content: "little text"
  }];

  constructor() { }

  ngOnInit() {
  }

}
