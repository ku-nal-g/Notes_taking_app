import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNotes(item: any) {
    if (item.trim()) {
      this.notesArray.push(item);
    }
  }
    removeNotes(id: number){
      this.notesArray.splice(id,1)
    }
    clearField(item:any){
      item = '';
    }

}
