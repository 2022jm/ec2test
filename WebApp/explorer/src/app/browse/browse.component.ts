import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  downloadAllTablesAsCsv$: Subject<any> = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  downloadAllTablesAsCsv($event) {
    console.log("Export all tables as csv");
    this.downloadAllTablesAsCsv$.next(true);
  }
}
