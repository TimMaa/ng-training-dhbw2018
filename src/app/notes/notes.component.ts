import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  newContent: string = '';
  newTitle: string = '';


  notes: any = [{
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

  newCard() {
    this.notes.push({
      id: this.notes.length+1,
      title: this.newTitle,
      content: this.newContent
    });

    this.newTitle = "";
    this.newContent = "";
  }

  deleteCard(did: number) {
    this.notes.splice(did-1,1);
  }
}
