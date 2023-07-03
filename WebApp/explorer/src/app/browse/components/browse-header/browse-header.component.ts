import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-browse-header',
  templateUrl: './browse-header.component.html',
  styleUrls: ['./browse-header.component.css']
})
export class BrowseHeaderComponent implements OnInit {

  @Output() downloadAllTablesAsCsv = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  refreshPage() {
    window.location.reload();
  }

  downloadAllCsv() {
    this.downloadAllTablesAsCsv.emit(true);
  }
}
